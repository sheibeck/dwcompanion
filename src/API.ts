/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Character = {
  __typename: "Character",
  owner?: User | null,
  name: string,
  class:  Array<Class | null >,
  look?:  Array<Look | null > | null,
  level?: number | null,
  xp?: number | null,
  armor?: number | null,
  hitPointsMax?: number | null,
  hitPointsCurrent?: number | null,
  conditions?: number | null,
  damage?: DiceType | null,
  tags?:  Array<Tag | null > | null,
  alignment?:  Array<Alignment | null > | null,
  race?:  Array<Race | null > | null,
  abilityScores?: AbilityScoreBase | null,
  bonds?:  Array<Bond | null > | null,
  startingMoves:  Array<CharacterMove | null >,
  twoToTenMoves?:  Array<CharacterMove | null > | null,
  sixToTenMoves?:  Array<CharacterMove | null > | null,
  coin?: number | null,
  loadMax?: number | null,
  loadCurrent?: number | null,
  gear?:  Array<CharacterGear | null > | null,
  spells?:  Array<CharacterSpell | null > | null,
  isPublic?: boolean | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  email: string,
};

export type Class = {
  __typename: "Class",
  name: string,
  description: string,
  isPublic?: boolean | null,
  isCore?: boolean | null,
};

export type Look = {
  __typename: "Look",
  name?: string | null,
  description?: string | null,
  tags?:  Array<Tag | null > | null,
};

export type Tag = {
  __typename: "Tag",
  name?: string | null,
  description?: string | null,
};

export type DiceType = {
  __typename: "DiceType",
  name?: string | null,
};

export type Alignment = {
  __typename: "Alignment",
  name?: string | null,
  description?: string | null,
  tags?:  Array<Tag | null > | null,
  class?:  Array<Class | null > | null,
};

export type Race = {
  __typename: "Race",
  name?: string | null,
  description?: string | null,
  tags?:  Array<Tag | null > | null,
  class?:  Array<Class | null > | null,
};

export type AbilityScoreBase = {
  __typename: "AbilityScoreBase",
  strength?: AbilityScore | null,
  dexterity?: AbilityScore | null,
  constitution?: AbilityScore | null,
  intelligence?: AbilityScore | null,
  wisdom?: AbilityScore | null,
  charisma?: AbilityScore | null,
};

export type AbilityScore = {
  __typename: "AbilityScore",
  name?: string | null,
  shortName?: string | null,
  value?: number | null,
  bonus?: number | null,
  debility?: string | null,
  debilityPenalty?: string | null,
  tags?:  Array<Tag | null > | null,
};

export type Bond = {
  __typename: "Bond",
  description?: string | null,
  tags?:  Array<Tag | null > | null,
};

export type CharacterMove = {
  __typename: "CharacterMove",
  move?: Move | null,
  selected?: boolean | null,
  tags?:  Array<Tag | null > | null,
};

export type Move = {
  __typename: "Move",
  name: string,
  description: string,
  class?: Class | null,
};

export type CharacterGear = {
  __typename: "CharacterGear",
  gear?: Gear | null,
  selected?: boolean | null,
  tags?:  Array<Tag | null > | null,
};

export type Gear = {
  __typename: "Gear",
  name: string,
  description?: string | null,
  uses?: number | null,
  weight?: number | null,
  tags?:  Array<Tag | null > | null,
};

export type CharacterSpell = {
  __typename: "CharacterSpell",
  spell?: Spell | null,
  selected?: boolean | null,
  tags?:  Array<Tag | null > | null,
};

export type Spell = {
  __typename: "Spell",
  name: string,
  level: number,
  type?: string | null,
  ongoing?: boolean | null,
  description: string,
  class?: Class | null,
};

export type GetCharacterQueryVariables = {
  characterId: string,
};

export type GetCharacterQuery = {
  getCharacter?:  {
    __typename: "Character",
    owner?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
    } | null,
    name: string,
    class:  Array< {
      __typename: "Class",
      name: string,
      description: string,
      isPublic?: boolean | null,
      isCore?: boolean | null,
    } | null >,
    look?:  Array< {
      __typename: "Look",
      name?: string | null,
      description?: string | null,
      tags?:  Array< {
        __typename: "Tag",
        name?: string | null,
        description?: string | null,
      } | null > | null,
    } | null > | null,
    level?: number | null,
    xp?: number | null,
    armor?: number | null,
    hitPointsMax?: number | null,
    hitPointsCurrent?: number | null,
    conditions?: number | null,
    damage?:  {
      __typename: "DiceType",
      name?: string | null,
    } | null,
    tags?:  Array< {
      __typename: "Tag",
      name?: string | null,
      description?: string | null,
    } | null > | null,
    alignment?:  Array< {
      __typename: "Alignment",
      name?: string | null,
      description?: string | null,
      tags?:  Array< {
        __typename: "Tag",
        name?: string | null,
        description?: string | null,
      } | null > | null,
      class?:  Array< {
        __typename: "Class",
        name: string,
        description: string,
        isPublic?: boolean | null,
        isCore?: boolean | null,
      } | null > | null,
    } | null > | null,
    race?:  Array< {
      __typename: "Race",
      name?: string | null,
      description?: string | null,
      tags?:  Array< {
        __typename: "Tag",
        name?: string | null,
        description?: string | null,
      } | null > | null,
      class?:  Array< {
        __typename: "Class",
        name: string,
        description: string,
        isPublic?: boolean | null,
        isCore?: boolean | null,
      } | null > | null,
    } | null > | null,
    abilityScores?:  {
      __typename: "AbilityScoreBase",
      strength?:  {
        __typename: "AbilityScore",
        name?: string | null,
        shortName?: string | null,
        value?: number | null,
        bonus?: number | null,
        debility?: string | null,
        debilityPenalty?: string | null,
      } | null,
      dexterity?:  {
        __typename: "AbilityScore",
        name?: string | null,
        shortName?: string | null,
        value?: number | null,
        bonus?: number | null,
        debility?: string | null,
        debilityPenalty?: string | null,
      } | null,
      constitution?:  {
        __typename: "AbilityScore",
        name?: string | null,
        shortName?: string | null,
        value?: number | null,
        bonus?: number | null,
        debility?: string | null,
        debilityPenalty?: string | null,
      } | null,
      intelligence?:  {
        __typename: "AbilityScore",
        name?: string | null,
        shortName?: string | null,
        value?: number | null,
        bonus?: number | null,
        debility?: string | null,
        debilityPenalty?: string | null,
      } | null,
      wisdom?:  {
        __typename: "AbilityScore",
        name?: string | null,
        shortName?: string | null,
        value?: number | null,
        bonus?: number | null,
        debility?: string | null,
        debilityPenalty?: string | null,
      } | null,
      charisma?:  {
        __typename: "AbilityScore",
        name?: string | null,
        shortName?: string | null,
        value?: number | null,
        bonus?: number | null,
        debility?: string | null,
        debilityPenalty?: string | null,
      } | null,
    } | null,
    bonds?:  Array< {
      __typename: "Bond",
      description?: string | null,
      tags?:  Array< {
        __typename: "Tag",
        name?: string | null,
        description?: string | null,
      } | null > | null,
    } | null > | null,
    startingMoves:  Array< {
      __typename: "CharacterMove",
      move?:  {
        __typename: "Move",
        name: string,
        description: string,
      } | null,
      selected?: boolean | null,
      tags?:  Array< {
        __typename: "Tag",
        name?: string | null,
        description?: string | null,
      } | null > | null,
    } | null >,
    twoToTenMoves?:  Array< {
      __typename: "CharacterMove",
      move?:  {
        __typename: "Move",
        name: string,
        description: string,
      } | null,
      selected?: boolean | null,
      tags?:  Array< {
        __typename: "Tag",
        name?: string | null,
        description?: string | null,
      } | null > | null,
    } | null > | null,
    sixToTenMoves?:  Array< {
      __typename: "CharacterMove",
      move?:  {
        __typename: "Move",
        name: string,
        description: string,
      } | null,
      selected?: boolean | null,
      tags?:  Array< {
        __typename: "Tag",
        name?: string | null,
        description?: string | null,
      } | null > | null,
    } | null > | null,
    coin?: number | null,
    loadMax?: number | null,
    loadCurrent?: number | null,
    gear?:  Array< {
      __typename: "CharacterGear",
      gear?:  {
        __typename: "Gear",
        name: string,
        description?: string | null,
        uses?: number | null,
        weight?: number | null,
      } | null,
      selected?: boolean | null,
      tags?:  Array< {
        __typename: "Tag",
        name?: string | null,
        description?: string | null,
      } | null > | null,
    } | null > | null,
    spells?:  Array< {
      __typename: "CharacterSpell",
      spell?:  {
        __typename: "Spell",
        name: string,
        level: number,
        type?: string | null,
        ongoing?: boolean | null,
        description: string,
      } | null,
      selected?: boolean | null,
      tags?:  Array< {
        __typename: "Tag",
        name?: string | null,
        description?: string | null,
      } | null > | null,
    } | null > | null,
    isPublic?: boolean | null,
  } | null,
};

export type GetUserCharactersQueryVariables = {
  userId: string,
};

export type GetUserCharactersQuery = {
  getUserCharacters?:  Array< {
    __typename: "Character",
    owner?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
    } | null,
    name: string,
    class:  Array< {
      __typename: "Class",
      name: string,
      description: string,
      isPublic?: boolean | null,
      isCore?: boolean | null,
    } | null >,
    look?:  Array< {
      __typename: "Look",
      name?: string | null,
      description?: string | null,
      tags?:  Array< {
        __typename: "Tag",
        name?: string | null,
        description?: string | null,
      } | null > | null,
    } | null > | null,
    level?: number | null,
    xp?: number | null,
    armor?: number | null,
    hitPointsMax?: number | null,
    hitPointsCurrent?: number | null,
    conditions?: number | null,
    damage?:  {
      __typename: "DiceType",
      name?: string | null,
    } | null,
    tags?:  Array< {
      __typename: "Tag",
      name?: string | null,
      description?: string | null,
    } | null > | null,
    alignment?:  Array< {
      __typename: "Alignment",
      name?: string | null,
      description?: string | null,
      tags?:  Array< {
        __typename: "Tag",
        name?: string | null,
        description?: string | null,
      } | null > | null,
      class?:  Array< {
        __typename: "Class",
        name: string,
        description: string,
        isPublic?: boolean | null,
        isCore?: boolean | null,
      } | null > | null,
    } | null > | null,
    race?:  Array< {
      __typename: "Race",
      name?: string | null,
      description?: string | null,
      tags?:  Array< {
        __typename: "Tag",
        name?: string | null,
        description?: string | null,
      } | null > | null,
      class?:  Array< {
        __typename: "Class",
        name: string,
        description: string,
        isPublic?: boolean | null,
        isCore?: boolean | null,
      } | null > | null,
    } | null > | null,
    abilityScores?:  {
      __typename: "AbilityScoreBase",
      strength?:  {
        __typename: "AbilityScore",
        name?: string | null,
        shortName?: string | null,
        value?: number | null,
        bonus?: number | null,
        debility?: string | null,
        debilityPenalty?: string | null,
      } | null,
      dexterity?:  {
        __typename: "AbilityScore",
        name?: string | null,
        shortName?: string | null,
        value?: number | null,
        bonus?: number | null,
        debility?: string | null,
        debilityPenalty?: string | null,
      } | null,
      constitution?:  {
        __typename: "AbilityScore",
        name?: string | null,
        shortName?: string | null,
        value?: number | null,
        bonus?: number | null,
        debility?: string | null,
        debilityPenalty?: string | null,
      } | null,
      intelligence?:  {
        __typename: "AbilityScore",
        name?: string | null,
        shortName?: string | null,
        value?: number | null,
        bonus?: number | null,
        debility?: string | null,
        debilityPenalty?: string | null,
      } | null,
      wisdom?:  {
        __typename: "AbilityScore",
        name?: string | null,
        shortName?: string | null,
        value?: number | null,
        bonus?: number | null,
        debility?: string | null,
        debilityPenalty?: string | null,
      } | null,
      charisma?:  {
        __typename: "AbilityScore",
        name?: string | null,
        shortName?: string | null,
        value?: number | null,
        bonus?: number | null,
        debility?: string | null,
        debilityPenalty?: string | null,
      } | null,
    } | null,
    bonds?:  Array< {
      __typename: "Bond",
      description?: string | null,
      tags?:  Array< {
        __typename: "Tag",
        name?: string | null,
        description?: string | null,
      } | null > | null,
    } | null > | null,
    startingMoves:  Array< {
      __typename: "CharacterMove",
      move?:  {
        __typename: "Move",
        name: string,
        description: string,
      } | null,
      selected?: boolean | null,
      tags?:  Array< {
        __typename: "Tag",
        name?: string | null,
        description?: string | null,
      } | null > | null,
    } | null >,
    twoToTenMoves?:  Array< {
      __typename: "CharacterMove",
      move?:  {
        __typename: "Move",
        name: string,
        description: string,
      } | null,
      selected?: boolean | null,
      tags?:  Array< {
        __typename: "Tag",
        name?: string | null,
        description?: string | null,
      } | null > | null,
    } | null > | null,
    sixToTenMoves?:  Array< {
      __typename: "CharacterMove",
      move?:  {
        __typename: "Move",
        name: string,
        description: string,
      } | null,
      selected?: boolean | null,
      tags?:  Array< {
        __typename: "Tag",
        name?: string | null,
        description?: string | null,
      } | null > | null,
    } | null > | null,
    coin?: number | null,
    loadMax?: number | null,
    loadCurrent?: number | null,
    gear?:  Array< {
      __typename: "CharacterGear",
      gear?:  {
        __typename: "Gear",
        name: string,
        description?: string | null,
        uses?: number | null,
        weight?: number | null,
      } | null,
      selected?: boolean | null,
      tags?:  Array< {
        __typename: "Tag",
        name?: string | null,
        description?: string | null,
      } | null > | null,
    } | null > | null,
    spells?:  Array< {
      __typename: "CharacterSpell",
      spell?:  {
        __typename: "Spell",
        name: string,
        level: number,
        type?: string | null,
        ongoing?: boolean | null,
        description: string,
      } | null,
      selected?: boolean | null,
      tags?:  Array< {
        __typename: "Tag",
        name?: string | null,
        description?: string | null,
      } | null > | null,
    } | null > | null,
    isPublic?: boolean | null,
  } | null > | null,
};

export type GetClassesQuery = {
  getClasses?:  {
    __typename: "Class",
    name: string,
    description: string,
    isPublic?: boolean | null,
    isCore?: boolean | null,
  } | null,
};

export type GetSpellsQuery = {
  getSpells?:  {
    __typename: "Spell",
    name: string,
    level: number,
    type?: string | null,
    ongoing?: boolean | null,
    description: string,
    class?:  {
      __typename: "Class",
      name: string,
      description: string,
      isPublic?: boolean | null,
      isCore?: boolean | null,
    } | null,
  } | null,
};

export type GetSpellsByClassQueryVariables = {
  className: string,
};

export type GetSpellsByClassQuery = {
  getSpellsByClass?:  Array< {
    __typename: "Spell",
    name: string,
    level: number,
    type?: string | null,
    ongoing?: boolean | null,
    description: string,
    class?:  {
      __typename: "Class",
      name: string,
      description: string,
      isPublic?: boolean | null,
      isCore?: boolean | null,
    } | null,
  } | null > | null,
};

export type GetDiceTypesQuery = {
  getDiceTypes?:  {
    __typename: "DiceType",
    name?: string | null,
  } | null,
};

export type GetRacesQuery = {
  getRaces?:  {
    __typename: "Race",
    name?: string | null,
    description?: string | null,
    tags?:  Array< {
      __typename: "Tag",
      name?: string | null,
      description?: string | null,
    } | null > | null,
    class?:  Array< {
      __typename: "Class",
      name: string,
      description: string,
      isPublic?: boolean | null,
      isCore?: boolean | null,
    } | null > | null,
  } | null,
};

export type GetMovesQuery = {
  getMoves?:  {
    __typename: "Move",
    name: string,
    description: string,
    class?:  {
      __typename: "Class",
      name: string,
      description: string,
      isPublic?: boolean | null,
      isCore?: boolean | null,
    } | null,
  } | null,
};

export type GetMovesByClassQueryVariables = {
  className: string,
};

export type GetMovesByClassQuery = {
  getMovesByClass?:  Array< {
    __typename: "Move",
    name: string,
    description: string,
    class?:  {
      __typename: "Class",
      name: string,
      description: string,
      isPublic?: boolean | null,
      isCore?: boolean | null,
    } | null,
  } | null > | null,
};
