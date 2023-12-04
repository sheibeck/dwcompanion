/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateSource = /* GraphQL */ `subscription OnCreateSource($filter: ModelSubscriptionSourceFilterInput) {
  onCreateSource(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSourceSubscriptionVariables,
  APITypes.OnCreateSourceSubscription
>;
export const onUpdateSource = /* GraphQL */ `subscription OnUpdateSource($filter: ModelSubscriptionSourceFilterInput) {
  onUpdateSource(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSourceSubscriptionVariables,
  APITypes.OnUpdateSourceSubscription
>;
export const onDeleteSource = /* GraphQL */ `subscription OnDeleteSource($filter: ModelSubscriptionSourceFilterInput) {
  onDeleteSource(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSourceSubscriptionVariables,
  APITypes.OnDeleteSourceSubscription
>;
export const onCreateCharacterProfession = /* GraphQL */ `subscription OnCreateCharacterProfession(
  $filter: ModelSubscriptionCharacterProfessionFilterInput
) {
  onCreateCharacterProfession(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCharacterProfessionSubscriptionVariables,
  APITypes.OnCreateCharacterProfessionSubscription
>;
export const onUpdateCharacterProfession = /* GraphQL */ `subscription OnUpdateCharacterProfession(
  $filter: ModelSubscriptionCharacterProfessionFilterInput
) {
  onUpdateCharacterProfession(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCharacterProfessionSubscriptionVariables,
  APITypes.OnUpdateCharacterProfessionSubscription
>;
export const onDeleteCharacterProfession = /* GraphQL */ `subscription OnDeleteCharacterProfession(
  $filter: ModelSubscriptionCharacterProfessionFilterInput
) {
  onDeleteCharacterProfession(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCharacterProfessionSubscriptionVariables,
  APITypes.OnDeleteCharacterProfessionSubscription
>;
export const onCreateProfession = /* GraphQL */ `subscription OnCreateProfession(
  $filter: ModelSubscriptionProfessionFilterInput
) {
  onCreateProfession(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProfessionSubscriptionVariables,
  APITypes.OnCreateProfessionSubscription
>;
export const onUpdateProfession = /* GraphQL */ `subscription OnUpdateProfession(
  $filter: ModelSubscriptionProfessionFilterInput
) {
  onUpdateProfession(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProfessionSubscriptionVariables,
  APITypes.OnUpdateProfessionSubscription
>;
export const onDeleteProfession = /* GraphQL */ `subscription OnDeleteProfession(
  $filter: ModelSubscriptionProfessionFilterInput
) {
  onDeleteProfession(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSpellSubscriptionVariables,
  APITypes.OnDeleteSpellSubscription
>;
export const onCreateCharacterSpell = /* GraphQL */ `subscription OnCreateCharacterSpell(
  $filter: ModelSubscriptionCharacterSpellFilterInput
) {
  onCreateCharacterSpell(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCharacterSpellSubscriptionVariables,
  APITypes.OnCreateCharacterSpellSubscription
>;
export const onUpdateCharacterSpell = /* GraphQL */ `subscription OnUpdateCharacterSpell(
  $filter: ModelSubscriptionCharacterSpellFilterInput
) {
  onUpdateCharacterSpell(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCharacterSpellSubscriptionVariables,
  APITypes.OnUpdateCharacterSpellSubscription
>;
export const onDeleteCharacterSpell = /* GraphQL */ `subscription OnDeleteCharacterSpell(
  $filter: ModelSubscriptionCharacterSpellFilterInput
) {
  onDeleteCharacterSpell(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCharacterSpellSubscriptionVariables,
  APITypes.OnDeleteCharacterSpellSubscription
>;
export const onCreateCharacterGear = /* GraphQL */ `subscription OnCreateCharacterGear(
  $filter: ModelSubscriptionCharacterGearFilterInput
) {
  onCreateCharacterGear(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCharacterGearSubscriptionVariables,
  APITypes.OnCreateCharacterGearSubscription
>;
export const onUpdateCharacterGear = /* GraphQL */ `subscription OnUpdateCharacterGear(
  $filter: ModelSubscriptionCharacterGearFilterInput
) {
  onUpdateCharacterGear(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCharacterGearSubscriptionVariables,
  APITypes.OnUpdateCharacterGearSubscription
>;
export const onDeleteCharacterGear = /* GraphQL */ `subscription OnDeleteCharacterGear(
  $filter: ModelSubscriptionCharacterGearFilterInput
) {
  onDeleteCharacterGear(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCharacterGearSubscriptionVariables,
  APITypes.OnDeleteCharacterGearSubscription
>;
export const onCreateGear = /* GraphQL */ `subscription OnCreateGear($filter: ModelSubscriptionGearFilterInput) {
  onCreateGear(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGearSubscriptionVariables,
  APITypes.OnDeleteGearSubscription
>;
export const onCreateCharacterMove = /* GraphQL */ `subscription OnCreateCharacterMove(
  $filter: ModelSubscriptionCharacterMoveFilterInput
) {
  onCreateCharacterMove(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCharacterMoveSubscriptionVariables,
  APITypes.OnCreateCharacterMoveSubscription
>;
export const onUpdateCharacterMove = /* GraphQL */ `subscription OnUpdateCharacterMove(
  $filter: ModelSubscriptionCharacterMoveFilterInput
) {
  onUpdateCharacterMove(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCharacterMoveSubscriptionVariables,
  APITypes.OnUpdateCharacterMoveSubscription
>;
export const onDeleteCharacterMove = /* GraphQL */ `subscription OnDeleteCharacterMove(
  $filter: ModelSubscriptionCharacterMoveFilterInput
) {
  onDeleteCharacterMove(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCharacterMoveSubscriptionVariables,
  APITypes.OnDeleteCharacterMoveSubscription
>;
export const onCreateMove = /* GraphQL */ `subscription OnCreateMove($filter: ModelSubscriptionMoveFilterInput) {
  onCreateMove(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMoveSubscriptionVariables,
  APITypes.OnCreateMoveSubscription
>;
export const onUpdateMove = /* GraphQL */ `subscription OnUpdateMove($filter: ModelSubscriptionMoveFilterInput) {
  onUpdateMove(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMoveSubscriptionVariables,
  APITypes.OnUpdateMoveSubscription
>;
export const onDeleteMove = /* GraphQL */ `subscription OnDeleteMove($filter: ModelSubscriptionMoveFilterInput) {
  onDeleteMove(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMoveSubscriptionVariables,
  APITypes.OnDeleteMoveSubscription
>;
export const onCreateCharacterBond = /* GraphQL */ `subscription OnCreateCharacterBond(
  $filter: ModelSubscriptionCharacterBondFilterInput
) {
  onCreateCharacterBond(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCharacterBondSubscriptionVariables,
  APITypes.OnCreateCharacterBondSubscription
>;
export const onUpdateCharacterBond = /* GraphQL */ `subscription OnUpdateCharacterBond(
  $filter: ModelSubscriptionCharacterBondFilterInput
) {
  onUpdateCharacterBond(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCharacterBondSubscriptionVariables,
  APITypes.OnUpdateCharacterBondSubscription
>;
export const onDeleteCharacterBond = /* GraphQL */ `subscription OnDeleteCharacterBond(
  $filter: ModelSubscriptionCharacterBondFilterInput
) {
  onDeleteCharacterBond(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCharacterBondSubscriptionVariables,
  APITypes.OnDeleteCharacterBondSubscription
>;
export const onCreateBond = /* GraphQL */ `subscription OnCreateBond($filter: ModelSubscriptionBondFilterInput) {
  onCreateBond(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBondSubscriptionVariables,
  APITypes.OnCreateBondSubscription
>;
export const onUpdateBond = /* GraphQL */ `subscription OnUpdateBond($filter: ModelSubscriptionBondFilterInput) {
  onUpdateBond(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBondSubscriptionVariables,
  APITypes.OnUpdateBondSubscription
>;
export const onDeleteBond = /* GraphQL */ `subscription OnDeleteBond($filter: ModelSubscriptionBondFilterInput) {
  onDeleteBond(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBondSubscriptionVariables,
  APITypes.OnDeleteBondSubscription
>;
export const onCreateCharacterAbilityScore = /* GraphQL */ `subscription OnCreateCharacterAbilityScore(
  $filter: ModelSubscriptionCharacterAbilityScoreFilterInput
) {
  onCreateCharacterAbilityScore(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCharacterAbilityScoreSubscriptionVariables,
  APITypes.OnCreateCharacterAbilityScoreSubscription
>;
export const onUpdateCharacterAbilityScore = /* GraphQL */ `subscription OnUpdateCharacterAbilityScore(
  $filter: ModelSubscriptionCharacterAbilityScoreFilterInput
) {
  onUpdateCharacterAbilityScore(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCharacterAbilityScoreSubscriptionVariables,
  APITypes.OnUpdateCharacterAbilityScoreSubscription
>;
export const onDeleteCharacterAbilityScore = /* GraphQL */ `subscription OnDeleteCharacterAbilityScore(
  $filter: ModelSubscriptionCharacterAbilityScoreFilterInput
) {
  onDeleteCharacterAbilityScore(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCharacterAbilityScoreSubscriptionVariables,
  APITypes.OnDeleteCharacterAbilityScoreSubscription
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
export const onCreateCharacterRace = /* GraphQL */ `subscription OnCreateCharacterRace(
  $filter: ModelSubscriptionCharacterRaceFilterInput
) {
  onCreateCharacterRace(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCharacterRaceSubscriptionVariables,
  APITypes.OnCreateCharacterRaceSubscription
>;
export const onUpdateCharacterRace = /* GraphQL */ `subscription OnUpdateCharacterRace(
  $filter: ModelSubscriptionCharacterRaceFilterInput
) {
  onUpdateCharacterRace(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCharacterRaceSubscriptionVariables,
  APITypes.OnUpdateCharacterRaceSubscription
>;
export const onDeleteCharacterRace = /* GraphQL */ `subscription OnDeleteCharacterRace(
  $filter: ModelSubscriptionCharacterRaceFilterInput
) {
  onDeleteCharacterRace(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCharacterRaceSubscriptionVariables,
  APITypes.OnDeleteCharacterRaceSubscription
>;
export const onCreateRace = /* GraphQL */ `subscription OnCreateRace($filter: ModelSubscriptionRaceFilterInput) {
  onCreateRace(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRaceSubscriptionVariables,
  APITypes.OnCreateRaceSubscription
>;
export const onUpdateRace = /* GraphQL */ `subscription OnUpdateRace($filter: ModelSubscriptionRaceFilterInput) {
  onUpdateRace(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRaceSubscriptionVariables,
  APITypes.OnUpdateRaceSubscription
>;
export const onDeleteRace = /* GraphQL */ `subscription OnDeleteRace($filter: ModelSubscriptionRaceFilterInput) {
  onDeleteRace(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRaceSubscriptionVariables,
  APITypes.OnDeleteRaceSubscription
>;
export const onCreateCharacterAlignment = /* GraphQL */ `subscription OnCreateCharacterAlignment(
  $filter: ModelSubscriptionCharacterAlignmentFilterInput
) {
  onCreateCharacterAlignment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCharacterAlignmentSubscriptionVariables,
  APITypes.OnCreateCharacterAlignmentSubscription
>;
export const onUpdateCharacterAlignment = /* GraphQL */ `subscription OnUpdateCharacterAlignment(
  $filter: ModelSubscriptionCharacterAlignmentFilterInput
) {
  onUpdateCharacterAlignment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCharacterAlignmentSubscriptionVariables,
  APITypes.OnUpdateCharacterAlignmentSubscription
>;
export const onDeleteCharacterAlignment = /* GraphQL */ `subscription OnDeleteCharacterAlignment(
  $filter: ModelSubscriptionCharacterAlignmentFilterInput
) {
  onDeleteCharacterAlignment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCharacterAlignmentSubscriptionVariables,
  APITypes.OnDeleteCharacterAlignmentSubscription
>;
export const onCreateAlignment = /* GraphQL */ `subscription OnCreateAlignment($filter: ModelSubscriptionAlignmentFilterInput) {
  onCreateAlignment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAlignmentSubscriptionVariables,
  APITypes.OnCreateAlignmentSubscription
>;
export const onUpdateAlignment = /* GraphQL */ `subscription OnUpdateAlignment($filter: ModelSubscriptionAlignmentFilterInput) {
  onUpdateAlignment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAlignmentSubscriptionVariables,
  APITypes.OnUpdateAlignmentSubscription
>;
export const onDeleteAlignment = /* GraphQL */ `subscription OnDeleteAlignment($filter: ModelSubscriptionAlignmentFilterInput) {
  onDeleteAlignment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAlignmentSubscriptionVariables,
  APITypes.OnDeleteAlignmentSubscription
>;
export const onCreateDiceType = /* GraphQL */ `subscription OnCreateDiceType($filter: ModelSubscriptionDiceTypeFilterInput) {
  onCreateDiceType(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateDiceTypeSubscriptionVariables,
  APITypes.OnCreateDiceTypeSubscription
>;
export const onUpdateDiceType = /* GraphQL */ `subscription OnUpdateDiceType($filter: ModelSubscriptionDiceTypeFilterInput) {
  onUpdateDiceType(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateDiceTypeSubscriptionVariables,
  APITypes.OnUpdateDiceTypeSubscription
>;
export const onDeleteDiceType = /* GraphQL */ `subscription OnDeleteDiceType($filter: ModelSubscriptionDiceTypeFilterInput) {
  onDeleteDiceType(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteDiceTypeSubscriptionVariables,
  APITypes.OnDeleteDiceTypeSubscription
>;
export const onCreateCharacterLook = /* GraphQL */ `subscription OnCreateCharacterLook(
  $filter: ModelSubscriptionCharacterLookFilterInput
) {
  onCreateCharacterLook(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCharacterLookSubscriptionVariables,
  APITypes.OnCreateCharacterLookSubscription
>;
export const onUpdateCharacterLook = /* GraphQL */ `subscription OnUpdateCharacterLook(
  $filter: ModelSubscriptionCharacterLookFilterInput
) {
  onUpdateCharacterLook(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCharacterLookSubscriptionVariables,
  APITypes.OnUpdateCharacterLookSubscription
>;
export const onDeleteCharacterLook = /* GraphQL */ `subscription OnDeleteCharacterLook(
  $filter: ModelSubscriptionCharacterLookFilterInput
) {
  onDeleteCharacterLook(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCharacterLookSubscriptionVariables,
  APITypes.OnDeleteCharacterLookSubscription
>;
export const onCreateLook = /* GraphQL */ `subscription OnCreateLook($filter: ModelSubscriptionLookFilterInput) {
  onCreateLook(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLookSubscriptionVariables,
  APITypes.OnCreateLookSubscription
>;
export const onUpdateLook = /* GraphQL */ `subscription OnUpdateLook($filter: ModelSubscriptionLookFilterInput) {
  onUpdateLook(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLookSubscriptionVariables,
  APITypes.OnUpdateLookSubscription
>;
export const onDeleteLook = /* GraphQL */ `subscription OnDeleteLook($filter: ModelSubscriptionLookFilterInput) {
  onDeleteLook(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLookSubscriptionVariables,
  APITypes.OnDeleteLookSubscription
>;
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
` as GeneratedSubscription<
  APITypes.OnDeleteCharacterSubscriptionVariables,
  APITypes.OnDeleteCharacterSubscription
>;
