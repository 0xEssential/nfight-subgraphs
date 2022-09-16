// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import { findAndParseConfig } from '@graphql-mesh/cli';
import { createMeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { OwnershipServiceTypes } from './sources/OwnershipService/types';
import type { GameDataServiceTypes } from './sources/GameDataService/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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
  ResolveToSourceArgs: any;
};

export type Query = {
  nftproject?: Maybe<NFTProject>;
  nftprojects: Array<NFTProject>;
  fighter?: Maybe<Fighter>;
  fighters: Array<Fighter>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  projects: Array<NFTProject>;
  fighterWithSkill?: Maybe<FighterWithSkill>;
  fighterWithSkills: Array<FighterWithSkill>;
  fighterSkill?: Maybe<FighterSkill>;
  fighterSkills: Array<FighterSkill>;
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

export type Subscription = {
  nftproject?: Maybe<NFTProject>;
  nftprojects: Array<NFTProject>;
  fighter?: Maybe<Fighter>;
  fighters: Array<Fighter>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  fighterWithSkill?: Maybe<FighterWithSkill>;
  fighterWithSkills: Array<FighterWithSkill>;
  fighterSkill?: Maybe<FighterSkill>;
  fighterSkills: Array<FighterSkill>;
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
  skills?: Maybe<FighterSkill>;
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Fighter: ResolverTypeWrapper<Fighter>;
  Fighter_filter: Fighter_filter;
  Fighter_orderBy: Fighter_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  NFTProject: ResolverTypeWrapper<NFTProject>;
  NFTProject_filter: NFTProject_filter;
  NFTProject_orderBy: NFTProject_orderBy;
  OrderDirection: OrderDirection;
  String: ResolverTypeWrapper<Scalars['String']>;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
  FighterSkill: ResolverTypeWrapper<FighterSkill>;
  FighterSkill_filter: FighterSkill_filter;
  FighterSkill_orderBy: FighterSkill_orderBy;
  FighterWithSkill: ResolverTypeWrapper<FighterWithSkill>;
  FighterWithSkill_filter: FighterWithSkill_filter;
  FighterWithSkill_orderBy: FighterWithSkill_orderBy;
  ResolveToSourceArgs: ResolverTypeWrapper<Scalars['ResolveToSourceArgs']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Subscription: {};
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  Fighter: Fighter;
  Fighter_filter: Fighter_filter;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  NFTProject: NFTProject;
  NFTProject_filter: NFTProject_filter;
  String: Scalars['String'];
  _Block_: _Block_;
  _Meta_: _Meta_;
  FighterSkill: FighterSkill;
  FighterSkill_filter: FighterSkill_filter;
  FighterWithSkill: FighterWithSkill;
  FighterWithSkill_filter: FighterWithSkill_filter;
  ResolveToSourceArgs: Scalars['ResolveToSourceArgs'];
}>;

export type resolveToDirectiveArgs = {
  requiredSelectionSet?: Maybe<Scalars['String']>;
  sourceName: Scalars['String'];
  sourceTypeName: Scalars['String'];
  sourceFieldName: Scalars['String'];
  sourceSelectionSet?: Maybe<Scalars['String']>;
  sourceArgs?: Maybe<Scalars['ResolveToSourceArgs']>;
  keyField?: Maybe<Scalars['String']>;
  keysArg?: Maybe<Scalars['String']>;
  pubsubTopic?: Maybe<Scalars['String']>;
  filterBy?: Maybe<Scalars['String']>;
  additionalArgs?: Maybe<Scalars['ResolveToSourceArgs']>;
  result?: Maybe<Scalars['String']>;
  resultType?: Maybe<Scalars['String']>;
};

export type resolveToDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = resolveToDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  nftproject?: Resolver<Maybe<ResolversTypes['NFTProject']>, ParentType, ContextType, RequireFields<QuerynftprojectArgs, 'id' | 'subgraphError'>>;
  nftprojects?: Resolver<Array<ResolversTypes['NFTProject']>, ParentType, ContextType, RequireFields<QuerynftprojectsArgs, 'skip' | 'first' | 'subgraphError'>>;
  fighter?: Resolver<Maybe<ResolversTypes['Fighter']>, ParentType, ContextType, RequireFields<QueryfighterArgs, 'id' | 'subgraphError'>>;
  fighters?: Resolver<Array<ResolversTypes['Fighter']>, ParentType, ContextType, RequireFields<QueryfightersArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
  projects?: Resolver<Array<ResolversTypes['NFTProject']>, ParentType, ContextType, RequireFields<QueryprojectsArgs, 'skip' | 'first' | 'subgraphError'>>;
  fighterWithSkill?: Resolver<Maybe<ResolversTypes['FighterWithSkill']>, ParentType, ContextType, RequireFields<QueryfighterWithSkillArgs, 'id' | 'subgraphError'>>;
  fighterWithSkills?: Resolver<Array<ResolversTypes['FighterWithSkill']>, ParentType, ContextType, RequireFields<QueryfighterWithSkillsArgs, 'skip' | 'first' | 'subgraphError'>>;
  fighterSkill?: Resolver<Maybe<ResolversTypes['FighterSkill']>, ParentType, ContextType, RequireFields<QueryfighterSkillArgs, 'id' | 'subgraphError'>>;
  fighterSkills?: Resolver<Array<ResolversTypes['FighterSkill']>, ParentType, ContextType, RequireFields<QueryfighterSkillsArgs, 'skip' | 'first' | 'subgraphError'>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  nftproject?: SubscriptionResolver<Maybe<ResolversTypes['NFTProject']>, "nftproject", ParentType, ContextType, RequireFields<SubscriptionnftprojectArgs, 'id' | 'subgraphError'>>;
  nftprojects?: SubscriptionResolver<Array<ResolversTypes['NFTProject']>, "nftprojects", ParentType, ContextType, RequireFields<SubscriptionnftprojectsArgs, 'skip' | 'first' | 'subgraphError'>>;
  fighter?: SubscriptionResolver<Maybe<ResolversTypes['Fighter']>, "fighter", ParentType, ContextType, RequireFields<SubscriptionfighterArgs, 'id' | 'subgraphError'>>;
  fighters?: SubscriptionResolver<Array<ResolversTypes['Fighter']>, "fighters", ParentType, ContextType, RequireFields<SubscriptionfightersArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
  fighterWithSkill?: SubscriptionResolver<Maybe<ResolversTypes['FighterWithSkill']>, "fighterWithSkill", ParentType, ContextType, RequireFields<SubscriptionfighterWithSkillArgs, 'id' | 'subgraphError'>>;
  fighterWithSkills?: SubscriptionResolver<Array<ResolversTypes['FighterWithSkill']>, "fighterWithSkills", ParentType, ContextType, RequireFields<SubscriptionfighterWithSkillsArgs, 'skip' | 'first' | 'subgraphError'>>;
  fighterSkill?: SubscriptionResolver<Maybe<ResolversTypes['FighterSkill']>, "fighterSkill", ParentType, ContextType, RequireFields<SubscriptionfighterSkillArgs, 'id' | 'subgraphError'>>;
  fighterSkills?: SubscriptionResolver<Array<ResolversTypes['FighterSkill']>, "fighterSkills", ParentType, ContextType, RequireFields<SubscriptionfighterSkillsArgs, 'skip' | 'first' | 'subgraphError'>>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type FighterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Fighter'] = ResolversParentTypes['Fighter']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contractAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  project?: Resolver<ResolversTypes['NFTProject'], ParentType, ContextType>;
  registered?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  skills?: Resolver<Maybe<ResolversTypes['FighterSkill']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NFTProjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NFTProject'] = ResolversParentTypes['NFTProject']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contractAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tokenCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FighterSkillResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FighterSkill'] = ResolversParentTypes['FighterSkill']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  fighter?: Resolver<Maybe<ResolversTypes['FighterWithSkill']>, ParentType, ContextType>;
  fighter_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  aggression?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  awareness?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  determination?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  power?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  resilience?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  speed?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  aggregatePoints?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FighterWithSkillResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FighterWithSkill'] = ResolversParentTypes['FighterWithSkill']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  contractAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  registered?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['NFTProject']>, ParentType, ContextType>;
  skills?: Resolver<Maybe<ResolversTypes['FighterSkill']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface ResolveToSourceArgsScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ResolveToSourceArgs'], any> {
  name: 'ResolveToSourceArgs';
}

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Fighter?: FighterResolvers<ContextType>;
  NFTProject?: NFTProjectResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
  FighterSkill?: FighterSkillResolvers<ContextType>;
  FighterWithSkill?: FighterWithSkillResolvers<ContextType>;
  ResolveToSourceArgs?: GraphQLScalarType;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  resolveTo?: resolveToDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = OwnershipServiceTypes.Context & GameDataServiceTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export function getMeshOptions() {
  console.warn('WARNING: These artifacts are built for development mode. Please run "mesh build" to build production artifacts');
  return findAndParseConfig({
    dir: baseDir,
    artifactsDir: ".mesh",
    configName: "mesh",
    additionalPackagePrefixes: [],
    initialLoggerPrefix: "🕸️  Mesh",
  });
}

export function createBuiltMeshHTTPHandler() {
  return createMeshHTTPHandler({
    baseDir,
    getBuiltMesh: getBuiltMesh,
    rawServeConfig: {"browser":true,"playground":true,"cors":{"origin":"*"}},
  })
}

let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltMesh(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));
export function getMeshSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltMesh().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type getFighterQueryVariables = Exact<{
  id?: Scalars['ID'];
}>;


export type getFighterQuery = { fighter?: Maybe<(
    Pick<Fighter, 'id' | 'owner' | 'contractAddress' | 'tokenId'>
    & { skills?: Maybe<Pick<FighterSkill, 'aggregatePoints' | 'aggression' | 'awareness' | 'determination' | 'resilience' | 'power' | 'speed'>>, project: Pick<NFTProject, 'chainId'> }
  )> };

export type getFightersQueryVariables = Exact<{ [key: string]: never; }>;


export type getFightersQuery = { fighters: Array<(
    Pick<Fighter, 'id' | 'owner' | 'contractAddress' | 'tokenId'>
    & { skills?: Maybe<Pick<FighterSkill, 'aggregatePoints' | 'aggression' | 'awareness' | 'determination' | 'resilience' | 'power' | 'speed'>>, project: Pick<NFTProject, 'chainId'> }
  )> };

export type getFightersForAddressQueryVariables = Exact<{
  address?: Scalars['Bytes'];
}>;


export type getFightersForAddressQuery = { fighters: Array<(
    Pick<Fighter, 'id' | 'owner' | 'contractAddress' | 'tokenId'>
    & { skills?: Maybe<Pick<FighterSkill, 'aggregatePoints' | 'aggression' | 'awareness' | 'determination' | 'resilience' | 'power' | 'speed'>>, project: Pick<NFTProject, 'id' | 'chainId'> }
  )> };

export type getProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type getProjectsQuery = { nftprojects: Array<Pick<NFTProject, 'id' | 'chainId' | 'contractAddress' | 'tokenCount'>> };


export const getFighterDocument = gql`
    query getFighter($id: ID! = "0x8cc06404a64c3c024c41c03247407a9e1c9e62781") {
  fighter(id: $id) {
    id
    owner
    contractAddress
    tokenId
    skills {
      aggregatePoints
      aggression
      awareness
      determination
      resilience
      power
      speed
    }
    project {
      chainId
    }
  }
}
    ` as unknown as DocumentNode<getFighterQuery, getFighterQueryVariables>;
export const getFightersDocument = gql`
    query getFighters {
  fighters {
    id
    owner
    contractAddress
    tokenId
    skills {
      aggregatePoints
      aggression
      awareness
      determination
      resilience
      power
      speed
    }
    project {
      chainId
    }
  }
}
    ` as unknown as DocumentNode<getFightersQuery, getFightersQueryVariables>;
export const getFightersForAddressDocument = gql`
    query getFightersForAddress($address: Bytes! = "0x0090720fed7fed66ed658118b7b3bb0189d3a495") {
  fighters(where: {owner: $address}) {
    id
    owner
    contractAddress
    tokenId
    skills {
      aggregatePoints
      aggression
      awareness
      determination
      resilience
      power
      speed
    }
    project {
      id
      chainId
    }
  }
}
    ` as unknown as DocumentNode<getFightersForAddressQuery, getFightersForAddressQueryVariables>;
export const getProjectsDocument = gql`
    query getProjects {
  nftprojects {
    id
    chainId
    contractAddress
    tokenCount
  }
}
    ` as unknown as DocumentNode<getProjectsQuery, getProjectsQueryVariables>;





export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    getFighter(variables?: getFighterQueryVariables, options?: C): Promise<getFighterQuery> {
      return requester<getFighterQuery, getFighterQueryVariables>(getFighterDocument, variables, options) as Promise<getFighterQuery>;
    },
    getFighters(variables?: getFightersQueryVariables, options?: C): Promise<getFightersQuery> {
      return requester<getFightersQuery, getFightersQueryVariables>(getFightersDocument, variables, options) as Promise<getFightersQuery>;
    },
    getFightersForAddress(variables?: getFightersForAddressQueryVariables, options?: C): Promise<getFightersForAddressQuery> {
      return requester<getFightersForAddressQuery, getFightersForAddressQueryVariables>(getFightersForAddressDocument, variables, options) as Promise<getFightersForAddressQuery>;
    },
    getProjects(variables?: getProjectsQueryVariables, options?: C): Promise<getProjectsQuery> {
      return requester<getProjectsQuery, getProjectsQueryVariables>(getProjectsDocument, variables, options) as Promise<getProjectsQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;