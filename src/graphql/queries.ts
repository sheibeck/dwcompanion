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
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getSource = /* GraphQL */ `query GetSource($id: ID!) {
  getSource(id: $id) {
    id
    name
    createdAt
    updatedAt
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
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSourcesQueryVariables,
  APITypes.ListSourcesQuery
>;
export const getCharacterClass = /* GraphQL */ `query GetCharacterClass($id: ID!) {
  getCharacterClass(id: $id) {
    id
    class {
      id
      name
      description
      createdAt
      updatedAt
      classSourceId
      classDamageDiceTypeId
      __typename
    }
    character {
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
      isPublic
      isCoreTemplate
      tags
      notes
      createdAt
      updatedAt
      characterRaceId
      characterAlignmentId
      characterLookId
      characterClassId
      __typename
    }
    createdAt
    updatedAt
    classCharactersId
    characterClassClassId
    characterClassCharacterId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCharacterClassQueryVariables,
  APITypes.GetCharacterClassQuery
>;
export const listCharacterClasses = /* GraphQL */ `query ListCharacterClasses(
  $filter: ModelCharacterClassFilterInput
  $limit: Int
  $nextToken: String
) {
  listCharacterClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      classCharactersId
      characterClassClassId
      characterClassCharacterId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCharacterClassesQueryVariables,
  APITypes.ListCharacterClassesQuery
>;
export const getClass = /* GraphQL */ `query GetClass($id: ID!) {
  getClass(id: $id) {
    id
    name
    description
    source {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    damageDiceType {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    characters {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    classSourceId
    classDamageDiceTypeId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetClassQueryVariables, APITypes.GetClassQuery>;
export const listClasses = /* GraphQL */ `query ListClasses(
  $filter: ModelClassFilterInput
  $limit: Int
  $nextToken: String
) {
  listClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      createdAt
      updatedAt
      classSourceId
      classDamageDiceTypeId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListClassesQueryVariables,
  APITypes.ListClassesQuery
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
      __typename
    }
    class {
      id
      name
      description
      createdAt
      updatedAt
      classSourceId
      classDamageDiceTypeId
      __typename
    }
    characters {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    spellSourceId
    spellClassId
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
      spellSourceId
      spellClassId
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
export const getCharacterSpell = /* GraphQL */ `query GetCharacterSpell($id: ID!) {
  getCharacterSpell(id: $id) {
    id
    character {
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
      isPublic
      isCoreTemplate
      tags
      notes
      createdAt
      updatedAt
      characterRaceId
      characterAlignmentId
      characterLookId
      characterClassId
      __typename
    }
    spell {
      id
      name
      level
      type
      ongoing
      description
      createdAt
      updatedAt
      spellSourceId
      spellClassId
      __typename
    }
    selected
    tags
    createdAt
    updatedAt
    spellCharactersId
    characterSpellsId
    characterSpellCharacterId
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
      spellCharactersId
      characterSpellsId
      characterSpellCharacterId
      characterSpellSpellId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCharacterSpellsQueryVariables,
  APITypes.ListCharacterSpellsQuery
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
      __typename
    }
    uses
    tags
    character {
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
      isPublic
      isCoreTemplate
      tags
      notes
      createdAt
      updatedAt
      characterRaceId
      characterAlignmentId
      characterLookId
      characterClassId
      __typename
    }
    createdAt
    updatedAt
    gearCharactersId
    characterGearId
    characterGearGearId
    characterGearCharacterId
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
      createdAt
      updatedAt
      gearCharactersId
      characterGearId
      characterGearGearId
      characterGearCharacterId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCharacterGearsQueryVariables,
  APITypes.ListCharacterGearsQuery
>;
export const getGear = /* GraphQL */ `query GetGear($id: ID!) {
  getGear(id: $id) {
    id
    description
    weight
    uses
    tags
    characters {
      nextToken
      __typename
    }
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
      weight
      uses
      tags
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListGearsQueryVariables, APITypes.ListGearsQuery>;
export const getCharacterMove = /* GraphQL */ `query GetCharacterMove($id: ID!) {
  getCharacterMove(id: $id) {
    id
    selected
    move {
      id
      description
      createdAt
      updatedAt
      moveClassId
      __typename
    }
    character {
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
      isPublic
      isCoreTemplate
      tags
      notes
      createdAt
      updatedAt
      characterRaceId
      characterAlignmentId
      characterLookId
      characterClassId
      __typename
    }
    createdAt
    updatedAt
    moveCharactersId
    characterSixToTenMovesId
    characterTwoToTenMovesId
    characterStartingMovesId
    characterMoveMoveId
    characterMoveCharacterId
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
      createdAt
      updatedAt
      moveCharactersId
      characterSixToTenMovesId
      characterTwoToTenMovesId
      characterStartingMovesId
      characterMoveMoveId
      characterMoveCharacterId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCharacterMovesQueryVariables,
  APITypes.ListCharacterMovesQuery
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
      classSourceId
      classDamageDiceTypeId
      __typename
    }
    characters {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    moveClassId
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
      moveClassId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListMovesQueryVariables, APITypes.ListMovesQuery>;
export const getCharacterBond = /* GraphQL */ `query GetCharacterBond($id: ID!) {
  getCharacterBond(id: $id) {
    id
    description
    bond {
      id
      description
      createdAt
      updatedAt
      bondClassId
      __typename
    }
    selected
    character {
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
      isPublic
      isCoreTemplate
      tags
      notes
      createdAt
      updatedAt
      characterRaceId
      characterAlignmentId
      characterLookId
      characterClassId
      __typename
    }
    createdAt
    updatedAt
    bondCharactersId
    abilityScoreCharactersId
    characterBondsId
    characterBondBondId
    characterBondCharacterId
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
      createdAt
      updatedAt
      bondCharactersId
      abilityScoreCharactersId
      characterBondsId
      characterBondBondId
      characterBondCharacterId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCharacterBondsQueryVariables,
  APITypes.ListCharacterBondsQuery
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
      classSourceId
      classDamageDiceTypeId
      __typename
    }
    characters {
      nextToken
      __typename
    }
    createdAt
    updatedAt
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
      bondClassId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListBondsQueryVariables, APITypes.ListBondsQuery>;
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
      __typename
    }
    id
    value
    bonus
    tags
    character {
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
      isPublic
      isCoreTemplate
      tags
      notes
      createdAt
      updatedAt
      characterRaceId
      characterAlignmentId
      characterLookId
      characterClassId
      __typename
    }
    createdAt
    updatedAt
    characterAbilityscoresId
    characterAbilityScoreAbilityScoreId
    characterAbilityScoreCharacterId
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
      createdAt
      updatedAt
      characterAbilityscoresId
      characterAbilityScoreAbilityScoreId
      characterAbilityScoreCharacterId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCharacterAbilityScoresQueryVariables,
  APITypes.ListCharacterAbilityScoresQuery
>;
export const getAbilityScore = /* GraphQL */ `query GetAbilityScore($id: ID!) {
  getAbilityScore(id: $id) {
    id
    name
    shortName
    debility
    debilityPenalty
    characters {
      nextToken
      __typename
    }
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
export const getCharacterRace = /* GraphQL */ `query GetCharacterRace($id: ID!) {
  getCharacterRace(id: $id) {
    id
    race {
      id
      name
      description
      createdAt
      updatedAt
      raceClassId
      raceSourceId
      __typename
    }
    character {
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
      isPublic
      isCoreTemplate
      tags
      notes
      createdAt
      updatedAt
      characterRaceId
      characterAlignmentId
      characterLookId
      characterClassId
      __typename
    }
    createdAt
    updatedAt
    raceCharactersId
    characterRaceRaceId
    characterRaceCharacterId
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
      raceCharactersId
      characterRaceRaceId
      characterRaceCharacterId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCharacterRacesQueryVariables,
  APITypes.ListCharacterRacesQuery
>;
export const getRace = /* GraphQL */ `query GetRace($id: ID!) {
  getRace(id: $id) {
    id
    name
    description
    class {
      id
      name
      description
      createdAt
      updatedAt
      classSourceId
      classDamageDiceTypeId
      __typename
    }
    source {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    characters {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    raceClassId
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
      raceClassId
      raceSourceId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListRacesQueryVariables, APITypes.ListRacesQuery>;
export const getCharacterAlignment = /* GraphQL */ `query GetCharacterAlignment($id: ID!) {
  getCharacterAlignment(id: $id) {
    id
    alignment {
      id
      name
      description
      createdAt
      updatedAt
      alignmentClassId
      __typename
    }
    selected
    character {
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
      isPublic
      isCoreTemplate
      tags
      notes
      createdAt
      updatedAt
      characterRaceId
      characterAlignmentId
      characterLookId
      characterClassId
      __typename
    }
    createdAt
    updatedAt
    alignmentCharactersId
    characterAlignmentAlignmentId
    characterAlignmentCharacterId
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
      alignmentCharactersId
      characterAlignmentAlignmentId
      characterAlignmentCharacterId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCharacterAlignmentsQueryVariables,
  APITypes.ListCharacterAlignmentsQuery
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
      classSourceId
      classDamageDiceTypeId
      __typename
    }
    characters {
      nextToken
      __typename
    }
    createdAt
    updatedAt
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
      alignmentClassId
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
export const getDiceType = /* GraphQL */ `query GetDiceType($id: ID!) {
  getDiceType(id: $id) {
    id
    name
    createdAt
    updatedAt
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
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDiceTypesQueryVariables,
  APITypes.ListDiceTypesQuery
>;
export const getCharacterLook = /* GraphQL */ `query GetCharacterLook($id: ID!) {
  getCharacterLook(id: $id) {
    id
    look {
      nextToken
      __typename
    }
    character {
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
      isPublic
      isCoreTemplate
      tags
      notes
      createdAt
      updatedAt
      characterRaceId
      characterAlignmentId
      characterLookId
      characterClassId
      __typename
    }
    createdAt
    updatedAt
    lookCharactersId
    characterLookCharacterId
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
      lookCharactersId
      characterLookCharacterId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCharacterLooksQueryVariables,
  APITypes.ListCharacterLooksQuery
>;
export const getLook = /* GraphQL */ `query GetLook($id: ID!) {
  getLook(id: $id) {
    id
    name
    description
    class {
      id
      name
      description
      createdAt
      updatedAt
      classSourceId
      classDamageDiceTypeId
      __typename
    }
    characters {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    characterLookLookId
    lookClassId
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
      createdAt
      updatedAt
      characterLookLookId
      lookClassId
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
    isPublic
    isCoreTemplate
    spells {
      nextToken
      __typename
    }
    gear {
      nextToken
      __typename
    }
    sixToTenMoves {
      nextToken
      __typename
    }
    twoToTenMoves {
      nextToken
      __typename
    }
    startingMoves {
      nextToken
      __typename
    }
    bonds {
      nextToken
      __typename
    }
    abilityscores {
      nextToken
      __typename
    }
    race {
      id
      createdAt
      updatedAt
      raceCharactersId
      characterRaceRaceId
      characterRaceCharacterId
      __typename
    }
    alignment {
      id
      selected
      createdAt
      updatedAt
      alignmentCharactersId
      characterAlignmentAlignmentId
      characterAlignmentCharacterId
      __typename
    }
    tags
    look {
      id
      createdAt
      updatedAt
      lookCharactersId
      characterLookCharacterId
      __typename
    }
    class {
      id
      createdAt
      updatedAt
      classCharactersId
      characterClassClassId
      characterClassCharacterId
      __typename
    }
    notes
    createdAt
    updatedAt
    characterRaceId
    characterAlignmentId
    characterLookId
    characterClassId
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
      isPublic
      isCoreTemplate
      tags
      notes
      createdAt
      updatedAt
      characterRaceId
      characterAlignmentId
      characterLookId
      characterClassId
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
