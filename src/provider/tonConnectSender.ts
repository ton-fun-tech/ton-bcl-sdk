import {
    Address,
    beginCell,
    Cell,
    Sender,
    SenderArguments,
    storeStateInit
} from "@ton/core";
import { TonConnectUI } from "@tonconnect/ui";

import { unixtime } from "../utils/time";

type SendResponse = {
    msg: Cell;
    // hex hash of message cell
    hash: string;
};

// Should be created for each call
export function tonConnectSender(
    tonConnect: TonConnectUI
): Sender & { getResult(): Promise<SendResponse> } {
    let response: SendResponse;
    const responseWaiters: ((response: SendResponse) => void)[] = [];

    return {
        get address(): Address | undefined {
            const address = tonConnect.account?.address;
            return address ? Address.parse(address) : undefined;
        },

        async send(args: SenderArguments) {
            // The transaction is valid for 10 minutes.
            const validUntil = unixtime() + 60 * 10;

            // The address of the recipient, should be in bounceable format for all smart contracts.
            const address = args.to.toString({ urlSafe: true, bounceable: true });

            // The address of the sender, if available.
            const from = this.address?.toRawString();

            // The amount to send in nano tokens.
            const amount = args.value.toString();

            // The state init cell for the contract.
            let stateInit: string | undefined;
            if (args.init) {
                // State init cell for the contract.
                const stateInitCell = beginCell()
                    .store(storeStateInit(args.init))
                    .endCell();
                // Convert the state init cell to boc base64.
                stateInit = stateInitCell.toBoc().toString("base64");
            }

            // The payload for the message.
            let payload: string | undefined;
            if (args.body) {
                // Convert the message body to boc base64.
                payload = args.body.toBoc().toString("base64");
            }

            // Send the message using the TonConnect UI and wait for the message to be sent.
            const res = await tonConnect.sendTransaction({
                validUntil: validUntil,
                from: from,
                messages: [
                    {
                        address: address,
                        amount: amount,
                        stateInit: stateInit,
                        payload: payload
                    }
                ]
            });

            const cell = Cell.fromBase64(res.boc);

            response = {
                msg: cell,
                hash: cell.hash().toString("hex")
            };

            responseWaiters.forEach((w) => w(response));
        },

        async getResult() {
            return new Promise((resolve) => {
                if (response) {
                    resolve(response);
                    return;
                }
                responseWaiters.push(resolve);
            });
        }
    };
}
