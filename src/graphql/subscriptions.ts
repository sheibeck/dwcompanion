/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCharacter = /* GraphQL */ `subscription OnCreateCharacter($filter: ModelSubscriptionCharacterFilterInput) {
  onCreateCharacter(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCharacterSubscriptionVariables,
  APITypes.OnCreateCharacterSubscription
>;
export const onUpdateCharacter = /* GraphQL */ `subscription OnUpdateCharacter($filter: ModelSubscriptionCharacterFilterInput) {
  onUpdateCharacter(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCharacterSubscriptionVariables,
  APITypes.OnUpdateCharacterSubscription
>;
export const onDeleteCharacter = /* GraphQL */ `subscription OnDeleteCharacter($filter: ModelSubscriptionCharacterFilterInput) {
  onDeleteCharacter(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCharacterSubscriptionVariables,
  APITypes.OnDeleteCharacterSubscription
>;
