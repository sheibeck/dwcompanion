/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createProfession = /* GraphQL */ `mutation CreateProfession(
  $input: CreateProfessionInput!
  $condition: ModelProfessionConditionInput
) {
  createProfession(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProfessionMutationVariables,
  APITypes.CreateProfessionMutation
>;
export const updateProfession = /* GraphQL */ `mutation UpdateProfession(
  $input: UpdateProfessionInput!
  $condition: ModelProfessionConditionInput
) {
  updateProfession(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProfessionMutationVariables,
  APITypes.UpdateProfessionMutation
>;
export const deleteProfession = /* GraphQL */ `mutation DeleteProfession(
  $input: DeleteProfessionInput!
  $condition: ModelProfessionConditionInput
) {
  deleteProfession(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProfessionMutationVariables,
  APITypes.DeleteProfessionMutation
>;
export const createSpell = /* GraphQL */ `mutation CreateSpell(
  $input: CreateSpellInput!
  $condition: ModelSpellConditionInput
) {
  createSpell(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSpellMutationVariables,
  APITypes.CreateSpellMutation
>;
export const updateSpell = /* GraphQL */ `mutation UpdateSpell(
  $input: UpdateSpellInput!
  $condition: ModelSpellConditionInput
) {
  updateSpell(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSpellMutationVariables,
  APITypes.UpdateSpellMutation
>;
export const deleteSpell = /* GraphQL */ `mutation DeleteSpell(
  $input: DeleteSpellInput!
  $condition: ModelSpellConditionInput
) {
  deleteSpell(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSpellMutationVariables,
  APITypes.DeleteSpellMutation
>;
export const createGear = /* GraphQL */ `mutation CreateGear(
  $input: CreateGearInput!
  $condition: ModelGearConditionInput
) {
  createGear(input: $input, condition: $condition) {
    id
    description
    isStartingGear
    profession
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGearMutationVariables,
  APITypes.CreateGearMutation
>;
export const updateGear = /* GraphQL */ `mutation UpdateGear(
  $input: UpdateGearInput!
  $condition: ModelGearConditionInput
) {
  updateGear(input: $input, condition: $condition) {
    id
    description
    isStartingGear
    profession
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGearMutationVariables,
  APITypes.UpdateGearMutation
>;
export const deleteGear = /* GraphQL */ `mutation DeleteGear(
  $input: DeleteGearInput!
  $condition: ModelGearConditionInput
) {
  deleteGear(input: $input, condition: $condition) {
    id
    description
    isStartingGear
    profession
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGearMutationVariables,
  APITypes.DeleteGearMutation
>;
export const createMove = /* GraphQL */ `mutation CreateMove(
  $input: CreateMoveInput!
  $condition: ModelMoveConditionInput
) {
  createMove(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMoveMutationVariables,
  APITypes.CreateMoveMutation
>;
export const updateMove = /* GraphQL */ `mutation UpdateMove(
  $input: UpdateMoveInput!
  $condition: ModelMoveConditionInput
) {
  updateMove(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMoveMutationVariables,
  APITypes.UpdateMoveMutation
>;
export const deleteMove = /* GraphQL */ `mutation DeleteMove(
  $input: DeleteMoveInput!
  $condition: ModelMoveConditionInput
) {
  deleteMove(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMoveMutationVariables,
  APITypes.DeleteMoveMutation
>;
export const createBond = /* GraphQL */ `mutation CreateBond(
  $input: CreateBondInput!
  $condition: ModelBondConditionInput
) {
  createBond(input: $input, condition: $condition) {
    id
    description
    profession
    value
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
` as GeneratedMutation<
  APITypes.CreateBondMutationVariables,
  APITypes.CreateBondMutation
>;
export const updateBond = /* GraphQL */ `mutation UpdateBond(
  $input: UpdateBondInput!
  $condition: ModelBondConditionInput
) {
  updateBond(input: $input, condition: $condition) {
    id
    description
    profession
    value
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
` as GeneratedMutation<
  APITypes.UpdateBondMutationVariables,
  APITypes.UpdateBondMutation
>;
export const deleteBond = /* GraphQL */ `mutation DeleteBond(
  $input: DeleteBondInput!
  $condition: ModelBondConditionInput
) {
  deleteBond(input: $input, condition: $condition) {
    id
    description
    profession
    value
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
` as GeneratedMutation<
  APITypes.DeleteBondMutationVariables,
  APITypes.DeleteBondMutation
>;
export const createAbilityScore = /* GraphQL */ `mutation CreateAbilityScore(
  $input: CreateAbilityScoreInput!
  $condition: ModelAbilityScoreConditionInput
) {
  createAbilityScore(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAbilityScoreMutationVariables,
  APITypes.CreateAbilityScoreMutation
>;
export const updateAbilityScore = /* GraphQL */ `mutation UpdateAbilityScore(
  $input: UpdateAbilityScoreInput!
  $condition: ModelAbilityScoreConditionInput
) {
  updateAbilityScore(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAbilityScoreMutationVariables,
  APITypes.UpdateAbilityScoreMutation
>;
export const deleteAbilityScore = /* GraphQL */ `mutation DeleteAbilityScore(
  $input: DeleteAbilityScoreInput!
  $condition: ModelAbilityScoreConditionInput
) {
  deleteAbilityScore(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAbilityScoreMutationVariables,
  APITypes.DeleteAbilityScoreMutation
>;
export const createRace = /* GraphQL */ `mutation CreateRace(
  $input: CreateRaceInput!
  $condition: ModelRaceConditionInput
) {
  createRace(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRaceMutationVariables,
  APITypes.CreateRaceMutation
>;
export const updateRace = /* GraphQL */ `mutation UpdateRace(
  $input: UpdateRaceInput!
  $condition: ModelRaceConditionInput
) {
  updateRace(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRaceMutationVariables,
  APITypes.UpdateRaceMutation
>;
export const deleteRace = /* GraphQL */ `mutation DeleteRace(
  $input: DeleteRaceInput!
  $condition: ModelRaceConditionInput
) {
  deleteRace(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRaceMutationVariables,
  APITypes.DeleteRaceMutation
>;
export const createAlignment = /* GraphQL */ `mutation CreateAlignment(
  $input: CreateAlignmentInput!
  $condition: ModelAlignmentConditionInput
) {
  createAlignment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAlignmentMutationVariables,
  APITypes.CreateAlignmentMutation
>;
export const updateAlignment = /* GraphQL */ `mutation UpdateAlignment(
  $input: UpdateAlignmentInput!
  $condition: ModelAlignmentConditionInput
) {
  updateAlignment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAlignmentMutationVariables,
  APITypes.UpdateAlignmentMutation
>;
export const deleteAlignment = /* GraphQL */ `mutation DeleteAlignment(
  $input: DeleteAlignmentInput!
  $condition: ModelAlignmentConditionInput
) {
  deleteAlignment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAlignmentMutationVariables,
  APITypes.DeleteAlignmentMutation
>;
export const createLook = /* GraphQL */ `mutation CreateLook(
  $input: CreateLookInput!
  $condition: ModelLookConditionInput
) {
  createLook(input: $input, condition: $condition) {
    id
    name
    description
    value
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
` as GeneratedMutation<
  APITypes.CreateLookMutationVariables,
  APITypes.CreateLookMutation
>;
export const updateLook = /* GraphQL */ `mutation UpdateLook(
  $input: UpdateLookInput!
  $condition: ModelLookConditionInput
) {
  updateLook(input: $input, condition: $condition) {
    id
    name
    description
    value
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
` as GeneratedMutation<
  APITypes.UpdateLookMutationVariables,
  APITypes.UpdateLookMutation
>;
export const deleteLook = /* GraphQL */ `mutation DeleteLook(
  $input: DeleteLookInput!
  $condition: ModelLookConditionInput
) {
  deleteLook(input: $input, condition: $condition) {
    id
    name
    description
    value
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
` as GeneratedMutation<
  APITypes.DeleteLookMutationVariables,
  APITypes.DeleteLookMutation
>;
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
` as GeneratedMutation<
  APITypes.DeleteCharacterMutationVariables,
  APITypes.DeleteCharacterMutation
>;
