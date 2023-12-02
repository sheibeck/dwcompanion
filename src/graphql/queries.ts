/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    email
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const syncUsers = /* GraphQL */ `query SyncUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUsers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncUsersQueryVariables, APITypes.SyncUsersQuery>;
export const getSource = /* GraphQL */ `query GetSource($id: ID!) {
  getSource(id: $id) {
    id
    name
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetSourceQueryVariables, APITypes.GetSourceQuery>;
export const listSources = /* GraphQL */ `query ListSources(
  $filter: ModelSourceFilterInput
  $limit: Int
  $nextToken: String
) {
  listSources(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSourcesQueryVariables,
  APITypes.ListSourcesQuery
>;
export const syncSources = /* GraphQL */ `query SyncSources(
  $filter: ModelSourceFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncSources(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncSourcesQueryVariables,
  APITypes.SyncSourcesQuery
>;
export const getCharacterProfession = /* GraphQL */ `query GetCharacterProfession($id: ID!) {
  getCharacterProfession(id: $id) {
    id
    Character {
      userId
      id
      name
      level
      xp
      armor
      hitPointsMax
      hitPointsCurrent
      coin
      loadMax
      loadCurrent
      isTemplate
      tags
      notes
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterRaceId
      characterAlignmentId
      characterLookId
      characterCharacterProfessionId
      __typename
    }
    Profession {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      professionSourceId
      professionDamageDiceTypeId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterProfessionProfessionId
    characterProfessionCharacterId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCharacterProfessionQueryVariables,
  APITypes.GetCharacterProfessionQuery
>;
export const listCharacterProfessions = /* GraphQL */ `query ListCharacterProfessions(
  $filter: ModelCharacterProfessionFilterInput
  $limit: Int
  $nextToken: String
) {
  listCharacterProfessions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterProfessionProfessionId
      characterProfessionCharacterId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCharacterProfessionsQueryVariables,
  APITypes.ListCharacterProfessionsQuery
>;
export const syncCharacterProfessions = /* GraphQL */ `query SyncCharacterProfessions(
  $filter: ModelCharacterProfessionFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCharacterProfessions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterProfessionProfessionId
      characterProfessionCharacterId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCharacterProfessionsQueryVariables,
  APITypes.SyncCharacterProfessionsQuery
>;
export const getProfession = /* GraphQL */ `query GetProfession($id: ID!) {
  getProfession(id: $id) {
    id
    name
    description
    source {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    damageDiceType {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    professionSourceId
    professionDamageDiceTypeId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProfessionQueryVariables,
  APITypes.GetProfessionQuery
>;
export const listProfessions = /* GraphQL */ `query ListProfessions(
  $filter: ModelProfessionFilterInput
  $limit: Int
  $nextToken: String
) {
  listProfessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      professionSourceId
      professionDamageDiceTypeId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProfessionsQueryVariables,
  APITypes.ListProfessionsQuery
>;
export const syncProfessions = /* GraphQL */ `query SyncProfessions(
  $filter: ModelProfessionFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncProfessions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      professionSourceId
      professionDamageDiceTypeId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncProfessionsQueryVariables,
  APITypes.SyncProfessionsQuery
>;
export const getSpell = /* GraphQL */ `query GetSpell($id: ID!) {
  getSpell(id: $id) {
    id
    name
    level
    type
    ongoing
    description
    source {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    profession {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      professionSourceId
      professionDamageDiceTypeId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    spellSourceId
    spellProfessionId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetSpellQueryVariables, APITypes.GetSpellQuery>;
export const listSpells = /* GraphQL */ `query ListSpells(
  $filter: ModelSpellFilterInput
  $limit: Int
  $nextToken: String
) {
  listSpells(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      level
      type
      ongoing
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      spellSourceId
      spellProfessionId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSpellsQueryVariables,
  APITypes.ListSpellsQuery
>;
export const syncSpells = /* GraphQL */ `query SyncSpells(
  $filter: ModelSpellFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncSpells(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      level
      type
      ongoing
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      spellSourceId
      spellProfessionId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncSpellsQueryVariables,
  APITypes.SyncSpellsQuery
>;
export const getCharacterSpell = /* GraphQL */ `query GetCharacterSpell($id: ID!) {
  getCharacterSpell(id: $id) {
    id
    spell {
      id
      name
      level
      type
      ongoing
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      spellSourceId
      spellProfessionId
      __typename
    }
    selected
    tags
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterSpellSpellId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCharacterSpellQueryVariables,
  APITypes.GetCharacterSpellQuery
>;
export const listCharacterSpells = /* GraphQL */ `query ListCharacterSpells(
  $filter: ModelCharacterSpellFilterInput
  $limit: Int
  $nextToken: String
) {
  listCharacterSpells(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      selected
      tags
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterSpellSpellId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCharacterSpellsQueryVariables,
  APITypes.ListCharacterSpellsQuery
>;
export const syncCharacterSpells = /* GraphQL */ `query SyncCharacterSpells(
  $filter: ModelCharacterSpellFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCharacterSpells(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      selected
      tags
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterSpellSpellId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCharacterSpellsQueryVariables,
  APITypes.SyncCharacterSpellsQuery
>;
export const getCharacterGear = /* GraphQL */ `query GetCharacterGear($id: ID!) {
  getCharacterGear(id: $id) {
    id
    gear {
      id
      description
      weight
      uses
      tags
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      gearSourceId
      __typename
    }
    uses
    tags
    characterID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterGearGearId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCharacterGearQueryVariables,
  APITypes.GetCharacterGearQuery
>;
export const listCharacterGears = /* GraphQL */ `query ListCharacterGears(
  $filter: ModelCharacterGearFilterInput
  $limit: Int
  $nextToken: String
) {
  listCharacterGears(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      uses
      tags
      characterID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterGearGearId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCharacterGearsQueryVariables,
  APITypes.ListCharacterGearsQuery
>;
export const syncCharacterGears = /* GraphQL */ `query SyncCharacterGears(
  $filter: ModelCharacterGearFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCharacterGears(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      uses
      tags
      characterID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterGearGearId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCharacterGearsQueryVariables,
  APITypes.SyncCharacterGearsQuery
>;
export const characterGearsByCharacterID = /* GraphQL */ `query CharacterGearsByCharacterID(
  $characterID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCharacterGearFilterInput
  $limit: Int
  $nextToken: String
) {
  characterGearsByCharacterID(
    characterID: $characterID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      uses
      tags
      characterID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterGearGearId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CharacterGearsByCharacterIDQueryVariables,
  APITypes.CharacterGearsByCharacterIDQuery
>;
export const getGear = /* GraphQL */ `query GetGear($id: ID!) {
  getGear(id: $id) {
    id
    description
    weight
    uses
    tags
    source {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    gearSourceId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetGearQueryVariables, APITypes.GetGearQuery>;
export const listGears = /* GraphQL */ `query ListGears(
  $filter: ModelGearFilterInput
  $limit: Int
  $nextToken: String
) {
  listGears(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
      weight
      uses
      tags
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      gearSourceId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListGearsQueryVariables, APITypes.ListGearsQuery>;
export const syncGears = /* GraphQL */ `query SyncGears(
  $filter: ModelGearFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncGears(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      description
      weight
      uses
      tags
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      gearSourceId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncGearsQueryVariables, APITypes.SyncGearsQuery>;
export const getCharacterMove = /* GraphQL */ `query GetCharacterMove($id: ID!) {
  getCharacterMove(id: $id) {
    id
    selected
    move {
      id
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      moveClassId
      moveSourceId
      __typename
    }
    characterID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterMoveMoveId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCharacterMoveQueryVariables,
  APITypes.GetCharacterMoveQuery
>;
export const listCharacterMoves = /* GraphQL */ `query ListCharacterMoves(
  $filter: ModelCharacterMoveFilterInput
  $limit: Int
  $nextToken: String
) {
  listCharacterMoves(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      selected
      characterID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterMoveMoveId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCharacterMovesQueryVariables,
  APITypes.ListCharacterMovesQuery
>;
export const syncCharacterMoves = /* GraphQL */ `query SyncCharacterMoves(
  $filter: ModelCharacterMoveFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCharacterMoves(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      selected
      characterID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterMoveMoveId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCharacterMovesQueryVariables,
  APITypes.SyncCharacterMovesQuery
>;
export const characterMovesByCharacterID = /* GraphQL */ `query CharacterMovesByCharacterID(
  $characterID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCharacterMoveFilterInput
  $limit: Int
  $nextToken: String
) {
  characterMovesByCharacterID(
    characterID: $characterID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      selected
      characterID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterMoveMoveId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CharacterMovesByCharacterIDQueryVariables,
  APITypes.CharacterMovesByCharacterIDQuery
>;
export const getMove = /* GraphQL */ `query GetMove($id: ID!) {
  getMove(id: $id) {
    id
    description
    class {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      professionSourceId
      professionDamageDiceTypeId
      __typename
    }
    source {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    moveClassId
    moveSourceId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetMoveQueryVariables, APITypes.GetMoveQuery>;
export const listMoves = /* GraphQL */ `query ListMoves(
  $filter: ModelMoveFilterInput
  $limit: Int
  $nextToken: String
) {
  listMoves(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      moveClassId
      moveSourceId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListMovesQueryVariables, APITypes.ListMovesQuery>;
export const syncMoves = /* GraphQL */ `query SyncMoves(
  $filter: ModelMoveFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncMoves(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      moveClassId
      moveSourceId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncMovesQueryVariables, APITypes.SyncMovesQuery>;
export const getCharacterBond = /* GraphQL */ `query GetCharacterBond($id: ID!) {
  getCharacterBond(id: $id) {
    id
    description
    bond {
      id
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      bondClassId
      __typename
    }
    selected
    characterID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterBondBondId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCharacterBondQueryVariables,
  APITypes.GetCharacterBondQuery
>;
export const listCharacterBonds = /* GraphQL */ `query ListCharacterBonds(
  $filter: ModelCharacterBondFilterInput
  $limit: Int
  $nextToken: String
) {
  listCharacterBonds(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
      selected
      characterID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterBondBondId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCharacterBondsQueryVariables,
  APITypes.ListCharacterBondsQuery
>;
export const syncCharacterBonds = /* GraphQL */ `query SyncCharacterBonds(
  $filter: ModelCharacterBondFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCharacterBonds(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      description
      selected
      characterID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterBondBondId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCharacterBondsQueryVariables,
  APITypes.SyncCharacterBondsQuery
>;
export const characterBondsByCharacterID = /* GraphQL */ `query CharacterBondsByCharacterID(
  $characterID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCharacterBondFilterInput
  $limit: Int
  $nextToken: String
) {
  characterBondsByCharacterID(
    characterID: $characterID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      description
      selected
      characterID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterBondBondId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CharacterBondsByCharacterIDQueryVariables,
  APITypes.CharacterBondsByCharacterIDQuery
>;
export const getBond = /* GraphQL */ `query GetBond($id: ID!) {
  getBond(id: $id) {
    id
    description
    class {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      professionSourceId
      professionDamageDiceTypeId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    bondClassId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetBondQueryVariables, APITypes.GetBondQuery>;
export const listBonds = /* GraphQL */ `query ListBonds(
  $filter: ModelBondFilterInput
  $limit: Int
  $nextToken: String
) {
  listBonds(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      bondClassId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListBondsQueryVariables, APITypes.ListBondsQuery>;
export const syncBonds = /* GraphQL */ `query SyncBonds(
  $filter: ModelBondFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncBonds(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      bondClassId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncBondsQueryVariables, APITypes.SyncBondsQuery>;
export const getCharacterAbilityScore = /* GraphQL */ `query GetCharacterAbilityScore($id: ID!) {
  getCharacterAbilityScore(id: $id) {
    abilityScore {
      id
      name
      shortName
      debility
      debilityPenalty
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    id
    value
    bonus
    tags
    characterID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterAbilityScoreAbilityScoreId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCharacterAbilityScoreQueryVariables,
  APITypes.GetCharacterAbilityScoreQuery
>;
export const listCharacterAbilityScores = /* GraphQL */ `query ListCharacterAbilityScores(
  $filter: ModelCharacterAbilityScoreFilterInput
  $limit: Int
  $nextToken: String
) {
  listCharacterAbilityScores(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      value
      bonus
      tags
      characterID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterAbilityScoreAbilityScoreId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCharacterAbilityScoresQueryVariables,
  APITypes.ListCharacterAbilityScoresQuery
>;
export const syncCharacterAbilityScores = /* GraphQL */ `query SyncCharacterAbilityScores(
  $filter: ModelCharacterAbilityScoreFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCharacterAbilityScores(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      value
      bonus
      tags
      characterID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterAbilityScoreAbilityScoreId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCharacterAbilityScoresQueryVariables,
  APITypes.SyncCharacterAbilityScoresQuery
>;
export const characterAbilityScoresByCharacterID = /* GraphQL */ `query CharacterAbilityScoresByCharacterID(
  $characterID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCharacterAbilityScoreFilterInput
  $limit: Int
  $nextToken: String
) {
  characterAbilityScoresByCharacterID(
    characterID: $characterID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      value
      bonus
      tags
      characterID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterAbilityScoreAbilityScoreId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CharacterAbilityScoresByCharacterIDQueryVariables,
  APITypes.CharacterAbilityScoresByCharacterIDQuery
>;
export const getAbilityScore = /* GraphQL */ `query GetAbilityScore($id: ID!) {
  getAbilityScore(id: $id) {
    id
    name
    shortName
    debility
    debilityPenalty
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAbilityScoreQueryVariables,
  APITypes.GetAbilityScoreQuery
>;
export const listAbilityScores = /* GraphQL */ `query ListAbilityScores(
  $filter: ModelAbilityScoreFilterInput
  $limit: Int
  $nextToken: String
) {
  listAbilityScores(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      shortName
      debility
      debilityPenalty
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAbilityScoresQueryVariables,
  APITypes.ListAbilityScoresQuery
>;
export const syncAbilityScores = /* GraphQL */ `query SyncAbilityScores(
  $filter: ModelAbilityScoreFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncAbilityScores(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      shortName
      debility
      debilityPenalty
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncAbilityScoresQueryVariables,
  APITypes.SyncAbilityScoresQuery
>;
export const getCharacterRace = /* GraphQL */ `query GetCharacterRace($id: ID!) {
  getCharacterRace(id: $id) {
    id
    race {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      raceProfessionId
      raceSourceId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterRaceRaceId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCharacterRaceQueryVariables,
  APITypes.GetCharacterRaceQuery
>;
export const listCharacterRaces = /* GraphQL */ `query ListCharacterRaces(
  $filter: ModelCharacterRaceFilterInput
  $limit: Int
  $nextToken: String
) {
  listCharacterRaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterRaceRaceId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCharacterRacesQueryVariables,
  APITypes.ListCharacterRacesQuery
>;
export const syncCharacterRaces = /* GraphQL */ `query SyncCharacterRaces(
  $filter: ModelCharacterRaceFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCharacterRaces(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterRaceRaceId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCharacterRacesQueryVariables,
  APITypes.SyncCharacterRacesQuery
>;
export const getRace = /* GraphQL */ `query GetRace($id: ID!) {
  getRace(id: $id) {
    id
    name
    description
    profession {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      professionSourceId
      professionDamageDiceTypeId
      __typename
    }
    source {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    raceProfessionId
    raceSourceId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetRaceQueryVariables, APITypes.GetRaceQuery>;
export const listRaces = /* GraphQL */ `query ListRaces(
  $filter: ModelRaceFilterInput
  $limit: Int
  $nextToken: String
) {
  listRaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      raceProfessionId
      raceSourceId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListRacesQueryVariables, APITypes.ListRacesQuery>;
export const syncRaces = /* GraphQL */ `query SyncRaces(
  $filter: ModelRaceFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRaces(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      raceProfessionId
      raceSourceId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncRacesQueryVariables, APITypes.SyncRacesQuery>;
export const getCharacterAlignment = /* GraphQL */ `query GetCharacterAlignment($id: ID!) {
  getCharacterAlignment(id: $id) {
    id
    alignment {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      alignmentClassId
      __typename
    }
    selected
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterAlignmentAlignmentId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCharacterAlignmentQueryVariables,
  APITypes.GetCharacterAlignmentQuery
>;
export const listCharacterAlignments = /* GraphQL */ `query ListCharacterAlignments(
  $filter: ModelCharacterAlignmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listCharacterAlignments(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      selected
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterAlignmentAlignmentId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCharacterAlignmentsQueryVariables,
  APITypes.ListCharacterAlignmentsQuery
>;
export const syncCharacterAlignments = /* GraphQL */ `query SyncCharacterAlignments(
  $filter: ModelCharacterAlignmentFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCharacterAlignments(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      selected
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterAlignmentAlignmentId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCharacterAlignmentsQueryVariables,
  APITypes.SyncCharacterAlignmentsQuery
>;
export const getAlignment = /* GraphQL */ `query GetAlignment($id: ID!) {
  getAlignment(id: $id) {
    id
    name
    description
    class {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      professionSourceId
      professionDamageDiceTypeId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    alignmentClassId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAlignmentQueryVariables,
  APITypes.GetAlignmentQuery
>;
export const listAlignments = /* GraphQL */ `query ListAlignments(
  $filter: ModelAlignmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listAlignments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      alignmentClassId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAlignmentsQueryVariables,
  APITypes.ListAlignmentsQuery
>;
export const syncAlignments = /* GraphQL */ `query SyncAlignments(
  $filter: ModelAlignmentFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncAlignments(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      alignmentClassId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncAlignmentsQueryVariables,
  APITypes.SyncAlignmentsQuery
>;
export const getDiceType = /* GraphQL */ `query GetDiceType($id: ID!) {
  getDiceType(id: $id) {
    id
    name
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDiceTypeQueryVariables,
  APITypes.GetDiceTypeQuery
>;
export const listDiceTypes = /* GraphQL */ `query ListDiceTypes(
  $filter: ModelDiceTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  listDiceTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDiceTypesQueryVariables,
  APITypes.ListDiceTypesQuery
>;
export const syncDiceTypes = /* GraphQL */ `query SyncDiceTypes(
  $filter: ModelDiceTypeFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncDiceTypes(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncDiceTypesQueryVariables,
  APITypes.SyncDiceTypesQuery
>;
export const getCharacterLook = /* GraphQL */ `query GetCharacterLook($id: ID!) {
  getCharacterLook(id: $id) {
    id
    look {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCharacterLookQueryVariables,
  APITypes.GetCharacterLookQuery
>;
export const listCharacterLooks = /* GraphQL */ `query ListCharacterLooks(
  $filter: ModelCharacterLookFilterInput
  $limit: Int
  $nextToken: String
) {
  listCharacterLooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCharacterLooksQueryVariables,
  APITypes.ListCharacterLooksQuery
>;
export const syncCharacterLooks = /* GraphQL */ `query SyncCharacterLooks(
  $filter: ModelCharacterLookFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCharacterLooks(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCharacterLooksQueryVariables,
  APITypes.SyncCharacterLooksQuery
>;
export const getLook = /* GraphQL */ `query GetLook($id: ID!) {
  getLook(id: $id) {
    id
    name
    description
    characterlookID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetLookQueryVariables, APITypes.GetLookQuery>;
export const listLooks = /* GraphQL */ `query ListLooks(
  $filter: ModelLookFilterInput
  $limit: Int
  $nextToken: String
) {
  listLooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      characterlookID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListLooksQueryVariables, APITypes.ListLooksQuery>;
export const syncLooks = /* GraphQL */ `query SyncLooks(
  $filter: ModelLookFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncLooks(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      description
      characterlookID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncLooksQueryVariables, APITypes.SyncLooksQuery>;
export const looksByCharacterlookID = /* GraphQL */ `query LooksByCharacterlookID(
  $characterlookID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLookFilterInput
  $limit: Int
  $nextToken: String
) {
  looksByCharacterlookID(
    characterlookID: $characterlookID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      characterlookID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LooksByCharacterlookIDQueryVariables,
  APITypes.LooksByCharacterlookIDQuery
>;
export const getCharacter = /* GraphQL */ `query GetCharacter($id: ID!) {
  getCharacter(id: $id) {
    userId
    id
    name
    level
    xp
    armor
    hitPointsMax
    hitPointsCurrent
    coin
    loadMax
    loadCurrent
    isTemplate
    gear {
      nextToken
      startedAt
      __typename
    }
    sixToTenMoves {
      nextToken
      startedAt
      __typename
    }
    twoToTenMoves {
      nextToken
      startedAt
      __typename
    }
    startingMoves {
      nextToken
      startedAt
      __typename
    }
    bonds {
      nextToken
      startedAt
      __typename
    }
    abilityscores {
      nextToken
      startedAt
      __typename
    }
    race {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterRaceRaceId
      __typename
    }
    alignment {
      id
      selected
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterAlignmentAlignmentId
      __typename
    }
    tags
    look {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    notes
    CharacterProfession {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterProfessionProfessionId
      characterProfessionCharacterId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterRaceId
    characterAlignmentId
    characterLookId
    characterCharacterProfessionId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCharacterQueryVariables,
  APITypes.GetCharacterQuery
>;
export const listCharacters = /* GraphQL */ `query ListCharacters(
  $filter: ModelCharacterFilterInput
  $limit: Int
  $nextToken: String
) {
  listCharacters(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      userId
      id
      name
      level
      xp
      armor
      hitPointsMax
      hitPointsCurrent
      coin
      loadMax
      loadCurrent
      isTemplate
      tags
      notes
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterRaceId
      characterAlignmentId
      characterLookId
      characterCharacterProfessionId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCharactersQueryVariables,
  APITypes.ListCharactersQuery
>;
export const syncCharacters = /* GraphQL */ `query SyncCharacters(
  $filter: ModelCharacterFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCharacters(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      userId
      id
      name
      level
      xp
      armor
      hitPointsMax
      hitPointsCurrent
      coin
      loadMax
      loadCurrent
      isTemplate
      tags
      notes
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterRaceId
      characterAlignmentId
      characterLookId
      characterCharacterProfessionId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCharactersQueryVariables,
  APITypes.SyncCharactersQuery
>;
