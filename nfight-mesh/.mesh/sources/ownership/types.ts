
import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace OwnershipTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Fighter = {
  id: Scalars['ID'];
  contractAddress: Scalars['Bytes'];
  owner: Scalars['Bytes'];
  tokenId: Scalars['BigInt'];
  project: NFTProject;
  registered?: Maybe<Scalars['Boolean']>;
};

export type Fighter_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  contractAddress?: InputMaybe<Scalars['Bytes']>;
  contractAddress_not?: InputMaybe<Scalars['Bytes']>;
  contractAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contractAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contractAddress_contains?: InputMaybe<Scalars['Bytes']>;
  contractAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  project?: InputMaybe<Scalars['String']>;
  project_not?: InputMaybe<Scalars['String']>;
  project_gt?: InputMaybe<Scalars['String']>;
  project_lt?: InputMaybe<Scalars['String']>;
  project_gte?: InputMaybe<Scalars['String']>;
  project_lte?: InputMaybe<Scalars['String']>;
  project_in?: InputMaybe<Array<Scalars['String']>>;
  project_not_in?: InputMaybe<Array<Scalars['String']>>;
  project_contains?: InputMaybe<Scalars['String']>;
  project_contains_nocase?: InputMaybe<Scalars['String']>;
  project_not_contains?: InputMaybe<Scalars['String']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  project_starts_with?: InputMaybe<Scalars['String']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_starts_with?: InputMaybe<Scalars['String']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_ends_with?: InputMaybe<Scalars['String']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_ends_with?: InputMaybe<Scalars['String']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_?: InputMaybe<NFTProject_filter>;
  registered?: InputMaybe<Scalars['Boolean']>;
  registered_not?: InputMaybe<Scalars['Boolean']>;
  registered_in?: InputMaybe<Array<Scalars['Boolean']>>;
  registered_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Fighter_orderBy =
  | 'id'
  | 'contractAddress'
  | 'owner'
  | 'tokenId'
  | 'project'
  | 'registered';

export type NFTProject = {
  id: Scalars['ID'];
  contractAddress: Scalars['Bytes'];
  chainId: Scalars['Int'];
  tokenCount: Scalars['Int'];
};

export type NFTProject_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  contractAddress?: InputMaybe<Scalars['Bytes']>;
  contractAddress_not?: InputMaybe<Scalars['Bytes']>;
  contractAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contractAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contractAddress_contains?: InputMaybe<Scalars['Bytes']>;
  contractAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  chainId?: InputMaybe<Scalars['Int']>;
  chainId_not?: InputMaybe<Scalars['Int']>;
  chainId_gt?: InputMaybe<Scalars['Int']>;
  chainId_lt?: InputMaybe<Scalars['Int']>;
  chainId_gte?: InputMaybe<Scalars['Int']>;
  chainId_lte?: InputMaybe<Scalars['Int']>;
  chainId_in?: InputMaybe<Array<Scalars['Int']>>;
  chainId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  tokenCount?: InputMaybe<Scalars['Int']>;
  tokenCount_not?: InputMaybe<Scalars['Int']>;
  tokenCount_gt?: InputMaybe<Scalars['Int']>;
  tokenCount_lt?: InputMaybe<Scalars['Int']>;
  tokenCount_gte?: InputMaybe<Scalars['Int']>;
  tokenCount_lte?: InputMaybe<Scalars['Int']>;
  tokenCount_in?: InputMaybe<Array<Scalars['Int']>>;
  tokenCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type NFTProject_orderBy =
  | 'id'
  | 'contractAddress'
  | 'chainId'
  | 'tokenCount';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  nftproject?: Maybe<NFTProject>;
  nftprojects: Array<NFTProject>;
  fighter?: Maybe<Fighter>;
  fighters: Array<Fighter>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerynftprojectArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynftprojectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NFTProject_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NFTProject_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfighterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfightersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Fighter_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Fighter_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  nftproject?: Maybe<NFTProject>;
  nftprojects: Array<NFTProject>;
  fighter?: Maybe<Fighter>;
  fighters: Array<Fighter>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionnftprojectArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnftprojectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NFTProject_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NFTProject_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfighterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfightersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Fighter_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Fighter_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

}
export type QueryOwnershipSdk = {
  /** null **/
  nftproject: InContextSdkMethod<OwnershipTypes.Query['nftproject'], OwnershipTypes.QuerynftprojectArgs, MeshContext>,
  /** null **/
  nftprojects: InContextSdkMethod<OwnershipTypes.Query['nftprojects'], OwnershipTypes.QuerynftprojectsArgs, MeshContext>,
  /** null **/
  fighter: InContextSdkMethod<OwnershipTypes.Query['fighter'], OwnershipTypes.QueryfighterArgs, MeshContext>,
  /** null **/
  fighters: InContextSdkMethod<OwnershipTypes.Query['fighters'], OwnershipTypes.QueryfightersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<OwnershipTypes.Query['_meta'], OwnershipTypes.Query_metaArgs, MeshContext>
};

export type MutationOwnershipSdk = {

};

export type SubscriptionOwnershipSdk = {
  /** null **/
  nftproject: InContextSdkMethod<OwnershipTypes.Subscription['nftproject'], OwnershipTypes.SubscriptionnftprojectArgs, MeshContext>,
  /** null **/
  nftprojects: InContextSdkMethod<OwnershipTypes.Subscription['nftprojects'], OwnershipTypes.SubscriptionnftprojectsArgs, MeshContext>,
  /** null **/
  fighter: InContextSdkMethod<OwnershipTypes.Subscription['fighter'], OwnershipTypes.SubscriptionfighterArgs, MeshContext>,
  /** null **/
  fighters: InContextSdkMethod<OwnershipTypes.Subscription['fighters'], OwnershipTypes.SubscriptionfightersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<OwnershipTypes.Subscription['_meta'], OwnershipTypes.Subscription_metaArgs, MeshContext>
};
export type OwnershipContext = {
      ["ownership"]: { Query: QueryOwnershipSdk, Mutation: MutationOwnershipSdk, Subscription: SubscriptionOwnershipSdk },
      
    };