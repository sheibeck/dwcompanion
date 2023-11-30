/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Character = {
  __typename: "Character",
  userId: string,
  id: string,
  name: string,
  level?: number | null,
  xp?: number | null,
  armor?: number | null,
  hitPointsMax?: number | null,
  hitPointsCurrent?: number | null,
  coin?: number | null,
  loadMax?: number | null,
  loadCurrent?: number | null,
  isPublic?: boolean | null,
  isCoreTemplate?: boolean | null,
  spells?:  Array<CharacterSpell | null > | null,
  gear?:  Array<CharacterGear | null > | null,
  sixToTenMoves?:  Array<CharacterMove | null > | null,
  twoToTenMoves?:  Array<CharacterMove | null > | null,
  startingMoves?:  Array<CharacterMove | null > | null,
  bonds?:  Array<CharacterBond | null > | null,
  abilityscores?:  Array<CharacterAbilityScore | null > | null,
  race?: CharacterRace | null,
  alignment?: CharacterAlignment | null,
  tags?: Array< string | null > | null,
  conditionTypes?:  Array<CharacterConditions | null > | null,
  look?: CharacterLook | null,
  class?: CharacterClass | null,
  notes?: string | null,
};

export type CharacterSpell = {
  __typename: "CharacterSpell",
  id: string,
  spell: Spell,
  selected?: boolean | null,
  tags?: Array< string | null > | null,
};

export type Spell = {
  __typename: "Spell",
  id: string,
  name: string,
  level: number,
  type: string,
  ongoing?: boolean | null,
  description: string,
  source: Source,
  class: Class,
};

export type Source = {
  __typename: "Source",
  id: string,
  name: string,
};

export type Class = {
  __typename: "Class",
  id: string,
  name: string,
  description: string,
  source: Source,
  damageDiceType?: DiceType | null,
};

export type DiceType = {
  __typename: "DiceType",
  id: string,
  name?: string | null,
};

export type CharacterGear = {
  __typename: "CharacterGear",
  id: string,
  gear: Gear,
  uses?: number | null,
  tags?: Array< string | null > | null,
};

export type Gear = {
  __typename: "Gear",
  id: string,
  description: string,
  weight: number,
  uses?: number | null,
  tags?: Array< string | null > | null,
};

export type CharacterMove = {
  __typename: "CharacterMove",
  id: string,
  selected?: boolean | null,
  move: Move,
};

export type Move = {
  __typename: "Move",
  id: string,
  description: string,
  class: Class,
};

export type CharacterBond = {
  __typename: "CharacterBond",
  id: string,
  description?: string | null,
  bond: Bond,
  selected?: boolean | null,
};

export type Bond = {
  __typename: "Bond",
  id: string,
  description?: string | null,
  class: Class,
};

export type CharacterAbilityScore = {
  __typename: "CharacterAbilityScore",
  abilityScore: AbilityScore,
  value: string,
  bonus: number,
  tags?: Array< string | null > | null,
};

export type AbilityScore = {
  __typename: "AbilityScore",
  id: string,
  name: string,
  shortName: string,
  debility: string,
  debilityPenalty: string,
};

export type CharacterRace = {
  __typename: "CharacterRace",
  id: string,
  race: Race,
};

export type Race = {
  __typename: "Race",
  id: string,
  name?: string | null,
  description?: string | null,
  class?: Class | null,
  source: Source,
};

export type CharacterAlignment = {
  __typename: "CharacterAlignment",
  id: string,
  alignment: Alignment,
  selected?: boolean | null,
};

export type Alignment = {
  __typename: "Alignment",
  id: string,
  name?: string | null,
  description?: string | null,
  class: Class,
};

export type CharacterConditions = {
  __typename: "CharacterConditions",
  id: string,
  conditionTypes?:  Array<ConditionType | null > | null,
};

export type ConditionType = {
  __typename: "ConditionType",
  id: string,
  name: string,
  conditions?:  Array<Condition | null > | null,
};

export type Condition = {
  __typename: "Condition",
  id: string,
  description: string,
  selected?: boolean | null,
};

export type CharacterLook = {
  __typename: "CharacterLook",
  id: string,
  look:  Array<Look | null >,
};

export type Look = {
  __typename: "Look",
  id: string,
  name: string,
  description: string,
  class: Class,
};

export type CharacterClass = {
  __typename: "CharacterClass",
  id: string,
  class: Class,
};

export type DuplicateCharacterMutationVariables = {
  characterId: string,
  newUserId: string,
};

export type DuplicateCharacterMutation = {
  duplicateCharacter?:  {
    __typename: "Character",
    userId: string,
    id: string,
    name: string,
    level?: number | null,
    xp?: number | null,
    armor?: number | null,
    hitPointsMax?: number | null,
    hitPointsCurrent?: number | null,
    coin?: number | null,
    loadMax?: number | null,
    loadCurrent?: number | null,
    isPublic?: boolean | null,
    isCoreTemplate?: boolean | null,
    spells?:  Array< {
      __typename: "CharacterSpell",
      id: string,
      selected?: boolean | null,
      tags?: Array< string | null > | null,
    } | null > | null,
    gear?:  Array< {
      __typename: "CharacterGear",
      id: string,
      uses?: number | null,
      tags?: Array< string | null > | null,
    } | null > | null,
    sixToTenMoves?:  Array< {
      __typename: "CharacterMove",
      id: string,
      selected?: boolean | null,
    } | null > | null,
    twoToTenMoves?:  Array< {
      __typename: "CharacterMove",
      id: string,
      selected?: boolean | null,
    } | null > | null,
    startingMoves?:  Array< {
      __typename: "CharacterMove",
      id: string,
      selected?: boolean | null,
    } | null > | null,
    bonds?:  Array< {
      __typename: "CharacterBond",
      id: string,
      description?: string | null,
      selected?: boolean | null,
    } | null > | null,
    abilityscores?:  Array< {
      __typename: "CharacterAbilityScore",
      value: string,
      bonus: number,
      tags?: Array< string | null > | null,
    } | null > | null,
    race?:  {
      __typename: "CharacterRace",
      id: string,
    } | null,
    alignment?:  {
      __typename: "CharacterAlignment",
      id: string,
      selected?: boolean | null,
    } | null,
    tags?: Array< string | null > | null,
    conditionTypes?:  Array< {
      __typename: "CharacterConditions",
      id: string,
    } | null > | null,
    look?:  {
      __typename: "CharacterLook",
      id: string,
    } | null,
    class?:  {
      __typename: "CharacterClass",
      id: string,
    } | null,
    notes?: string | null,
  } | null,
};

export type GetCharacterQueryVariables = {
  characterId: string,
};

export type GetCharacterQuery = {
  getCharacter?:  {
    __typename: "Character",
    userId: string,
    id: string,
    name: string,
    level?: number | null,
    xp?: number | null,
    armor?: number | null,
    hitPointsMax?: number | null,
    hitPointsCurrent?: number | null,
    coin?: number | null,
    loadMax?: number | null,
    loadCurrent?: number | null,
    isPublic?: boolean | null,
    isCoreTemplate?: boolean | null,
    spells?:  Array< {
      __typename: "CharacterSpell",
      id: string,
      selected?: boolean | null,
      tags?: Array< string | null > | null,
    } | null > | null,
    gear?:  Array< {
      __typename: "CharacterGear",
      id: string,
      uses?: number | null,
      tags?: Array< string | null > | null,
    } | null > | null,
    sixToTenMoves?:  Array< {
      __typename: "CharacterMove",
      id: string,
      selected?: boolean | null,
    } | null > | null,
    twoToTenMoves?:  Array< {
      __typename: "CharacterMove",
      id: string,
      selected?: boolean | null,
    } | null > | null,
    startingMoves?:  Array< {
      __typename: "CharacterMove",
      id: string,
      selected?: boolean | null,
    } | null > | null,
    bonds?:  Array< {
      __typename: "CharacterBond",
      id: string,
      description?: string | null,
      selected?: boolean | null,
    } | null > | null,
    abilityscores?:  Array< {
      __typename: "CharacterAbilityScore",
      value: string,
      bonus: number,
      tags?: Array< string | null > | null,
    } | null > | null,
    race?:  {
      __typename: "CharacterRace",
      id: string,
    } | null,
    alignment?:  {
      __typename: "CharacterAlignment",
      id: string,
      selected?: boolean | null,
    } | null,
    tags?: Array< string | null > | null,
    conditionTypes?:  Array< {
      __typename: "CharacterConditions",
      id: string,
    } | null > | null,
    look?:  {
      __typename: "CharacterLook",
      id: string,
    } | null,
    class?:  {
      __typename: "CharacterClass",
      id: string,
    } | null,
    notes?: string | null,
  } | null,
};

export type GetUserCharactersQueryVariables = {
  userId: string,
};

export type GetUserCharactersQuery = {
  getUserCharacters?:  Array< {
    __typename: "Character",
    userId: string,
    id: string,
    name: string,
    level?: number | null,
    xp?: number | null,
    armor?: number | null,
    hitPointsMax?: number | null,
    hitPointsCurrent?: number | null,
    coin?: number | null,
    loadMax?: number | null,
    loadCurrent?: number | null,
    isPublic?: boolean | null,
    isCoreTemplate?: boolean | null,
    spells?:  Array< {
      __typename: "CharacterSpell",
      id: string,
      selected?: boolean | null,
      tags?: Array< string | null > | null,
    } | null > | null,
    gear?:  Array< {
      __typename: "CharacterGear",
      id: string,
      uses?: number | null,
      tags?: Array< string | null > | null,
    } | null > | null,
    sixToTenMoves?:  Array< {
      __typename: "CharacterMove",
      id: string,
      selected?: boolean | null,
    } | null > | null,
    twoToTenMoves?:  Array< {
      __typename: "CharacterMove",
      id: string,
      selected?: boolean | null,
    } | null > | null,
    startingMoves?:  Array< {
      __typename: "CharacterMove",
      id: string,
      selected?: boolean | null,
    } | null > | null,
    bonds?:  Array< {
      __typename: "CharacterBond",
      id: string,
      description?: string | null,
      selected?: boolean | null,
    } | null > | null,
    abilityscores?:  Array< {
      __typename: "CharacterAbilityScore",
      value: string,
      bonus: number,
      tags?: Array< string | null > | null,
    } | null > | null,
    race?:  {
      __typename: "CharacterRace",
      id: string,
    } | null,
    alignment?:  {
      __typename: "CharacterAlignment",
      id: string,
      selected?: boolean | null,
    } | null,
    tags?: Array< string | null > | null,
    conditionTypes?:  Array< {
      __typename: "CharacterConditions",
      id: string,
    } | null > | null,
    look?:  {
      __typename: "CharacterLook",
      id: string,
    } | null,
    class?:  {
      __typename: "CharacterClass",
      id: string,
    } | null,
    notes?: string | null,
  } | null > | null,
};

export type GetCoreClassTemplatesQueryVariables = {
};

export type GetCoreClassTemplatesQuery = {
  getCoreClassTemplates?:  Array< {
    __typename: "Character",
    userId: string,
    id: string,
    name: string,
    level?: number | null,
    xp?: number | null,
    armor?: number | null,
    hitPointsMax?: number | null,
    hitPointsCurrent?: number | null,
    coin?: number | null,
    loadMax?: number | null,
    loadCurrent?: number | null,
    isPublic?: boolean | null,
    isCoreTemplate?: boolean | null,
    spells?:  Array< {
      __typename: "CharacterSpell",
      id: string,
      selected?: boolean | null,
      tags?: Array< string | null > | null,
    } | null > | null,
    gear?:  Array< {
      __typename: "CharacterGear",
      id: string,
      uses?: number | null,
      tags?: Array< string | null > | null,
    } | null > | null,
    sixToTenMoves?:  Array< {
      __typename: "CharacterMove",
      id: string,
      selected?: boolean | null,
    } | null > | null,
    twoToTenMoves?:  Array< {
      __typename: "CharacterMove",
      id: string,
      selected?: boolean | null,
    } | null > | null,
    startingMoves?:  Array< {
      __typename: "CharacterMove",
      id: string,
      selected?: boolean | null,
    } | null > | null,
    bonds?:  Array< {
      __typename: "CharacterBond",
      id: string,
      description?: string | null,
      selected?: boolean | null,
    } | null > | null,
    abilityscores?:  Array< {
      __typename: "CharacterAbilityScore",
      value: string,
      bonus: number,
      tags?: Array< string | null > | null,
    } | null > | null,
    race?:  {
      __typename: "CharacterRace",
      id: string,
    } | null,
    alignment?:  {
      __typename: "CharacterAlignment",
      id: string,
      selected?: boolean | null,
    } | null,
    tags?: Array< string | null > | null,
    conditionTypes?:  Array< {
      __typename: "CharacterConditions",
      id: string,
    } | null > | null,
    look?:  {
      __typename: "CharacterLook",
      id: string,
    } | null,
    class?:  {
      __typename: "CharacterClass",
      id: string,
    } | null,
    notes?: string | null,
  } | null > | null,
};

export type GetClassesQueryVariables = {
};

export type GetClassesQuery = {
  getClasses?:  Array< {
    __typename: "Class",
    id: string,
    name: string,
    description: string,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
    },
    damageDiceType?:  {
      __typename: "DiceType",
      id: string,
      name?: string | null,
    } | null,
  } | null > | null,
};

export type GetSpellsQueryVariables = {
};

export type GetSpellsQuery = {
  getSpells?:  Array< {
    __typename: "Spell",
    id: string,
    name: string,
    level: number,
    type: string,
    ongoing?: boolean | null,
    description: string,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
    },
  } | null > | null,
};

export type GetSpellsByClassQueryVariables = {
  className: string,
};

export type GetSpellsByClassQuery = {
  getSpellsByClass?:  Array< {
    __typename: "Spell",
    id: string,
    name: string,
    level: number,
    type: string,
    ongoing?: boolean | null,
    description: string,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
    },
  } | null > | null,
};

export type GetDiceTypesQueryVariables = {
};

export type GetDiceTypesQuery = {
  getDiceTypes?:  Array< {
    __typename: "DiceType",
    id: string,
    name?: string | null,
  } | null > | null,
};

export type GetRacesQueryVariables = {
};

export type GetRacesQuery = {
  getRaces?:  Array< {
    __typename: "Race",
    id: string,
    name?: string | null,
    description?: string | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
    } | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
    },
  } | null > | null,
};

export type GetMovesQueryVariables = {
};

export type GetMovesQuery = {
  getMoves?:  Array< {
    __typename: "Move",
    id: string,
    description: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
    },
  } | null > | null,
};

export type GetMovesByClassQueryVariables = {
  className: string,
};

export type GetMovesByClassQuery = {
  getMovesByClass?:  Array< {
    __typename: "Move",
    id: string,
    description: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
    },
  } | null > | null,
};
