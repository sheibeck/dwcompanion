/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

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
      id
      selected
      tags
      __typename
    }
    gear {
      id
      uses
      tags
      __typename
    }
    sixToTenMoves {
      id
      selected
      __typename
    }
    twoToTenMoves {
      id
      selected
      __typename
    }
    startingMoves {
      id
      selected
      __typename
    }
    bonds {
      id
      description
      selected
      __typename
    }
    abilityscores {
      value
      bonus
      tags
      __typename
    }
    race {
      id
      __typename
    }
    alignment {
      id
      selected
      __typename
    }
    tags
    conditionTypes {
      id
      __typename
    }
    look {
      id
      __typename
    }
    class {
      id
      __typename
    }
    notes
    createdAt
    updatedAt
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
