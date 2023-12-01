/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    name
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    name
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    name
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createSource = /* GraphQL */ `mutation CreateSource(
  $input: CreateSourceInput!
  $condition: ModelSourceConditionInput
) {
  createSource(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSourceMutationVariables,
  APITypes.CreateSourceMutation
>;
export const updateSource = /* GraphQL */ `mutation UpdateSource(
  $input: UpdateSourceInput!
  $condition: ModelSourceConditionInput
) {
  updateSource(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSourceMutationVariables,
  APITypes.UpdateSourceMutation
>;
export const deleteSource = /* GraphQL */ `mutation DeleteSource(
  $input: DeleteSourceInput!
  $condition: ModelSourceConditionInput
) {
  deleteSource(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSourceMutationVariables,
  APITypes.DeleteSourceMutation
>;
export const createCharacterClass = /* GraphQL */ `mutation CreateCharacterClass(
  $input: CreateCharacterClassInput!
  $condition: ModelCharacterClassConditionInput
) {
  createCharacterClass(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCharacterClassMutationVariables,
  APITypes.CreateCharacterClassMutation
>;
export const updateCharacterClass = /* GraphQL */ `mutation UpdateCharacterClass(
  $input: UpdateCharacterClassInput!
  $condition: ModelCharacterClassConditionInput
) {
  updateCharacterClass(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCharacterClassMutationVariables,
  APITypes.UpdateCharacterClassMutation
>;
export const deleteCharacterClass = /* GraphQL */ `mutation DeleteCharacterClass(
  $input: DeleteCharacterClassInput!
  $condition: ModelCharacterClassConditionInput
) {
  deleteCharacterClass(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCharacterClassMutationVariables,
  APITypes.DeleteCharacterClassMutation
>;
export const createClass = /* GraphQL */ `mutation CreateClass(
  $input: CreateClassInput!
  $condition: ModelClassConditionInput
) {
  createClass(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateClassMutationVariables,
  APITypes.CreateClassMutation
>;
export const updateClass = /* GraphQL */ `mutation UpdateClass(
  $input: UpdateClassInput!
  $condition: ModelClassConditionInput
) {
  updateClass(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateClassMutationVariables,
  APITypes.UpdateClassMutation
>;
export const deleteClass = /* GraphQL */ `mutation DeleteClass(
  $input: DeleteClassInput!
  $condition: ModelClassConditionInput
) {
  deleteClass(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteClassMutationVariables,
  APITypes.DeleteClassMutation
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
` as GeneratedMutation<
  APITypes.DeleteSpellMutationVariables,
  APITypes.DeleteSpellMutation
>;
export const createCharacterSpell = /* GraphQL */ `mutation CreateCharacterSpell(
  $input: CreateCharacterSpellInput!
  $condition: ModelCharacterSpellConditionInput
) {
  createCharacterSpell(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCharacterSpellMutationVariables,
  APITypes.CreateCharacterSpellMutation
>;
export const updateCharacterSpell = /* GraphQL */ `mutation UpdateCharacterSpell(
  $input: UpdateCharacterSpellInput!
  $condition: ModelCharacterSpellConditionInput
) {
  updateCharacterSpell(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCharacterSpellMutationVariables,
  APITypes.UpdateCharacterSpellMutation
>;
export const deleteCharacterSpell = /* GraphQL */ `mutation DeleteCharacterSpell(
  $input: DeleteCharacterSpellInput!
  $condition: ModelCharacterSpellConditionInput
) {
  deleteCharacterSpell(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCharacterSpellMutationVariables,
  APITypes.DeleteCharacterSpellMutation
>;
export const createCharacterGear = /* GraphQL */ `mutation CreateCharacterGear(
  $input: CreateCharacterGearInput!
  $condition: ModelCharacterGearConditionInput
) {
  createCharacterGear(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCharacterGearMutationVariables,
  APITypes.CreateCharacterGearMutation
>;
export const updateCharacterGear = /* GraphQL */ `mutation UpdateCharacterGear(
  $input: UpdateCharacterGearInput!
  $condition: ModelCharacterGearConditionInput
) {
  updateCharacterGear(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCharacterGearMutationVariables,
  APITypes.UpdateCharacterGearMutation
>;
export const deleteCharacterGear = /* GraphQL */ `mutation DeleteCharacterGear(
  $input: DeleteCharacterGearInput!
  $condition: ModelCharacterGearConditionInput
) {
  deleteCharacterGear(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCharacterGearMutationVariables,
  APITypes.DeleteCharacterGearMutation
>;
export const createGear = /* GraphQL */ `mutation CreateGear(
  $input: CreateGearInput!
  $condition: ModelGearConditionInput
) {
  createGear(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteGearMutationVariables,
  APITypes.DeleteGearMutation
>;
export const createCharacterMove = /* GraphQL */ `mutation CreateCharacterMove(
  $input: CreateCharacterMoveInput!
  $condition: ModelCharacterMoveConditionInput
) {
  createCharacterMove(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCharacterMoveMutationVariables,
  APITypes.CreateCharacterMoveMutation
>;
export const updateCharacterMove = /* GraphQL */ `mutation UpdateCharacterMove(
  $input: UpdateCharacterMoveInput!
  $condition: ModelCharacterMoveConditionInput
) {
  updateCharacterMove(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCharacterMoveMutationVariables,
  APITypes.UpdateCharacterMoveMutation
>;
export const deleteCharacterMove = /* GraphQL */ `mutation DeleteCharacterMove(
  $input: DeleteCharacterMoveInput!
  $condition: ModelCharacterMoveConditionInput
) {
  deleteCharacterMove(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCharacterMoveMutationVariables,
  APITypes.DeleteCharacterMoveMutation
>;
export const createMove = /* GraphQL */ `mutation CreateMove(
  $input: CreateMoveInput!
  $condition: ModelMoveConditionInput
) {
  createMove(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMoveMutationVariables,
  APITypes.DeleteMoveMutation
>;
export const createCharacterBond = /* GraphQL */ `mutation CreateCharacterBond(
  $input: CreateCharacterBondInput!
  $condition: ModelCharacterBondConditionInput
) {
  createCharacterBond(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCharacterBondMutationVariables,
  APITypes.CreateCharacterBondMutation
>;
export const updateCharacterBond = /* GraphQL */ `mutation UpdateCharacterBond(
  $input: UpdateCharacterBondInput!
  $condition: ModelCharacterBondConditionInput
) {
  updateCharacterBond(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCharacterBondMutationVariables,
  APITypes.UpdateCharacterBondMutation
>;
export const deleteCharacterBond = /* GraphQL */ `mutation DeleteCharacterBond(
  $input: DeleteCharacterBondInput!
  $condition: ModelCharacterBondConditionInput
) {
  deleteCharacterBond(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCharacterBondMutationVariables,
  APITypes.DeleteCharacterBondMutation
>;
export const createBond = /* GraphQL */ `mutation CreateBond(
  $input: CreateBondInput!
  $condition: ModelBondConditionInput
) {
  createBond(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBondMutationVariables,
  APITypes.DeleteBondMutation
>;
export const createCharacterAbilityScore = /* GraphQL */ `mutation CreateCharacterAbilityScore(
  $input: CreateCharacterAbilityScoreInput!
  $condition: ModelCharacterAbilityScoreConditionInput
) {
  createCharacterAbilityScore(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCharacterAbilityScoreMutationVariables,
  APITypes.CreateCharacterAbilityScoreMutation
>;
export const updateCharacterAbilityScore = /* GraphQL */ `mutation UpdateCharacterAbilityScore(
  $input: UpdateCharacterAbilityScoreInput!
  $condition: ModelCharacterAbilityScoreConditionInput
) {
  updateCharacterAbilityScore(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCharacterAbilityScoreMutationVariables,
  APITypes.UpdateCharacterAbilityScoreMutation
>;
export const deleteCharacterAbilityScore = /* GraphQL */ `mutation DeleteCharacterAbilityScore(
  $input: DeleteCharacterAbilityScoreInput!
  $condition: ModelCharacterAbilityScoreConditionInput
) {
  deleteCharacterAbilityScore(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCharacterAbilityScoreMutationVariables,
  APITypes.DeleteCharacterAbilityScoreMutation
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
    characters {
      nextToken
      __typename
    }
    createdAt
    updatedAt
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
    characters {
      nextToken
      __typename
    }
    createdAt
    updatedAt
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
    characters {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAbilityScoreMutationVariables,
  APITypes.DeleteAbilityScoreMutation
>;
export const createCharacterRace = /* GraphQL */ `mutation CreateCharacterRace(
  $input: CreateCharacterRaceInput!
  $condition: ModelCharacterRaceConditionInput
) {
  createCharacterRace(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCharacterRaceMutationVariables,
  APITypes.CreateCharacterRaceMutation
>;
export const updateCharacterRace = /* GraphQL */ `mutation UpdateCharacterRace(
  $input: UpdateCharacterRaceInput!
  $condition: ModelCharacterRaceConditionInput
) {
  updateCharacterRace(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCharacterRaceMutationVariables,
  APITypes.UpdateCharacterRaceMutation
>;
export const deleteCharacterRace = /* GraphQL */ `mutation DeleteCharacterRace(
  $input: DeleteCharacterRaceInput!
  $condition: ModelCharacterRaceConditionInput
) {
  deleteCharacterRace(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCharacterRaceMutationVariables,
  APITypes.DeleteCharacterRaceMutation
>;
export const createRace = /* GraphQL */ `mutation CreateRace(
  $input: CreateRaceInput!
  $condition: ModelRaceConditionInput
) {
  createRace(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRaceMutationVariables,
  APITypes.DeleteRaceMutation
>;
export const createCharacterAlignment = /* GraphQL */ `mutation CreateCharacterAlignment(
  $input: CreateCharacterAlignmentInput!
  $condition: ModelCharacterAlignmentConditionInput
) {
  createCharacterAlignment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCharacterAlignmentMutationVariables,
  APITypes.CreateCharacterAlignmentMutation
>;
export const updateCharacterAlignment = /* GraphQL */ `mutation UpdateCharacterAlignment(
  $input: UpdateCharacterAlignmentInput!
  $condition: ModelCharacterAlignmentConditionInput
) {
  updateCharacterAlignment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCharacterAlignmentMutationVariables,
  APITypes.UpdateCharacterAlignmentMutation
>;
export const deleteCharacterAlignment = /* GraphQL */ `mutation DeleteCharacterAlignment(
  $input: DeleteCharacterAlignmentInput!
  $condition: ModelCharacterAlignmentConditionInput
) {
  deleteCharacterAlignment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCharacterAlignmentMutationVariables,
  APITypes.DeleteCharacterAlignmentMutation
>;
export const createAlignment = /* GraphQL */ `mutation CreateAlignment(
  $input: CreateAlignmentInput!
  $condition: ModelAlignmentConditionInput
) {
  createAlignment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAlignmentMutationVariables,
  APITypes.DeleteAlignmentMutation
>;
export const createDiceType = /* GraphQL */ `mutation CreateDiceType(
  $input: CreateDiceTypeInput!
  $condition: ModelDiceTypeConditionInput
) {
  createDiceType(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDiceTypeMutationVariables,
  APITypes.CreateDiceTypeMutation
>;
export const updateDiceType = /* GraphQL */ `mutation UpdateDiceType(
  $input: UpdateDiceTypeInput!
  $condition: ModelDiceTypeConditionInput
) {
  updateDiceType(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateDiceTypeMutationVariables,
  APITypes.UpdateDiceTypeMutation
>;
export const deleteDiceType = /* GraphQL */ `mutation DeleteDiceType(
  $input: DeleteDiceTypeInput!
  $condition: ModelDiceTypeConditionInput
) {
  deleteDiceType(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDiceTypeMutationVariables,
  APITypes.DeleteDiceTypeMutation
>;
export const createCharacterLook = /* GraphQL */ `mutation CreateCharacterLook(
  $input: CreateCharacterLookInput!
  $condition: ModelCharacterLookConditionInput
) {
  createCharacterLook(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCharacterLookMutationVariables,
  APITypes.CreateCharacterLookMutation
>;
export const updateCharacterLook = /* GraphQL */ `mutation UpdateCharacterLook(
  $input: UpdateCharacterLookInput!
  $condition: ModelCharacterLookConditionInput
) {
  updateCharacterLook(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCharacterLookMutationVariables,
  APITypes.UpdateCharacterLookMutation
>;
export const deleteCharacterLook = /* GraphQL */ `mutation DeleteCharacterLook(
  $input: DeleteCharacterLookInput!
  $condition: ModelCharacterLookConditionInput
) {
  deleteCharacterLook(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCharacterLookMutationVariables,
  APITypes.DeleteCharacterLookMutation
>;
export const createLook = /* GraphQL */ `mutation CreateLook(
  $input: CreateLookInput!
  $condition: ModelLookConditionInput
) {
  createLook(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCharacterMutationVariables,
  APITypes.DeleteCharacterMutation
>;
