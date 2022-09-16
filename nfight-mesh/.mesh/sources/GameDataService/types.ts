// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace GameDataServiceTypes {
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

export type FighterSkill = {
  id: Scalars['ID'];
  fighter?: Maybe<FighterWithSkill>;
  fighter_id: Scalars['String'];
  aggression?: Maybe<Scalars['BigInt']>;
  awareness?: Maybe<Scalars['BigInt']>;
  determination?: Maybe<Scalars['BigInt']>;
  power?: Maybe<Scalars['BigInt']>;
  resilience?: Maybe<Scalars['BigInt']>;
  speed?: Maybe<Scalars['BigInt']>;
  aggregatePoints?: Maybe<Scalars['BigInt']>;
};

export type FighterSkill_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  fighter?: InputMaybe<Scalars['String']>;
  fighter_not?: InputMaybe<Scalars['String']>;
  fighter_gt?: InputMaybe<Scalars['String']>;
  fighter_lt?: InputMaybe<Scalars['String']>;
  fighter_gte?: InputMaybe<Scalars['String']>;
  fighter_lte?: InputMaybe<Scalars['String']>;
  fighter_in?: InputMaybe<Array<Scalars['String']>>;
  fighter_not_in?: InputMaybe<Array<Scalars['String']>>;
  fighter_contains?: InputMaybe<Scalars['String']>;
  fighter_contains_nocase?: InputMaybe<Scalars['String']>;
  fighter_not_contains?: InputMaybe<Scalars['String']>;
  fighter_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fighter_starts_with?: InputMaybe<Scalars['String']>;
  fighter_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fighter_not_starts_with?: InputMaybe<Scalars['String']>;
  fighter_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fighter_ends_with?: InputMaybe<Scalars['String']>;
  fighter_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fighter_not_ends_with?: InputMaybe<Scalars['String']>;
  fighter_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fighter_?: InputMaybe<FighterWithSkill_filter>;
  fighter_id?: InputMaybe<Scalars['String']>;
  fighter_id_not?: InputMaybe<Scalars['String']>;
  fighter_id_gt?: InputMaybe<Scalars['String']>;
  fighter_id_lt?: InputMaybe<Scalars['String']>;
  fighter_id_gte?: InputMaybe<Scalars['String']>;
  fighter_id_lte?: InputMaybe<Scalars['String']>;
  fighter_id_in?: InputMaybe<Array<Scalars['String']>>;
  fighter_id_not_in?: InputMaybe<Array<Scalars['String']>>;
  fighter_id_contains?: InputMaybe<Scalars['String']>;
  fighter_id_contains_nocase?: InputMaybe<Scalars['String']>;
  fighter_id_not_contains?: InputMaybe<Scalars['String']>;
  fighter_id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fighter_id_starts_with?: InputMaybe<Scalars['String']>;
  fighter_id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fighter_id_not_starts_with?: InputMaybe<Scalars['String']>;
  fighter_id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fighter_id_ends_with?: InputMaybe<Scalars['String']>;
  fighter_id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fighter_id_not_ends_with?: InputMaybe<Scalars['String']>;
  fighter_id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  aggression?: InputMaybe<Scalars['BigInt']>;
  aggression_not?: InputMaybe<Scalars['BigInt']>;
  aggression_gt?: InputMaybe<Scalars['BigInt']>;
  aggression_lt?: InputMaybe<Scalars['BigInt']>;
  aggression_gte?: InputMaybe<Scalars['BigInt']>;
  aggression_lte?: InputMaybe<Scalars['BigInt']>;
  aggression_in?: InputMaybe<Array<Scalars['BigInt']>>;
  aggression_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  awareness?: InputMaybe<Scalars['BigInt']>;
  awareness_not?: InputMaybe<Scalars['BigInt']>;
  awareness_gt?: InputMaybe<Scalars['BigInt']>;
  awareness_lt?: InputMaybe<Scalars['BigInt']>;
  awareness_gte?: InputMaybe<Scalars['BigInt']>;
  awareness_lte?: InputMaybe<Scalars['BigInt']>;
  awareness_in?: InputMaybe<Array<Scalars['BigInt']>>;
  awareness_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  determination?: InputMaybe<Scalars['BigInt']>;
  determination_not?: InputMaybe<Scalars['BigInt']>;
  determination_gt?: InputMaybe<Scalars['BigInt']>;
  determination_lt?: InputMaybe<Scalars['BigInt']>;
  determination_gte?: InputMaybe<Scalars['BigInt']>;
  determination_lte?: InputMaybe<Scalars['BigInt']>;
  determination_in?: InputMaybe<Array<Scalars['BigInt']>>;
  determination_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  power?: InputMaybe<Scalars['BigInt']>;
  power_not?: InputMaybe<Scalars['BigInt']>;
  power_gt?: InputMaybe<Scalars['BigInt']>;
  power_lt?: InputMaybe<Scalars['BigInt']>;
  power_gte?: InputMaybe<Scalars['BigInt']>;
  power_lte?: InputMaybe<Scalars['BigInt']>;
  power_in?: InputMaybe<Array<Scalars['BigInt']>>;
  power_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  resilience?: InputMaybe<Scalars['BigInt']>;
  resilience_not?: InputMaybe<Scalars['BigInt']>;
  resilience_gt?: InputMaybe<Scalars['BigInt']>;
  resilience_lt?: InputMaybe<Scalars['BigInt']>;
  resilience_gte?: InputMaybe<Scalars['BigInt']>;
  resilience_lte?: InputMaybe<Scalars['BigInt']>;
  resilience_in?: InputMaybe<Array<Scalars['BigInt']>>;
  resilience_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  speed?: InputMaybe<Scalars['BigInt']>;
  speed_not?: InputMaybe<Scalars['BigInt']>;
  speed_gt?: InputMaybe<Scalars['BigInt']>;
  speed_lt?: InputMaybe<Scalars['BigInt']>;
  speed_gte?: InputMaybe<Scalars['BigInt']>;
  speed_lte?: InputMaybe<Scalars['BigInt']>;
  speed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  speed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  aggregatePoints?: InputMaybe<Scalars['BigInt']>;
  aggregatePoints_not?: InputMaybe<Scalars['BigInt']>;
  aggregatePoints_gt?: InputMaybe<Scalars['BigInt']>;
  aggregatePoints_lt?: InputMaybe<Scalars['BigInt']>;
  aggregatePoints_gte?: InputMaybe<Scalars['BigInt']>;
  aggregatePoints_lte?: InputMaybe<Scalars['BigInt']>;
  aggregatePoints_in?: InputMaybe<Array<Scalars['BigInt']>>;
  aggregatePoints_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type FighterSkill_orderBy =
  | 'id'
  | 'fighter'
  | 'fighter_id'
  | 'aggression'
  | 'awareness'
  | 'determination'
  | 'power'
  | 'resilience'
  | 'speed'
  | 'aggregatePoints';

export type FighterWithSkill = {
  id: Scalars['ID'];
  owner: Scalars['Bytes'];
  contractAddress: Scalars['Bytes'];
  tokenId: Scalars['BigInt'];
  registered: Scalars['Boolean'];
  project?: Maybe<NFTProject>;
  skills?: Maybe<FighterSkill>;
};

export type FighterWithSkill_filter = {
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
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  project_?: InputMaybe<NFTProject_filter>;
  skills?: InputMaybe<Scalars['String']>;
  skills_not?: InputMaybe<Scalars['String']>;
  skills_gt?: InputMaybe<Scalars['String']>;
  skills_lt?: InputMaybe<Scalars['String']>;
  skills_gte?: InputMaybe<Scalars['String']>;
  skills_lte?: InputMaybe<Scalars['String']>;
  skills_in?: InputMaybe<Array<Scalars['String']>>;
  skills_not_in?: InputMaybe<Array<Scalars['String']>>;
  skills_contains?: InputMaybe<Scalars['String']>;
  skills_contains_nocase?: InputMaybe<Scalars['String']>;
  skills_not_contains?: InputMaybe<Scalars['String']>;
  skills_not_contains_nocase?: InputMaybe<Scalars['String']>;
  skills_starts_with?: InputMaybe<Scalars['String']>;
  skills_starts_with_nocase?: InputMaybe<Scalars['String']>;
  skills_not_starts_with?: InputMaybe<Scalars['String']>;
  skills_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  skills_ends_with?: InputMaybe<Scalars['String']>;
  skills_ends_with_nocase?: InputMaybe<Scalars['String']>;
  skills_not_ends_with?: InputMaybe<Scalars['String']>;
  skills_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  skills_?: InputMaybe<FighterSkill_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type FighterWithSkill_orderBy =
  | 'id'
  | 'owner'
  | 'contractAddress'
  | 'tokenId'
  | 'registered'
  | 'project'
  | 'skills';

export type NFTProject = {
  id: Scalars['ID'];
  contractAddress: Scalars['Bytes'];
  chainId: Scalars['Int'];
  tokenCount?: Maybe<Scalars['Int']>;
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
  projects: Array<NFTProject>;
  fighterWithSkill?: Maybe<FighterWithSkill>;
  fighterWithSkills: Array<FighterWithSkill>;
  fighterSkill?: Maybe<FighterSkill>;
  fighterSkills: Array<FighterSkill>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerynftprojectArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprojectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NFTProject_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NFTProject_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfighterWithSkillArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfighterWithSkillsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FighterWithSkill_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FighterWithSkill_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfighterSkillArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfighterSkillsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FighterSkill_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FighterSkill_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  nftproject?: Maybe<NFTProject>;
  nftprojects: Array<NFTProject>;
  fighterWithSkill?: Maybe<FighterWithSkill>;
  fighterWithSkills: Array<FighterWithSkill>;
  fighterSkill?: Maybe<FighterSkill>;
  fighterSkills: Array<FighterSkill>;
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


export type SubscriptionfighterWithSkillArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfighterWithSkillsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FighterWithSkill_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FighterWithSkill_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfighterSkillArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfighterSkillsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FighterSkill_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FighterSkill_filter>;
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

  export type QuerySdk = {
      /** null **/
  nftproject: InContextSdkMethod<Query['nftproject'], QuerynftprojectArgs, MeshContext>,
  /** null **/
  projects: InContextSdkMethod<Query['projects'], QueryprojectsArgs, MeshContext>,
  /** null **/
  fighterWithSkill: InContextSdkMethod<Query['fighterWithSkill'], QueryfighterWithSkillArgs, MeshContext>,
  /** null **/
  fighterWithSkills: InContextSdkMethod<Query['fighterWithSkills'], QueryfighterWithSkillsArgs, MeshContext>,
  /** null **/
  fighterSkill: InContextSdkMethod<Query['fighterSkill'], QueryfighterSkillArgs, MeshContext>,
  /** null **/
  fighterSkills: InContextSdkMethod<Query['fighterSkills'], QueryfighterSkillsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  nftproject: InContextSdkMethod<Subscription['nftproject'], SubscriptionnftprojectArgs, MeshContext>,
  /** null **/
  nftprojects: InContextSdkMethod<Subscription['nftprojects'], SubscriptionnftprojectsArgs, MeshContext>,
  /** null **/
  fighterWithSkill: InContextSdkMethod<Subscription['fighterWithSkill'], SubscriptionfighterWithSkillArgs, MeshContext>,
  /** null **/
  fighterWithSkills: InContextSdkMethod<Subscription['fighterWithSkills'], SubscriptionfighterWithSkillsArgs, MeshContext>,
  /** null **/
  fighterSkill: InContextSdkMethod<Subscription['fighterSkill'], SubscriptionfighterSkillArgs, MeshContext>,
  /** null **/
  fighterSkills: InContextSdkMethod<Subscription['fighterSkills'], SubscriptionfighterSkillsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["GameDataService"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
