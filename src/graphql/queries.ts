/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getProfession = /* GraphQL */ `query GetProfession($id: ID!) {
  getProfession(id: $id) {
    id
    name
    description
    diceType
    source
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
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
      diceType
      source
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
      diceType
      source
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
    selected
    tags
    source
    profession
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
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
      selected
      tags
      source
      profession
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
      selected
      tags
      source
      profession
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
  APITypes.SyncSpellsQueryVariables,
  APITypes.SyncSpellsQuery
>;
export const getGear = /* GraphQL */ `query GetGear($id: ID!) {
  getGear(id: $id) {
    id
    description
    weight
    uses
    tags
    source
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
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
      source
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
      source
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
` as GeneratedQuery<APITypes.SyncGearsQueryVariables, APITypes.SyncGearsQuery>;
export const getMove = /* GraphQL */ `query GetMove($id: ID!) {
  getMove(id: $id) {
    id
    name
    description
    selected
    profession
    source
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
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
      name
      description
      selected
      profession
      source
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
      name
      description
      selected
      profession
      source
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
` as GeneratedQuery<APITypes.SyncMovesQueryVariables, APITypes.SyncMovesQuery>;
export const getBond = /* GraphQL */ `query GetBond($id: ID!) {
  getBond(id: $id) {
    id
    description
    profession
    value
    tags
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
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
      profession
      value
      tags
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
      profession
      value
      tags
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
` as GeneratedQuery<APITypes.SyncBondsQueryVariables, APITypes.SyncBondsQuery>;
export const getAbilityScore = /* GraphQL */ `query GetAbilityScore($id: ID!) {
  getAbilityScore(id: $id) {
    id
    name
    shortName
    debility
    debilityPenalty
    value
    bonus
    tags
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
      value
      bonus
      tags
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
      value
      bonus
      tags
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
export const getRace = /* GraphQL */ `query GetRace($id: ID!) {
  getRace(id: $id) {
    id
    name
    description
    profession
    selected
    source
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
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
      profession
      selected
      source
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
      profession
      selected
      source
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
` as GeneratedQuery<APITypes.SyncRacesQueryVariables, APITypes.SyncRacesQuery>;
export const getAlignment = /* GraphQL */ `query GetAlignment($id: ID!) {
  getAlignment(id: $id) {
    id
    name
    description
    selected
    profession
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
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
      selected
      profession
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
      selected
      profession
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
  APITypes.SyncAlignmentsQueryVariables,
  APITypes.SyncAlignmentsQuery
>;
export const getLook = /* GraphQL */ `query GetLook($id: ID!) {
  getLook(id: $id) {
    id
    name
    description
    value
    profession
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
      value
      profession
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
      value
      profession
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
    tags
    notes
    gear
    startingMoves
    advancedMovesTwoToTen
    advancedMovesSixToTen
    bonds
    abilityScores
    race
    alignment
    look
    profession
    spells
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
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
      gear
      startingMoves
      advancedMovesTwoToTen
      advancedMovesSixToTen
      bonds
      abilityScores
      race
      alignment
      look
      profession
      spells
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
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
      gear
      startingMoves
      advancedMovesTwoToTen
      advancedMovesSixToTen
      bonds
      abilityScores
      race
      alignment
      look
      profession
      spells
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
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
