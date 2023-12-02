/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
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

export type User = {
  __typename: "User",
  id: string,
  name: string,
  email: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateSourceInput = {
  id?: string | null,
  name: string,
};

export type ModelSourceConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelSourceConditionInput | null > | null,
  or?: Array< ModelSourceConditionInput | null > | null,
  not?: ModelSourceConditionInput | null,
};

export type Source = {
  __typename: "Source",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSourceInput = {
  id: string,
  name?: string | null,
};

export type DeleteSourceInput = {
  id: string,
};

export type CreateCharacterClassInput = {
  id?: string | null,
  characterClassClassId: string,
  characterClassCharacterId: string,
};

export type ModelCharacterClassConditionInput = {
  and?: Array< ModelCharacterClassConditionInput | null > | null,
  or?: Array< ModelCharacterClassConditionInput | null > | null,
  not?: ModelCharacterClassConditionInput | null,
  characterClassClassId?: ModelIDInput | null,
  characterClassCharacterId?: ModelIDInput | null,
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

export type CharacterClass = {
  __typename: "CharacterClass",
  id: string,
  character: Character,
  class: Class,
  createdAt: string,
  updatedAt: string,
  characterClassClassId: string,
  characterClassCharacterId: string,
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
  isTemplate?: boolean | null,
  spells?: ModelCharacterSpellConnection | null,
  gear?: ModelCharacterGearConnection | null,
  sixToTenMoves?: ModelCharacterMoveConnection | null,
  twoToTenMoves?: ModelCharacterMoveConnection | null,
  startingMoves?: ModelCharacterMoveConnection | null,
  bonds?: ModelCharacterBondConnection | null,
  abilityscores?: ModelCharacterAbilityScoreConnection | null,
  race?: CharacterRace | null,
  alignment?: CharacterAlignment | null,
  tags?: Array< string | null > | null,
  look?: CharacterLook | null,
  characterClassId?: string | null,
  class?: CharacterClass | null,
  notes?: string | null,
  createdAt: string,
  updatedAt: string,
  characterRaceId?: string | null,
  characterAlignmentId?: string | null,
  characterLookId?: string | null,
};

export type ModelCharacterSpellConnection = {
  __typename: "ModelCharacterSpellConnection",
  items:  Array<CharacterSpell | null >,
  nextToken?: string | null,
};

export type CharacterSpell = {
  __typename: "CharacterSpell",
  id: string,
  spell: Spell,
  selected?: boolean | null,
  tags?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
  characterSpellsId?: string | null,
  characterSpellSpellId: string,
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
  createdAt: string,
  updatedAt: string,
  spellSourceId: string,
  spellClassId: string,
};

export type Class = {
  __typename: "Class",
  id: string,
  name: string,
  description: string,
  source: Source,
  damageDiceType?: DiceType | null,
  createdAt: string,
  updatedAt: string,
  classSourceId: string,
  classDamageDiceTypeId?: string | null,
};

export type DiceType = {
  __typename: "DiceType",
  id: string,
  name?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCharacterGearConnection = {
  __typename: "ModelCharacterGearConnection",
  items:  Array<CharacterGear | null >,
  nextToken?: string | null,
};

export type CharacterGear = {
  __typename: "CharacterGear",
  id: string,
  gear: Gear,
  uses?: number | null,
  tags?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
  characterGearId?: string | null,
  characterGearGearId: string,
};

export type Gear = {
  __typename: "Gear",
  id: string,
  description: string,
  weight: number,
  uses?: number | null,
  tags?: Array< string | null > | null,
  source?: Source | null,
  createdAt: string,
  updatedAt: string,
  gearSourceId?: string | null,
};

export type ModelCharacterMoveConnection = {
  __typename: "ModelCharacterMoveConnection",
  items:  Array<CharacterMove | null >,
  nextToken?: string | null,
};

export type CharacterMove = {
  __typename: "CharacterMove",
  id: string,
  selected?: boolean | null,
  move: Move,
  createdAt: string,
  updatedAt: string,
  characterSixToTenMovesId?: string | null,
  characterTwoToTenMovesId?: string | null,
  characterStartingMovesId?: string | null,
  characterMoveMoveId: string,
};

export type Move = {
  __typename: "Move",
  id: string,
  description: string,
  class: Class,
  source?: Source | null,
  createdAt: string,
  updatedAt: string,
  moveClassId: string,
  moveSourceId?: string | null,
};

export type ModelCharacterBondConnection = {
  __typename: "ModelCharacterBondConnection",
  items:  Array<CharacterBond | null >,
  nextToken?: string | null,
};

export type CharacterBond = {
  __typename: "CharacterBond",
  id: string,
  description?: string | null,
  bond: Bond,
  selected?: boolean | null,
  createdAt: string,
  updatedAt: string,
  characterBondsId?: string | null,
  characterBondBondId: string,
};

export type Bond = {
  __typename: "Bond",
  id: string,
  description?: string | null,
  class: Class,
  createdAt: string,
  updatedAt: string,
  bondClassId: string,
};

export type ModelCharacterAbilityScoreConnection = {
  __typename: "ModelCharacterAbilityScoreConnection",
  items:  Array<CharacterAbilityScore | null >,
  nextToken?: string | null,
};

export type CharacterAbilityScore = {
  __typename: "CharacterAbilityScore",
  abilityScore: AbilityScore,
  id: string,
  value: string,
  bonus: number,
  tags?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
  characterAbilityscoresId?: string | null,
  characterAbilityScoreAbilityScoreId: string,
};

export type AbilityScore = {
  __typename: "AbilityScore",
  id: string,
  name: string,
  shortName: string,
  debility: string,
  debilityPenalty: string,
  createdAt: string,
  updatedAt: string,
};

export type CharacterRace = {
  __typename: "CharacterRace",
  id: string,
  race: Race,
  createdAt: string,
  updatedAt: string,
  characterRaceRaceId: string,
};

export type Race = {
  __typename: "Race",
  id: string,
  name?: string | null,
  description?: string | null,
  class?: Class | null,
  source: Source,
  createdAt: string,
  updatedAt: string,
  raceClassId?: string | null,
  raceSourceId: string,
};

export type CharacterAlignment = {
  __typename: "CharacterAlignment",
  id: string,
  alignment: Alignment,
  selected?: boolean | null,
  createdAt: string,
  updatedAt: string,
  characterAlignmentAlignmentId: string,
};

export type Alignment = {
  __typename: "Alignment",
  id: string,
  name?: string | null,
  description?: string | null,
  class: Class,
  createdAt: string,
  updatedAt: string,
  alignmentClassId: string,
};

export type CharacterLook = {
  __typename: "CharacterLook",
  id: string,
  look?: ModelLookConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelLookConnection = {
  __typename: "ModelLookConnection",
  items:  Array<Look | null >,
  nextToken?: string | null,
};

export type Look = {
  __typename: "Look",
  id: string,
  name: string,
  description: string,
  class: Class,
  createdAt: string,
  updatedAt: string,
  characterLookLookId: string,
  lookClassId: string,
};

export type UpdateCharacterClassInput = {
  id: string,
  characterClassClassId?: string | null,
  characterClassCharacterId?: string | null,
};

export type DeleteCharacterClassInput = {
  id: string,
};

export type CreateClassInput = {
  id?: string | null,
  name: string,
  description: string,
  classSourceId: string,
  classDamageDiceTypeId?: string | null,
};

export type ModelClassConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelClassConditionInput | null > | null,
  or?: Array< ModelClassConditionInput | null > | null,
  not?: ModelClassConditionInput | null,
  classSourceId?: ModelIDInput | null,
  classDamageDiceTypeId?: ModelIDInput | null,
};

export type UpdateClassInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  classSourceId?: string | null,
  classDamageDiceTypeId?: string | null,
};

export type DeleteClassInput = {
  id: string,
};

export type CreateSpellInput = {
  id?: string | null,
  name: string,
  level: number,
  type: string,
  ongoing?: boolean | null,
  description: string,
  spellSourceId: string,
  spellClassId: string,
};

export type ModelSpellConditionInput = {
  name?: ModelStringInput | null,
  level?: ModelIntInput | null,
  type?: ModelStringInput | null,
  ongoing?: ModelBooleanInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelSpellConditionInput | null > | null,
  or?: Array< ModelSpellConditionInput | null > | null,
  not?: ModelSpellConditionInput | null,
  spellSourceId?: ModelIDInput | null,
  spellClassId?: ModelIDInput | null,
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

export type UpdateSpellInput = {
  id: string,
  name?: string | null,
  level?: number | null,
  type?: string | null,
  ongoing?: boolean | null,
  description?: string | null,
  spellSourceId?: string | null,
  spellClassId?: string | null,
};

export type DeleteSpellInput = {
  id: string,
};

export type CreateCharacterSpellInput = {
  id?: string | null,
  selected?: boolean | null,
  tags?: Array< string | null > | null,
  characterSpellsId?: string | null,
  characterSpellSpellId: string,
};

export type ModelCharacterSpellConditionInput = {
  selected?: ModelBooleanInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelCharacterSpellConditionInput | null > | null,
  or?: Array< ModelCharacterSpellConditionInput | null > | null,
  not?: ModelCharacterSpellConditionInput | null,
  characterSpellsId?: ModelIDInput | null,
  characterSpellSpellId?: ModelIDInput | null,
};

export type UpdateCharacterSpellInput = {
  id: string,
  selected?: boolean | null,
  tags?: Array< string | null > | null,
  characterSpellsId?: string | null,
  characterSpellSpellId?: string | null,
};

export type DeleteCharacterSpellInput = {
  id: string,
};

export type CreateCharacterGearInput = {
  id?: string | null,
  uses?: number | null,
  tags?: Array< string | null > | null,
  characterGearId?: string | null,
  characterGearGearId: string,
};

export type ModelCharacterGearConditionInput = {
  uses?: ModelIntInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelCharacterGearConditionInput | null > | null,
  or?: Array< ModelCharacterGearConditionInput | null > | null,
  not?: ModelCharacterGearConditionInput | null,
  characterGearId?: ModelIDInput | null,
  characterGearGearId?: ModelIDInput | null,
};

export type UpdateCharacterGearInput = {
  id: string,
  uses?: number | null,
  tags?: Array< string | null > | null,
  characterGearId?: string | null,
  characterGearGearId?: string | null,
};

export type DeleteCharacterGearInput = {
  id: string,
};

export type CreateGearInput = {
  id?: string | null,
  description: string,
  weight: number,
  uses?: number | null,
  tags?: Array< string | null > | null,
  gearSourceId?: string | null,
};

export type ModelGearConditionInput = {
  description?: ModelStringInput | null,
  weight?: ModelIntInput | null,
  uses?: ModelIntInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelGearConditionInput | null > | null,
  or?: Array< ModelGearConditionInput | null > | null,
  not?: ModelGearConditionInput | null,
  gearSourceId?: ModelIDInput | null,
};

export type UpdateGearInput = {
  id: string,
  description?: string | null,
  weight?: number | null,
  uses?: number | null,
  tags?: Array< string | null > | null,
  gearSourceId?: string | null,
};

export type DeleteGearInput = {
  id: string,
};

export type CreateCharacterMoveInput = {
  id?: string | null,
  selected?: boolean | null,
  characterSixToTenMovesId?: string | null,
  characterTwoToTenMovesId?: string | null,
  characterStartingMovesId?: string | null,
  characterMoveMoveId: string,
};

export type ModelCharacterMoveConditionInput = {
  selected?: ModelBooleanInput | null,
  and?: Array< ModelCharacterMoveConditionInput | null > | null,
  or?: Array< ModelCharacterMoveConditionInput | null > | null,
  not?: ModelCharacterMoveConditionInput | null,
  characterSixToTenMovesId?: ModelIDInput | null,
  characterTwoToTenMovesId?: ModelIDInput | null,
  characterStartingMovesId?: ModelIDInput | null,
  characterMoveMoveId?: ModelIDInput | null,
};

export type UpdateCharacterMoveInput = {
  id: string,
  selected?: boolean | null,
  characterSixToTenMovesId?: string | null,
  characterTwoToTenMovesId?: string | null,
  characterStartingMovesId?: string | null,
  characterMoveMoveId?: string | null,
};

export type DeleteCharacterMoveInput = {
  id: string,
};

export type CreateMoveInput = {
  id?: string | null,
  description: string,
  moveClassId: string,
  moveSourceId?: string | null,
};

export type ModelMoveConditionInput = {
  description?: ModelStringInput | null,
  and?: Array< ModelMoveConditionInput | null > | null,
  or?: Array< ModelMoveConditionInput | null > | null,
  not?: ModelMoveConditionInput | null,
  moveClassId?: ModelIDInput | null,
  moveSourceId?: ModelIDInput | null,
};

export type UpdateMoveInput = {
  id: string,
  description?: string | null,
  moveClassId?: string | null,
  moveSourceId?: string | null,
};

export type DeleteMoveInput = {
  id: string,
};

export type CreateCharacterBondInput = {
  id?: string | null,
  description?: string | null,
  selected?: boolean | null,
  characterBondsId?: string | null,
  characterBondBondId: string,
};

export type ModelCharacterBondConditionInput = {
  description?: ModelStringInput | null,
  selected?: ModelBooleanInput | null,
  and?: Array< ModelCharacterBondConditionInput | null > | null,
  or?: Array< ModelCharacterBondConditionInput | null > | null,
  not?: ModelCharacterBondConditionInput | null,
  characterBondsId?: ModelIDInput | null,
  characterBondBondId?: ModelIDInput | null,
};

export type UpdateCharacterBondInput = {
  id: string,
  description?: string | null,
  selected?: boolean | null,
  characterBondsId?: string | null,
  characterBondBondId?: string | null,
};

export type DeleteCharacterBondInput = {
  id: string,
};

export type CreateBondInput = {
  id?: string | null,
  description?: string | null,
  bondClassId: string,
};

export type ModelBondConditionInput = {
  description?: ModelStringInput | null,
  and?: Array< ModelBondConditionInput | null > | null,
  or?: Array< ModelBondConditionInput | null > | null,
  not?: ModelBondConditionInput | null,
  bondClassId?: ModelIDInput | null,
};

export type UpdateBondInput = {
  id: string,
  description?: string | null,
  bondClassId?: string | null,
};

export type DeleteBondInput = {
  id: string,
};

export type CreateCharacterAbilityScoreInput = {
  id?: string | null,
  value: string,
  bonus: number,
  tags?: Array< string | null > | null,
  characterAbilityscoresId?: string | null,
  characterAbilityScoreAbilityScoreId: string,
};

export type ModelCharacterAbilityScoreConditionInput = {
  value?: ModelStringInput | null,
  bonus?: ModelIntInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelCharacterAbilityScoreConditionInput | null > | null,
  or?: Array< ModelCharacterAbilityScoreConditionInput | null > | null,
  not?: ModelCharacterAbilityScoreConditionInput | null,
  characterAbilityscoresId?: ModelIDInput | null,
  characterAbilityScoreAbilityScoreId?: ModelIDInput | null,
};

export type UpdateCharacterAbilityScoreInput = {
  id: string,
  value?: string | null,
  bonus?: number | null,
  tags?: Array< string | null > | null,
  characterAbilityscoresId?: string | null,
  characterAbilityScoreAbilityScoreId?: string | null,
};

export type DeleteCharacterAbilityScoreInput = {
  id: string,
};

export type CreateAbilityScoreInput = {
  id?: string | null,
  name: string,
  shortName: string,
  debility: string,
  debilityPenalty: string,
};

export type ModelAbilityScoreConditionInput = {
  name?: ModelStringInput | null,
  shortName?: ModelStringInput | null,
  debility?: ModelStringInput | null,
  debilityPenalty?: ModelStringInput | null,
  and?: Array< ModelAbilityScoreConditionInput | null > | null,
  or?: Array< ModelAbilityScoreConditionInput | null > | null,
  not?: ModelAbilityScoreConditionInput | null,
};

export type UpdateAbilityScoreInput = {
  id: string,
  name?: string | null,
  shortName?: string | null,
  debility?: string | null,
  debilityPenalty?: string | null,
};

export type DeleteAbilityScoreInput = {
  id: string,
};

export type CreateCharacterRaceInput = {
  id?: string | null,
  characterRaceRaceId: string,
};

export type ModelCharacterRaceConditionInput = {
  and?: Array< ModelCharacterRaceConditionInput | null > | null,
  or?: Array< ModelCharacterRaceConditionInput | null > | null,
  not?: ModelCharacterRaceConditionInput | null,
  characterRaceRaceId?: ModelIDInput | null,
};

export type UpdateCharacterRaceInput = {
  id: string,
  characterRaceRaceId?: string | null,
};

export type DeleteCharacterRaceInput = {
  id: string,
};

export type CreateRaceInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  raceClassId?: string | null,
  raceSourceId: string,
};

export type ModelRaceConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelRaceConditionInput | null > | null,
  or?: Array< ModelRaceConditionInput | null > | null,
  not?: ModelRaceConditionInput | null,
  raceClassId?: ModelIDInput | null,
  raceSourceId?: ModelIDInput | null,
};

export type UpdateRaceInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  raceClassId?: string | null,
  raceSourceId?: string | null,
};

export type DeleteRaceInput = {
  id: string,
};

export type CreateCharacterAlignmentInput = {
  id?: string | null,
  selected?: boolean | null,
  characterAlignmentAlignmentId: string,
};

export type ModelCharacterAlignmentConditionInput = {
  selected?: ModelBooleanInput | null,
  and?: Array< ModelCharacterAlignmentConditionInput | null > | null,
  or?: Array< ModelCharacterAlignmentConditionInput | null > | null,
  not?: ModelCharacterAlignmentConditionInput | null,
  characterAlignmentAlignmentId?: ModelIDInput | null,
};

export type UpdateCharacterAlignmentInput = {
  id: string,
  selected?: boolean | null,
  characterAlignmentAlignmentId?: string | null,
};

export type DeleteCharacterAlignmentInput = {
  id: string,
};

export type CreateAlignmentInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  alignmentClassId: string,
};

export type ModelAlignmentConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelAlignmentConditionInput | null > | null,
  or?: Array< ModelAlignmentConditionInput | null > | null,
  not?: ModelAlignmentConditionInput | null,
  alignmentClassId?: ModelIDInput | null,
};

export type UpdateAlignmentInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  alignmentClassId?: string | null,
};

export type DeleteAlignmentInput = {
  id: string,
};

export type CreateDiceTypeInput = {
  id?: string | null,
  name?: string | null,
};

export type ModelDiceTypeConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelDiceTypeConditionInput | null > | null,
  or?: Array< ModelDiceTypeConditionInput | null > | null,
  not?: ModelDiceTypeConditionInput | null,
};

export type UpdateDiceTypeInput = {
  id: string,
  name?: string | null,
};

export type DeleteDiceTypeInput = {
  id: string,
};

export type CreateCharacterLookInput = {
  id?: string | null,
};

export type ModelCharacterLookConditionInput = {
  and?: Array< ModelCharacterLookConditionInput | null > | null,
  or?: Array< ModelCharacterLookConditionInput | null > | null,
  not?: ModelCharacterLookConditionInput | null,
};

export type UpdateCharacterLookInput = {
  id: string,
};

export type DeleteCharacterLookInput = {
  id: string,
};

export type CreateLookInput = {
  id?: string | null,
  name: string,
  description: string,
  characterLookLookId: string,
  lookClassId: string,
};

export type ModelLookConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelLookConditionInput | null > | null,
  or?: Array< ModelLookConditionInput | null > | null,
  not?: ModelLookConditionInput | null,
  characterLookLookId?: ModelIDInput | null,
  lookClassId?: ModelIDInput | null,
};

export type UpdateLookInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  characterLookLookId?: string | null,
  lookClassId?: string | null,
};

export type DeleteLookInput = {
  id: string,
};

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
  isTemplate?: boolean | null,
  tags?: Array< string | null > | null,
  characterClassId?: string | null,
  notes?: string | null,
  characterRaceId?: string | null,
  characterAlignmentId?: string | null,
  characterLookId?: string | null,
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
  isTemplate?: ModelBooleanInput | null,
  tags?: ModelStringInput | null,
  characterClassId?: ModelIDInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelCharacterConditionInput | null > | null,
  or?: Array< ModelCharacterConditionInput | null > | null,
  not?: ModelCharacterConditionInput | null,
  characterRaceId?: ModelIDInput | null,
  characterAlignmentId?: ModelIDInput | null,
  characterLookId?: ModelIDInput | null,
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
  isTemplate?: boolean | null,
  tags?: Array< string | null > | null,
  characterClassId?: string | null,
  notes?: string | null,
  characterRaceId?: string | null,
  characterAlignmentId?: string | null,
  characterLookId?: string | null,
};

export type DeleteCharacterInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelSourceFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelSourceFilterInput | null > | null,
  or?: Array< ModelSourceFilterInput | null > | null,
  not?: ModelSourceFilterInput | null,
};

export type ModelSourceConnection = {
  __typename: "ModelSourceConnection",
  items:  Array<Source | null >,
  nextToken?: string | null,
};

export type ModelCharacterClassFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelCharacterClassFilterInput | null > | null,
  or?: Array< ModelCharacterClassFilterInput | null > | null,
  not?: ModelCharacterClassFilterInput | null,
  characterClassClassId?: ModelIDInput | null,
  characterClassCharacterId?: ModelIDInput | null,
};

export type ModelCharacterClassConnection = {
  __typename: "ModelCharacterClassConnection",
  items:  Array<CharacterClass | null >,
  nextToken?: string | null,
};

export type ModelClassFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelClassFilterInput | null > | null,
  or?: Array< ModelClassFilterInput | null > | null,
  not?: ModelClassFilterInput | null,
  classSourceId?: ModelIDInput | null,
  classDamageDiceTypeId?: ModelIDInput | null,
};

export type ModelClassConnection = {
  __typename: "ModelClassConnection",
  items:  Array<Class | null >,
  nextToken?: string | null,
};

export type ModelSpellFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  level?: ModelIntInput | null,
  type?: ModelStringInput | null,
  ongoing?: ModelBooleanInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelSpellFilterInput | null > | null,
  or?: Array< ModelSpellFilterInput | null > | null,
  not?: ModelSpellFilterInput | null,
  spellSourceId?: ModelIDInput | null,
  spellClassId?: ModelIDInput | null,
};

export type ModelSpellConnection = {
  __typename: "ModelSpellConnection",
  items:  Array<Spell | null >,
  nextToken?: string | null,
};

export type ModelCharacterSpellFilterInput = {
  id?: ModelIDInput | null,
  selected?: ModelBooleanInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelCharacterSpellFilterInput | null > | null,
  or?: Array< ModelCharacterSpellFilterInput | null > | null,
  not?: ModelCharacterSpellFilterInput | null,
  characterSpellsId?: ModelIDInput | null,
  characterSpellSpellId?: ModelIDInput | null,
};

export type ModelCharacterGearFilterInput = {
  id?: ModelIDInput | null,
  uses?: ModelIntInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelCharacterGearFilterInput | null > | null,
  or?: Array< ModelCharacterGearFilterInput | null > | null,
  not?: ModelCharacterGearFilterInput | null,
  characterGearId?: ModelIDInput | null,
  characterGearGearId?: ModelIDInput | null,
};

export type ModelGearFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  weight?: ModelIntInput | null,
  uses?: ModelIntInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelGearFilterInput | null > | null,
  or?: Array< ModelGearFilterInput | null > | null,
  not?: ModelGearFilterInput | null,
  gearSourceId?: ModelIDInput | null,
};

export type ModelGearConnection = {
  __typename: "ModelGearConnection",
  items:  Array<Gear | null >,
  nextToken?: string | null,
};

export type ModelCharacterMoveFilterInput = {
  id?: ModelIDInput | null,
  selected?: ModelBooleanInput | null,
  and?: Array< ModelCharacterMoveFilterInput | null > | null,
  or?: Array< ModelCharacterMoveFilterInput | null > | null,
  not?: ModelCharacterMoveFilterInput | null,
  characterSixToTenMovesId?: ModelIDInput | null,
  characterTwoToTenMovesId?: ModelIDInput | null,
  characterStartingMovesId?: ModelIDInput | null,
  characterMoveMoveId?: ModelIDInput | null,
};

export type ModelMoveFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelMoveFilterInput | null > | null,
  or?: Array< ModelMoveFilterInput | null > | null,
  not?: ModelMoveFilterInput | null,
  moveClassId?: ModelIDInput | null,
  moveSourceId?: ModelIDInput | null,
};

export type ModelMoveConnection = {
  __typename: "ModelMoveConnection",
  items:  Array<Move | null >,
  nextToken?: string | null,
};

export type ModelCharacterBondFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  selected?: ModelBooleanInput | null,
  and?: Array< ModelCharacterBondFilterInput | null > | null,
  or?: Array< ModelCharacterBondFilterInput | null > | null,
  not?: ModelCharacterBondFilterInput | null,
  characterBondsId?: ModelIDInput | null,
  characterBondBondId?: ModelIDInput | null,
};

export type ModelBondFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelBondFilterInput | null > | null,
  or?: Array< ModelBondFilterInput | null > | null,
  not?: ModelBondFilterInput | null,
  bondClassId?: ModelIDInput | null,
};

export type ModelBondConnection = {
  __typename: "ModelBondConnection",
  items:  Array<Bond | null >,
  nextToken?: string | null,
};

export type ModelCharacterAbilityScoreFilterInput = {
  id?: ModelIDInput | null,
  value?: ModelStringInput | null,
  bonus?: ModelIntInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelCharacterAbilityScoreFilterInput | null > | null,
  or?: Array< ModelCharacterAbilityScoreFilterInput | null > | null,
  not?: ModelCharacterAbilityScoreFilterInput | null,
  characterAbilityscoresId?: ModelIDInput | null,
  characterAbilityScoreAbilityScoreId?: ModelIDInput | null,
};

export type ModelAbilityScoreFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  shortName?: ModelStringInput | null,
  debility?: ModelStringInput | null,
  debilityPenalty?: ModelStringInput | null,
  and?: Array< ModelAbilityScoreFilterInput | null > | null,
  or?: Array< ModelAbilityScoreFilterInput | null > | null,
  not?: ModelAbilityScoreFilterInput | null,
};

export type ModelAbilityScoreConnection = {
  __typename: "ModelAbilityScoreConnection",
  items:  Array<AbilityScore | null >,
  nextToken?: string | null,
};

export type ModelCharacterRaceFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelCharacterRaceFilterInput | null > | null,
  or?: Array< ModelCharacterRaceFilterInput | null > | null,
  not?: ModelCharacterRaceFilterInput | null,
  characterRaceRaceId?: ModelIDInput | null,
};

export type ModelCharacterRaceConnection = {
  __typename: "ModelCharacterRaceConnection",
  items:  Array<CharacterRace | null >,
  nextToken?: string | null,
};

export type ModelRaceFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelRaceFilterInput | null > | null,
  or?: Array< ModelRaceFilterInput | null > | null,
  not?: ModelRaceFilterInput | null,
  raceClassId?: ModelIDInput | null,
  raceSourceId?: ModelIDInput | null,
};

export type ModelRaceConnection = {
  __typename: "ModelRaceConnection",
  items:  Array<Race | null >,
  nextToken?: string | null,
};

export type ModelCharacterAlignmentFilterInput = {
  id?: ModelIDInput | null,
  selected?: ModelBooleanInput | null,
  and?: Array< ModelCharacterAlignmentFilterInput | null > | null,
  or?: Array< ModelCharacterAlignmentFilterInput | null > | null,
  not?: ModelCharacterAlignmentFilterInput | null,
  characterAlignmentAlignmentId?: ModelIDInput | null,
};

export type ModelCharacterAlignmentConnection = {
  __typename: "ModelCharacterAlignmentConnection",
  items:  Array<CharacterAlignment | null >,
  nextToken?: string | null,
};

export type ModelAlignmentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelAlignmentFilterInput | null > | null,
  or?: Array< ModelAlignmentFilterInput | null > | null,
  not?: ModelAlignmentFilterInput | null,
  alignmentClassId?: ModelIDInput | null,
};

export type ModelAlignmentConnection = {
  __typename: "ModelAlignmentConnection",
  items:  Array<Alignment | null >,
  nextToken?: string | null,
};

export type ModelDiceTypeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelDiceTypeFilterInput | null > | null,
  or?: Array< ModelDiceTypeFilterInput | null > | null,
  not?: ModelDiceTypeFilterInput | null,
};

export type ModelDiceTypeConnection = {
  __typename: "ModelDiceTypeConnection",
  items:  Array<DiceType | null >,
  nextToken?: string | null,
};

export type ModelCharacterLookFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelCharacterLookFilterInput | null > | null,
  or?: Array< ModelCharacterLookFilterInput | null > | null,
  not?: ModelCharacterLookFilterInput | null,
};

export type ModelCharacterLookConnection = {
  __typename: "ModelCharacterLookConnection",
  items:  Array<CharacterLook | null >,
  nextToken?: string | null,
};

export type ModelLookFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelLookFilterInput | null > | null,
  or?: Array< ModelLookFilterInput | null > | null,
  not?: ModelLookFilterInput | null,
  characterLookLookId?: ModelIDInput | null,
  lookClassId?: ModelIDInput | null,
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
  isTemplate?: ModelBooleanInput | null,
  tags?: ModelStringInput | null,
  characterClassId?: ModelIDInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelCharacterFilterInput | null > | null,
  or?: Array< ModelCharacterFilterInput | null > | null,
  not?: ModelCharacterFilterInput | null,
  characterRaceId?: ModelIDInput | null,
  characterAlignmentId?: ModelIDInput | null,
  characterLookId?: ModelIDInput | null,
};

export type ModelCharacterConnection = {
  __typename: "ModelCharacterConnection",
  items:  Array<Character | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
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

export type ModelSubscriptionSourceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSourceFilterInput | null > | null,
  or?: Array< ModelSubscriptionSourceFilterInput | null > | null,
};

export type ModelSubscriptionCharacterClassFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCharacterClassFilterInput | null > | null,
  or?: Array< ModelSubscriptionCharacterClassFilterInput | null > | null,
};

export type ModelSubscriptionClassFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionClassFilterInput | null > | null,
  or?: Array< ModelSubscriptionClassFilterInput | null > | null,
};

export type ModelSubscriptionSpellFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  level?: ModelSubscriptionIntInput | null,
  type?: ModelSubscriptionStringInput | null,
  ongoing?: ModelSubscriptionBooleanInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSpellFilterInput | null > | null,
  or?: Array< ModelSubscriptionSpellFilterInput | null > | null,
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

export type ModelSubscriptionCharacterSpellFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  selected?: ModelSubscriptionBooleanInput | null,
  tags?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCharacterSpellFilterInput | null > | null,
  or?: Array< ModelSubscriptionCharacterSpellFilterInput | null > | null,
};

export type ModelSubscriptionCharacterGearFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  uses?: ModelSubscriptionIntInput | null,
  tags?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCharacterGearFilterInput | null > | null,
  or?: Array< ModelSubscriptionCharacterGearFilterInput | null > | null,
};

export type ModelSubscriptionGearFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  weight?: ModelSubscriptionIntInput | null,
  uses?: ModelSubscriptionIntInput | null,
  tags?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGearFilterInput | null > | null,
  or?: Array< ModelSubscriptionGearFilterInput | null > | null,
};

export type ModelSubscriptionCharacterMoveFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  selected?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionCharacterMoveFilterInput | null > | null,
  or?: Array< ModelSubscriptionCharacterMoveFilterInput | null > | null,
};

export type ModelSubscriptionMoveFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMoveFilterInput | null > | null,
  or?: Array< ModelSubscriptionMoveFilterInput | null > | null,
};

export type ModelSubscriptionCharacterBondFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  selected?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionCharacterBondFilterInput | null > | null,
  or?: Array< ModelSubscriptionCharacterBondFilterInput | null > | null,
};

export type ModelSubscriptionBondFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBondFilterInput | null > | null,
  or?: Array< ModelSubscriptionBondFilterInput | null > | null,
};

export type ModelSubscriptionCharacterAbilityScoreFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  value?: ModelSubscriptionStringInput | null,
  bonus?: ModelSubscriptionIntInput | null,
  tags?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCharacterAbilityScoreFilterInput | null > | null,
  or?: Array< ModelSubscriptionCharacterAbilityScoreFilterInput | null > | null,
};

export type ModelSubscriptionAbilityScoreFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  shortName?: ModelSubscriptionStringInput | null,
  debility?: ModelSubscriptionStringInput | null,
  debilityPenalty?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAbilityScoreFilterInput | null > | null,
  or?: Array< ModelSubscriptionAbilityScoreFilterInput | null > | null,
};

export type ModelSubscriptionCharacterRaceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCharacterRaceFilterInput | null > | null,
  or?: Array< ModelSubscriptionCharacterRaceFilterInput | null > | null,
};

export type ModelSubscriptionRaceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRaceFilterInput | null > | null,
  or?: Array< ModelSubscriptionRaceFilterInput | null > | null,
};

export type ModelSubscriptionCharacterAlignmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  selected?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionCharacterAlignmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCharacterAlignmentFilterInput | null > | null,
};

export type ModelSubscriptionAlignmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAlignmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionAlignmentFilterInput | null > | null,
};

export type ModelSubscriptionDiceTypeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDiceTypeFilterInput | null > | null,
  or?: Array< ModelSubscriptionDiceTypeFilterInput | null > | null,
};

export type ModelSubscriptionCharacterLookFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCharacterLookFilterInput | null > | null,
  or?: Array< ModelSubscriptionCharacterLookFilterInput | null > | null,
};

export type ModelSubscriptionLookFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLookFilterInput | null > | null,
  or?: Array< ModelSubscriptionLookFilterInput | null > | null,
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
  isTemplate?: ModelSubscriptionBooleanInput | null,
  tags?: ModelSubscriptionStringInput | null,
  characterClassId?: ModelSubscriptionIDInput | null,
  notes?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCharacterFilterInput | null > | null,
  or?: Array< ModelSubscriptionCharacterFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSourceMutationVariables = {
  input: CreateSourceInput,
  condition?: ModelSourceConditionInput | null,
};

export type CreateSourceMutation = {
  createSource?:  {
    __typename: "Source",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSourceMutationVariables = {
  input: UpdateSourceInput,
  condition?: ModelSourceConditionInput | null,
};

export type UpdateSourceMutation = {
  updateSource?:  {
    __typename: "Source",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSourceMutationVariables = {
  input: DeleteSourceInput,
  condition?: ModelSourceConditionInput | null,
};

export type DeleteSourceMutation = {
  deleteSource?:  {
    __typename: "Source",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCharacterClassMutationVariables = {
  input: CreateCharacterClassInput,
  condition?: ModelCharacterClassConditionInput | null,
};

export type CreateCharacterClassMutation = {
  createCharacterClass?:  {
    __typename: "CharacterClass",
    id: string,
    character:  {
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
      isTemplate?: boolean | null,
      tags?: Array< string | null > | null,
      characterClassId?: string | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      characterRaceId?: string | null,
      characterAlignmentId?: string | null,
      characterLookId?: string | null,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    characterClassClassId: string,
    characterClassCharacterId: string,
  } | null,
};

export type UpdateCharacterClassMutationVariables = {
  input: UpdateCharacterClassInput,
  condition?: ModelCharacterClassConditionInput | null,
};

export type UpdateCharacterClassMutation = {
  updateCharacterClass?:  {
    __typename: "CharacterClass",
    id: string,
    character:  {
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
      isTemplate?: boolean | null,
      tags?: Array< string | null > | null,
      characterClassId?: string | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      characterRaceId?: string | null,
      characterAlignmentId?: string | null,
      characterLookId?: string | null,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    characterClassClassId: string,
    characterClassCharacterId: string,
  } | null,
};

export type DeleteCharacterClassMutationVariables = {
  input: DeleteCharacterClassInput,
  condition?: ModelCharacterClassConditionInput | null,
};

export type DeleteCharacterClassMutation = {
  deleteCharacterClass?:  {
    __typename: "CharacterClass",
    id: string,
    character:  {
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
      isTemplate?: boolean | null,
      tags?: Array< string | null > | null,
      characterClassId?: string | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      characterRaceId?: string | null,
      characterAlignmentId?: string | null,
      characterLookId?: string | null,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    characterClassClassId: string,
    characterClassCharacterId: string,
  } | null,
};

export type CreateClassMutationVariables = {
  input: CreateClassInput,
  condition?: ModelClassConditionInput | null,
};

export type CreateClassMutation = {
  createClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    description: string,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    damageDiceType?:  {
      __typename: "DiceType",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    classSourceId: string,
    classDamageDiceTypeId?: string | null,
  } | null,
};

export type UpdateClassMutationVariables = {
  input: UpdateClassInput,
  condition?: ModelClassConditionInput | null,
};

export type UpdateClassMutation = {
  updateClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    description: string,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    damageDiceType?:  {
      __typename: "DiceType",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    classSourceId: string,
    classDamageDiceTypeId?: string | null,
  } | null,
};

export type DeleteClassMutationVariables = {
  input: DeleteClassInput,
  condition?: ModelClassConditionInput | null,
};

export type DeleteClassMutation = {
  deleteClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    description: string,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    damageDiceType?:  {
      __typename: "DiceType",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    classSourceId: string,
    classDamageDiceTypeId?: string | null,
  } | null,
};

export type CreateSpellMutationVariables = {
  input: CreateSpellInput,
  condition?: ModelSpellConditionInput | null,
};

export type CreateSpellMutation = {
  createSpell?:  {
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
      createdAt: string,
      updatedAt: string,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    spellSourceId: string,
    spellClassId: string,
  } | null,
};

export type UpdateSpellMutationVariables = {
  input: UpdateSpellInput,
  condition?: ModelSpellConditionInput | null,
};

export type UpdateSpellMutation = {
  updateSpell?:  {
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
      createdAt: string,
      updatedAt: string,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    spellSourceId: string,
    spellClassId: string,
  } | null,
};

export type DeleteSpellMutationVariables = {
  input: DeleteSpellInput,
  condition?: ModelSpellConditionInput | null,
};

export type DeleteSpellMutation = {
  deleteSpell?:  {
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
      createdAt: string,
      updatedAt: string,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    spellSourceId: string,
    spellClassId: string,
  } | null,
};

export type CreateCharacterSpellMutationVariables = {
  input: CreateCharacterSpellInput,
  condition?: ModelCharacterSpellConditionInput | null,
};

export type CreateCharacterSpellMutation = {
  createCharacterSpell?:  {
    __typename: "CharacterSpell",
    id: string,
    spell:  {
      __typename: "Spell",
      id: string,
      name: string,
      level: number,
      type: string,
      ongoing?: boolean | null,
      description: string,
      createdAt: string,
      updatedAt: string,
      spellSourceId: string,
      spellClassId: string,
    },
    selected?: boolean | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    characterSpellsId?: string | null,
    characterSpellSpellId: string,
  } | null,
};

export type UpdateCharacterSpellMutationVariables = {
  input: UpdateCharacterSpellInput,
  condition?: ModelCharacterSpellConditionInput | null,
};

export type UpdateCharacterSpellMutation = {
  updateCharacterSpell?:  {
    __typename: "CharacterSpell",
    id: string,
    spell:  {
      __typename: "Spell",
      id: string,
      name: string,
      level: number,
      type: string,
      ongoing?: boolean | null,
      description: string,
      createdAt: string,
      updatedAt: string,
      spellSourceId: string,
      spellClassId: string,
    },
    selected?: boolean | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    characterSpellsId?: string | null,
    characterSpellSpellId: string,
  } | null,
};

export type DeleteCharacterSpellMutationVariables = {
  input: DeleteCharacterSpellInput,
  condition?: ModelCharacterSpellConditionInput | null,
};

export type DeleteCharacterSpellMutation = {
  deleteCharacterSpell?:  {
    __typename: "CharacterSpell",
    id: string,
    spell:  {
      __typename: "Spell",
      id: string,
      name: string,
      level: number,
      type: string,
      ongoing?: boolean | null,
      description: string,
      createdAt: string,
      updatedAt: string,
      spellSourceId: string,
      spellClassId: string,
    },
    selected?: boolean | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    characterSpellsId?: string | null,
    characterSpellSpellId: string,
  } | null,
};

export type CreateCharacterGearMutationVariables = {
  input: CreateCharacterGearInput,
  condition?: ModelCharacterGearConditionInput | null,
};

export type CreateCharacterGearMutation = {
  createCharacterGear?:  {
    __typename: "CharacterGear",
    id: string,
    gear:  {
      __typename: "Gear",
      id: string,
      description: string,
      weight: number,
      uses?: number | null,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      gearSourceId?: string | null,
    },
    uses?: number | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    characterGearId?: string | null,
    characterGearGearId: string,
  } | null,
};

export type UpdateCharacterGearMutationVariables = {
  input: UpdateCharacterGearInput,
  condition?: ModelCharacterGearConditionInput | null,
};

export type UpdateCharacterGearMutation = {
  updateCharacterGear?:  {
    __typename: "CharacterGear",
    id: string,
    gear:  {
      __typename: "Gear",
      id: string,
      description: string,
      weight: number,
      uses?: number | null,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      gearSourceId?: string | null,
    },
    uses?: number | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    characterGearId?: string | null,
    characterGearGearId: string,
  } | null,
};

export type DeleteCharacterGearMutationVariables = {
  input: DeleteCharacterGearInput,
  condition?: ModelCharacterGearConditionInput | null,
};

export type DeleteCharacterGearMutation = {
  deleteCharacterGear?:  {
    __typename: "CharacterGear",
    id: string,
    gear:  {
      __typename: "Gear",
      id: string,
      description: string,
      weight: number,
      uses?: number | null,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      gearSourceId?: string | null,
    },
    uses?: number | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    characterGearId?: string | null,
    characterGearGearId: string,
  } | null,
};

export type CreateGearMutationVariables = {
  input: CreateGearInput,
  condition?: ModelGearConditionInput | null,
};

export type CreateGearMutation = {
  createGear?:  {
    __typename: "Gear",
    id: string,
    description: string,
    weight: number,
    uses?: number | null,
    tags?: Array< string | null > | null,
    source?:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    gearSourceId?: string | null,
  } | null,
};

export type UpdateGearMutationVariables = {
  input: UpdateGearInput,
  condition?: ModelGearConditionInput | null,
};

export type UpdateGearMutation = {
  updateGear?:  {
    __typename: "Gear",
    id: string,
    description: string,
    weight: number,
    uses?: number | null,
    tags?: Array< string | null > | null,
    source?:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    gearSourceId?: string | null,
  } | null,
};

export type DeleteGearMutationVariables = {
  input: DeleteGearInput,
  condition?: ModelGearConditionInput | null,
};

export type DeleteGearMutation = {
  deleteGear?:  {
    __typename: "Gear",
    id: string,
    description: string,
    weight: number,
    uses?: number | null,
    tags?: Array< string | null > | null,
    source?:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    gearSourceId?: string | null,
  } | null,
};

export type CreateCharacterMoveMutationVariables = {
  input: CreateCharacterMoveInput,
  condition?: ModelCharacterMoveConditionInput | null,
};

export type CreateCharacterMoveMutation = {
  createCharacterMove?:  {
    __typename: "CharacterMove",
    id: string,
    selected?: boolean | null,
    move:  {
      __typename: "Move",
      id: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      moveClassId: string,
      moveSourceId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    characterSixToTenMovesId?: string | null,
    characterTwoToTenMovesId?: string | null,
    characterStartingMovesId?: string | null,
    characterMoveMoveId: string,
  } | null,
};

export type UpdateCharacterMoveMutationVariables = {
  input: UpdateCharacterMoveInput,
  condition?: ModelCharacterMoveConditionInput | null,
};

export type UpdateCharacterMoveMutation = {
  updateCharacterMove?:  {
    __typename: "CharacterMove",
    id: string,
    selected?: boolean | null,
    move:  {
      __typename: "Move",
      id: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      moveClassId: string,
      moveSourceId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    characterSixToTenMovesId?: string | null,
    characterTwoToTenMovesId?: string | null,
    characterStartingMovesId?: string | null,
    characterMoveMoveId: string,
  } | null,
};

export type DeleteCharacterMoveMutationVariables = {
  input: DeleteCharacterMoveInput,
  condition?: ModelCharacterMoveConditionInput | null,
};

export type DeleteCharacterMoveMutation = {
  deleteCharacterMove?:  {
    __typename: "CharacterMove",
    id: string,
    selected?: boolean | null,
    move:  {
      __typename: "Move",
      id: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      moveClassId: string,
      moveSourceId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    characterSixToTenMovesId?: string | null,
    characterTwoToTenMovesId?: string | null,
    characterStartingMovesId?: string | null,
    characterMoveMoveId: string,
  } | null,
};

export type CreateMoveMutationVariables = {
  input: CreateMoveInput,
  condition?: ModelMoveConditionInput | null,
};

export type CreateMoveMutation = {
  createMove?:  {
    __typename: "Move",
    id: string,
    description: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    source?:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    moveClassId: string,
    moveSourceId?: string | null,
  } | null,
};

export type UpdateMoveMutationVariables = {
  input: UpdateMoveInput,
  condition?: ModelMoveConditionInput | null,
};

export type UpdateMoveMutation = {
  updateMove?:  {
    __typename: "Move",
    id: string,
    description: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    source?:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    moveClassId: string,
    moveSourceId?: string | null,
  } | null,
};

export type DeleteMoveMutationVariables = {
  input: DeleteMoveInput,
  condition?: ModelMoveConditionInput | null,
};

export type DeleteMoveMutation = {
  deleteMove?:  {
    __typename: "Move",
    id: string,
    description: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    source?:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    moveClassId: string,
    moveSourceId?: string | null,
  } | null,
};

export type CreateCharacterBondMutationVariables = {
  input: CreateCharacterBondInput,
  condition?: ModelCharacterBondConditionInput | null,
};

export type CreateCharacterBondMutation = {
  createCharacterBond?:  {
    __typename: "CharacterBond",
    id: string,
    description?: string | null,
    bond:  {
      __typename: "Bond",
      id: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      bondClassId: string,
    },
    selected?: boolean | null,
    createdAt: string,
    updatedAt: string,
    characterBondsId?: string | null,
    characterBondBondId: string,
  } | null,
};

export type UpdateCharacterBondMutationVariables = {
  input: UpdateCharacterBondInput,
  condition?: ModelCharacterBondConditionInput | null,
};

export type UpdateCharacterBondMutation = {
  updateCharacterBond?:  {
    __typename: "CharacterBond",
    id: string,
    description?: string | null,
    bond:  {
      __typename: "Bond",
      id: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      bondClassId: string,
    },
    selected?: boolean | null,
    createdAt: string,
    updatedAt: string,
    characterBondsId?: string | null,
    characterBondBondId: string,
  } | null,
};

export type DeleteCharacterBondMutationVariables = {
  input: DeleteCharacterBondInput,
  condition?: ModelCharacterBondConditionInput | null,
};

export type DeleteCharacterBondMutation = {
  deleteCharacterBond?:  {
    __typename: "CharacterBond",
    id: string,
    description?: string | null,
    bond:  {
      __typename: "Bond",
      id: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      bondClassId: string,
    },
    selected?: boolean | null,
    createdAt: string,
    updatedAt: string,
    characterBondsId?: string | null,
    characterBondBondId: string,
  } | null,
};

export type CreateBondMutationVariables = {
  input: CreateBondInput,
  condition?: ModelBondConditionInput | null,
};

export type CreateBondMutation = {
  createBond?:  {
    __typename: "Bond",
    id: string,
    description?: string | null,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    bondClassId: string,
  } | null,
};

export type UpdateBondMutationVariables = {
  input: UpdateBondInput,
  condition?: ModelBondConditionInput | null,
};

export type UpdateBondMutation = {
  updateBond?:  {
    __typename: "Bond",
    id: string,
    description?: string | null,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    bondClassId: string,
  } | null,
};

export type DeleteBondMutationVariables = {
  input: DeleteBondInput,
  condition?: ModelBondConditionInput | null,
};

export type DeleteBondMutation = {
  deleteBond?:  {
    __typename: "Bond",
    id: string,
    description?: string | null,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    bondClassId: string,
  } | null,
};

export type CreateCharacterAbilityScoreMutationVariables = {
  input: CreateCharacterAbilityScoreInput,
  condition?: ModelCharacterAbilityScoreConditionInput | null,
};

export type CreateCharacterAbilityScoreMutation = {
  createCharacterAbilityScore?:  {
    __typename: "CharacterAbilityScore",
    abilityScore:  {
      __typename: "AbilityScore",
      id: string,
      name: string,
      shortName: string,
      debility: string,
      debilityPenalty: string,
      createdAt: string,
      updatedAt: string,
    },
    id: string,
    value: string,
    bonus: number,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    characterAbilityscoresId?: string | null,
    characterAbilityScoreAbilityScoreId: string,
  } | null,
};

export type UpdateCharacterAbilityScoreMutationVariables = {
  input: UpdateCharacterAbilityScoreInput,
  condition?: ModelCharacterAbilityScoreConditionInput | null,
};

export type UpdateCharacterAbilityScoreMutation = {
  updateCharacterAbilityScore?:  {
    __typename: "CharacterAbilityScore",
    abilityScore:  {
      __typename: "AbilityScore",
      id: string,
      name: string,
      shortName: string,
      debility: string,
      debilityPenalty: string,
      createdAt: string,
      updatedAt: string,
    },
    id: string,
    value: string,
    bonus: number,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    characterAbilityscoresId?: string | null,
    characterAbilityScoreAbilityScoreId: string,
  } | null,
};

export type DeleteCharacterAbilityScoreMutationVariables = {
  input: DeleteCharacterAbilityScoreInput,
  condition?: ModelCharacterAbilityScoreConditionInput | null,
};

export type DeleteCharacterAbilityScoreMutation = {
  deleteCharacterAbilityScore?:  {
    __typename: "CharacterAbilityScore",
    abilityScore:  {
      __typename: "AbilityScore",
      id: string,
      name: string,
      shortName: string,
      debility: string,
      debilityPenalty: string,
      createdAt: string,
      updatedAt: string,
    },
    id: string,
    value: string,
    bonus: number,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    characterAbilityscoresId?: string | null,
    characterAbilityScoreAbilityScoreId: string,
  } | null,
};

export type CreateAbilityScoreMutationVariables = {
  input: CreateAbilityScoreInput,
  condition?: ModelAbilityScoreConditionInput | null,
};

export type CreateAbilityScoreMutation = {
  createAbilityScore?:  {
    __typename: "AbilityScore",
    id: string,
    name: string,
    shortName: string,
    debility: string,
    debilityPenalty: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAbilityScoreMutationVariables = {
  input: UpdateAbilityScoreInput,
  condition?: ModelAbilityScoreConditionInput | null,
};

export type UpdateAbilityScoreMutation = {
  updateAbilityScore?:  {
    __typename: "AbilityScore",
    id: string,
    name: string,
    shortName: string,
    debility: string,
    debilityPenalty: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAbilityScoreMutationVariables = {
  input: DeleteAbilityScoreInput,
  condition?: ModelAbilityScoreConditionInput | null,
};

export type DeleteAbilityScoreMutation = {
  deleteAbilityScore?:  {
    __typename: "AbilityScore",
    id: string,
    name: string,
    shortName: string,
    debility: string,
    debilityPenalty: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCharacterRaceMutationVariables = {
  input: CreateCharacterRaceInput,
  condition?: ModelCharacterRaceConditionInput | null,
};

export type CreateCharacterRaceMutation = {
  createCharacterRace?:  {
    __typename: "CharacterRace",
    id: string,
    race:  {
      __typename: "Race",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      raceClassId?: string | null,
      raceSourceId: string,
    },
    createdAt: string,
    updatedAt: string,
    characterRaceRaceId: string,
  } | null,
};

export type UpdateCharacterRaceMutationVariables = {
  input: UpdateCharacterRaceInput,
  condition?: ModelCharacterRaceConditionInput | null,
};

export type UpdateCharacterRaceMutation = {
  updateCharacterRace?:  {
    __typename: "CharacterRace",
    id: string,
    race:  {
      __typename: "Race",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      raceClassId?: string | null,
      raceSourceId: string,
    },
    createdAt: string,
    updatedAt: string,
    characterRaceRaceId: string,
  } | null,
};

export type DeleteCharacterRaceMutationVariables = {
  input: DeleteCharacterRaceInput,
  condition?: ModelCharacterRaceConditionInput | null,
};

export type DeleteCharacterRaceMutation = {
  deleteCharacterRace?:  {
    __typename: "CharacterRace",
    id: string,
    race:  {
      __typename: "Race",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      raceClassId?: string | null,
      raceSourceId: string,
    },
    createdAt: string,
    updatedAt: string,
    characterRaceRaceId: string,
  } | null,
};

export type CreateRaceMutationVariables = {
  input: CreateRaceInput,
  condition?: ModelRaceConditionInput | null,
};

export type CreateRaceMutation = {
  createRace?:  {
    __typename: "Race",
    id: string,
    name?: string | null,
    description?: string | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    } | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    raceClassId?: string | null,
    raceSourceId: string,
  } | null,
};

export type UpdateRaceMutationVariables = {
  input: UpdateRaceInput,
  condition?: ModelRaceConditionInput | null,
};

export type UpdateRaceMutation = {
  updateRace?:  {
    __typename: "Race",
    id: string,
    name?: string | null,
    description?: string | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    } | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    raceClassId?: string | null,
    raceSourceId: string,
  } | null,
};

export type DeleteRaceMutationVariables = {
  input: DeleteRaceInput,
  condition?: ModelRaceConditionInput | null,
};

export type DeleteRaceMutation = {
  deleteRace?:  {
    __typename: "Race",
    id: string,
    name?: string | null,
    description?: string | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    } | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    raceClassId?: string | null,
    raceSourceId: string,
  } | null,
};

export type CreateCharacterAlignmentMutationVariables = {
  input: CreateCharacterAlignmentInput,
  condition?: ModelCharacterAlignmentConditionInput | null,
};

export type CreateCharacterAlignmentMutation = {
  createCharacterAlignment?:  {
    __typename: "CharacterAlignment",
    id: string,
    alignment:  {
      __typename: "Alignment",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      alignmentClassId: string,
    },
    selected?: boolean | null,
    createdAt: string,
    updatedAt: string,
    characterAlignmentAlignmentId: string,
  } | null,
};

export type UpdateCharacterAlignmentMutationVariables = {
  input: UpdateCharacterAlignmentInput,
  condition?: ModelCharacterAlignmentConditionInput | null,
};

export type UpdateCharacterAlignmentMutation = {
  updateCharacterAlignment?:  {
    __typename: "CharacterAlignment",
    id: string,
    alignment:  {
      __typename: "Alignment",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      alignmentClassId: string,
    },
    selected?: boolean | null,
    createdAt: string,
    updatedAt: string,
    characterAlignmentAlignmentId: string,
  } | null,
};

export type DeleteCharacterAlignmentMutationVariables = {
  input: DeleteCharacterAlignmentInput,
  condition?: ModelCharacterAlignmentConditionInput | null,
};

export type DeleteCharacterAlignmentMutation = {
  deleteCharacterAlignment?:  {
    __typename: "CharacterAlignment",
    id: string,
    alignment:  {
      __typename: "Alignment",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      alignmentClassId: string,
    },
    selected?: boolean | null,
    createdAt: string,
    updatedAt: string,
    characterAlignmentAlignmentId: string,
  } | null,
};

export type CreateAlignmentMutationVariables = {
  input: CreateAlignmentInput,
  condition?: ModelAlignmentConditionInput | null,
};

export type CreateAlignmentMutation = {
  createAlignment?:  {
    __typename: "Alignment",
    id: string,
    name?: string | null,
    description?: string | null,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    alignmentClassId: string,
  } | null,
};

export type UpdateAlignmentMutationVariables = {
  input: UpdateAlignmentInput,
  condition?: ModelAlignmentConditionInput | null,
};

export type UpdateAlignmentMutation = {
  updateAlignment?:  {
    __typename: "Alignment",
    id: string,
    name?: string | null,
    description?: string | null,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    alignmentClassId: string,
  } | null,
};

export type DeleteAlignmentMutationVariables = {
  input: DeleteAlignmentInput,
  condition?: ModelAlignmentConditionInput | null,
};

export type DeleteAlignmentMutation = {
  deleteAlignment?:  {
    __typename: "Alignment",
    id: string,
    name?: string | null,
    description?: string | null,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    alignmentClassId: string,
  } | null,
};

export type CreateDiceTypeMutationVariables = {
  input: CreateDiceTypeInput,
  condition?: ModelDiceTypeConditionInput | null,
};

export type CreateDiceTypeMutation = {
  createDiceType?:  {
    __typename: "DiceType",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDiceTypeMutationVariables = {
  input: UpdateDiceTypeInput,
  condition?: ModelDiceTypeConditionInput | null,
};

export type UpdateDiceTypeMutation = {
  updateDiceType?:  {
    __typename: "DiceType",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDiceTypeMutationVariables = {
  input: DeleteDiceTypeInput,
  condition?: ModelDiceTypeConditionInput | null,
};

export type DeleteDiceTypeMutation = {
  deleteDiceType?:  {
    __typename: "DiceType",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCharacterLookMutationVariables = {
  input: CreateCharacterLookInput,
  condition?: ModelCharacterLookConditionInput | null,
};

export type CreateCharacterLookMutation = {
  createCharacterLook?:  {
    __typename: "CharacterLook",
    id: string,
    look?:  {
      __typename: "ModelLookConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCharacterLookMutationVariables = {
  input: UpdateCharacterLookInput,
  condition?: ModelCharacterLookConditionInput | null,
};

export type UpdateCharacterLookMutation = {
  updateCharacterLook?:  {
    __typename: "CharacterLook",
    id: string,
    look?:  {
      __typename: "ModelLookConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCharacterLookMutationVariables = {
  input: DeleteCharacterLookInput,
  condition?: ModelCharacterLookConditionInput | null,
};

export type DeleteCharacterLookMutation = {
  deleteCharacterLook?:  {
    __typename: "CharacterLook",
    id: string,
    look?:  {
      __typename: "ModelLookConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLookMutationVariables = {
  input: CreateLookInput,
  condition?: ModelLookConditionInput | null,
};

export type CreateLookMutation = {
  createLook?:  {
    __typename: "Look",
    id: string,
    name: string,
    description: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    characterLookLookId: string,
    lookClassId: string,
  } | null,
};

export type UpdateLookMutationVariables = {
  input: UpdateLookInput,
  condition?: ModelLookConditionInput | null,
};

export type UpdateLookMutation = {
  updateLook?:  {
    __typename: "Look",
    id: string,
    name: string,
    description: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    characterLookLookId: string,
    lookClassId: string,
  } | null,
};

export type DeleteLookMutationVariables = {
  input: DeleteLookInput,
  condition?: ModelLookConditionInput | null,
};

export type DeleteLookMutation = {
  deleteLook?:  {
    __typename: "Look",
    id: string,
    name: string,
    description: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    characterLookLookId: string,
    lookClassId: string,
  } | null,
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
    isTemplate?: boolean | null,
    spells?:  {
      __typename: "ModelCharacterSpellConnection",
      nextToken?: string | null,
    } | null,
    gear?:  {
      __typename: "ModelCharacterGearConnection",
      nextToken?: string | null,
    } | null,
    sixToTenMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
    } | null,
    twoToTenMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
    } | null,
    startingMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
    } | null,
    bonds?:  {
      __typename: "ModelCharacterBondConnection",
      nextToken?: string | null,
    } | null,
    abilityscores?:  {
      __typename: "ModelCharacterAbilityScoreConnection",
      nextToken?: string | null,
    } | null,
    race?:  {
      __typename: "CharacterRace",
      id: string,
      createdAt: string,
      updatedAt: string,
      characterRaceRaceId: string,
    } | null,
    alignment?:  {
      __typename: "CharacterAlignment",
      id: string,
      selected?: boolean | null,
      createdAt: string,
      updatedAt: string,
      characterAlignmentAlignmentId: string,
    } | null,
    tags?: Array< string | null > | null,
    look?:  {
      __typename: "CharacterLook",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    characterClassId?: string | null,
    class?:  {
      __typename: "CharacterClass",
      id: string,
      createdAt: string,
      updatedAt: string,
      characterClassClassId: string,
      characterClassCharacterId: string,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    characterRaceId?: string | null,
    characterAlignmentId?: string | null,
    characterLookId?: string | null,
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
    isTemplate?: boolean | null,
    spells?:  {
      __typename: "ModelCharacterSpellConnection",
      nextToken?: string | null,
    } | null,
    gear?:  {
      __typename: "ModelCharacterGearConnection",
      nextToken?: string | null,
    } | null,
    sixToTenMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
    } | null,
    twoToTenMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
    } | null,
    startingMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
    } | null,
    bonds?:  {
      __typename: "ModelCharacterBondConnection",
      nextToken?: string | null,
    } | null,
    abilityscores?:  {
      __typename: "ModelCharacterAbilityScoreConnection",
      nextToken?: string | null,
    } | null,
    race?:  {
      __typename: "CharacterRace",
      id: string,
      createdAt: string,
      updatedAt: string,
      characterRaceRaceId: string,
    } | null,
    alignment?:  {
      __typename: "CharacterAlignment",
      id: string,
      selected?: boolean | null,
      createdAt: string,
      updatedAt: string,
      characterAlignmentAlignmentId: string,
    } | null,
    tags?: Array< string | null > | null,
    look?:  {
      __typename: "CharacterLook",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    characterClassId?: string | null,
    class?:  {
      __typename: "CharacterClass",
      id: string,
      createdAt: string,
      updatedAt: string,
      characterClassClassId: string,
      characterClassCharacterId: string,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    characterRaceId?: string | null,
    characterAlignmentId?: string | null,
    characterLookId?: string | null,
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
    isTemplate?: boolean | null,
    spells?:  {
      __typename: "ModelCharacterSpellConnection",
      nextToken?: string | null,
    } | null,
    gear?:  {
      __typename: "ModelCharacterGearConnection",
      nextToken?: string | null,
    } | null,
    sixToTenMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
    } | null,
    twoToTenMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
    } | null,
    startingMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
    } | null,
    bonds?:  {
      __typename: "ModelCharacterBondConnection",
      nextToken?: string | null,
    } | null,
    abilityscores?:  {
      __typename: "ModelCharacterAbilityScoreConnection",
      nextToken?: string | null,
    } | null,
    race?:  {
      __typename: "CharacterRace",
      id: string,
      createdAt: string,
      updatedAt: string,
      characterRaceRaceId: string,
    } | null,
    alignment?:  {
      __typename: "CharacterAlignment",
      id: string,
      selected?: boolean | null,
      createdAt: string,
      updatedAt: string,
      characterAlignmentAlignmentId: string,
    } | null,
    tags?: Array< string | null > | null,
    look?:  {
      __typename: "CharacterLook",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    characterClassId?: string | null,
    class?:  {
      __typename: "CharacterClass",
      id: string,
      createdAt: string,
      updatedAt: string,
      characterClassClassId: string,
      characterClassCharacterId: string,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    characterRaceId?: string | null,
    characterAlignmentId?: string | null,
    characterLookId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSourceQueryVariables = {
  id: string,
};

export type GetSourceQuery = {
  getSource?:  {
    __typename: "Source",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSourcesQueryVariables = {
  filter?: ModelSourceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSourcesQuery = {
  listSources?:  {
    __typename: "ModelSourceConnection",
    items:  Array< {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCharacterClassQueryVariables = {
  id: string,
};

export type GetCharacterClassQuery = {
  getCharacterClass?:  {
    __typename: "CharacterClass",
    id: string,
    character:  {
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
      isTemplate?: boolean | null,
      tags?: Array< string | null > | null,
      characterClassId?: string | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      characterRaceId?: string | null,
      characterAlignmentId?: string | null,
      characterLookId?: string | null,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    characterClassClassId: string,
    characterClassCharacterId: string,
  } | null,
};

export type ListCharacterClassesQueryVariables = {
  filter?: ModelCharacterClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCharacterClassesQuery = {
  listCharacterClasses?:  {
    __typename: "ModelCharacterClassConnection",
    items:  Array< {
      __typename: "CharacterClass",
      id: string,
      createdAt: string,
      updatedAt: string,
      characterClassClassId: string,
      characterClassCharacterId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetClassQueryVariables = {
  id: string,
};

export type GetClassQuery = {
  getClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    description: string,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    damageDiceType?:  {
      __typename: "DiceType",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    classSourceId: string,
    classDamageDiceTypeId?: string | null,
  } | null,
};

export type ListClassesQueryVariables = {
  filter?: ModelClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClassesQuery = {
  listClasses?:  {
    __typename: "ModelClassConnection",
    items:  Array< {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSpellQueryVariables = {
  id: string,
};

export type GetSpellQuery = {
  getSpell?:  {
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
      createdAt: string,
      updatedAt: string,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    spellSourceId: string,
    spellClassId: string,
  } | null,
};

export type ListSpellsQueryVariables = {
  filter?: ModelSpellFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSpellsQuery = {
  listSpells?:  {
    __typename: "ModelSpellConnection",
    items:  Array< {
      __typename: "Spell",
      id: string,
      name: string,
      level: number,
      type: string,
      ongoing?: boolean | null,
      description: string,
      createdAt: string,
      updatedAt: string,
      spellSourceId: string,
      spellClassId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCharacterSpellQueryVariables = {
  id: string,
};

export type GetCharacterSpellQuery = {
  getCharacterSpell?:  {
    __typename: "CharacterSpell",
    id: string,
    spell:  {
      __typename: "Spell",
      id: string,
      name: string,
      level: number,
      type: string,
      ongoing?: boolean | null,
      description: string,
      createdAt: string,
      updatedAt: string,
      spellSourceId: string,
      spellClassId: string,
    },
    selected?: boolean | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    characterSpellsId?: string | null,
    characterSpellSpellId: string,
  } | null,
};

export type ListCharacterSpellsQueryVariables = {
  filter?: ModelCharacterSpellFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCharacterSpellsQuery = {
  listCharacterSpells?:  {
    __typename: "ModelCharacterSpellConnection",
    items:  Array< {
      __typename: "CharacterSpell",
      id: string,
      selected?: boolean | null,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      characterSpellsId?: string | null,
      characterSpellSpellId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCharacterGearQueryVariables = {
  id: string,
};

export type GetCharacterGearQuery = {
  getCharacterGear?:  {
    __typename: "CharacterGear",
    id: string,
    gear:  {
      __typename: "Gear",
      id: string,
      description: string,
      weight: number,
      uses?: number | null,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      gearSourceId?: string | null,
    },
    uses?: number | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    characterGearId?: string | null,
    characterGearGearId: string,
  } | null,
};

export type ListCharacterGearsQueryVariables = {
  filter?: ModelCharacterGearFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCharacterGearsQuery = {
  listCharacterGears?:  {
    __typename: "ModelCharacterGearConnection",
    items:  Array< {
      __typename: "CharacterGear",
      id: string,
      uses?: number | null,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      characterGearId?: string | null,
      characterGearGearId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGearQueryVariables = {
  id: string,
};

export type GetGearQuery = {
  getGear?:  {
    __typename: "Gear",
    id: string,
    description: string,
    weight: number,
    uses?: number | null,
    tags?: Array< string | null > | null,
    source?:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    gearSourceId?: string | null,
  } | null,
};

export type ListGearsQueryVariables = {
  filter?: ModelGearFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGearsQuery = {
  listGears?:  {
    __typename: "ModelGearConnection",
    items:  Array< {
      __typename: "Gear",
      id: string,
      description: string,
      weight: number,
      uses?: number | null,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      gearSourceId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCharacterMoveQueryVariables = {
  id: string,
};

export type GetCharacterMoveQuery = {
  getCharacterMove?:  {
    __typename: "CharacterMove",
    id: string,
    selected?: boolean | null,
    move:  {
      __typename: "Move",
      id: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      moveClassId: string,
      moveSourceId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    characterSixToTenMovesId?: string | null,
    characterTwoToTenMovesId?: string | null,
    characterStartingMovesId?: string | null,
    characterMoveMoveId: string,
  } | null,
};

export type ListCharacterMovesQueryVariables = {
  filter?: ModelCharacterMoveFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCharacterMovesQuery = {
  listCharacterMoves?:  {
    __typename: "ModelCharacterMoveConnection",
    items:  Array< {
      __typename: "CharacterMove",
      id: string,
      selected?: boolean | null,
      createdAt: string,
      updatedAt: string,
      characterSixToTenMovesId?: string | null,
      characterTwoToTenMovesId?: string | null,
      characterStartingMovesId?: string | null,
      characterMoveMoveId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMoveQueryVariables = {
  id: string,
};

export type GetMoveQuery = {
  getMove?:  {
    __typename: "Move",
    id: string,
    description: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    source?:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    moveClassId: string,
    moveSourceId?: string | null,
  } | null,
};

export type ListMovesQueryVariables = {
  filter?: ModelMoveFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMovesQuery = {
  listMoves?:  {
    __typename: "ModelMoveConnection",
    items:  Array< {
      __typename: "Move",
      id: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      moveClassId: string,
      moveSourceId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCharacterBondQueryVariables = {
  id: string,
};

export type GetCharacterBondQuery = {
  getCharacterBond?:  {
    __typename: "CharacterBond",
    id: string,
    description?: string | null,
    bond:  {
      __typename: "Bond",
      id: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      bondClassId: string,
    },
    selected?: boolean | null,
    createdAt: string,
    updatedAt: string,
    characterBondsId?: string | null,
    characterBondBondId: string,
  } | null,
};

export type ListCharacterBondsQueryVariables = {
  filter?: ModelCharacterBondFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCharacterBondsQuery = {
  listCharacterBonds?:  {
    __typename: "ModelCharacterBondConnection",
    items:  Array< {
      __typename: "CharacterBond",
      id: string,
      description?: string | null,
      selected?: boolean | null,
      createdAt: string,
      updatedAt: string,
      characterBondsId?: string | null,
      characterBondBondId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBondQueryVariables = {
  id: string,
};

export type GetBondQuery = {
  getBond?:  {
    __typename: "Bond",
    id: string,
    description?: string | null,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    bondClassId: string,
  } | null,
};

export type ListBondsQueryVariables = {
  filter?: ModelBondFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBondsQuery = {
  listBonds?:  {
    __typename: "ModelBondConnection",
    items:  Array< {
      __typename: "Bond",
      id: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      bondClassId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCharacterAbilityScoreQueryVariables = {
  id: string,
};

export type GetCharacterAbilityScoreQuery = {
  getCharacterAbilityScore?:  {
    __typename: "CharacterAbilityScore",
    abilityScore:  {
      __typename: "AbilityScore",
      id: string,
      name: string,
      shortName: string,
      debility: string,
      debilityPenalty: string,
      createdAt: string,
      updatedAt: string,
    },
    id: string,
    value: string,
    bonus: number,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    characterAbilityscoresId?: string | null,
    characterAbilityScoreAbilityScoreId: string,
  } | null,
};

export type ListCharacterAbilityScoresQueryVariables = {
  filter?: ModelCharacterAbilityScoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCharacterAbilityScoresQuery = {
  listCharacterAbilityScores?:  {
    __typename: "ModelCharacterAbilityScoreConnection",
    items:  Array< {
      __typename: "CharacterAbilityScore",
      id: string,
      value: string,
      bonus: number,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      characterAbilityscoresId?: string | null,
      characterAbilityScoreAbilityScoreId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAbilityScoreQueryVariables = {
  id: string,
};

export type GetAbilityScoreQuery = {
  getAbilityScore?:  {
    __typename: "AbilityScore",
    id: string,
    name: string,
    shortName: string,
    debility: string,
    debilityPenalty: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAbilityScoresQueryVariables = {
  filter?: ModelAbilityScoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAbilityScoresQuery = {
  listAbilityScores?:  {
    __typename: "ModelAbilityScoreConnection",
    items:  Array< {
      __typename: "AbilityScore",
      id: string,
      name: string,
      shortName: string,
      debility: string,
      debilityPenalty: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCharacterRaceQueryVariables = {
  id: string,
};

export type GetCharacterRaceQuery = {
  getCharacterRace?:  {
    __typename: "CharacterRace",
    id: string,
    race:  {
      __typename: "Race",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      raceClassId?: string | null,
      raceSourceId: string,
    },
    createdAt: string,
    updatedAt: string,
    characterRaceRaceId: string,
  } | null,
};

export type ListCharacterRacesQueryVariables = {
  filter?: ModelCharacterRaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCharacterRacesQuery = {
  listCharacterRaces?:  {
    __typename: "ModelCharacterRaceConnection",
    items:  Array< {
      __typename: "CharacterRace",
      id: string,
      createdAt: string,
      updatedAt: string,
      characterRaceRaceId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRaceQueryVariables = {
  id: string,
};

export type GetRaceQuery = {
  getRace?:  {
    __typename: "Race",
    id: string,
    name?: string | null,
    description?: string | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    } | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    raceClassId?: string | null,
    raceSourceId: string,
  } | null,
};

export type ListRacesQueryVariables = {
  filter?: ModelRaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRacesQuery = {
  listRaces?:  {
    __typename: "ModelRaceConnection",
    items:  Array< {
      __typename: "Race",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      raceClassId?: string | null,
      raceSourceId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCharacterAlignmentQueryVariables = {
  id: string,
};

export type GetCharacterAlignmentQuery = {
  getCharacterAlignment?:  {
    __typename: "CharacterAlignment",
    id: string,
    alignment:  {
      __typename: "Alignment",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      alignmentClassId: string,
    },
    selected?: boolean | null,
    createdAt: string,
    updatedAt: string,
    characterAlignmentAlignmentId: string,
  } | null,
};

export type ListCharacterAlignmentsQueryVariables = {
  filter?: ModelCharacterAlignmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCharacterAlignmentsQuery = {
  listCharacterAlignments?:  {
    __typename: "ModelCharacterAlignmentConnection",
    items:  Array< {
      __typename: "CharacterAlignment",
      id: string,
      selected?: boolean | null,
      createdAt: string,
      updatedAt: string,
      characterAlignmentAlignmentId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAlignmentQueryVariables = {
  id: string,
};

export type GetAlignmentQuery = {
  getAlignment?:  {
    __typename: "Alignment",
    id: string,
    name?: string | null,
    description?: string | null,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    alignmentClassId: string,
  } | null,
};

export type ListAlignmentsQueryVariables = {
  filter?: ModelAlignmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAlignmentsQuery = {
  listAlignments?:  {
    __typename: "ModelAlignmentConnection",
    items:  Array< {
      __typename: "Alignment",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      alignmentClassId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDiceTypeQueryVariables = {
  id: string,
};

export type GetDiceTypeQuery = {
  getDiceType?:  {
    __typename: "DiceType",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDiceTypesQueryVariables = {
  filter?: ModelDiceTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDiceTypesQuery = {
  listDiceTypes?:  {
    __typename: "ModelDiceTypeConnection",
    items:  Array< {
      __typename: "DiceType",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCharacterLookQueryVariables = {
  id: string,
};

export type GetCharacterLookQuery = {
  getCharacterLook?:  {
    __typename: "CharacterLook",
    id: string,
    look?:  {
      __typename: "ModelLookConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCharacterLooksQueryVariables = {
  filter?: ModelCharacterLookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCharacterLooksQuery = {
  listCharacterLooks?:  {
    __typename: "ModelCharacterLookConnection",
    items:  Array< {
      __typename: "CharacterLook",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLookQueryVariables = {
  id: string,
};

export type GetLookQuery = {
  getLook?:  {
    __typename: "Look",
    id: string,
    name: string,
    description: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    characterLookLookId: string,
    lookClassId: string,
  } | null,
};

export type ListLooksQueryVariables = {
  filter?: ModelLookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLooksQuery = {
  listLooks?:  {
    __typename: "ModelLookConnection",
    items:  Array< {
      __typename: "Look",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      characterLookLookId: string,
      lookClassId: string,
    } | null >,
    nextToken?: string | null,
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
    isTemplate?: boolean | null,
    spells?:  {
      __typename: "ModelCharacterSpellConnection",
      nextToken?: string | null,
    } | null,
    gear?:  {
      __typename: "ModelCharacterGearConnection",
      nextToken?: string | null,
    } | null,
    sixToTenMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
    } | null,
    twoToTenMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
    } | null,
    startingMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
    } | null,
    bonds?:  {
      __typename: "ModelCharacterBondConnection",
      nextToken?: string | null,
    } | null,
    abilityscores?:  {
      __typename: "ModelCharacterAbilityScoreConnection",
      nextToken?: string | null,
    } | null,
    race?:  {
      __typename: "CharacterRace",
      id: string,
      createdAt: string,
      updatedAt: string,
      characterRaceRaceId: string,
    } | null,
    alignment?:  {
      __typename: "CharacterAlignment",
      id: string,
      selected?: boolean | null,
      createdAt: string,
      updatedAt: string,
      characterAlignmentAlignmentId: string,
    } | null,
    tags?: Array< string | null > | null,
    look?:  {
      __typename: "CharacterLook",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    characterClassId?: string | null,
    class?:  {
      __typename: "CharacterClass",
      id: string,
      createdAt: string,
      updatedAt: string,
      characterClassClassId: string,
      characterClassCharacterId: string,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    characterRaceId?: string | null,
    characterAlignmentId?: string | null,
    characterLookId?: string | null,
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
      isTemplate?: boolean | null,
      tags?: Array< string | null > | null,
      characterClassId?: string | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      characterRaceId?: string | null,
      characterAlignmentId?: string | null,
      characterLookId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CharactersByClassQueryVariables = {
  characterClassId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCharacterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CharactersByClassQuery = {
  charactersByClass?:  {
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
      isTemplate?: boolean | null,
      tags?: Array< string | null > | null,
      characterClassId?: string | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      characterRaceId?: string | null,
      characterAlignmentId?: string | null,
      characterLookId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSourceSubscriptionVariables = {
  filter?: ModelSubscriptionSourceFilterInput | null,
};

export type OnCreateSourceSubscription = {
  onCreateSource?:  {
    __typename: "Source",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSourceSubscriptionVariables = {
  filter?: ModelSubscriptionSourceFilterInput | null,
};

export type OnUpdateSourceSubscription = {
  onUpdateSource?:  {
    __typename: "Source",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSourceSubscriptionVariables = {
  filter?: ModelSubscriptionSourceFilterInput | null,
};

export type OnDeleteSourceSubscription = {
  onDeleteSource?:  {
    __typename: "Source",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCharacterClassSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterClassFilterInput | null,
};

export type OnCreateCharacterClassSubscription = {
  onCreateCharacterClass?:  {
    __typename: "CharacterClass",
    id: string,
    character:  {
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
      isTemplate?: boolean | null,
      tags?: Array< string | null > | null,
      characterClassId?: string | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      characterRaceId?: string | null,
      characterAlignmentId?: string | null,
      characterLookId?: string | null,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    characterClassClassId: string,
    characterClassCharacterId: string,
  } | null,
};

export type OnUpdateCharacterClassSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterClassFilterInput | null,
};

export type OnUpdateCharacterClassSubscription = {
  onUpdateCharacterClass?:  {
    __typename: "CharacterClass",
    id: string,
    character:  {
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
      isTemplate?: boolean | null,
      tags?: Array< string | null > | null,
      characterClassId?: string | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      characterRaceId?: string | null,
      characterAlignmentId?: string | null,
      characterLookId?: string | null,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    characterClassClassId: string,
    characterClassCharacterId: string,
  } | null,
};

export type OnDeleteCharacterClassSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterClassFilterInput | null,
};

export type OnDeleteCharacterClassSubscription = {
  onDeleteCharacterClass?:  {
    __typename: "CharacterClass",
    id: string,
    character:  {
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
      isTemplate?: boolean | null,
      tags?: Array< string | null > | null,
      characterClassId?: string | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      characterRaceId?: string | null,
      characterAlignmentId?: string | null,
      characterLookId?: string | null,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    characterClassClassId: string,
    characterClassCharacterId: string,
  } | null,
};

export type OnCreateClassSubscriptionVariables = {
  filter?: ModelSubscriptionClassFilterInput | null,
};

export type OnCreateClassSubscription = {
  onCreateClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    description: string,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    damageDiceType?:  {
      __typename: "DiceType",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    classSourceId: string,
    classDamageDiceTypeId?: string | null,
  } | null,
};

export type OnUpdateClassSubscriptionVariables = {
  filter?: ModelSubscriptionClassFilterInput | null,
};

export type OnUpdateClassSubscription = {
  onUpdateClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    description: string,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    damageDiceType?:  {
      __typename: "DiceType",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    classSourceId: string,
    classDamageDiceTypeId?: string | null,
  } | null,
};

export type OnDeleteClassSubscriptionVariables = {
  filter?: ModelSubscriptionClassFilterInput | null,
};

export type OnDeleteClassSubscription = {
  onDeleteClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    description: string,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    damageDiceType?:  {
      __typename: "DiceType",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    classSourceId: string,
    classDamageDiceTypeId?: string | null,
  } | null,
};

export type OnCreateSpellSubscriptionVariables = {
  filter?: ModelSubscriptionSpellFilterInput | null,
};

export type OnCreateSpellSubscription = {
  onCreateSpell?:  {
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
      createdAt: string,
      updatedAt: string,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    spellSourceId: string,
    spellClassId: string,
  } | null,
};

export type OnUpdateSpellSubscriptionVariables = {
  filter?: ModelSubscriptionSpellFilterInput | null,
};

export type OnUpdateSpellSubscription = {
  onUpdateSpell?:  {
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
      createdAt: string,
      updatedAt: string,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    spellSourceId: string,
    spellClassId: string,
  } | null,
};

export type OnDeleteSpellSubscriptionVariables = {
  filter?: ModelSubscriptionSpellFilterInput | null,
};

export type OnDeleteSpellSubscription = {
  onDeleteSpell?:  {
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
      createdAt: string,
      updatedAt: string,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    spellSourceId: string,
    spellClassId: string,
  } | null,
};

export type OnCreateCharacterSpellSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterSpellFilterInput | null,
};

export type OnCreateCharacterSpellSubscription = {
  onCreateCharacterSpell?:  {
    __typename: "CharacterSpell",
    id: string,
    spell:  {
      __typename: "Spell",
      id: string,
      name: string,
      level: number,
      type: string,
      ongoing?: boolean | null,
      description: string,
      createdAt: string,
      updatedAt: string,
      spellSourceId: string,
      spellClassId: string,
    },
    selected?: boolean | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    characterSpellsId?: string | null,
    characterSpellSpellId: string,
  } | null,
};

export type OnUpdateCharacterSpellSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterSpellFilterInput | null,
};

export type OnUpdateCharacterSpellSubscription = {
  onUpdateCharacterSpell?:  {
    __typename: "CharacterSpell",
    id: string,
    spell:  {
      __typename: "Spell",
      id: string,
      name: string,
      level: number,
      type: string,
      ongoing?: boolean | null,
      description: string,
      createdAt: string,
      updatedAt: string,
      spellSourceId: string,
      spellClassId: string,
    },
    selected?: boolean | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    characterSpellsId?: string | null,
    characterSpellSpellId: string,
  } | null,
};

export type OnDeleteCharacterSpellSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterSpellFilterInput | null,
};

export type OnDeleteCharacterSpellSubscription = {
  onDeleteCharacterSpell?:  {
    __typename: "CharacterSpell",
    id: string,
    spell:  {
      __typename: "Spell",
      id: string,
      name: string,
      level: number,
      type: string,
      ongoing?: boolean | null,
      description: string,
      createdAt: string,
      updatedAt: string,
      spellSourceId: string,
      spellClassId: string,
    },
    selected?: boolean | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    characterSpellsId?: string | null,
    characterSpellSpellId: string,
  } | null,
};

export type OnCreateCharacterGearSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterGearFilterInput | null,
};

export type OnCreateCharacterGearSubscription = {
  onCreateCharacterGear?:  {
    __typename: "CharacterGear",
    id: string,
    gear:  {
      __typename: "Gear",
      id: string,
      description: string,
      weight: number,
      uses?: number | null,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      gearSourceId?: string | null,
    },
    uses?: number | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    characterGearId?: string | null,
    characterGearGearId: string,
  } | null,
};

export type OnUpdateCharacterGearSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterGearFilterInput | null,
};

export type OnUpdateCharacterGearSubscription = {
  onUpdateCharacterGear?:  {
    __typename: "CharacterGear",
    id: string,
    gear:  {
      __typename: "Gear",
      id: string,
      description: string,
      weight: number,
      uses?: number | null,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      gearSourceId?: string | null,
    },
    uses?: number | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    characterGearId?: string | null,
    characterGearGearId: string,
  } | null,
};

export type OnDeleteCharacterGearSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterGearFilterInput | null,
};

export type OnDeleteCharacterGearSubscription = {
  onDeleteCharacterGear?:  {
    __typename: "CharacterGear",
    id: string,
    gear:  {
      __typename: "Gear",
      id: string,
      description: string,
      weight: number,
      uses?: number | null,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      gearSourceId?: string | null,
    },
    uses?: number | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    characterGearId?: string | null,
    characterGearGearId: string,
  } | null,
};

export type OnCreateGearSubscriptionVariables = {
  filter?: ModelSubscriptionGearFilterInput | null,
};

export type OnCreateGearSubscription = {
  onCreateGear?:  {
    __typename: "Gear",
    id: string,
    description: string,
    weight: number,
    uses?: number | null,
    tags?: Array< string | null > | null,
    source?:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    gearSourceId?: string | null,
  } | null,
};

export type OnUpdateGearSubscriptionVariables = {
  filter?: ModelSubscriptionGearFilterInput | null,
};

export type OnUpdateGearSubscription = {
  onUpdateGear?:  {
    __typename: "Gear",
    id: string,
    description: string,
    weight: number,
    uses?: number | null,
    tags?: Array< string | null > | null,
    source?:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    gearSourceId?: string | null,
  } | null,
};

export type OnDeleteGearSubscriptionVariables = {
  filter?: ModelSubscriptionGearFilterInput | null,
};

export type OnDeleteGearSubscription = {
  onDeleteGear?:  {
    __typename: "Gear",
    id: string,
    description: string,
    weight: number,
    uses?: number | null,
    tags?: Array< string | null > | null,
    source?:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    gearSourceId?: string | null,
  } | null,
};

export type OnCreateCharacterMoveSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterMoveFilterInput | null,
};

export type OnCreateCharacterMoveSubscription = {
  onCreateCharacterMove?:  {
    __typename: "CharacterMove",
    id: string,
    selected?: boolean | null,
    move:  {
      __typename: "Move",
      id: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      moveClassId: string,
      moveSourceId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    characterSixToTenMovesId?: string | null,
    characterTwoToTenMovesId?: string | null,
    characterStartingMovesId?: string | null,
    characterMoveMoveId: string,
  } | null,
};

export type OnUpdateCharacterMoveSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterMoveFilterInput | null,
};

export type OnUpdateCharacterMoveSubscription = {
  onUpdateCharacterMove?:  {
    __typename: "CharacterMove",
    id: string,
    selected?: boolean | null,
    move:  {
      __typename: "Move",
      id: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      moveClassId: string,
      moveSourceId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    characterSixToTenMovesId?: string | null,
    characterTwoToTenMovesId?: string | null,
    characterStartingMovesId?: string | null,
    characterMoveMoveId: string,
  } | null,
};

export type OnDeleteCharacterMoveSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterMoveFilterInput | null,
};

export type OnDeleteCharacterMoveSubscription = {
  onDeleteCharacterMove?:  {
    __typename: "CharacterMove",
    id: string,
    selected?: boolean | null,
    move:  {
      __typename: "Move",
      id: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      moveClassId: string,
      moveSourceId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    characterSixToTenMovesId?: string | null,
    characterTwoToTenMovesId?: string | null,
    characterStartingMovesId?: string | null,
    characterMoveMoveId: string,
  } | null,
};

export type OnCreateMoveSubscriptionVariables = {
  filter?: ModelSubscriptionMoveFilterInput | null,
};

export type OnCreateMoveSubscription = {
  onCreateMove?:  {
    __typename: "Move",
    id: string,
    description: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    source?:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    moveClassId: string,
    moveSourceId?: string | null,
  } | null,
};

export type OnUpdateMoveSubscriptionVariables = {
  filter?: ModelSubscriptionMoveFilterInput | null,
};

export type OnUpdateMoveSubscription = {
  onUpdateMove?:  {
    __typename: "Move",
    id: string,
    description: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    source?:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    moveClassId: string,
    moveSourceId?: string | null,
  } | null,
};

export type OnDeleteMoveSubscriptionVariables = {
  filter?: ModelSubscriptionMoveFilterInput | null,
};

export type OnDeleteMoveSubscription = {
  onDeleteMove?:  {
    __typename: "Move",
    id: string,
    description: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    source?:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    moveClassId: string,
    moveSourceId?: string | null,
  } | null,
};

export type OnCreateCharacterBondSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterBondFilterInput | null,
};

export type OnCreateCharacterBondSubscription = {
  onCreateCharacterBond?:  {
    __typename: "CharacterBond",
    id: string,
    description?: string | null,
    bond:  {
      __typename: "Bond",
      id: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      bondClassId: string,
    },
    selected?: boolean | null,
    createdAt: string,
    updatedAt: string,
    characterBondsId?: string | null,
    characterBondBondId: string,
  } | null,
};

export type OnUpdateCharacterBondSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterBondFilterInput | null,
};

export type OnUpdateCharacterBondSubscription = {
  onUpdateCharacterBond?:  {
    __typename: "CharacterBond",
    id: string,
    description?: string | null,
    bond:  {
      __typename: "Bond",
      id: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      bondClassId: string,
    },
    selected?: boolean | null,
    createdAt: string,
    updatedAt: string,
    characterBondsId?: string | null,
    characterBondBondId: string,
  } | null,
};

export type OnDeleteCharacterBondSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterBondFilterInput | null,
};

export type OnDeleteCharacterBondSubscription = {
  onDeleteCharacterBond?:  {
    __typename: "CharacterBond",
    id: string,
    description?: string | null,
    bond:  {
      __typename: "Bond",
      id: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      bondClassId: string,
    },
    selected?: boolean | null,
    createdAt: string,
    updatedAt: string,
    characterBondsId?: string | null,
    characterBondBondId: string,
  } | null,
};

export type OnCreateBondSubscriptionVariables = {
  filter?: ModelSubscriptionBondFilterInput | null,
};

export type OnCreateBondSubscription = {
  onCreateBond?:  {
    __typename: "Bond",
    id: string,
    description?: string | null,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    bondClassId: string,
  } | null,
};

export type OnUpdateBondSubscriptionVariables = {
  filter?: ModelSubscriptionBondFilterInput | null,
};

export type OnUpdateBondSubscription = {
  onUpdateBond?:  {
    __typename: "Bond",
    id: string,
    description?: string | null,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    bondClassId: string,
  } | null,
};

export type OnDeleteBondSubscriptionVariables = {
  filter?: ModelSubscriptionBondFilterInput | null,
};

export type OnDeleteBondSubscription = {
  onDeleteBond?:  {
    __typename: "Bond",
    id: string,
    description?: string | null,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    bondClassId: string,
  } | null,
};

export type OnCreateCharacterAbilityScoreSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterAbilityScoreFilterInput | null,
};

export type OnCreateCharacterAbilityScoreSubscription = {
  onCreateCharacterAbilityScore?:  {
    __typename: "CharacterAbilityScore",
    abilityScore:  {
      __typename: "AbilityScore",
      id: string,
      name: string,
      shortName: string,
      debility: string,
      debilityPenalty: string,
      createdAt: string,
      updatedAt: string,
    },
    id: string,
    value: string,
    bonus: number,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    characterAbilityscoresId?: string | null,
    characterAbilityScoreAbilityScoreId: string,
  } | null,
};

export type OnUpdateCharacterAbilityScoreSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterAbilityScoreFilterInput | null,
};

export type OnUpdateCharacterAbilityScoreSubscription = {
  onUpdateCharacterAbilityScore?:  {
    __typename: "CharacterAbilityScore",
    abilityScore:  {
      __typename: "AbilityScore",
      id: string,
      name: string,
      shortName: string,
      debility: string,
      debilityPenalty: string,
      createdAt: string,
      updatedAt: string,
    },
    id: string,
    value: string,
    bonus: number,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    characterAbilityscoresId?: string | null,
    characterAbilityScoreAbilityScoreId: string,
  } | null,
};

export type OnDeleteCharacterAbilityScoreSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterAbilityScoreFilterInput | null,
};

export type OnDeleteCharacterAbilityScoreSubscription = {
  onDeleteCharacterAbilityScore?:  {
    __typename: "CharacterAbilityScore",
    abilityScore:  {
      __typename: "AbilityScore",
      id: string,
      name: string,
      shortName: string,
      debility: string,
      debilityPenalty: string,
      createdAt: string,
      updatedAt: string,
    },
    id: string,
    value: string,
    bonus: number,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    characterAbilityscoresId?: string | null,
    characterAbilityScoreAbilityScoreId: string,
  } | null,
};

export type OnCreateAbilityScoreSubscriptionVariables = {
  filter?: ModelSubscriptionAbilityScoreFilterInput | null,
};

export type OnCreateAbilityScoreSubscription = {
  onCreateAbilityScore?:  {
    __typename: "AbilityScore",
    id: string,
    name: string,
    shortName: string,
    debility: string,
    debilityPenalty: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAbilityScoreSubscriptionVariables = {
  filter?: ModelSubscriptionAbilityScoreFilterInput | null,
};

export type OnUpdateAbilityScoreSubscription = {
  onUpdateAbilityScore?:  {
    __typename: "AbilityScore",
    id: string,
    name: string,
    shortName: string,
    debility: string,
    debilityPenalty: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAbilityScoreSubscriptionVariables = {
  filter?: ModelSubscriptionAbilityScoreFilterInput | null,
};

export type OnDeleteAbilityScoreSubscription = {
  onDeleteAbilityScore?:  {
    __typename: "AbilityScore",
    id: string,
    name: string,
    shortName: string,
    debility: string,
    debilityPenalty: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCharacterRaceSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterRaceFilterInput | null,
};

export type OnCreateCharacterRaceSubscription = {
  onCreateCharacterRace?:  {
    __typename: "CharacterRace",
    id: string,
    race:  {
      __typename: "Race",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      raceClassId?: string | null,
      raceSourceId: string,
    },
    createdAt: string,
    updatedAt: string,
    characterRaceRaceId: string,
  } | null,
};

export type OnUpdateCharacterRaceSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterRaceFilterInput | null,
};

export type OnUpdateCharacterRaceSubscription = {
  onUpdateCharacterRace?:  {
    __typename: "CharacterRace",
    id: string,
    race:  {
      __typename: "Race",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      raceClassId?: string | null,
      raceSourceId: string,
    },
    createdAt: string,
    updatedAt: string,
    characterRaceRaceId: string,
  } | null,
};

export type OnDeleteCharacterRaceSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterRaceFilterInput | null,
};

export type OnDeleteCharacterRaceSubscription = {
  onDeleteCharacterRace?:  {
    __typename: "CharacterRace",
    id: string,
    race:  {
      __typename: "Race",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      raceClassId?: string | null,
      raceSourceId: string,
    },
    createdAt: string,
    updatedAt: string,
    characterRaceRaceId: string,
  } | null,
};

export type OnCreateRaceSubscriptionVariables = {
  filter?: ModelSubscriptionRaceFilterInput | null,
};

export type OnCreateRaceSubscription = {
  onCreateRace?:  {
    __typename: "Race",
    id: string,
    name?: string | null,
    description?: string | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    } | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    raceClassId?: string | null,
    raceSourceId: string,
  } | null,
};

export type OnUpdateRaceSubscriptionVariables = {
  filter?: ModelSubscriptionRaceFilterInput | null,
};

export type OnUpdateRaceSubscription = {
  onUpdateRace?:  {
    __typename: "Race",
    id: string,
    name?: string | null,
    description?: string | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    } | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    raceClassId?: string | null,
    raceSourceId: string,
  } | null,
};

export type OnDeleteRaceSubscriptionVariables = {
  filter?: ModelSubscriptionRaceFilterInput | null,
};

export type OnDeleteRaceSubscription = {
  onDeleteRace?:  {
    __typename: "Race",
    id: string,
    name?: string | null,
    description?: string | null,
    class?:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    } | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    raceClassId?: string | null,
    raceSourceId: string,
  } | null,
};

export type OnCreateCharacterAlignmentSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterAlignmentFilterInput | null,
};

export type OnCreateCharacterAlignmentSubscription = {
  onCreateCharacterAlignment?:  {
    __typename: "CharacterAlignment",
    id: string,
    alignment:  {
      __typename: "Alignment",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      alignmentClassId: string,
    },
    selected?: boolean | null,
    createdAt: string,
    updatedAt: string,
    characterAlignmentAlignmentId: string,
  } | null,
};

export type OnUpdateCharacterAlignmentSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterAlignmentFilterInput | null,
};

export type OnUpdateCharacterAlignmentSubscription = {
  onUpdateCharacterAlignment?:  {
    __typename: "CharacterAlignment",
    id: string,
    alignment:  {
      __typename: "Alignment",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      alignmentClassId: string,
    },
    selected?: boolean | null,
    createdAt: string,
    updatedAt: string,
    characterAlignmentAlignmentId: string,
  } | null,
};

export type OnDeleteCharacterAlignmentSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterAlignmentFilterInput | null,
};

export type OnDeleteCharacterAlignmentSubscription = {
  onDeleteCharacterAlignment?:  {
    __typename: "CharacterAlignment",
    id: string,
    alignment:  {
      __typename: "Alignment",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      alignmentClassId: string,
    },
    selected?: boolean | null,
    createdAt: string,
    updatedAt: string,
    characterAlignmentAlignmentId: string,
  } | null,
};

export type OnCreateAlignmentSubscriptionVariables = {
  filter?: ModelSubscriptionAlignmentFilterInput | null,
};

export type OnCreateAlignmentSubscription = {
  onCreateAlignment?:  {
    __typename: "Alignment",
    id: string,
    name?: string | null,
    description?: string | null,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    alignmentClassId: string,
  } | null,
};

export type OnUpdateAlignmentSubscriptionVariables = {
  filter?: ModelSubscriptionAlignmentFilterInput | null,
};

export type OnUpdateAlignmentSubscription = {
  onUpdateAlignment?:  {
    __typename: "Alignment",
    id: string,
    name?: string | null,
    description?: string | null,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    alignmentClassId: string,
  } | null,
};

export type OnDeleteAlignmentSubscriptionVariables = {
  filter?: ModelSubscriptionAlignmentFilterInput | null,
};

export type OnDeleteAlignmentSubscription = {
  onDeleteAlignment?:  {
    __typename: "Alignment",
    id: string,
    name?: string | null,
    description?: string | null,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    alignmentClassId: string,
  } | null,
};

export type OnCreateDiceTypeSubscriptionVariables = {
  filter?: ModelSubscriptionDiceTypeFilterInput | null,
};

export type OnCreateDiceTypeSubscription = {
  onCreateDiceType?:  {
    __typename: "DiceType",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDiceTypeSubscriptionVariables = {
  filter?: ModelSubscriptionDiceTypeFilterInput | null,
};

export type OnUpdateDiceTypeSubscription = {
  onUpdateDiceType?:  {
    __typename: "DiceType",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDiceTypeSubscriptionVariables = {
  filter?: ModelSubscriptionDiceTypeFilterInput | null,
};

export type OnDeleteDiceTypeSubscription = {
  onDeleteDiceType?:  {
    __typename: "DiceType",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCharacterLookSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterLookFilterInput | null,
};

export type OnCreateCharacterLookSubscription = {
  onCreateCharacterLook?:  {
    __typename: "CharacterLook",
    id: string,
    look?:  {
      __typename: "ModelLookConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCharacterLookSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterLookFilterInput | null,
};

export type OnUpdateCharacterLookSubscription = {
  onUpdateCharacterLook?:  {
    __typename: "CharacterLook",
    id: string,
    look?:  {
      __typename: "ModelLookConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCharacterLookSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterLookFilterInput | null,
};

export type OnDeleteCharacterLookSubscription = {
  onDeleteCharacterLook?:  {
    __typename: "CharacterLook",
    id: string,
    look?:  {
      __typename: "ModelLookConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLookSubscriptionVariables = {
  filter?: ModelSubscriptionLookFilterInput | null,
};

export type OnCreateLookSubscription = {
  onCreateLook?:  {
    __typename: "Look",
    id: string,
    name: string,
    description: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    characterLookLookId: string,
    lookClassId: string,
  } | null,
};

export type OnUpdateLookSubscriptionVariables = {
  filter?: ModelSubscriptionLookFilterInput | null,
};

export type OnUpdateLookSubscription = {
  onUpdateLook?:  {
    __typename: "Look",
    id: string,
    name: string,
    description: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    characterLookLookId: string,
    lookClassId: string,
  } | null,
};

export type OnDeleteLookSubscriptionVariables = {
  filter?: ModelSubscriptionLookFilterInput | null,
};

export type OnDeleteLookSubscription = {
  onDeleteLook?:  {
    __typename: "Look",
    id: string,
    name: string,
    description: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      classSourceId: string,
      classDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    characterLookLookId: string,
    lookClassId: string,
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
    isTemplate?: boolean | null,
    spells?:  {
      __typename: "ModelCharacterSpellConnection",
      nextToken?: string | null,
    } | null,
    gear?:  {
      __typename: "ModelCharacterGearConnection",
      nextToken?: string | null,
    } | null,
    sixToTenMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
    } | null,
    twoToTenMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
    } | null,
    startingMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
    } | null,
    bonds?:  {
      __typename: "ModelCharacterBondConnection",
      nextToken?: string | null,
    } | null,
    abilityscores?:  {
      __typename: "ModelCharacterAbilityScoreConnection",
      nextToken?: string | null,
    } | null,
    race?:  {
      __typename: "CharacterRace",
      id: string,
      createdAt: string,
      updatedAt: string,
      characterRaceRaceId: string,
    } | null,
    alignment?:  {
      __typename: "CharacterAlignment",
      id: string,
      selected?: boolean | null,
      createdAt: string,
      updatedAt: string,
      characterAlignmentAlignmentId: string,
    } | null,
    tags?: Array< string | null > | null,
    look?:  {
      __typename: "CharacterLook",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    characterClassId?: string | null,
    class?:  {
      __typename: "CharacterClass",
      id: string,
      createdAt: string,
      updatedAt: string,
      characterClassClassId: string,
      characterClassCharacterId: string,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    characterRaceId?: string | null,
    characterAlignmentId?: string | null,
    characterLookId?: string | null,
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
    isTemplate?: boolean | null,
    spells?:  {
      __typename: "ModelCharacterSpellConnection",
      nextToken?: string | null,
    } | null,
    gear?:  {
      __typename: "ModelCharacterGearConnection",
      nextToken?: string | null,
    } | null,
    sixToTenMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
    } | null,
    twoToTenMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
    } | null,
    startingMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
    } | null,
    bonds?:  {
      __typename: "ModelCharacterBondConnection",
      nextToken?: string | null,
    } | null,
    abilityscores?:  {
      __typename: "ModelCharacterAbilityScoreConnection",
      nextToken?: string | null,
    } | null,
    race?:  {
      __typename: "CharacterRace",
      id: string,
      createdAt: string,
      updatedAt: string,
      characterRaceRaceId: string,
    } | null,
    alignment?:  {
      __typename: "CharacterAlignment",
      id: string,
      selected?: boolean | null,
      createdAt: string,
      updatedAt: string,
      characterAlignmentAlignmentId: string,
    } | null,
    tags?: Array< string | null > | null,
    look?:  {
      __typename: "CharacterLook",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    characterClassId?: string | null,
    class?:  {
      __typename: "CharacterClass",
      id: string,
      createdAt: string,
      updatedAt: string,
      characterClassClassId: string,
      characterClassCharacterId: string,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    characterRaceId?: string | null,
    characterAlignmentId?: string | null,
    characterLookId?: string | null,
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
    isTemplate?: boolean | null,
    spells?:  {
      __typename: "ModelCharacterSpellConnection",
      nextToken?: string | null,
    } | null,
    gear?:  {
      __typename: "ModelCharacterGearConnection",
      nextToken?: string | null,
    } | null,
    sixToTenMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
    } | null,
    twoToTenMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
    } | null,
    startingMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
    } | null,
    bonds?:  {
      __typename: "ModelCharacterBondConnection",
      nextToken?: string | null,
    } | null,
    abilityscores?:  {
      __typename: "ModelCharacterAbilityScoreConnection",
      nextToken?: string | null,
    } | null,
    race?:  {
      __typename: "CharacterRace",
      id: string,
      createdAt: string,
      updatedAt: string,
      characterRaceRaceId: string,
    } | null,
    alignment?:  {
      __typename: "CharacterAlignment",
      id: string,
      selected?: boolean | null,
      createdAt: string,
      updatedAt: string,
      characterAlignmentAlignmentId: string,
    } | null,
    tags?: Array< string | null > | null,
    look?:  {
      __typename: "CharacterLook",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    characterClassId?: string | null,
    class?:  {
      __typename: "CharacterClass",
      id: string,
      createdAt: string,
      updatedAt: string,
      characterClassClassId: string,
      characterClassCharacterId: string,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    characterRaceId?: string | null,
    characterAlignmentId?: string | null,
    characterLookId?: string | null,
  } | null,
};
