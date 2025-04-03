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
    name
    description
    diceType
    source
    healthBonus
    loadBonus
    id
    createdAt
    updatedAt
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
      name
      description
      diceType
      source
      healthBonus
      loadBonus
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProfessionsQueryVariables,
  APITypes.ListProfessionsQuery
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
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSpellsQueryVariables,
  APITypes.ListSpellsQuery
>;
export const getGear = /* GraphQL */ `query GetGear($id: ID!) {
  getGear(id: $id) {
    id
    description
    isStartingGear
    profession
    source
    createdAt
    updatedAt
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
      isStartingGear
      profession
      source
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListGearsQueryVariables, APITypes.ListGearsQuery>;
export const getMove = /* GraphQL */ `query GetMove($id: ID!) {
  getMove(id: $id) {
    id
    name
    description
    selected
    selectedOnNew
    profession
    source
    isStartingMove
    isAdvancedMove
    isTwoToTenMove
    isSixToTenMove
    isOverflow
    createdAt
    updatedAt
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
      selectedOnNew
      profession
      source
      isStartingMove
      isAdvancedMove
      isTwoToTenMove
      isSixToTenMove
      isOverflow
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListMovesQueryVariables, APITypes.ListMovesQuery>;
export const getBond = /* GraphQL */ `query GetBond($id: ID!) {
  getBond(id: $id) {
    id
    description
    profession
    value
    tags
    source
    createdAt
    updatedAt
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
      source
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListBondsQueryVariables, APITypes.ListBondsQuery>;
export const getAbilityScore = /* GraphQL */ `query GetAbilityScore($id: ID!) {
  getAbilityScore(id: $id) {
    id
    name
    shortName
    debility
    debilityPenalty
    value
    bonus
    debilityIsSelected
    sortOrder
    tags
    createdAt
    updatedAt
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
      debilityIsSelected
      sortOrder
      tags
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAbilityScoresQueryVariables,
  APITypes.ListAbilityScoresQuery
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
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListRacesQueryVariables, APITypes.ListRacesQuery>;
export const getAlignment = /* GraphQL */ `query GetAlignment($id: ID!) {
  getAlignment(id: $id) {
    id
    name
    description
    selected
    profession
    source
    createdAt
    updatedAt
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
      source
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAlignmentsQueryVariables,
  APITypes.ListAlignmentsQuery
>;
export const getLook = /* GraphQL */ `query GetLook($id: ID!) {
  getLook(id: $id) {
    id
    name
    description
    value
    profession
    source
    createdAt
    updatedAt
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
      source
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListLooksQueryVariables, APITypes.ListLooksQuery>;
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
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCharactersQueryVariables,
  APITypes.ListCharactersQuery
>;
export const getFront = /* GraphQL */ `query GetFront($id: ID!) {
  getFront(id: $id) {
    userId
    id
    type
    name
    description
    active
    resolved
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetFrontQueryVariables, APITypes.GetFrontQuery>;
export const listFronts = /* GraphQL */ `query ListFronts(
  $filter: ModelFrontFilterInput
  $limit: Int
  $nextToken: String
) {
  listFronts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      userId
      id
      type
      name
      description
      active
      resolved
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFrontsQueryVariables,
  APITypes.ListFrontsQuery
>;
export const getSteading = /* GraphQL */ `query GetSteading($id: ID!) {
  getSteading(id: $id) {
    userId
    id
    type
    name
    description
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSteadingQueryVariables,
  APITypes.GetSteadingQuery
>;
export const listSteadings = /* GraphQL */ `query ListSteadings(
  $filter: ModelSteadingFilterInput
  $limit: Int
  $nextToken: String
) {
  listSteadings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      userId
      id
      type
      name
      description
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSteadingsQueryVariables,
  APITypes.ListSteadingsQuery
>;
export const getMap = /* GraphQL */ `query GetMap($id: ID!) {
  getMap(id: $id) {
    userId
    id
    name
    mapFile
    locations
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetMapQueryVariables, APITypes.GetMapQuery>;
export const listMaps = /* GraphQL */ `query ListMaps($filter: ModelMapFilterInput, $limit: Int, $nextToken: String) {
  listMaps(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      userId
      id
      name
      mapFile
      locations
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListMapsQueryVariables, APITypes.ListMapsQuery>;
export const getCampaign = /* GraphQL */ `query GetCampaign($id: ID!) {
  getCampaign(id: $id) {
    userId
    id
    name
    description
    characterIds
    frontIds
    mapIds
    steadingIds
    sessions {
      id
      title
      date
      notes
      __typename
    }
    gm_notes
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCampaignQueryVariables,
  APITypes.GetCampaignQuery
>;
export const listCampaigns = /* GraphQL */ `query ListCampaigns(
  $filter: ModelCampaignFilterInput
  $limit: Int
  $nextToken: String
) {
  listCampaigns(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      userId
      id
      name
      description
      characterIds
      frontIds
      mapIds
      steadingIds
      gm_notes
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCampaignsQueryVariables,
  APITypes.ListCampaignsQuery
>;
