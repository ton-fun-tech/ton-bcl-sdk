import { createHash } from "crypto";
// import BN from "bn.js";

// export const sha256ToNumStr = (src: string) => {
//     return (new BN.BN(createHash('sha256').update(src).digest())).toString(10)
// }
//
// export const sha256ToBN = (src: string) => {
//     return (new BN.BN(createHash('sha256').update(src).digest()))
// }
export const sha256ToBigint = (src: string) => {
    return BigInt("0x" + createHash("sha256").update(src).digest().toString("hex"));
};
