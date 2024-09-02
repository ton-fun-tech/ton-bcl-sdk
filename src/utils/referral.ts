import {Address, Cell} from "@ton/core";
import {beginCell} from "@ton/ton";
import {crc32str} from "./crc32";

export type ReferralConfig = {
    /**
     * Referral for ton.fun partners
     */
    partner: Address
    /**
     * Used on partner side for internal tracking
     */
    platformTag?: Address
    /**
     * Extra field for partner side, should be used only if platformTag is occupied
     */
    extraTag?: Address
}

/**
 * Packs referral config to cell
 * @param config
 */
export function packReferralConfig(config: ReferralConfig) {
    let builder =  beginCell()
        .storeUint(crc32str('ref_v1'), 32)
        .storeAddress(config.partner)

    if (config.platformTag) {
        builder.storeAddress(config.platformTag)
    }

    if (config.extraTag) {
        if (!config.platformTag) {
            throw new Error('extraTag should only be set if platformTag is present')
        }

        builder.storeAddress(config.extraTag)
    }

    return builder.endCell()
}

/**
 * Unpacks referral cell to config
 * @param packed
 */
export function unpackReferralConfig(packed: Cell) {
    let cs = packed.beginParse()

    let id = cs.loadUint(32)

    if (id !== crc32str('ref_v1')) {
        throw new Error('Unknown referral format')
    }

    let partner = cs.loadAddress()
    let platformTag
    let extraTag

    if (cs.remainingBits > 0) {
        platformTag = cs.loadAddress()
    }

    if (cs.remainingBits > 0) {
        extraTag = cs.loadAddress()
    }

    return {
        partner,
        platformTag,
        extraTag
    }
}