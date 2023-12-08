/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateProfession = /* GraphQL */ `subscription OnCreateProfession(
  $filter: ModelSubscriptionProfessionFilterInput
) {
  onCreateProfession(filter: $filter) {
    name
    description
    diceType
    source
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProfessionSubscriptionVariables,
  APITypes.OnCreateProfessionSubscription
>;
export const onUpdateProfession = /* GraphQL */ `subscription OnUpdateProfession(
  $filter: ModelSubscriptionProfessionFilterInput
) {
  onUpdateProfession(filter: $filter) {
    name
    description
    diceType
    source
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProfessionSubscriptionVariables,
  APITypes.OnUpdateProfessionSubscription
>;
export const onDeleteProfession = /* GraphQL */ `subscription OnDeleteProfession(
  $filter: ModelSubscriptionProfessionFilterInput
) {
  onDeleteProfession(filter: $filter) {
    name
    description
    diceType
    source
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProfessionSubscriptionVariables,
  APITypes.OnDeleteProfessionSubscription
>;
export const onCreateSpell = /* GraphQL */ `subscription OnCreateSpell($filter: ModelSubscriptionSpellFilterInput) {
  onCreateSpell(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSpellSubscriptionVariables,
  APITypes.OnCreateSpellSubscription
>;
export const onUpdateSpell = /* GraphQL */ `subscription OnUpdateSpell($filter: ModelSubscriptionSpellFilterInput) {
  onUpdateSpell(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSpellSubscriptionVariables,
  APITypes.OnUpdateSpellSubscription
>;
export const onDeleteSpell = /* GraphQL */ `subscription OnDeleteSpell($filter: ModelSubscriptionSpellFilterInput) {
  onDeleteSpell(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSpellSubscriptionVariables,
  APITypes.OnDeleteSpellSubscription
>;
export const onCreateGear = /* GraphQL */ `subscription OnCreateGear($filter: ModelSubscriptionGearFilterInput) {
  onCreateGear(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGearSubscriptionVariables,
  APITypes.OnCreateGearSubscription
>;
export const onUpdateGear = /* GraphQL */ `subscription OnUpdateGear($filter: ModelSubscriptionGearFilterInput) {
  onUpdateGear(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGearSubscriptionVariables,
  APITypes.OnUpdateGearSubscription
>;
export const onDeleteGear = /* GraphQL */ `subscription OnDeleteGear($filter: ModelSubscriptionGearFilterInput) {
  onDeleteGear(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGearSubscriptionVariables,
  APITypes.OnDeleteGearSubscription
>;
export const onCreateMove = /* GraphQL */ `subscription OnCreateMove($filter: ModelSubscriptionMoveFilterInput) {
  onCreateMove(filter: $filter) {
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
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMoveSubscriptionVariables,
  APITypes.OnCreateMoveSubscription
>;
export const onUpdateMove = /* GraphQL */ `subscription OnUpdateMove($filter: ModelSubscriptionMoveFilterInput) {
  onUpdateMove(filter: $filter) {
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
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMoveSubscriptionVariables,
  APITypes.OnUpdateMoveSubscription
>;
export const onDeleteMove = /* GraphQL */ `subscription OnDeleteMove($filter: ModelSubscriptionMoveFilterInput) {
  onDeleteMove(filter: $filter) {
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
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMoveSubscriptionVariables,
  APITypes.OnDeleteMoveSubscription
>;
export const onCreateBond = /* GraphQL */ `subscription OnCreateBond($filter: ModelSubscriptionBondFilterInput) {
  onCreateBond(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBondSubscriptionVariables,
  APITypes.OnCreateBondSubscription
>;
export const onUpdateBond = /* GraphQL */ `subscription OnUpdateBond($filter: ModelSubscriptionBondFilterInput) {
  onUpdateBond(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBondSubscriptionVariables,
  APITypes.OnUpdateBondSubscription
>;
export const onDeleteBond = /* GraphQL */ `subscription OnDeleteBond($filter: ModelSubscriptionBondFilterInput) {
  onDeleteBond(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBondSubscriptionVariables,
  APITypes.OnDeleteBondSubscription
>;
export const onCreateAbilityScore = /* GraphQL */ `subscription OnCreateAbilityScore(
  $filter: ModelSubscriptionAbilityScoreFilterInput
) {
  onCreateAbilityScore(filter: $filter) {
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
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAbilityScoreSubscriptionVariables,
  APITypes.OnCreateAbilityScoreSubscription
>;
export const onUpdateAbilityScore = /* GraphQL */ `subscription OnUpdateAbilityScore(
  $filter: ModelSubscriptionAbilityScoreFilterInput
) {
  onUpdateAbilityScore(filter: $filter) {
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
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAbilityScoreSubscriptionVariables,
  APITypes.OnUpdateAbilityScoreSubscription
>;
export const onDeleteAbilityScore = /* GraphQL */ `subscription OnDeleteAbilityScore(
  $filter: ModelSubscriptionAbilityScoreFilterInput
) {
  onDeleteAbilityScore(filter: $filter) {
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
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAbilityScoreSubscriptionVariables,
  APITypes.OnDeleteAbilityScoreSubscription
>;
export const onCreateRace = /* GraphQL */ `subscription OnCreateRace($filter: ModelSubscriptionRaceFilterInput) {
  onCreateRace(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRaceSubscriptionVariables,
  APITypes.OnCreateRaceSubscription
>;
export const onUpdateRace = /* GraphQL */ `subscription OnUpdateRace($filter: ModelSubscriptionRaceFilterInput) {
  onUpdateRace(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRaceSubscriptionVariables,
  APITypes.OnUpdateRaceSubscription
>;
export const onDeleteRace = /* GraphQL */ `subscription OnDeleteRace($filter: ModelSubscriptionRaceFilterInput) {
  onDeleteRace(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRaceSubscriptionVariables,
  APITypes.OnDeleteRaceSubscription
>;
export const onCreateAlignment = /* GraphQL */ `subscription OnCreateAlignment($filter: ModelSubscriptionAlignmentFilterInput) {
  onCreateAlignment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAlignmentSubscriptionVariables,
  APITypes.OnCreateAlignmentSubscription
>;
export const onUpdateAlignment = /* GraphQL */ `subscription OnUpdateAlignment($filter: ModelSubscriptionAlignmentFilterInput) {
  onUpdateAlignment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAlignmentSubscriptionVariables,
  APITypes.OnUpdateAlignmentSubscription
>;
export const onDeleteAlignment = /* GraphQL */ `subscription OnDeleteAlignment($filter: ModelSubscriptionAlignmentFilterInput) {
  onDeleteAlignment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAlignmentSubscriptionVariables,
  APITypes.OnDeleteAlignmentSubscription
>;
export const onCreateLook = /* GraphQL */ `subscription OnCreateLook($filter: ModelSubscriptionLookFilterInput) {
  onCreateLook(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLookSubscriptionVariables,
  APITypes.OnCreateLookSubscription
>;
export const onUpdateLook = /* GraphQL */ `subscription OnUpdateLook($filter: ModelSubscriptionLookFilterInput) {
  onUpdateLook(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLookSubscriptionVariables,
  APITypes.OnUpdateLookSubscription
>;
export const onDeleteLook = /* GraphQL */ `subscription OnDeleteLook($filter: ModelSubscriptionLookFilterInput) {
  onDeleteLook(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLookSubscriptionVariables,
  APITypes.OnDeleteLookSubscription
>;
export const onCreateCharacter = /* GraphQL */ `subscription OnCreateCharacter(
  $filter: ModelSubscriptionCharacterFilterInput
  $owner: String
) {
  onCreateCharacter(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCharacterSubscriptionVariables,
  APITypes.OnCreateCharacterSubscription
>;
export const onUpdateCharacter = /* GraphQL */ `subscription OnUpdateCharacter(
  $filter: ModelSubscriptionCharacterFilterInput
  $owner: String
) {
  onUpdateCharacter(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCharacterSubscriptionVariables,
  APITypes.OnUpdateCharacterSubscription
>;
export const onDeleteCharacter = /* GraphQL */ `subscription OnDeleteCharacter(
  $filter: ModelSubscriptionCharacterFilterInput
  $owner: String
) {
  onDeleteCharacter(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCharacterSubscriptionVariables,
  APITypes.OnDeleteCharacterSubscription
>;
