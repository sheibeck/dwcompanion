/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email: string,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  _deleted?: ModelBooleanInput | null,
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

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  email: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateSourceInput = {
  id?: string | null,
  name: string,
  _version?: number | null,
};

export type ModelSourceConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelSourceConditionInput | null > | null,
  or?: Array< ModelSourceConditionInput | null > | null,
  not?: ModelSourceConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type Source = {
  __typename: "Source",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateSourceInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteSourceInput = {
  id: string,
  _version?: number | null,
};

export type CreateCharacterProfessionInput = {
  id?: string | null,
  _version?: number | null,
  characterProfessionProfessionId?: string | null,
  characterProfessionCharacterId?: string | null,
};

export type ModelCharacterProfessionConditionInput = {
  and?: Array< ModelCharacterProfessionConditionInput | null > | null,
  or?: Array< ModelCharacterProfessionConditionInput | null > | null,
  not?: ModelCharacterProfessionConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  characterProfessionProfessionId?: ModelIDInput | null,
  characterProfessionCharacterId?: ModelIDInput | null,
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

export type CharacterProfession = {
  __typename: "CharacterProfession",
  id: string,
  Character?: Character | null,
  Profession?: Profession | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  characterProfessionProfessionId?: string | null,
  characterProfessionCharacterId?: string | null,
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
  notes?: string | null,
  CharacterProfession?: CharacterProfession | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  characterRaceId?: string | null,
  characterAlignmentId?: string | null,
  characterLookId?: string | null,
  characterCharacterProfessionId?: string | null,
};

export type ModelCharacterGearConnection = {
  __typename: "ModelCharacterGearConnection",
  items:  Array<CharacterGear | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CharacterGear = {
  __typename: "CharacterGear",
  id: string,
  gear: Gear,
  uses?: number | null,
  tags?: Array< string | null > | null,
  characterID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
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
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  gearSourceId?: string | null,
};

export type ModelCharacterMoveConnection = {
  __typename: "ModelCharacterMoveConnection",
  items:  Array<CharacterMove | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CharacterMove = {
  __typename: "CharacterMove",
  id: string,
  selected?: boolean | null,
  move: Move,
  characterID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  characterMoveMoveId: string,
};

export type Move = {
  __typename: "Move",
  id: string,
  description: string,
  class: Profession,
  source?: Source | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  moveClassId: string,
  moveSourceId?: string | null,
};

export type Profession = {
  __typename: "Profession",
  id: string,
  name: string,
  description: string,
  source: Source,
  damageDiceType?: DiceType | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  professionSourceId: string,
  professionDamageDiceTypeId?: string | null,
};

export type DiceType = {
  __typename: "DiceType",
  id: string,
  name?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelCharacterBondConnection = {
  __typename: "ModelCharacterBondConnection",
  items:  Array<CharacterBond | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CharacterBond = {
  __typename: "CharacterBond",
  id: string,
  description?: string | null,
  bond: Bond,
  selected?: boolean | null,
  characterID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  characterBondBondId: string,
};

export type Bond = {
  __typename: "Bond",
  id: string,
  description?: string | null,
  class: Profession,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  bondClassId: string,
};

export type ModelCharacterAbilityScoreConnection = {
  __typename: "ModelCharacterAbilityScoreConnection",
  items:  Array<CharacterAbilityScore | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CharacterAbilityScore = {
  __typename: "CharacterAbilityScore",
  abilityScore: AbilityScore,
  id: string,
  value: string,
  bonus: number,
  tags?: Array< string | null > | null,
  characterID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
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
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type CharacterRace = {
  __typename: "CharacterRace",
  id: string,
  race: Race,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  characterRaceRaceId: string,
};

export type Race = {
  __typename: "Race",
  id: string,
  name?: string | null,
  description?: string | null,
  profession?: Profession | null,
  source: Source,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  raceProfessionId?: string | null,
  raceSourceId: string,
};

export type CharacterAlignment = {
  __typename: "CharacterAlignment",
  id: string,
  alignment: Alignment,
  selected?: boolean | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  characterAlignmentAlignmentId: string,
};

export type Alignment = {
  __typename: "Alignment",
  id: string,
  name?: string | null,
  description?: string | null,
  class: Profession,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  alignmentClassId: string,
};

export type CharacterLook = {
  __typename: "CharacterLook",
  id: string,
  look?: ModelLookConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelLookConnection = {
  __typename: "ModelLookConnection",
  items:  Array<Look | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Look = {
  __typename: "Look",
  id: string,
  name: string,
  description: string,
  characterlookID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateCharacterProfessionInput = {
  id: string,
  _version?: number | null,
  characterProfessionProfessionId?: string | null,
  characterProfessionCharacterId?: string | null,
};

export type DeleteCharacterProfessionInput = {
  id: string,
  _version?: number | null,
};

export type CreateProfessionInput = {
  id?: string | null,
  name: string,
  description: string,
  _version?: number | null,
  professionSourceId: string,
  professionDamageDiceTypeId?: string | null,
};

export type ModelProfessionConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelProfessionConditionInput | null > | null,
  or?: Array< ModelProfessionConditionInput | null > | null,
  not?: ModelProfessionConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  professionSourceId?: ModelIDInput | null,
  professionDamageDiceTypeId?: ModelIDInput | null,
};

export type UpdateProfessionInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  _version?: number | null,
  professionSourceId?: string | null,
  professionDamageDiceTypeId?: string | null,
};

export type DeleteProfessionInput = {
  id: string,
  _version?: number | null,
};

export type CreateSpellInput = {
  id?: string | null,
  name: string,
  level: number,
  type: string,
  ongoing?: boolean | null,
  description: string,
  _version?: number | null,
  spellSourceId: string,
  spellProfessionId: string,
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
  _deleted?: ModelBooleanInput | null,
  spellSourceId?: ModelIDInput | null,
  spellProfessionId?: ModelIDInput | null,
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

export type Spell = {
  __typename: "Spell",
  id: string,
  name: string,
  level: number,
  type: string,
  ongoing?: boolean | null,
  description: string,
  source: Source,
  profession: Profession,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  spellSourceId: string,
  spellProfessionId: string,
};

export type UpdateSpellInput = {
  id: string,
  name?: string | null,
  level?: number | null,
  type?: string | null,
  ongoing?: boolean | null,
  description?: string | null,
  _version?: number | null,
  spellSourceId?: string | null,
  spellProfessionId?: string | null,
};

export type DeleteSpellInput = {
  id: string,
  _version?: number | null,
};

export type CreateCharacterSpellInput = {
  id?: string | null,
  selected?: boolean | null,
  tags?: Array< string | null > | null,
  _version?: number | null,
  characterSpellSpellId: string,
};

export type ModelCharacterSpellConditionInput = {
  selected?: ModelBooleanInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelCharacterSpellConditionInput | null > | null,
  or?: Array< ModelCharacterSpellConditionInput | null > | null,
  not?: ModelCharacterSpellConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  characterSpellSpellId?: ModelIDInput | null,
};

export type CharacterSpell = {
  __typename: "CharacterSpell",
  id: string,
  spell: Spell,
  selected?: boolean | null,
  tags?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  characterSpellSpellId: string,
};

export type UpdateCharacterSpellInput = {
  id: string,
  selected?: boolean | null,
  tags?: Array< string | null > | null,
  _version?: number | null,
  characterSpellSpellId?: string | null,
};

export type DeleteCharacterSpellInput = {
  id: string,
  _version?: number | null,
};

export type CreateCharacterGearInput = {
  id?: string | null,
  uses?: number | null,
  tags?: Array< string | null > | null,
  characterID: string,
  _version?: number | null,
  characterGearGearId: string,
};

export type ModelCharacterGearConditionInput = {
  uses?: ModelIntInput | null,
  tags?: ModelStringInput | null,
  characterID?: ModelIDInput | null,
  and?: Array< ModelCharacterGearConditionInput | null > | null,
  or?: Array< ModelCharacterGearConditionInput | null > | null,
  not?: ModelCharacterGearConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  characterGearGearId?: ModelIDInput | null,
};

export type UpdateCharacterGearInput = {
  id: string,
  uses?: number | null,
  tags?: Array< string | null > | null,
  characterID?: string | null,
  _version?: number | null,
  characterGearGearId?: string | null,
};

export type DeleteCharacterGearInput = {
  id: string,
  _version?: number | null,
};

export type CreateGearInput = {
  id?: string | null,
  description: string,
  weight: number,
  uses?: number | null,
  tags?: Array< string | null > | null,
  _version?: number | null,
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
  _deleted?: ModelBooleanInput | null,
  gearSourceId?: ModelIDInput | null,
};

export type UpdateGearInput = {
  id: string,
  description?: string | null,
  weight?: number | null,
  uses?: number | null,
  tags?: Array< string | null > | null,
  _version?: number | null,
  gearSourceId?: string | null,
};

export type DeleteGearInput = {
  id: string,
  _version?: number | null,
};

export type CreateCharacterMoveInput = {
  id?: string | null,
  selected?: boolean | null,
  characterID: string,
  _version?: number | null,
  characterMoveMoveId: string,
};

export type ModelCharacterMoveConditionInput = {
  selected?: ModelBooleanInput | null,
  characterID?: ModelIDInput | null,
  and?: Array< ModelCharacterMoveConditionInput | null > | null,
  or?: Array< ModelCharacterMoveConditionInput | null > | null,
  not?: ModelCharacterMoveConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  characterMoveMoveId?: ModelIDInput | null,
};

export type UpdateCharacterMoveInput = {
  id: string,
  selected?: boolean | null,
  characterID?: string | null,
  _version?: number | null,
  characterMoveMoveId?: string | null,
};

export type DeleteCharacterMoveInput = {
  id: string,
  _version?: number | null,
};

export type CreateMoveInput = {
  id?: string | null,
  description: string,
  _version?: number | null,
  moveClassId: string,
  moveSourceId?: string | null,
};

export type ModelMoveConditionInput = {
  description?: ModelStringInput | null,
  and?: Array< ModelMoveConditionInput | null > | null,
  or?: Array< ModelMoveConditionInput | null > | null,
  not?: ModelMoveConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  moveClassId?: ModelIDInput | null,
  moveSourceId?: ModelIDInput | null,
};

export type UpdateMoveInput = {
  id: string,
  description?: string | null,
  _version?: number | null,
  moveClassId?: string | null,
  moveSourceId?: string | null,
};

export type DeleteMoveInput = {
  id: string,
  _version?: number | null,
};

export type CreateCharacterBondInput = {
  id?: string | null,
  description?: string | null,
  selected?: boolean | null,
  characterID: string,
  _version?: number | null,
  characterBondBondId: string,
};

export type ModelCharacterBondConditionInput = {
  description?: ModelStringInput | null,
  selected?: ModelBooleanInput | null,
  characterID?: ModelIDInput | null,
  and?: Array< ModelCharacterBondConditionInput | null > | null,
  or?: Array< ModelCharacterBondConditionInput | null > | null,
  not?: ModelCharacterBondConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  characterBondBondId?: ModelIDInput | null,
};

export type UpdateCharacterBondInput = {
  id: string,
  description?: string | null,
  selected?: boolean | null,
  characterID?: string | null,
  _version?: number | null,
  characterBondBondId?: string | null,
};

export type DeleteCharacterBondInput = {
  id: string,
  _version?: number | null,
};

export type CreateBondInput = {
  id?: string | null,
  description?: string | null,
  _version?: number | null,
  bondClassId: string,
};

export type ModelBondConditionInput = {
  description?: ModelStringInput | null,
  and?: Array< ModelBondConditionInput | null > | null,
  or?: Array< ModelBondConditionInput | null > | null,
  not?: ModelBondConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  bondClassId?: ModelIDInput | null,
};

export type UpdateBondInput = {
  id: string,
  description?: string | null,
  _version?: number | null,
  bondClassId?: string | null,
};

export type DeleteBondInput = {
  id: string,
  _version?: number | null,
};

export type CreateCharacterAbilityScoreInput = {
  id?: string | null,
  value: string,
  bonus: number,
  tags?: Array< string | null > | null,
  characterID: string,
  _version?: number | null,
  characterAbilityScoreAbilityScoreId: string,
};

export type ModelCharacterAbilityScoreConditionInput = {
  value?: ModelStringInput | null,
  bonus?: ModelIntInput | null,
  tags?: ModelStringInput | null,
  characterID?: ModelIDInput | null,
  and?: Array< ModelCharacterAbilityScoreConditionInput | null > | null,
  or?: Array< ModelCharacterAbilityScoreConditionInput | null > | null,
  not?: ModelCharacterAbilityScoreConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  characterAbilityScoreAbilityScoreId?: ModelIDInput | null,
};

export type UpdateCharacterAbilityScoreInput = {
  id: string,
  value?: string | null,
  bonus?: number | null,
  tags?: Array< string | null > | null,
  characterID?: string | null,
  _version?: number | null,
  characterAbilityScoreAbilityScoreId?: string | null,
};

export type DeleteCharacterAbilityScoreInput = {
  id: string,
  _version?: number | null,
};

export type CreateAbilityScoreInput = {
  id?: string | null,
  name: string,
  shortName: string,
  debility: string,
  debilityPenalty: string,
  _version?: number | null,
};

export type ModelAbilityScoreConditionInput = {
  name?: ModelStringInput | null,
  shortName?: ModelStringInput | null,
  debility?: ModelStringInput | null,
  debilityPenalty?: ModelStringInput | null,
  and?: Array< ModelAbilityScoreConditionInput | null > | null,
  or?: Array< ModelAbilityScoreConditionInput | null > | null,
  not?: ModelAbilityScoreConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateAbilityScoreInput = {
  id: string,
  name?: string | null,
  shortName?: string | null,
  debility?: string | null,
  debilityPenalty?: string | null,
  _version?: number | null,
};

export type DeleteAbilityScoreInput = {
  id: string,
  _version?: number | null,
};

export type CreateCharacterRaceInput = {
  id?: string | null,
  _version?: number | null,
  characterRaceRaceId: string,
};

export type ModelCharacterRaceConditionInput = {
  and?: Array< ModelCharacterRaceConditionInput | null > | null,
  or?: Array< ModelCharacterRaceConditionInput | null > | null,
  not?: ModelCharacterRaceConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  characterRaceRaceId?: ModelIDInput | null,
};

export type UpdateCharacterRaceInput = {
  id: string,
  _version?: number | null,
  characterRaceRaceId?: string | null,
};

export type DeleteCharacterRaceInput = {
  id: string,
  _version?: number | null,
};

export type CreateRaceInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  _version?: number | null,
  raceProfessionId?: string | null,
  raceSourceId: string,
};

export type ModelRaceConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelRaceConditionInput | null > | null,
  or?: Array< ModelRaceConditionInput | null > | null,
  not?: ModelRaceConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  raceProfessionId?: ModelIDInput | null,
  raceSourceId?: ModelIDInput | null,
};

export type UpdateRaceInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  _version?: number | null,
  raceProfessionId?: string | null,
  raceSourceId?: string | null,
};

export type DeleteRaceInput = {
  id: string,
  _version?: number | null,
};

export type CreateCharacterAlignmentInput = {
  id?: string | null,
  selected?: boolean | null,
  _version?: number | null,
  characterAlignmentAlignmentId: string,
};

export type ModelCharacterAlignmentConditionInput = {
  selected?: ModelBooleanInput | null,
  and?: Array< ModelCharacterAlignmentConditionInput | null > | null,
  or?: Array< ModelCharacterAlignmentConditionInput | null > | null,
  not?: ModelCharacterAlignmentConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  characterAlignmentAlignmentId?: ModelIDInput | null,
};

export type UpdateCharacterAlignmentInput = {
  id: string,
  selected?: boolean | null,
  _version?: number | null,
  characterAlignmentAlignmentId?: string | null,
};

export type DeleteCharacterAlignmentInput = {
  id: string,
  _version?: number | null,
};

export type CreateAlignmentInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  _version?: number | null,
  alignmentClassId: string,
};

export type ModelAlignmentConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelAlignmentConditionInput | null > | null,
  or?: Array< ModelAlignmentConditionInput | null > | null,
  not?: ModelAlignmentConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  alignmentClassId?: ModelIDInput | null,
};

export type UpdateAlignmentInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  _version?: number | null,
  alignmentClassId?: string | null,
};

export type DeleteAlignmentInput = {
  id: string,
  _version?: number | null,
};

export type CreateDiceTypeInput = {
  id?: string | null,
  name?: string | null,
  _version?: number | null,
};

export type ModelDiceTypeConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelDiceTypeConditionInput | null > | null,
  or?: Array< ModelDiceTypeConditionInput | null > | null,
  not?: ModelDiceTypeConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateDiceTypeInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteDiceTypeInput = {
  id: string,
  _version?: number | null,
};

export type CreateCharacterLookInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelCharacterLookConditionInput = {
  and?: Array< ModelCharacterLookConditionInput | null > | null,
  or?: Array< ModelCharacterLookConditionInput | null > | null,
  not?: ModelCharacterLookConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateCharacterLookInput = {
  id: string,
  _version?: number | null,
};

export type DeleteCharacterLookInput = {
  id: string,
  _version?: number | null,
};

export type CreateLookInput = {
  id?: string | null,
  name: string,
  description: string,
  characterlookID: string,
  _version?: number | null,
};

export type ModelLookConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  characterlookID?: ModelIDInput | null,
  and?: Array< ModelLookConditionInput | null > | null,
  or?: Array< ModelLookConditionInput | null > | null,
  not?: ModelLookConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateLookInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  characterlookID?: string | null,
  _version?: number | null,
};

export type DeleteLookInput = {
  id: string,
  _version?: number | null,
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
  notes?: string | null,
  _version?: number | null,
  characterRaceId?: string | null,
  characterAlignmentId?: string | null,
  characterLookId?: string | null,
  characterCharacterProfessionId?: string | null,
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
  notes?: ModelStringInput | null,
  and?: Array< ModelCharacterConditionInput | null > | null,
  or?: Array< ModelCharacterConditionInput | null > | null,
  not?: ModelCharacterConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  characterRaceId?: ModelIDInput | null,
  characterAlignmentId?: ModelIDInput | null,
  characterLookId?: ModelIDInput | null,
  characterCharacterProfessionId?: ModelIDInput | null,
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
  notes?: string | null,
  _version?: number | null,
  characterRaceId?: string | null,
  characterAlignmentId?: string | null,
  characterLookId?: string | null,
  characterCharacterProfessionId?: string | null,
};

export type DeleteCharacterInput = {
  id: string,
  _version?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSourceFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelSourceFilterInput | null > | null,
  or?: Array< ModelSourceFilterInput | null > | null,
  not?: ModelSourceFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSourceConnection = {
  __typename: "ModelSourceConnection",
  items:  Array<Source | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCharacterProfessionFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelCharacterProfessionFilterInput | null > | null,
  or?: Array< ModelCharacterProfessionFilterInput | null > | null,
  not?: ModelCharacterProfessionFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  characterProfessionProfessionId?: ModelIDInput | null,
  characterProfessionCharacterId?: ModelIDInput | null,
};

export type ModelCharacterProfessionConnection = {
  __typename: "ModelCharacterProfessionConnection",
  items:  Array<CharacterProfession | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelProfessionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelProfessionFilterInput | null > | null,
  or?: Array< ModelProfessionFilterInput | null > | null,
  not?: ModelProfessionFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  professionSourceId?: ModelIDInput | null,
  professionDamageDiceTypeId?: ModelIDInput | null,
};

export type ModelProfessionConnection = {
  __typename: "ModelProfessionConnection",
  items:  Array<Profession | null >,
  nextToken?: string | null,
  startedAt?: number | null,
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
  _deleted?: ModelBooleanInput | null,
  spellSourceId?: ModelIDInput | null,
  spellProfessionId?: ModelIDInput | null,
};

export type ModelSpellConnection = {
  __typename: "ModelSpellConnection",
  items:  Array<Spell | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCharacterSpellFilterInput = {
  id?: ModelIDInput | null,
  selected?: ModelBooleanInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelCharacterSpellFilterInput | null > | null,
  or?: Array< ModelCharacterSpellFilterInput | null > | null,
  not?: ModelCharacterSpellFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  characterSpellSpellId?: ModelIDInput | null,
};

export type ModelCharacterSpellConnection = {
  __typename: "ModelCharacterSpellConnection",
  items:  Array<CharacterSpell | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCharacterGearFilterInput = {
  id?: ModelIDInput | null,
  uses?: ModelIntInput | null,
  tags?: ModelStringInput | null,
  characterID?: ModelIDInput | null,
  and?: Array< ModelCharacterGearFilterInput | null > | null,
  or?: Array< ModelCharacterGearFilterInput | null > | null,
  not?: ModelCharacterGearFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  characterGearGearId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelGearFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  weight?: ModelIntInput | null,
  uses?: ModelIntInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelGearFilterInput | null > | null,
  or?: Array< ModelGearFilterInput | null > | null,
  not?: ModelGearFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  gearSourceId?: ModelIDInput | null,
};

export type ModelGearConnection = {
  __typename: "ModelGearConnection",
  items:  Array<Gear | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCharacterMoveFilterInput = {
  id?: ModelIDInput | null,
  selected?: ModelBooleanInput | null,
  characterID?: ModelIDInput | null,
  and?: Array< ModelCharacterMoveFilterInput | null > | null,
  or?: Array< ModelCharacterMoveFilterInput | null > | null,
  not?: ModelCharacterMoveFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  characterMoveMoveId?: ModelIDInput | null,
};

export type ModelMoveFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelMoveFilterInput | null > | null,
  or?: Array< ModelMoveFilterInput | null > | null,
  not?: ModelMoveFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  moveClassId?: ModelIDInput | null,
  moveSourceId?: ModelIDInput | null,
};

export type ModelMoveConnection = {
  __typename: "ModelMoveConnection",
  items:  Array<Move | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCharacterBondFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  selected?: ModelBooleanInput | null,
  characterID?: ModelIDInput | null,
  and?: Array< ModelCharacterBondFilterInput | null > | null,
  or?: Array< ModelCharacterBondFilterInput | null > | null,
  not?: ModelCharacterBondFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  characterBondBondId?: ModelIDInput | null,
};

export type ModelBondFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelBondFilterInput | null > | null,
  or?: Array< ModelBondFilterInput | null > | null,
  not?: ModelBondFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  bondClassId?: ModelIDInput | null,
};

export type ModelBondConnection = {
  __typename: "ModelBondConnection",
  items:  Array<Bond | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCharacterAbilityScoreFilterInput = {
  id?: ModelIDInput | null,
  value?: ModelStringInput | null,
  bonus?: ModelIntInput | null,
  tags?: ModelStringInput | null,
  characterID?: ModelIDInput | null,
  and?: Array< ModelCharacterAbilityScoreFilterInput | null > | null,
  or?: Array< ModelCharacterAbilityScoreFilterInput | null > | null,
  not?: ModelCharacterAbilityScoreFilterInput | null,
  _deleted?: ModelBooleanInput | null,
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
  _deleted?: ModelBooleanInput | null,
};

export type ModelAbilityScoreConnection = {
  __typename: "ModelAbilityScoreConnection",
  items:  Array<AbilityScore | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCharacterRaceFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelCharacterRaceFilterInput | null > | null,
  or?: Array< ModelCharacterRaceFilterInput | null > | null,
  not?: ModelCharacterRaceFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  characterRaceRaceId?: ModelIDInput | null,
};

export type ModelCharacterRaceConnection = {
  __typename: "ModelCharacterRaceConnection",
  items:  Array<CharacterRace | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelRaceFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelRaceFilterInput | null > | null,
  or?: Array< ModelRaceFilterInput | null > | null,
  not?: ModelRaceFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  raceProfessionId?: ModelIDInput | null,
  raceSourceId?: ModelIDInput | null,
};

export type ModelRaceConnection = {
  __typename: "ModelRaceConnection",
  items:  Array<Race | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCharacterAlignmentFilterInput = {
  id?: ModelIDInput | null,
  selected?: ModelBooleanInput | null,
  and?: Array< ModelCharacterAlignmentFilterInput | null > | null,
  or?: Array< ModelCharacterAlignmentFilterInput | null > | null,
  not?: ModelCharacterAlignmentFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  characterAlignmentAlignmentId?: ModelIDInput | null,
};

export type ModelCharacterAlignmentConnection = {
  __typename: "ModelCharacterAlignmentConnection",
  items:  Array<CharacterAlignment | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAlignmentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelAlignmentFilterInput | null > | null,
  or?: Array< ModelAlignmentFilterInput | null > | null,
  not?: ModelAlignmentFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  alignmentClassId?: ModelIDInput | null,
};

export type ModelAlignmentConnection = {
  __typename: "ModelAlignmentConnection",
  items:  Array<Alignment | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelDiceTypeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelDiceTypeFilterInput | null > | null,
  or?: Array< ModelDiceTypeFilterInput | null > | null,
  not?: ModelDiceTypeFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelDiceTypeConnection = {
  __typename: "ModelDiceTypeConnection",
  items:  Array<DiceType | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCharacterLookFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelCharacterLookFilterInput | null > | null,
  or?: Array< ModelCharacterLookFilterInput | null > | null,
  not?: ModelCharacterLookFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelCharacterLookConnection = {
  __typename: "ModelCharacterLookConnection",
  items:  Array<CharacterLook | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelLookFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  characterlookID?: ModelIDInput | null,
  and?: Array< ModelLookFilterInput | null > | null,
  or?: Array< ModelLookFilterInput | null > | null,
  not?: ModelLookFilterInput | null,
  _deleted?: ModelBooleanInput | null,
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
  notes?: ModelStringInput | null,
  and?: Array< ModelCharacterFilterInput | null > | null,
  or?: Array< ModelCharacterFilterInput | null > | null,
  not?: ModelCharacterFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  characterRaceId?: ModelIDInput | null,
  characterAlignmentId?: ModelIDInput | null,
  characterLookId?: ModelIDInput | null,
  characterCharacterProfessionId?: ModelIDInput | null,
};

export type ModelCharacterConnection = {
  __typename: "ModelCharacterConnection",
  items:  Array<Character | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
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
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionCharacterProfessionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCharacterProfessionFilterInput | null > | null,
  or?: Array< ModelSubscriptionCharacterProfessionFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionProfessionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProfessionFilterInput | null > | null,
  or?: Array< ModelSubscriptionProfessionFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
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
  _deleted?: ModelBooleanInput | null,
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
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionCharacterGearFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  uses?: ModelSubscriptionIntInput | null,
  tags?: ModelSubscriptionStringInput | null,
  characterID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCharacterGearFilterInput | null > | null,
  or?: Array< ModelSubscriptionCharacterGearFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionGearFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  weight?: ModelSubscriptionIntInput | null,
  uses?: ModelSubscriptionIntInput | null,
  tags?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGearFilterInput | null > | null,
  or?: Array< ModelSubscriptionGearFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionCharacterMoveFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  selected?: ModelSubscriptionBooleanInput | null,
  characterID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCharacterMoveFilterInput | null > | null,
  or?: Array< ModelSubscriptionCharacterMoveFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionMoveFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMoveFilterInput | null > | null,
  or?: Array< ModelSubscriptionMoveFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionCharacterBondFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  selected?: ModelSubscriptionBooleanInput | null,
  characterID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCharacterBondFilterInput | null > | null,
  or?: Array< ModelSubscriptionCharacterBondFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionBondFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBondFilterInput | null > | null,
  or?: Array< ModelSubscriptionBondFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionCharacterAbilityScoreFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  value?: ModelSubscriptionStringInput | null,
  bonus?: ModelSubscriptionIntInput | null,
  tags?: ModelSubscriptionStringInput | null,
  characterID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCharacterAbilityScoreFilterInput | null > | null,
  or?: Array< ModelSubscriptionCharacterAbilityScoreFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionAbilityScoreFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  shortName?: ModelSubscriptionStringInput | null,
  debility?: ModelSubscriptionStringInput | null,
  debilityPenalty?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAbilityScoreFilterInput | null > | null,
  or?: Array< ModelSubscriptionAbilityScoreFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionCharacterRaceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCharacterRaceFilterInput | null > | null,
  or?: Array< ModelSubscriptionCharacterRaceFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionRaceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRaceFilterInput | null > | null,
  or?: Array< ModelSubscriptionRaceFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionCharacterAlignmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  selected?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionCharacterAlignmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCharacterAlignmentFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionAlignmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAlignmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionAlignmentFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionDiceTypeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDiceTypeFilterInput | null > | null,
  or?: Array< ModelSubscriptionDiceTypeFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionCharacterLookFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCharacterLookFilterInput | null > | null,
  or?: Array< ModelSubscriptionCharacterLookFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionLookFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  characterlookID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionLookFilterInput | null > | null,
  or?: Array< ModelSubscriptionLookFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
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
  notes?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCharacterFilterInput | null > | null,
  or?: Array< ModelSubscriptionCharacterFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCharacterProfessionMutationVariables = {
  input: CreateCharacterProfessionInput,
  condition?: ModelCharacterProfessionConditionInput | null,
};

export type CreateCharacterProfessionMutation = {
  createCharacterProfession?:  {
    __typename: "CharacterProfession",
    id: string,
    Character?:  {
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
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterRaceId?: string | null,
      characterAlignmentId?: string | null,
      characterLookId?: string | null,
      characterCharacterProfessionId?: string | null,
    } | null,
    Profession?:  {
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    characterProfessionProfessionId?: string | null,
    characterProfessionCharacterId?: string | null,
  } | null,
};

export type UpdateCharacterProfessionMutationVariables = {
  input: UpdateCharacterProfessionInput,
  condition?: ModelCharacterProfessionConditionInput | null,
};

export type UpdateCharacterProfessionMutation = {
  updateCharacterProfession?:  {
    __typename: "CharacterProfession",
    id: string,
    Character?:  {
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
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterRaceId?: string | null,
      characterAlignmentId?: string | null,
      characterLookId?: string | null,
      characterCharacterProfessionId?: string | null,
    } | null,
    Profession?:  {
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    characterProfessionProfessionId?: string | null,
    characterProfessionCharacterId?: string | null,
  } | null,
};

export type DeleteCharacterProfessionMutationVariables = {
  input: DeleteCharacterProfessionInput,
  condition?: ModelCharacterProfessionConditionInput | null,
};

export type DeleteCharacterProfessionMutation = {
  deleteCharacterProfession?:  {
    __typename: "CharacterProfession",
    id: string,
    Character?:  {
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
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterRaceId?: string | null,
      characterAlignmentId?: string | null,
      characterLookId?: string | null,
      characterCharacterProfessionId?: string | null,
    } | null,
    Profession?:  {
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    characterProfessionProfessionId?: string | null,
    characterProfessionCharacterId?: string | null,
  } | null,
};

export type CreateProfessionMutationVariables = {
  input: CreateProfessionInput,
  condition?: ModelProfessionConditionInput | null,
};

export type CreateProfessionMutation = {
  createProfession?:  {
    __typename: "Profession",
    id: string,
    name: string,
    description: string,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    damageDiceType?:  {
      __typename: "DiceType",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    professionSourceId: string,
    professionDamageDiceTypeId?: string | null,
  } | null,
};

export type UpdateProfessionMutationVariables = {
  input: UpdateProfessionInput,
  condition?: ModelProfessionConditionInput | null,
};

export type UpdateProfessionMutation = {
  updateProfession?:  {
    __typename: "Profession",
    id: string,
    name: string,
    description: string,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    damageDiceType?:  {
      __typename: "DiceType",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    professionSourceId: string,
    professionDamageDiceTypeId?: string | null,
  } | null,
};

export type DeleteProfessionMutationVariables = {
  input: DeleteProfessionInput,
  condition?: ModelProfessionConditionInput | null,
};

export type DeleteProfessionMutation = {
  deleteProfession?:  {
    __typename: "Profession",
    id: string,
    name: string,
    description: string,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    damageDiceType?:  {
      __typename: "DiceType",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    professionSourceId: string,
    professionDamageDiceTypeId?: string | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    profession:  {
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    spellSourceId: string,
    spellProfessionId: string,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    profession:  {
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    spellSourceId: string,
    spellProfessionId: string,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    profession:  {
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    spellSourceId: string,
    spellProfessionId: string,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      spellSourceId: string,
      spellProfessionId: string,
    },
    selected?: boolean | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      spellSourceId: string,
      spellProfessionId: string,
    },
    selected?: boolean | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      spellSourceId: string,
      spellProfessionId: string,
    },
    selected?: boolean | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      gearSourceId?: string | null,
    },
    uses?: number | null,
    tags?: Array< string | null > | null,
    characterID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      gearSourceId?: string | null,
    },
    uses?: number | null,
    tags?: Array< string | null > | null,
    characterID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      gearSourceId?: string | null,
    },
    uses?: number | null,
    tags?: Array< string | null > | null,
    characterID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      moveClassId: string,
      moveSourceId?: string | null,
    },
    characterID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      moveClassId: string,
      moveSourceId?: string | null,
    },
    characterID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      moveClassId: string,
      moveSourceId?: string | null,
    },
    characterID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    },
    source?:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    },
    source?:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    },
    source?:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      bondClassId: string,
    },
    selected?: boolean | null,
    characterID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      bondClassId: string,
    },
    selected?: boolean | null,
    characterID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      bondClassId: string,
    },
    selected?: boolean | null,
    characterID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    id: string,
    value: string,
    bonus: number,
    tags?: Array< string | null > | null,
    characterID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    id: string,
    value: string,
    bonus: number,
    tags?: Array< string | null > | null,
    characterID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    id: string,
    value: string,
    bonus: number,
    tags?: Array< string | null > | null,
    characterID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      raceProfessionId?: string | null,
      raceSourceId: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      raceProfessionId?: string | null,
      raceSourceId: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      raceProfessionId?: string | null,
      raceSourceId: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    profession?:  {
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    } | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    raceProfessionId?: string | null,
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
    profession?:  {
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    } | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    raceProfessionId?: string | null,
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
    profession?:  {
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    } | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    raceProfessionId?: string | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      alignmentClassId: string,
    },
    selected?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      alignmentClassId: string,
    },
    selected?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      alignmentClassId: string,
    },
    selected?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    characterlookID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    characterlookID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    characterlookID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    gear?:  {
      __typename: "ModelCharacterGearConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    sixToTenMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    twoToTenMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    startingMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    bonds?:  {
      __typename: "ModelCharacterBondConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    abilityscores?:  {
      __typename: "ModelCharacterAbilityScoreConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    race?:  {
      __typename: "CharacterRace",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterRaceRaceId: string,
    } | null,
    alignment?:  {
      __typename: "CharacterAlignment",
      id: string,
      selected?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterAlignmentAlignmentId: string,
    } | null,
    tags?: Array< string | null > | null,
    look?:  {
      __typename: "CharacterLook",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    notes?: string | null,
    CharacterProfession?:  {
      __typename: "CharacterProfession",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterProfessionProfessionId?: string | null,
      characterProfessionCharacterId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    characterRaceId?: string | null,
    characterAlignmentId?: string | null,
    characterLookId?: string | null,
    characterCharacterProfessionId?: string | null,
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
    gear?:  {
      __typename: "ModelCharacterGearConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    sixToTenMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    twoToTenMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    startingMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    bonds?:  {
      __typename: "ModelCharacterBondConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    abilityscores?:  {
      __typename: "ModelCharacterAbilityScoreConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    race?:  {
      __typename: "CharacterRace",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterRaceRaceId: string,
    } | null,
    alignment?:  {
      __typename: "CharacterAlignment",
      id: string,
      selected?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterAlignmentAlignmentId: string,
    } | null,
    tags?: Array< string | null > | null,
    look?:  {
      __typename: "CharacterLook",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    notes?: string | null,
    CharacterProfession?:  {
      __typename: "CharacterProfession",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterProfessionProfessionId?: string | null,
      characterProfessionCharacterId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    characterRaceId?: string | null,
    characterAlignmentId?: string | null,
    characterLookId?: string | null,
    characterCharacterProfessionId?: string | null,
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
    gear?:  {
      __typename: "ModelCharacterGearConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    sixToTenMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    twoToTenMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    startingMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    bonds?:  {
      __typename: "ModelCharacterBondConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    abilityscores?:  {
      __typename: "ModelCharacterAbilityScoreConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    race?:  {
      __typename: "CharacterRace",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterRaceRaceId: string,
    } | null,
    alignment?:  {
      __typename: "CharacterAlignment",
      id: string,
      selected?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterAlignmentAlignmentId: string,
    } | null,
    tags?: Array< string | null > | null,
    look?:  {
      __typename: "CharacterLook",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    notes?: string | null,
    CharacterProfession?:  {
      __typename: "CharacterProfession",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterProfessionProfessionId?: string | null,
      characterProfessionCharacterId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    characterRaceId?: string | null,
    characterAlignmentId?: string | null,
    characterLookId?: string | null,
    characterCharacterProfessionId?: string | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSourcesQueryVariables = {
  filter?: ModelSourceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSourcesQuery = {
  syncSources?:  {
    __typename: "ModelSourceConnection",
    items:  Array< {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCharacterProfessionQueryVariables = {
  id: string,
};

export type GetCharacterProfessionQuery = {
  getCharacterProfession?:  {
    __typename: "CharacterProfession",
    id: string,
    Character?:  {
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
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterRaceId?: string | null,
      characterAlignmentId?: string | null,
      characterLookId?: string | null,
      characterCharacterProfessionId?: string | null,
    } | null,
    Profession?:  {
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    characterProfessionProfessionId?: string | null,
    characterProfessionCharacterId?: string | null,
  } | null,
};

export type ListCharacterProfessionsQueryVariables = {
  filter?: ModelCharacterProfessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCharacterProfessionsQuery = {
  listCharacterProfessions?:  {
    __typename: "ModelCharacterProfessionConnection",
    items:  Array< {
      __typename: "CharacterProfession",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterProfessionProfessionId?: string | null,
      characterProfessionCharacterId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCharacterProfessionsQueryVariables = {
  filter?: ModelCharacterProfessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCharacterProfessionsQuery = {
  syncCharacterProfessions?:  {
    __typename: "ModelCharacterProfessionConnection",
    items:  Array< {
      __typename: "CharacterProfession",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterProfessionProfessionId?: string | null,
      characterProfessionCharacterId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProfessionQueryVariables = {
  id: string,
};

export type GetProfessionQuery = {
  getProfession?:  {
    __typename: "Profession",
    id: string,
    name: string,
    description: string,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    damageDiceType?:  {
      __typename: "DiceType",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    professionSourceId: string,
    professionDamageDiceTypeId?: string | null,
  } | null,
};

export type ListProfessionsQueryVariables = {
  filter?: ModelProfessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProfessionsQuery = {
  listProfessions?:  {
    __typename: "ModelProfessionConnection",
    items:  Array< {
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProfessionsQueryVariables = {
  filter?: ModelProfessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProfessionsQuery = {
  syncProfessions?:  {
    __typename: "ModelProfessionConnection",
    items:  Array< {
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    profession:  {
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    spellSourceId: string,
    spellProfessionId: string,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      spellSourceId: string,
      spellProfessionId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSpellsQueryVariables = {
  filter?: ModelSpellFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSpellsQuery = {
  syncSpells?:  {
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      spellSourceId: string,
      spellProfessionId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      spellSourceId: string,
      spellProfessionId: string,
    },
    selected?: boolean | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterSpellSpellId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCharacterSpellsQueryVariables = {
  filter?: ModelCharacterSpellFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCharacterSpellsQuery = {
  syncCharacterSpells?:  {
    __typename: "ModelCharacterSpellConnection",
    items:  Array< {
      __typename: "CharacterSpell",
      id: string,
      selected?: boolean | null,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterSpellSpellId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      gearSourceId?: string | null,
    },
    uses?: number | null,
    tags?: Array< string | null > | null,
    characterID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      characterID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterGearGearId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCharacterGearsQueryVariables = {
  filter?: ModelCharacterGearFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCharacterGearsQuery = {
  syncCharacterGears?:  {
    __typename: "ModelCharacterGearConnection",
    items:  Array< {
      __typename: "CharacterGear",
      id: string,
      uses?: number | null,
      tags?: Array< string | null > | null,
      characterID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterGearGearId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type CharacterGearsByCharacterIDQueryVariables = {
  characterID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCharacterGearFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CharacterGearsByCharacterIDQuery = {
  characterGearsByCharacterID?:  {
    __typename: "ModelCharacterGearConnection",
    items:  Array< {
      __typename: "CharacterGear",
      id: string,
      uses?: number | null,
      tags?: Array< string | null > | null,
      characterID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterGearGearId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      gearSourceId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncGearsQueryVariables = {
  filter?: ModelGearFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncGearsQuery = {
  syncGears?:  {
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      gearSourceId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      moveClassId: string,
      moveSourceId?: string | null,
    },
    characterID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      characterID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterMoveMoveId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCharacterMovesQueryVariables = {
  filter?: ModelCharacterMoveFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCharacterMovesQuery = {
  syncCharacterMoves?:  {
    __typename: "ModelCharacterMoveConnection",
    items:  Array< {
      __typename: "CharacterMove",
      id: string,
      selected?: boolean | null,
      characterID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterMoveMoveId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type CharacterMovesByCharacterIDQueryVariables = {
  characterID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCharacterMoveFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CharacterMovesByCharacterIDQuery = {
  characterMovesByCharacterID?:  {
    __typename: "ModelCharacterMoveConnection",
    items:  Array< {
      __typename: "CharacterMove",
      id: string,
      selected?: boolean | null,
      characterID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterMoveMoveId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    },
    source?:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      moveClassId: string,
      moveSourceId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMovesQueryVariables = {
  filter?: ModelMoveFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMovesQuery = {
  syncMoves?:  {
    __typename: "ModelMoveConnection",
    items:  Array< {
      __typename: "Move",
      id: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      moveClassId: string,
      moveSourceId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      bondClassId: string,
    },
    selected?: boolean | null,
    characterID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      characterID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterBondBondId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCharacterBondsQueryVariables = {
  filter?: ModelCharacterBondFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCharacterBondsQuery = {
  syncCharacterBonds?:  {
    __typename: "ModelCharacterBondConnection",
    items:  Array< {
      __typename: "CharacterBond",
      id: string,
      description?: string | null,
      selected?: boolean | null,
      characterID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterBondBondId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type CharacterBondsByCharacterIDQueryVariables = {
  characterID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCharacterBondFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CharacterBondsByCharacterIDQuery = {
  characterBondsByCharacterID?:  {
    __typename: "ModelCharacterBondConnection",
    items:  Array< {
      __typename: "CharacterBond",
      id: string,
      description?: string | null,
      selected?: boolean | null,
      characterID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterBondBondId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      bondClassId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBondsQueryVariables = {
  filter?: ModelBondFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBondsQuery = {
  syncBonds?:  {
    __typename: "ModelBondConnection",
    items:  Array< {
      __typename: "Bond",
      id: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      bondClassId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    id: string,
    value: string,
    bonus: number,
    tags?: Array< string | null > | null,
    characterID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      characterID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterAbilityScoreAbilityScoreId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCharacterAbilityScoresQueryVariables = {
  filter?: ModelCharacterAbilityScoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCharacterAbilityScoresQuery = {
  syncCharacterAbilityScores?:  {
    __typename: "ModelCharacterAbilityScoreConnection",
    items:  Array< {
      __typename: "CharacterAbilityScore",
      id: string,
      value: string,
      bonus: number,
      tags?: Array< string | null > | null,
      characterID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterAbilityScoreAbilityScoreId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type CharacterAbilityScoresByCharacterIDQueryVariables = {
  characterID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCharacterAbilityScoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CharacterAbilityScoresByCharacterIDQuery = {
  characterAbilityScoresByCharacterID?:  {
    __typename: "ModelCharacterAbilityScoreConnection",
    items:  Array< {
      __typename: "CharacterAbilityScore",
      id: string,
      value: string,
      bonus: number,
      tags?: Array< string | null > | null,
      characterID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterAbilityScoreAbilityScoreId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAbilityScoresQueryVariables = {
  filter?: ModelAbilityScoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAbilityScoresQuery = {
  syncAbilityScores?:  {
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      raceProfessionId?: string | null,
      raceSourceId: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterRaceRaceId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCharacterRacesQueryVariables = {
  filter?: ModelCharacterRaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCharacterRacesQuery = {
  syncCharacterRaces?:  {
    __typename: "ModelCharacterRaceConnection",
    items:  Array< {
      __typename: "CharacterRace",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterRaceRaceId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
    profession?:  {
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    } | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    raceProfessionId?: string | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      raceProfessionId?: string | null,
      raceSourceId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncRacesQueryVariables = {
  filter?: ModelRaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRacesQuery = {
  syncRaces?:  {
    __typename: "ModelRaceConnection",
    items:  Array< {
      __typename: "Race",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      raceProfessionId?: string | null,
      raceSourceId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      alignmentClassId: string,
    },
    selected?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterAlignmentAlignmentId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCharacterAlignmentsQueryVariables = {
  filter?: ModelCharacterAlignmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCharacterAlignmentsQuery = {
  syncCharacterAlignments?:  {
    __typename: "ModelCharacterAlignmentConnection",
    items:  Array< {
      __typename: "CharacterAlignment",
      id: string,
      selected?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterAlignmentAlignmentId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      alignmentClassId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAlignmentsQueryVariables = {
  filter?: ModelAlignmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAlignmentsQuery = {
  syncAlignments?:  {
    __typename: "ModelAlignmentConnection",
    items:  Array< {
      __typename: "Alignment",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      alignmentClassId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDiceTypesQueryVariables = {
  filter?: ModelDiceTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDiceTypesQuery = {
  syncDiceTypes?:  {
    __typename: "ModelDiceTypeConnection",
    items:  Array< {
      __typename: "DiceType",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCharacterLooksQueryVariables = {
  filter?: ModelCharacterLookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCharacterLooksQuery = {
  syncCharacterLooks?:  {
    __typename: "ModelCharacterLookConnection",
    items:  Array< {
      __typename: "CharacterLook",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
    characterlookID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      characterlookID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncLooksQueryVariables = {
  filter?: ModelLookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLooksQuery = {
  syncLooks?:  {
    __typename: "ModelLookConnection",
    items:  Array< {
      __typename: "Look",
      id: string,
      name: string,
      description: string,
      characterlookID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type LooksByCharacterlookIDQueryVariables = {
  characterlookID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LooksByCharacterlookIDQuery = {
  looksByCharacterlookID?:  {
    __typename: "ModelLookConnection",
    items:  Array< {
      __typename: "Look",
      id: string,
      name: string,
      description: string,
      characterlookID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
    gear?:  {
      __typename: "ModelCharacterGearConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    sixToTenMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    twoToTenMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    startingMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    bonds?:  {
      __typename: "ModelCharacterBondConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    abilityscores?:  {
      __typename: "ModelCharacterAbilityScoreConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    race?:  {
      __typename: "CharacterRace",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterRaceRaceId: string,
    } | null,
    alignment?:  {
      __typename: "CharacterAlignment",
      id: string,
      selected?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterAlignmentAlignmentId: string,
    } | null,
    tags?: Array< string | null > | null,
    look?:  {
      __typename: "CharacterLook",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    notes?: string | null,
    CharacterProfession?:  {
      __typename: "CharacterProfession",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterProfessionProfessionId?: string | null,
      characterProfessionCharacterId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    characterRaceId?: string | null,
    characterAlignmentId?: string | null,
    characterLookId?: string | null,
    characterCharacterProfessionId?: string | null,
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
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterRaceId?: string | null,
      characterAlignmentId?: string | null,
      characterLookId?: string | null,
      characterCharacterProfessionId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCharactersQueryVariables = {
  filter?: ModelCharacterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCharactersQuery = {
  syncCharacters?:  {
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
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterRaceId?: string | null,
      characterAlignmentId?: string | null,
      characterLookId?: string | null,
      characterCharacterProfessionId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCharacterProfessionSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterProfessionFilterInput | null,
};

export type OnCreateCharacterProfessionSubscription = {
  onCreateCharacterProfession?:  {
    __typename: "CharacterProfession",
    id: string,
    Character?:  {
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
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterRaceId?: string | null,
      characterAlignmentId?: string | null,
      characterLookId?: string | null,
      characterCharacterProfessionId?: string | null,
    } | null,
    Profession?:  {
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    characterProfessionProfessionId?: string | null,
    characterProfessionCharacterId?: string | null,
  } | null,
};

export type OnUpdateCharacterProfessionSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterProfessionFilterInput | null,
};

export type OnUpdateCharacterProfessionSubscription = {
  onUpdateCharacterProfession?:  {
    __typename: "CharacterProfession",
    id: string,
    Character?:  {
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
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterRaceId?: string | null,
      characterAlignmentId?: string | null,
      characterLookId?: string | null,
      characterCharacterProfessionId?: string | null,
    } | null,
    Profession?:  {
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    characterProfessionProfessionId?: string | null,
    characterProfessionCharacterId?: string | null,
  } | null,
};

export type OnDeleteCharacterProfessionSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterProfessionFilterInput | null,
};

export type OnDeleteCharacterProfessionSubscription = {
  onDeleteCharacterProfession?:  {
    __typename: "CharacterProfession",
    id: string,
    Character?:  {
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
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterRaceId?: string | null,
      characterAlignmentId?: string | null,
      characterLookId?: string | null,
      characterCharacterProfessionId?: string | null,
    } | null,
    Profession?:  {
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    characterProfessionProfessionId?: string | null,
    characterProfessionCharacterId?: string | null,
  } | null,
};

export type OnCreateProfessionSubscriptionVariables = {
  filter?: ModelSubscriptionProfessionFilterInput | null,
};

export type OnCreateProfessionSubscription = {
  onCreateProfession?:  {
    __typename: "Profession",
    id: string,
    name: string,
    description: string,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    damageDiceType?:  {
      __typename: "DiceType",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    professionSourceId: string,
    professionDamageDiceTypeId?: string | null,
  } | null,
};

export type OnUpdateProfessionSubscriptionVariables = {
  filter?: ModelSubscriptionProfessionFilterInput | null,
};

export type OnUpdateProfessionSubscription = {
  onUpdateProfession?:  {
    __typename: "Profession",
    id: string,
    name: string,
    description: string,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    damageDiceType?:  {
      __typename: "DiceType",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    professionSourceId: string,
    professionDamageDiceTypeId?: string | null,
  } | null,
};

export type OnDeleteProfessionSubscriptionVariables = {
  filter?: ModelSubscriptionProfessionFilterInput | null,
};

export type OnDeleteProfessionSubscription = {
  onDeleteProfession?:  {
    __typename: "Profession",
    id: string,
    name: string,
    description: string,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    damageDiceType?:  {
      __typename: "DiceType",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    professionSourceId: string,
    professionDamageDiceTypeId?: string | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    profession:  {
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    spellSourceId: string,
    spellProfessionId: string,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    profession:  {
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    spellSourceId: string,
    spellProfessionId: string,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    profession:  {
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    spellSourceId: string,
    spellProfessionId: string,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      spellSourceId: string,
      spellProfessionId: string,
    },
    selected?: boolean | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      spellSourceId: string,
      spellProfessionId: string,
    },
    selected?: boolean | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      spellSourceId: string,
      spellProfessionId: string,
    },
    selected?: boolean | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      gearSourceId?: string | null,
    },
    uses?: number | null,
    tags?: Array< string | null > | null,
    characterID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      gearSourceId?: string | null,
    },
    uses?: number | null,
    tags?: Array< string | null > | null,
    characterID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      gearSourceId?: string | null,
    },
    uses?: number | null,
    tags?: Array< string | null > | null,
    characterID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      moveClassId: string,
      moveSourceId?: string | null,
    },
    characterID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      moveClassId: string,
      moveSourceId?: string | null,
    },
    characterID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      moveClassId: string,
      moveSourceId?: string | null,
    },
    characterID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    },
    source?:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    },
    source?:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    },
    source?:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      bondClassId: string,
    },
    selected?: boolean | null,
    characterID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      bondClassId: string,
    },
    selected?: boolean | null,
    characterID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      bondClassId: string,
    },
    selected?: boolean | null,
    characterID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    id: string,
    value: string,
    bonus: number,
    tags?: Array< string | null > | null,
    characterID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    id: string,
    value: string,
    bonus: number,
    tags?: Array< string | null > | null,
    characterID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    id: string,
    value: string,
    bonus: number,
    tags?: Array< string | null > | null,
    characterID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      raceProfessionId?: string | null,
      raceSourceId: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      raceProfessionId?: string | null,
      raceSourceId: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      raceProfessionId?: string | null,
      raceSourceId: string,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    profession?:  {
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    } | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    raceProfessionId?: string | null,
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
    profession?:  {
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    } | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    raceProfessionId?: string | null,
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
    profession?:  {
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    } | null,
    source:  {
      __typename: "Source",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    raceProfessionId?: string | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      alignmentClassId: string,
    },
    selected?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      alignmentClassId: string,
    },
    selected?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      alignmentClassId: string,
    },
    selected?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      __typename: "Profession",
      id: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      professionSourceId: string,
      professionDamageDiceTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    characterlookID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    characterlookID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    characterlookID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    gear?:  {
      __typename: "ModelCharacterGearConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    sixToTenMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    twoToTenMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    startingMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    bonds?:  {
      __typename: "ModelCharacterBondConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    abilityscores?:  {
      __typename: "ModelCharacterAbilityScoreConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    race?:  {
      __typename: "CharacterRace",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterRaceRaceId: string,
    } | null,
    alignment?:  {
      __typename: "CharacterAlignment",
      id: string,
      selected?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterAlignmentAlignmentId: string,
    } | null,
    tags?: Array< string | null > | null,
    look?:  {
      __typename: "CharacterLook",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    notes?: string | null,
    CharacterProfession?:  {
      __typename: "CharacterProfession",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterProfessionProfessionId?: string | null,
      characterProfessionCharacterId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    characterRaceId?: string | null,
    characterAlignmentId?: string | null,
    characterLookId?: string | null,
    characterCharacterProfessionId?: string | null,
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
    gear?:  {
      __typename: "ModelCharacterGearConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    sixToTenMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    twoToTenMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    startingMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    bonds?:  {
      __typename: "ModelCharacterBondConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    abilityscores?:  {
      __typename: "ModelCharacterAbilityScoreConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    race?:  {
      __typename: "CharacterRace",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterRaceRaceId: string,
    } | null,
    alignment?:  {
      __typename: "CharacterAlignment",
      id: string,
      selected?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterAlignmentAlignmentId: string,
    } | null,
    tags?: Array< string | null > | null,
    look?:  {
      __typename: "CharacterLook",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    notes?: string | null,
    CharacterProfession?:  {
      __typename: "CharacterProfession",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterProfessionProfessionId?: string | null,
      characterProfessionCharacterId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    characterRaceId?: string | null,
    characterAlignmentId?: string | null,
    characterLookId?: string | null,
    characterCharacterProfessionId?: string | null,
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
    gear?:  {
      __typename: "ModelCharacterGearConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    sixToTenMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    twoToTenMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    startingMoves?:  {
      __typename: "ModelCharacterMoveConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    bonds?:  {
      __typename: "ModelCharacterBondConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    abilityscores?:  {
      __typename: "ModelCharacterAbilityScoreConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    race?:  {
      __typename: "CharacterRace",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterRaceRaceId: string,
    } | null,
    alignment?:  {
      __typename: "CharacterAlignment",
      id: string,
      selected?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterAlignmentAlignmentId: string,
    } | null,
    tags?: Array< string | null > | null,
    look?:  {
      __typename: "CharacterLook",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    notes?: string | null,
    CharacterProfession?:  {
      __typename: "CharacterProfession",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      characterProfessionProfessionId?: string | null,
      characterProfessionCharacterId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    characterRaceId?: string | null,
    characterAlignmentId?: string | null,
    characterLookId?: string | null,
    characterCharacterProfessionId?: string | null,
  } | null,
};
