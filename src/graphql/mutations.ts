/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCharacter = /* GraphQL */ `mutation CreateCharacter(
  $input: CreateCharacterInput!
  $condition: ModelCharacterConditionInput
) {
  createCharacter(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCharacterMutationVariables,
  APITypes.CreateCharacterMutation
>;
export const updateCharacter = /* GraphQL */ `mutation UpdateCharacter(
  $input: UpdateCharacterInput!
  $condition: ModelCharacterConditionInput
) {
  updateCharacter(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCharacterMutationVariables,
  APITypes.UpdateCharacterMutation
>;
export const deleteCharacter = /* GraphQL */ `mutation DeleteCharacter(
  $input: DeleteCharacterInput!
  $condition: ModelCharacterConditionInput
) {
  deleteCharacter(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCharacterMutationVariables,
  APITypes.DeleteCharacterMutation
>;
