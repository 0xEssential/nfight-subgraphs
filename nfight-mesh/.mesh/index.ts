// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import { findAndParseConfig } from '@graphql-mesh/cli';
import { createMeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import type { SavestateContext } from './sources/savestate/types';
import type { OwnershipContext } from './sources/ownership/types';
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
  SS_BigDecimal: any;
  SS_BigInt: any;
  Bytes: any;
  BigDecimal: any;
  BigInt: any;
};

export type Query = {
  SS_nftproject?: Maybe<SS_NFTProject>;
  projects: Array<SS_NFTProject>;
  SS_fighter?: Maybe<Fighter>;
  SS_fighters: Array<Fighter>;
  /** Access to subgraph metadata */
  SS__meta?: Maybe<SS__Meta_>;
  nftproject?: Maybe<NFTProject>;
  nftprojects: Array<NFTProject>;
  fighter?: Maybe<Fighter>;
  fighters: Array<Fighter>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
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
  SS_nftproject?: Maybe<SS_NFTProject>;
  SS_nftprojects: Array<SS_NFTProject>;
  SS_fighter?: Maybe<Fighter>;
  SS_fighters: Array<Fighter>;
  /** Access to subgraph metadata */
  SS__meta?: Maybe<SS__Meta_>;
  nftproject?: Maybe<NFTProject>;
  nftprojects: Array<NFTProject>;
  fighter?: Maybe<Fighter>;
  fighters: Array<Fighter>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
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
  tokenId: Scalars['BigInt'];
  aggression?: Maybe<Scalars['SS_BigInt']>;
  awareness?: Maybe<Scalars['SS_BigInt']>;
  determination?: Maybe<Scalars['SS_BigInt']>;
  power?: Maybe<Scalars['SS_BigInt']>;
  resilience?: Maybe<Scalars['SS_BigInt']>;
  speed?: Maybe<Scalars['SS_BigInt']>;
  aggregatePoints?: Maybe<Scalars['SS_BigInt']>;
  registered?: Maybe<Scalars['Boolean']>;
  project: NFTProject;
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

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
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
  SS_BigDecimal: ResolverTypeWrapper<Scalars['SS_BigDecimal']>;
  SS_BigInt: ResolverTypeWrapper<Scalars['SS_BigInt']>;
  SS_BlockChangedFilter: SS_BlockChangedFilter;
  SS_Block_height: SS_Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Fighter: ResolverTypeWrapper<Fighter>;
  SS_Fighter_filter: SS_Fighter_filter;
  SS_Fighter_orderBy: SS_Fighter_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  SS_NFTProject: ResolverTypeWrapper<SS_NFTProject>;
  SS_NFTProject_filter: SS_NFTProject_filter;
  SS_NFTProject_orderBy: SS_NFTProject_orderBy;
  SS_OrderDirection: SS_OrderDirection;
  String: ResolverTypeWrapper<Scalars['String']>;
  SS__Block_: ResolverTypeWrapper<SS__Block_>;
  SS__Meta_: ResolverTypeWrapper<SS__Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Fighter_filter: Fighter_filter;
  Fighter_orderBy: Fighter_orderBy;
  NFTProject: ResolverTypeWrapper<NFTProject>;
  NFTProject_filter: NFTProject_filter;
  NFTProject_orderBy: NFTProject_orderBy;
  OrderDirection: OrderDirection;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Subscription: {};
  SS_BigDecimal: Scalars['SS_BigDecimal'];
  SS_BigInt: Scalars['SS_BigInt'];
  SS_BlockChangedFilter: SS_BlockChangedFilter;
  SS_Block_height: SS_Block_height;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  Fighter: Fighter;
  SS_Fighter_filter: SS_Fighter_filter;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  SS_NFTProject: SS_NFTProject;
  SS_NFTProject_filter: SS_NFTProject_filter;
  String: Scalars['String'];
  SS__Block_: SS__Block_;
  SS__Meta_: SS__Meta_;
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Fighter_filter: Fighter_filter;
  NFTProject: NFTProject;
  NFTProject_filter: NFTProject_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  SS_nftproject?: Resolver<Maybe<ResolversTypes['SS_NFTProject']>, ParentType, ContextType, RequireFields<QuerySS_nftprojectArgs, 'id' | 'subgraphError'>>;
  projects?: Resolver<Array<ResolversTypes['SS_NFTProject']>, ParentType, ContextType, RequireFields<QueryprojectsArgs, 'skip' | 'first' | 'subgraphError'>>;
  SS_fighter?: Resolver<Maybe<ResolversTypes['Fighter']>, ParentType, ContextType, RequireFields<QuerySS_fighterArgs, 'id' | 'subgraphError'>>;
  SS_fighters?: Resolver<Array<ResolversTypes['Fighter']>, ParentType, ContextType, RequireFields<QuerySS_fightersArgs, 'skip' | 'first' | 'subgraphError'>>;
  SS__meta?: Resolver<Maybe<ResolversTypes['SS__Meta_']>, ParentType, ContextType, Partial<QuerySS__metaArgs>>;
  nftproject?: Resolver<Maybe<ResolversTypes['NFTProject']>, ParentType, ContextType, RequireFields<QuerynftprojectArgs, 'id' | 'subgraphError'>>;
  nftprojects?: Resolver<Array<ResolversTypes['NFTProject']>, ParentType, ContextType, RequireFields<QuerynftprojectsArgs, 'skip' | 'first' | 'subgraphError'>>;
  fighter?: Resolver<Maybe<ResolversTypes['Fighter']>, ParentType, ContextType, RequireFields<QueryfighterArgs, 'id' | 'subgraphError'>>;
  fighters?: Resolver<Array<ResolversTypes['Fighter']>, ParentType, ContextType, RequireFields<QueryfightersArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  SS_nftproject?: SubscriptionResolver<Maybe<ResolversTypes['SS_NFTProject']>, "SS_nftproject", ParentType, ContextType, RequireFields<SubscriptionSS_nftprojectArgs, 'id' | 'subgraphError'>>;
  SS_nftprojects?: SubscriptionResolver<Array<ResolversTypes['SS_NFTProject']>, "SS_nftprojects", ParentType, ContextType, RequireFields<SubscriptionSS_nftprojectsArgs, 'skip' | 'first' | 'subgraphError'>>;
  SS_fighter?: SubscriptionResolver<Maybe<ResolversTypes['Fighter']>, "SS_fighter", ParentType, ContextType, RequireFields<SubscriptionSS_fighterArgs, 'id' | 'subgraphError'>>;
  SS_fighters?: SubscriptionResolver<Array<ResolversTypes['Fighter']>, "SS_fighters", ParentType, ContextType, RequireFields<SubscriptionSS_fightersArgs, 'skip' | 'first' | 'subgraphError'>>;
  SS__meta?: SubscriptionResolver<Maybe<ResolversTypes['SS__Meta_']>, "SS__meta", ParentType, ContextType, Partial<SubscriptionSS__metaArgs>>;
  nftproject?: SubscriptionResolver<Maybe<ResolversTypes['NFTProject']>, "nftproject", ParentType, ContextType, RequireFields<SubscriptionnftprojectArgs, 'id' | 'subgraphError'>>;
  nftprojects?: SubscriptionResolver<Array<ResolversTypes['NFTProject']>, "nftprojects", ParentType, ContextType, RequireFields<SubscriptionnftprojectsArgs, 'skip' | 'first' | 'subgraphError'>>;
  fighter?: SubscriptionResolver<Maybe<ResolversTypes['Fighter']>, "fighter", ParentType, ContextType, RequireFields<SubscriptionfighterArgs, 'id' | 'subgraphError'>>;
  fighters?: SubscriptionResolver<Array<ResolversTypes['Fighter']>, "fighters", ParentType, ContextType, RequireFields<SubscriptionfightersArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export interface SS_BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['SS_BigDecimal'], any> {
  name: 'SS_BigDecimal';
}

export interface SS_BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['SS_BigInt'], any> {
  name: 'SS_BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type FighterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Fighter'] = ResolversParentTypes['Fighter']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  contractAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  aggression?: Resolver<Maybe<ResolversTypes['SS_BigInt']>, ParentType, ContextType>;
  awareness?: Resolver<Maybe<ResolversTypes['SS_BigInt']>, ParentType, ContextType>;
  determination?: Resolver<Maybe<ResolversTypes['SS_BigInt']>, ParentType, ContextType>;
  power?: Resolver<Maybe<ResolversTypes['SS_BigInt']>, ParentType, ContextType>;
  resilience?: Resolver<Maybe<ResolversTypes['SS_BigInt']>, ParentType, ContextType>;
  speed?: Resolver<Maybe<ResolversTypes['SS_BigInt']>, ParentType, ContextType>;
  aggregatePoints?: Resolver<Maybe<ResolversTypes['SS_BigInt']>, ParentType, ContextType>;
  registered?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  project?: Resolver<ResolversTypes['NFTProject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SS_NFTProjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SS_NFTProject'] = ResolversParentTypes['SS_NFTProject']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contractAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tokenCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SS__Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SS__Block_'] = ResolversParentTypes['SS__Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SS__Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SS__Meta_'] = ResolversParentTypes['SS__Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['SS__Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type NFTProjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NFTProject'] = ResolversParentTypes['NFTProject']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contractAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  chainId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tokenCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  SS_BigDecimal?: GraphQLScalarType;
  SS_BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Fighter?: FighterResolvers<ContextType>;
  SS_NFTProject?: SS_NFTProjectResolvers<ContextType>;
  SS__Block_?: SS__Block_Resolvers<ContextType>;
  SS__Meta_?: SS__Meta_Resolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  NFTProject?: NFTProjectResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;


export type MeshContext = SavestateContext & OwnershipContext & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn = (moduleId: string) => {
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
    rawServeConfig: {"browser":true,"cors":{"origin":"*"}},
  })
}

let meshInstance$: Promise<MeshInstance<MeshContext>>;

export function getBuiltMesh(): Promise<MeshInstance<MeshContext>> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh<MeshContext>(meshOptions)).then(mesh => {
      const id$ = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        id$.then(id => mesh.pubsub.unsubscribe(id)).catch(err => console.error(err));
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
  return getSdk<TOperationContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type getFighterQueryVariables = Exact<{
  id?: Scalars['ID'];
}>;


export type getFighterQuery = { fighter?: Maybe<(
    Pick<Fighter, 'id' | 'owner' | 'contractAddress' | 'tokenId' | 'aggregatePoints' | 'aggression' | 'awareness' | 'determination' | 'resilience' | 'power' | 'speed'>
    & { project: Pick<NFTProject, 'chainId'> }
  )> };

export type getFightersQueryVariables = Exact<{ [key: string]: never; }>;


export type getFightersQuery = { fighters: Array<(
    Pick<Fighter, 'id' | 'owner' | 'contractAddress' | 'tokenId' | 'aggregatePoints' | 'aggression' | 'awareness' | 'determination' | 'resilience' | 'power' | 'speed'>
    & { project: Pick<NFTProject, 'chainId'> }
  )> };

export type getFightersForAddressQueryVariables = Exact<{
  address?: Scalars['Bytes'];
}>;


export type getFightersForAddressQuery = { fighters: Array<(
    Pick<Fighter, 'id' | 'owner' | 'contractAddress' | 'tokenId' | 'aggregatePoints' | 'aggression' | 'awareness' | 'determination' | 'resilience' | 'power' | 'speed' | 'registered'>
    & { project: Pick<NFTProject, 'id' | 'chainId'> }
  )> };

export type getProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type getProjectsQuery = { projects: Array<Pick<SS_NFTProject, 'id' | 'chainId' | 'contractAddress' | 'tokenCount'>> };


export const getFighterDocument = gql`
    query getFighter($id: ID! = "0x8cc06404a64c3c024c41c03247407a9e1c9e62781") {
  fighter(id: $id) {
    id
    owner
    contractAddress
    tokenId
    aggregatePoints
    aggression
    awareness
    determination
    resilience
    power
    speed
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
    aggregatePoints
    aggression
    awareness
    determination
    resilience
    power
    speed
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
    aggregatePoints
    aggression
    awareness
    determination
    resilience
    power
    speed
    registered
    project {
      id
      chainId
    }
  }
}
    ` as unknown as DocumentNode<getFightersForAddressQuery, getFightersForAddressQueryVariables>;
export const getProjectsDocument = gql`
    query getProjects {
  projects {
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