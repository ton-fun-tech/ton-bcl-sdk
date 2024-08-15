import { Api, TvmStackRecord } from "tonapi-sdk-js";
import { Address, Cell, TupleItem, TupleReader } from "@ton/core";

export async function runGetMethod(
  client: Api<any>,
  address: Address,
  method: string,
  args?: TupleItem[]
) {
  const result = await client.blockchain.execGetMethodForBlockchainAccount(
    address.toRawString(),
    method,
    { args: args?.map(TupleItemToTonapiString) }
  );

  if (!result.success || result.exit_code !== 0) {
    throw new Error();
  }

  return {
    stack: new TupleReader(result.stack.map(TvmStackRecordToTupleItem)),
  };
}

export function TvmStackRecordToTupleItem(record: TvmStackRecord): TupleItem {
  switch (record.type) {
    case "num": {
      if (record.num?.startsWith("-")) {
        return {
          type: "int",
          value: BigInt(record.num?.replace("-", "")!) * BigInt(-1),
        };
      }
      return { type: "int", value: BigInt(record.num!) };
    }
    case "nan":
      return { type: "nan" };
    case "cell":
      try {
        const cell = Cell.fromBase64(record.cell!);
        return { type: "cell", cell };
      } catch (_) {
        return {
          type: "cell",
          cell: Cell.fromBase64(
            Buffer.from(record.cell!, "hex").toString("base64")
          ),
        };
      }
    case "null":
      return { type: "null" };
    case "tuple":
      return {
        type: "tuple",
        items: record.tuple!.map(TvmStackRecordToTupleItem),
      };
    default:
      throw new Error(`Unknown type ${record.type}`);
  }
}

export function TupleItemToTonapiString(item: TupleItem): string {
  switch (item.type) {
    case "int": {
      let hexStr = item.value.toString(16);
      if (hexStr.length % 2 !== 0) {
        hexStr = "0" + hexStr;
      }
      return "0x" + hexStr;
    }
    case "nan":
      return "NaN";
    case "null":
      return "Null";
    case "cell":
    case "builder":
      return item.cell.toBoc().toString("base64");
    case "slice":
      return item.cell.toBoc().toString("hex");
    case "tuple":
      throw new Error("Tuple is not supported in TonApi get method parameters");
    default:
      throw new Error(`Unknown type ${(item as { type: string }).type}`);
  }
}
