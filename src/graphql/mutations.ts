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
    _version
    _deleted
    _lastChangedAt
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
    _version
    _deleted
    _lastChangedAt
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
    _version
    _deleted
    _lastChangedAt
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
    _version
    _deleted
    _lastChangedAt
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
    _version
    _deleted
    _lastChangedAt
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
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSourceMutationVariables,
  APITypes.DeleteSourceMutation
>;
export const createCharacterProfession = /* GraphQL */ `mutation CreateCharacterProfession(
  $input: CreateCharacterProfessionInput!
  $condition: ModelCharacterProfessionConditionInput
) {
  createCharacterProfession(input: $input, condition: $condition) {
    id
    Character {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterCharacterRaceId
      characterCharacterAlignmentId
      characterCharacterProfessionId
      __typename
    }
    Profession {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      professionSourceId
      professionDiceTypeId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterProfessionProfessionId
    characterProfessionCharacterId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCharacterProfessionMutationVariables,
  APITypes.CreateCharacterProfessionMutation
>;
export const updateCharacterProfession = /* GraphQL */ `mutation UpdateCharacterProfession(
  $input: UpdateCharacterProfessionInput!
  $condition: ModelCharacterProfessionConditionInput
) {
  updateCharacterProfession(input: $input, condition: $condition) {
    id
    Character {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterCharacterRaceId
      characterCharacterAlignmentId
      characterCharacterProfessionId
      __typename
    }
    Profession {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      professionSourceId
      professionDiceTypeId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterProfessionProfessionId
    characterProfessionCharacterId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCharacterProfessionMutationVariables,
  APITypes.UpdateCharacterProfessionMutation
>;
export const deleteCharacterProfession = /* GraphQL */ `mutation DeleteCharacterProfession(
  $input: DeleteCharacterProfessionInput!
  $condition: ModelCharacterProfessionConditionInput
) {
  deleteCharacterProfession(input: $input, condition: $condition) {
    id
    Character {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterCharacterRaceId
      characterCharacterAlignmentId
      characterCharacterProfessionId
      __typename
    }
    Profession {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      professionSourceId
      professionDiceTypeId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterProfessionProfessionId
    characterProfessionCharacterId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCharacterProfessionMutationVariables,
  APITypes.DeleteCharacterProfessionMutation
>;
export const createProfession = /* GraphQL */ `mutation CreateProfession(
  $input: CreateProfessionInput!
  $condition: ModelProfessionConditionInput
) {
  createProfession(input: $input, condition: $condition) {
    id
    name
    description
    Source {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    DiceType {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    professionSourceId
    professionDiceTypeId
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
    id
    name
    description
    Source {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    DiceType {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    professionSourceId
    professionDiceTypeId
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
    id
    name
    description
    Source {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    DiceType {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    professionSourceId
    professionDiceTypeId
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
    Source {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    Profession {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      professionSourceId
      professionDiceTypeId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    spellSourceId
    spellProfessionId
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
    Source {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    Profession {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      professionSourceId
      professionDiceTypeId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    spellSourceId
    spellProfessionId
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
    Source {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    Profession {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      professionSourceId
      professionDiceTypeId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    spellSourceId
    spellProfessionId
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
    Spell {
      id
      name
      level
      type
      ongoing
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      spellSourceId
      spellProfessionId
      __typename
    }
    selected
    tags
    Character {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterCharacterRaceId
      characterCharacterAlignmentId
      characterCharacterProfessionId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterCharacterSpellsId
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
    Spell {
      id
      name
      level
      type
      ongoing
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      spellSourceId
      spellProfessionId
      __typename
    }
    selected
    tags
    Character {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterCharacterRaceId
      characterCharacterAlignmentId
      characterCharacterProfessionId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterCharacterSpellsId
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
    Spell {
      id
      name
      level
      type
      ongoing
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      spellSourceId
      spellProfessionId
      __typename
    }
    selected
    tags
    Character {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterCharacterRaceId
      characterCharacterAlignmentId
      characterCharacterProfessionId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterCharacterSpellsId
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
    Gear {
      id
      description
      weight
      uses
      tags
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      gearSourceId
      __typename
    }
    uses
    tags
    Character {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterCharacterRaceId
      characterCharacterAlignmentId
      characterCharacterProfessionId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterCharacterGearId
    characterGearGearId
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
    Gear {
      id
      description
      weight
      uses
      tags
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      gearSourceId
      __typename
    }
    uses
    tags
    Character {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterCharacterRaceId
      characterCharacterAlignmentId
      characterCharacterProfessionId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterCharacterGearId
    characterGearGearId
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
    Gear {
      id
      description
      weight
      uses
      tags
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      gearSourceId
      __typename
    }
    uses
    tags
    Character {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterCharacterRaceId
      characterCharacterAlignmentId
      characterCharacterProfessionId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterCharacterGearId
    characterGearGearId
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
    Source {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    gearSourceId
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
    Source {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    gearSourceId
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
    Source {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    gearSourceId
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
    Move {
      id
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      moveProfessionId
      moveSourceId
      __typename
    }
    Character {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterCharacterRaceId
      characterCharacterAlignmentId
      characterCharacterProfessionId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterMovesStartingId
    characterMovesTwoToTenId
    characterMovesSixToTenId
    characterMoveMoveId
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
    Move {
      id
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      moveProfessionId
      moveSourceId
      __typename
    }
    Character {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterCharacterRaceId
      characterCharacterAlignmentId
      characterCharacterProfessionId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterMovesStartingId
    characterMovesTwoToTenId
    characterMovesSixToTenId
    characterMoveMoveId
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
    Move {
      id
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      moveProfessionId
      moveSourceId
      __typename
    }
    Character {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterCharacterRaceId
      characterCharacterAlignmentId
      characterCharacterProfessionId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterMovesStartingId
    characterMovesTwoToTenId
    characterMovesSixToTenId
    characterMoveMoveId
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
    Profession {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      professionSourceId
      professionDiceTypeId
      __typename
    }
    Source {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    moveProfessionId
    moveSourceId
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
    Profession {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      professionSourceId
      professionDiceTypeId
      __typename
    }
    Source {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    moveProfessionId
    moveSourceId
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
    Profession {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      professionSourceId
      professionDiceTypeId
      __typename
    }
    Source {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    moveProfessionId
    moveSourceId
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
    Bond {
      id
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      bondProfessionId
      __typename
    }
    selected
    Character {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterCharacterRaceId
      characterCharacterAlignmentId
      characterCharacterProfessionId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterCharacterBondsId
    characterBondBondId
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
    Bond {
      id
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      bondProfessionId
      __typename
    }
    selected
    Character {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterCharacterRaceId
      characterCharacterAlignmentId
      characterCharacterProfessionId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterCharacterBondsId
    characterBondBondId
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
    Bond {
      id
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      bondProfessionId
      __typename
    }
    selected
    Character {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterCharacterRaceId
      characterCharacterAlignmentId
      characterCharacterProfessionId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterCharacterBondsId
    characterBondBondId
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
    Profession {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      professionSourceId
      professionDiceTypeId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    bondProfessionId
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
    Profession {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      professionSourceId
      professionDiceTypeId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    bondProfessionId
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
    Profession {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      professionSourceId
      professionDiceTypeId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    bondProfessionId
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
    AbilityScore {
      id
      name
      shortName
      debility
      debilityPenalty
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    id
    value
    bonus
    tags
    Character {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterCharacterRaceId
      characterCharacterAlignmentId
      characterCharacterProfessionId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterCharacterAbilityScoresId
    characterAbilityScoreAbilityScoreId
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
    AbilityScore {
      id
      name
      shortName
      debility
      debilityPenalty
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    id
    value
    bonus
    tags
    Character {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterCharacterRaceId
      characterCharacterAlignmentId
      characterCharacterProfessionId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterCharacterAbilityScoresId
    characterAbilityScoreAbilityScoreId
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
    AbilityScore {
      id
      name
      shortName
      debility
      debilityPenalty
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    id
    value
    bonus
    tags
    Character {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterCharacterRaceId
      characterCharacterAlignmentId
      characterCharacterProfessionId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterCharacterAbilityScoresId
    characterAbilityScoreAbilityScoreId
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
export const createCharacterRace = /* GraphQL */ `mutation CreateCharacterRace(
  $input: CreateCharacterRaceInput!
  $condition: ModelCharacterRaceConditionInput
) {
  createCharacterRace(input: $input, condition: $condition) {
    id
    Race {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      raceProfessionId
      raceSourceId
      __typename
    }
    Character {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterCharacterRaceId
      characterCharacterAlignmentId
      characterCharacterProfessionId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
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
    Race {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      raceProfessionId
      raceSourceId
      __typename
    }
    Character {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterCharacterRaceId
      characterCharacterAlignmentId
      characterCharacterProfessionId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
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
    Race {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      raceProfessionId
      raceSourceId
      __typename
    }
    Character {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterCharacterRaceId
      characterCharacterAlignmentId
      characterCharacterProfessionId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
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
    Profession {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      professionSourceId
      professionDiceTypeId
      __typename
    }
    Source {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    raceProfessionId
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
    Profession {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      professionSourceId
      professionDiceTypeId
      __typename
    }
    Source {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    raceProfessionId
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
    Profession {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      professionSourceId
      professionDiceTypeId
      __typename
    }
    Source {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    raceProfessionId
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
    Alignment {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      alignmentProfessionId
      __typename
    }
    selected
    Character {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterCharacterRaceId
      characterCharacterAlignmentId
      characterCharacterProfessionId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
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
    Alignment {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      alignmentProfessionId
      __typename
    }
    selected
    Character {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterCharacterRaceId
      characterCharacterAlignmentId
      characterCharacterProfessionId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
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
    Alignment {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      alignmentProfessionId
      __typename
    }
    selected
    Character {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterCharacterRaceId
      characterCharacterAlignmentId
      characterCharacterProfessionId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
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
    Profession {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      professionSourceId
      professionDiceTypeId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    alignmentProfessionId
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
    Profession {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      professionSourceId
      professionDiceTypeId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    alignmentProfessionId
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
    Profession {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      professionSourceId
      professionDiceTypeId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    alignmentProfessionId
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
    _version
    _deleted
    _lastChangedAt
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
    _version
    _deleted
    _lastChangedAt
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
    _version
    _deleted
    _lastChangedAt
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
    Look {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    Character {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterCharacterRaceId
      characterCharacterAlignmentId
      characterCharacterProfessionId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterCharacterLooksId
    characterLookLookId
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
    Look {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    Character {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterCharacterRaceId
      characterCharacterAlignmentId
      characterCharacterProfessionId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterCharacterLooksId
    characterLookLookId
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
    Look {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    Character {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterCharacterRaceId
      characterCharacterAlignmentId
      characterCharacterProfessionId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterCharacterLooksId
    characterLookLookId
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
    CharacterGear {
      nextToken
      startedAt
      __typename
    }
    MovesStarting {
      nextToken
      startedAt
      __typename
    }
    MovesTwoToTen {
      nextToken
      startedAt
      __typename
    }
    MovesSixToTen {
      nextToken
      startedAt
      __typename
    }
    CharacterBonds {
      nextToken
      startedAt
      __typename
    }
    CharacterAbilityScores {
      nextToken
      startedAt
      __typename
    }
    CharacterRace {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterRaceRaceId
      characterRaceCharacterId
      __typename
    }
    CharacterAlignment {
      id
      selected
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterAlignmentAlignmentId
      characterAlignmentCharacterId
      __typename
    }
    CharacterLooks {
      nextToken
      startedAt
      __typename
    }
    CharacterProfession {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterProfessionProfessionId
      characterProfessionCharacterId
      __typename
    }
    CharacterSpells {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterCharacterRaceId
    characterCharacterAlignmentId
    characterCharacterProfessionId
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
    CharacterGear {
      nextToken
      startedAt
      __typename
    }
    MovesStarting {
      nextToken
      startedAt
      __typename
    }
    MovesTwoToTen {
      nextToken
      startedAt
      __typename
    }
    MovesSixToTen {
      nextToken
      startedAt
      __typename
    }
    CharacterBonds {
      nextToken
      startedAt
      __typename
    }
    CharacterAbilityScores {
      nextToken
      startedAt
      __typename
    }
    CharacterRace {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterRaceRaceId
      characterRaceCharacterId
      __typename
    }
    CharacterAlignment {
      id
      selected
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterAlignmentAlignmentId
      characterAlignmentCharacterId
      __typename
    }
    CharacterLooks {
      nextToken
      startedAt
      __typename
    }
    CharacterProfession {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterProfessionProfessionId
      characterProfessionCharacterId
      __typename
    }
    CharacterSpells {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterCharacterRaceId
    characterCharacterAlignmentId
    characterCharacterProfessionId
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
    CharacterGear {
      nextToken
      startedAt
      __typename
    }
    MovesStarting {
      nextToken
      startedAt
      __typename
    }
    MovesTwoToTen {
      nextToken
      startedAt
      __typename
    }
    MovesSixToTen {
      nextToken
      startedAt
      __typename
    }
    CharacterBonds {
      nextToken
      startedAt
      __typename
    }
    CharacterAbilityScores {
      nextToken
      startedAt
      __typename
    }
    CharacterRace {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterRaceRaceId
      characterRaceCharacterId
      __typename
    }
    CharacterAlignment {
      id
      selected
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterAlignmentAlignmentId
      characterAlignmentCharacterId
      __typename
    }
    CharacterLooks {
      nextToken
      startedAt
      __typename
    }
    CharacterProfession {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      characterProfessionProfessionId
      characterProfessionCharacterId
      __typename
    }
    CharacterSpells {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    characterCharacterRaceId
    characterCharacterAlignmentId
    characterCharacterProfessionId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCharacterMutationVariables,
  APITypes.DeleteCharacterMutation
>;
