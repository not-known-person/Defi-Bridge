import { AztecAddress, AztecAddressLike, ContractArtifact, ContractBase, ContractFunctionInteraction, ContractMethod, ContractStorageLayout, ContractNotes, DeployMethod, EthAddressLike, FieldLike, Fr, Wallet } from '@aztec/aztec.js';
export declare const TokenBridgeContractArtifact: ContractArtifact;
/**
 * Type-safe interface for contract TokenBridge;
 */
export declare class TokenBridgeContract extends ContractBase {
    private constructor();
    /**
     * Creates a contract instance.
     * @param address - The deployed contract's address.
     * @param wallet - The wallet to use when interacting with the contract.
     * @returns A promise that resolves to a new Contract instance.
     */
    static at(address: AztecAddress, wallet: Wallet): Promise<TokenBridgeContract>;
    /**
     * Creates a tx to deploy a new instance of this contract.
     */
    static deploy(wallet: Wallet, token: AztecAddressLike, portal_address: EthAddressLike): DeployMethod<TokenBridgeContract>;
    /**
     * Creates a tx to deploy a new instance of this contract using the specified public keys hash to derive the address.
     */
    static deployWithPublicKeysHash(publicKeysHash: Fr, wallet: Wallet, token: AztecAddressLike, portal_address: EthAddressLike): DeployMethod<TokenBridgeContract>;
    /**
     * Creates a tx to deploy a new instance of this contract using the specified constructor method.
     */
    static deployWithOpts<M extends keyof TokenBridgeContract['methods']>(opts: {
        publicKeysHash?: Fr;
        method?: M;
        wallet: Wallet;
    }, ...args: Parameters<TokenBridgeContract['methods'][M]>): DeployMethod<TokenBridgeContract>;
    /**
     * Returns this contract's artifact.
     */
    static get artifact(): ContractArtifact;
    static get storage(): ContractStorageLayout<'admin' | 'minters' | 'balances' | 'total_supply' | 'pending_shields' | 'public_balances' | 'symbol' | 'name' | 'decimals'>;
    static get notes(): ContractNotes<'TransparentNote' | 'TokenNote'>;
    /** Type-safe wrappers for the public methods exposed by the contract. */
    methods: {
        /** get_token() */
        get_token: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;
        /** exit_to_l1_private(token: struct, recipient: struct, amount: field, caller_on_l1: struct, nonce: field) */
        exit_to_l1_private: ((token: AztecAddressLike, recipient: EthAddressLike, amount: FieldLike, caller_on_l1: EthAddressLike, nonce: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;
        /** get_portal_address() */
        get_portal_address: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;
        /** claim_private(secret_hash_for_redeeming_minted_notes: field, amount: field, secret_for_L1_to_L2_message_consumption: field) */
        claim_private: ((secret_hash_for_redeeming_minted_notes: FieldLike, amount: FieldLike, secret_for_L1_to_L2_message_consumption: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;
        /** compute_note_hash_and_optionally_a_nullifier(contract_address: struct, nonce: field, storage_slot: field, note_type_id: field, compute_nullifier: boolean, serialized_note: array) */
        compute_note_hash_and_optionally_a_nullifier: ((contract_address: AztecAddressLike, nonce: FieldLike, storage_slot: FieldLike, note_type_id: FieldLike, compute_nullifier: boolean, serialized_note: FieldLike[]) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;
        /** exit_to_l1_public(recipient: struct, amount: field, caller_on_l1: struct, nonce: field) */
        exit_to_l1_public: ((recipient: EthAddressLike, amount: FieldLike, caller_on_l1: EthAddressLike, nonce: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;
        /** constructor(token: struct, portal_address: struct) */
        constructor: ((token: AztecAddressLike, portal_address: EthAddressLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;
        /** claim_public(to: struct, amount: field, secret: field, message_leaf_index: field) */
        claim_public: ((to: AztecAddressLike, amount: FieldLike, secret: FieldLike, message_leaf_index: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;
        /** get_portal_address_public() */
        get_portal_address_public: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;
    };
}
//# sourceMappingURL=TokenBridge.d.ts.map