/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const duplicateCharacter = /* GraphQL */ `mutation DuplicateCharacter($characterId: ID!, $newUserId: ID!) {
  duplicateCharacter(characterId: $characterId, newUserId: $newUserId) {
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
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DuplicateCharacterMutationVariables,
  APITypes.DuplicateCharacterMutation
>;
