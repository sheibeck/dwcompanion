/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCharacterInput = {
  userId: string,
  id?: string | null,
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
  spells?: Array< CharacterSpellInput | null > | null,
  gear?: Array< CharacterGearInput | null > | null,
  sixToTenMoves?: Array< CharacterMoveInput | null > | null,
  twoToTenMoves?: Array< CharacterMoveInput | null > | null,
  startingMoves?: Array< CharacterMoveInput | null > | null,
  bonds?: Array< CharacterBondInput | null > | null,
  abilityscores?: Array< CharacterAbilityScoreInput | null > | null,
  race?: CharacterRaceInput | null,
  alignment?: CharacterAlignmentInput | null,
  tags?: Array< string | null > | null,
  conditionTypes?: Array< CharacterConditionsInput | null > | null,
  look?: CharacterLookInput | null,
  class?: CharacterClassInput | null,
  notes?: string | null,
};

export type CharacterSpellInput = {
  id: string,
  spell: SpellInput,
  selected?: boolean | null,
  tags?: Array< string | null > | null,
};

export type SpellInput = {
  id: string,
  name: string,
  level: number,
  type: string,
  ongoing?: boolean | null,
  description: string,
  source: SourceInput,
  class: ClassInput,
};

export type SourceInput = {
  id: string,
  name: string,
};

export type ClassInput = {
  id: string,
  name: string,
  description: string,
  source: SourceInput,
  damageDiceType?: DiceTypeInput | null,
};

export type DiceTypeInput = {
  id: string,
  name?: string | null,
};

export type CharacterGearInput = {
  id: string,
  gear: GearInput,
  uses?: number | null,
  tags?: Array< string | null > | null,
};

export type GearInput = {
  id: string,
  description: string,
  weight: number,
  uses?: number | null,
  tags?: Array< string | null > | null,
};

export type CharacterMoveInput = {
  id: string,
  selected?: boolean | null,
  move: MoveInput,
};

export type MoveInput = {
  id: string,
  description: string,
  class: ClassInput,
};

export type CharacterBondInput = {
  id: string,
  description?: string | null,
  bond: BondInput,
  selected?: boolean | null,
};

export type BondInput = {
  id: string,
  description?: string | null,
  class: ClassInput,
};

export type CharacterAbilityScoreInput = {
  abilityScore: AbilityScoreInput,
  value: string,
  bonus: number,
  tags?: Array< string | null > | null,
};

export type AbilityScoreInput = {
  id: string,
  name: string,
  shortName: string,
  debility: string,
  debilityPenalty: string,
};

export type CharacterRaceInput = {
  id: string,
  race: RaceInput,
};

export type RaceInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  class?: ClassInput | null,
  source: SourceInput,
};

export type CharacterAlignmentInput = {
  id: string,
  alignment: AlignmentInput,
  selected?: boolean | null,
};

export type AlignmentInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  class: ClassInput,
};

export type CharacterConditionsInput = {
  id: string,
  conditionTypes?: Array< ConditionTypeInput | null > | null,
};

export type ConditionTypeInput = {
  id: string,
  name: string,
  conditions?: Array< ConditionInput | null > | null,
};

export type ConditionInput = {
  id: string,
  description: string,
  selected?: boolean | null,
};

export type CharacterLookInput = {
  id: string,
  look: Array< LookInput | null >,
};

export type LookInput = {
  id: string,
  name: string,
  description: string,
  class: ClassInput,
};

export type CharacterClassInput = {
  id: string,
  class: ClassInput,
};

export type ModelCharacterConditionInput = {
  userId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  level?: ModelIntInput | null,
  xp?: ModelIntInput | null,
  armor?: ModelIntInput | null,
  hitPointsMax?: ModelIntInput | null,
  hitPointsCurrent?: ModelIntInput | null,
  coin?: ModelIntInput | null,
  loadMax?: ModelIntInput | null,
  loadCurrent?: ModelIntInput | null,
  isPublic?: ModelBooleanInput | null,
  isCoreTemplate?: ModelBooleanInput | null,
  tags?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelCharacterConditionInput | null > | null,
  or?: Array< ModelCharacterConditionInput | null > | null,
  not?: ModelCharacterConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

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
  createdAt: string,
  updatedAt: string,
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

export type UpdateCharacterInput = {
  userId?: string | null,
  id: string,
  name?: string | null,
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
  spells?: Array< CharacterSpellInput | null > | null,
  gear?: Array< CharacterGearInput | null > | null,
  sixToTenMoves?: Array< CharacterMoveInput | null > | null,
  twoToTenMoves?: Array< CharacterMoveInput | null > | null,
  startingMoves?: Array< CharacterMoveInput | null > | null,
  bonds?: Array< CharacterBondInput | null > | null,
  abilityscores?: Array< CharacterAbilityScoreInput | null > | null,
  race?: CharacterRaceInput | null,
  alignment?: CharacterAlignmentInput | null,
  tags?: Array< string | null > | null,
  conditionTypes?: Array< CharacterConditionsInput | null > | null,
  look?: CharacterLookInput | null,
  class?: CharacterClassInput | null,
  notes?: string | null,
};

export type DeleteCharacterInput = {
  id: string,
};

export type ModelCharacterFilterInput = {
  userId?: ModelIDInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  level?: ModelIntInput | null,
  xp?: ModelIntInput | null,
  armor?: ModelIntInput | null,
  hitPointsMax?: ModelIntInput | null,
  hitPointsCurrent?: ModelIntInput | null,
  coin?: ModelIntInput | null,
  loadMax?: ModelIntInput | null,
  loadCurrent?: ModelIntInput | null,
  isPublic?: ModelBooleanInput | null,
  isCoreTemplate?: ModelBooleanInput | null,
  tags?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelCharacterFilterInput | null > | null,
  or?: Array< ModelCharacterFilterInput | null > | null,
  not?: ModelCharacterFilterInput | null,
};

export type ModelCharacterConnection = {
  __typename: "ModelCharacterConnection",
  items:  Array<Character | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionCharacterFilterInput = {
  userId?: ModelSubscriptionIDInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  level?: ModelSubscriptionIntInput | null,
  xp?: ModelSubscriptionIntInput | null,
  armor?: ModelSubscriptionIntInput | null,
  hitPointsMax?: ModelSubscriptionIntInput | null,
  hitPointsCurrent?: ModelSubscriptionIntInput | null,
  coin?: ModelSubscriptionIntInput | null,
  loadMax?: ModelSubscriptionIntInput | null,
  loadCurrent?: ModelSubscriptionIntInput | null,
  isPublic?: ModelSubscriptionBooleanInput | null,
  isCoreTemplate?: ModelSubscriptionBooleanInput | null,
  tags?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCharacterFilterInput | null > | null,
  or?: Array< ModelSubscriptionCharacterFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateCharacterMutationVariables = {
  input: CreateCharacterInput,
  condition?: ModelCharacterConditionInput | null,
};

export type CreateCharacterMutation = {
  createCharacter?:  {
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCharacterMutationVariables = {
  input: UpdateCharacterInput,
  condition?: ModelCharacterConditionInput | null,
};

export type UpdateCharacterMutation = {
  updateCharacter?:  {
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCharacterMutationVariables = {
  input: DeleteCharacterInput,
  condition?: ModelCharacterConditionInput | null,
};

export type DeleteCharacterMutation = {
  deleteCharacter?:  {
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCharacterQueryVariables = {
  id: string,
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCharactersQueryVariables = {
  filter?: ModelCharacterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCharactersQuery = {
  listCharacters?:  {
    __typename: "ModelCharacterConnection",
    items:  Array< {
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
      tags?: Array< string | null > | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCharacterSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterFilterInput | null,
};

export type OnCreateCharacterSubscription = {
  onCreateCharacter?:  {
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCharacterSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterFilterInput | null,
};

export type OnUpdateCharacterSubscription = {
  onUpdateCharacter?:  {
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCharacterSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterFilterInput | null,
};

export type OnDeleteCharacterSubscription = {
  onDeleteCharacter?:  {
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
    createdAt: string,
    updatedAt: string,
  } | null,
};
