
import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace SavestateTypes {
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
  SS_BigDecimal: any;
  SS_BigInt: any;
  Bytes: any;
};

export type SS_BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type SS_Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Fighter = {
  id: Scalars['ID'];
  owner: Scalars['Bytes'];
  contractAddress: Scalars['Bytes'];
  tokenId: Scalars['SS_BigInt'];
  aggression?: Maybe<Scalars['SS_BigInt']>;
  awareness?: Maybe<Scalars['SS_BigInt']>;
  determination?: Maybe<Scalars['SS_BigInt']>;
  power?: Maybe<Scalars['SS_BigInt']>;
  resilience?: Maybe<Scalars['SS_BigInt']>;
  speed?: Maybe<Scalars['SS_BigInt']>;
  aggregatePoints?: Maybe<Scalars['SS_BigInt']>;
  registered: Scalars['Boolean'];
  project?: Maybe<SS_NFTProject>;
};

export type SS_Fighter_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  contractAddress?: InputMaybe<Scalars['Bytes']>;
  contractAddress_not?: InputMaybe<Scalars['Bytes']>;
  contractAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contractAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contractAddress_contains?: InputMaybe<Scalars['Bytes']>;
  contractAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenId?: InputMaybe<Scalars['SS_BigInt']>;
  tokenId_not?: InputMaybe<Scalars['SS_BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['SS_BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['SS_BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['SS_BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['SS_BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['SS_BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['SS_BigInt']>>;
  aggression?: InputMaybe<Scalars['SS_BigInt']>;
  aggression_not?: InputMaybe<Scalars['SS_BigInt']>;
  aggression_gt?: InputMaybe<Scalars['SS_BigInt']>;
  aggression_lt?: InputMaybe<Scalars['SS_BigInt']>;
  aggression_gte?: InputMaybe<Scalars['SS_BigInt']>;
  aggression_lte?: InputMaybe<Scalars['SS_BigInt']>;
  aggression_in?: InputMaybe<Array<Scalars['SS_BigInt']>>;
  aggression_not_in?: InputMaybe<Array<Scalars['SS_BigInt']>>;
  awareness?: InputMaybe<Scalars['SS_BigInt']>;
  awareness_not?: InputMaybe<Scalars['SS_BigInt']>;
  awareness_gt?: InputMaybe<Scalars['SS_BigInt']>;
  awareness_lt?: InputMaybe<Scalars['SS_BigInt']>;
  awareness_gte?: InputMaybe<Scalars['SS_BigInt']>;
  awareness_lte?: InputMaybe<Scalars['SS_BigInt']>;
  awareness_in?: InputMaybe<Array<Scalars['SS_BigInt']>>;
  awareness_not_in?: InputMaybe<Array<Scalars['SS_BigInt']>>;
  determination?: InputMaybe<Scalars['SS_BigInt']>;
  determination_not?: InputMaybe<Scalars['SS_BigInt']>;
  determination_gt?: InputMaybe<Scalars['SS_BigInt']>;
  determination_lt?: InputMaybe<Scalars['SS_BigInt']>;
  determination_gte?: InputMaybe<Scalars['SS_BigInt']>;
  determination_lte?: InputMaybe<Scalars['SS_BigInt']>;
  determination_in?: InputMaybe<Array<Scalars['SS_BigInt']>>;
  determination_not_in?: InputMaybe<Array<Scalars['SS_BigInt']>>;
  power?: InputMaybe<Scalars['SS_BigInt']>;
  power_not?: InputMaybe<Scalars['SS_BigInt']>;
  power_gt?: InputMaybe<Scalars['SS_BigInt']>;
  power_lt?: InputMaybe<Scalars['SS_BigInt']>;
  power_gte?: InputMaybe<Scalars['SS_BigInt']>;
  power_lte?: InputMaybe<Scalars['SS_BigInt']>;
  power_in?: InputMaybe<Array<Scalars['SS_BigInt']>>;
  power_not_in?: InputMaybe<Array<Scalars['SS_BigInt']>>;
  resilience?: InputMaybe<Scalars['SS_BigInt']>;
  resilience_not?: InputMaybe<Scalars['SS_BigInt']>;
  resilience_gt?: InputMaybe<Scalars['SS_BigInt']>;
  resilience_lt?: InputMaybe<Scalars['SS_BigInt']>;
  resilience_gte?: InputMaybe<Scalars['SS_BigInt']>;
  resilience_lte?: InputMaybe<Scalars['SS_BigInt']>;
  resilience_in?: InputMaybe<Array<Scalars['SS_BigInt']>>;
  resilience_not_in?: InputMaybe<Array<Scalars['SS_BigInt']>>;
  speed?: InputMaybe<Scalars['SS_BigInt']>;
  speed_not?: InputMaybe<Scalars['SS_BigInt']>;
  speed_gt?: InputMaybe<Scalars['SS_BigInt']>;
  speed_lt?: InputMaybe<Scalars['SS_BigInt']>;
  speed_gte?: InputMaybe<Scalars['SS_BigInt']>;
  speed_lte?: InputMaybe<Scalars['SS_BigInt']>;
  speed_in?: InputMaybe<Array<Scalars['SS_BigInt']>>;
  speed_not_in?: InputMaybe<Array<Scalars['SS_BigInt']>>;
  aggregatePoints?: InputMaybe<Scalars['SS_BigInt']>;
  aggregatePoints_not?: InputMaybe<Scalars['SS_BigInt']>;
  aggregatePoints_gt?: InputMaybe<Scalars['SS_BigInt']>;
  aggregatePoints_lt?: InputMaybe<Scalars['SS_BigInt']>;
  aggregatePoints_gte?: InputMaybe<Scalars['SS_BigInt']>;
  aggregatePoints_lte?: InputMaybe<Scalars['SS_BigInt']>;
  aggregatePoints_in?: InputMaybe<Array<Scalars['SS_BigInt']>>;
  aggregatePoints_not_in?: InputMaybe<Array<Scalars['SS_BigInt']>>;
  registered?: InputMaybe<Scalars['Boolean']>;
  registered_not?: InputMaybe<Scalars['Boolean']>;
  registered_in?: InputMaybe<Array<Scalars['Boolean']>>;
  registered_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
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
  project_?: InputMaybe<SS_NFTProject_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<SS_BlockChangedFilter>;
};

export type SS_Fighter_orderBy =
  | 'id'
  | 'owner'
  | 'contractAddress'
  | 'tokenId'
  | 'aggression'
  | 'awareness'
  | 'determination'
  | 'power'
  | 'resilience'
  | 'speed'
  | 'aggregatePoints'
  | 'registered'
  | 'project';

export type SS_NFTProject = {
  id: Scalars['ID'];
  contractAddress: Scalars['Bytes'];
  chainId: Scalars['Int'];
  tokenCount?: Maybe<Scalars['Int']>;
};

export type SS_NFTProject_filter = {
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
  _change_block?: InputMaybe<SS_BlockChangedFilter>;
};

export type SS_NFTProject_orderBy =
  | 'id'
  | 'contractAddress'
  | 'chainId'
  | 'tokenCount';

/** Defines the order direction, either ascending or descending */
export type SS_OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  SS_nftproject?: Maybe<SS_NFTProject>;
  projects: Array<SS_NFTProject>;
  SS_fighter?: Maybe<Fighter>;
  SS_fighters: Array<Fighter>;
  /** Access to subgraph metadata */
  SS__meta?: Maybe<SS__Meta_>;
};


export type QuerySS_nftprojectArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SS_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprojectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SS_NFTProject_orderBy>;
  orderDirection?: InputMaybe<SS_OrderDirection>;
  where?: InputMaybe<SS_NFTProject_filter>;
  block?: InputMaybe<SS_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySS_fighterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SS_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySS_fightersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SS_Fighter_orderBy>;
  orderDirection?: InputMaybe<SS_OrderDirection>;
  where?: InputMaybe<SS_Fighter_filter>;
  block?: InputMaybe<SS_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySS__metaArgs = {
  block?: InputMaybe<SS_Block_height>;
};

export type Subscription = {
  SS_nftproject?: Maybe<SS_NFTProject>;
  SS_nftprojects: Array<SS_NFTProject>;
  SS_fighter?: Maybe<Fighter>;
  SS_fighters: Array<Fighter>;
  /** Access to subgraph metadata */
  SS__meta?: Maybe<SS__Meta_>;
};


export type SubscriptionSS_nftprojectArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SS_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSS_nftprojectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SS_NFTProject_orderBy>;
  orderDirection?: InputMaybe<SS_OrderDirection>;
  where?: InputMaybe<SS_NFTProject_filter>;
  block?: InputMaybe<SS_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSS_fighterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<SS_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSS_fightersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SS_Fighter_orderBy>;
  orderDirection?: InputMaybe<SS_OrderDirection>;
  where?: InputMaybe<SS_Fighter_filter>;
  block?: InputMaybe<SS_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSS__metaArgs = {
  block?: InputMaybe<SS_Block_height>;
};

export type SS__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type SS__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: SS__Block_;
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
export type QuerySavestateSdk = {
  /** null **/
  SS_nftproject: InContextSdkMethod<SavestateTypes.Query['SS_nftproject'], SavestateTypes.QuerySS_nftprojectArgs, MeshContext>,
  /** null **/
  projects: InContextSdkMethod<SavestateTypes.Query['projects'], SavestateTypes.QueryprojectsArgs, MeshContext>,
  /** null **/
  SS_fighter: InContextSdkMethod<SavestateTypes.Query['SS_fighter'], SavestateTypes.QuerySS_fighterArgs, MeshContext>,
  /** null **/
  SS_fighters: InContextSdkMethod<SavestateTypes.Query['SS_fighters'], SavestateTypes.QuerySS_fightersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  SS__meta: InContextSdkMethod<SavestateTypes.Query['SS__meta'], SavestateTypes.QuerySS__metaArgs, MeshContext>
};

export type MutationSavestateSdk = {

};

export type SubscriptionSavestateSdk = {
  /** null **/
  SS_nftproject: InContextSdkMethod<SavestateTypes.Subscription['SS_nftproject'], SavestateTypes.SubscriptionSS_nftprojectArgs, MeshContext>,
  /** null **/
  SS_nftprojects: InContextSdkMethod<SavestateTypes.Subscription['SS_nftprojects'], SavestateTypes.SubscriptionSS_nftprojectsArgs, MeshContext>,
  /** null **/
  SS_fighter: InContextSdkMethod<SavestateTypes.Subscription['SS_fighter'], SavestateTypes.SubscriptionSS_fighterArgs, MeshContext>,
  /** null **/
  SS_fighters: InContextSdkMethod<SavestateTypes.Subscription['SS_fighters'], SavestateTypes.SubscriptionSS_fightersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  SS__meta: InContextSdkMethod<SavestateTypes.Subscription['SS__meta'], SavestateTypes.SubscriptionSS__metaArgs, MeshContext>
};
export type SavestateContext = {
      ["savestate"]: { Query: QuerySavestateSdk, Mutation: MutationSavestateSdk, Subscription: SubscriptionSavestateSdk },
      
    };