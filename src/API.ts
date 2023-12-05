/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProfessionInput = {
  name: string,
  description: string,
  diceType: string,
  source: string,
  id?: string | null,
  _version?: number | null,
};

export type ModelProfessionConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  diceType?: ModelStringInput | null,
  source?: ModelStringInput | null,
  and?: Array< ModelProfessionConditionInput | null > | null,
  or?: Array< ModelProfessionConditionInput | null > | null,
  not?: ModelProfessionConditionInput | null,
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

export type Profession = {
  __typename: "Profession",
  name: string,
  description: string,
  diceType: string,
  source: string,
  id: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateProfessionInput = {
  name?: string | null,
  description?: string | null,
  diceType?: string | null,
  source?: string | null,
  id: string,
  _version?: number | null,
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
  selected?: boolean | null,
  tags?: Array< string | null > | null,
  source: string,
  profession: string,
  _version?: number | null,
};

export type ModelSpellConditionInput = {
  name?: ModelStringInput | null,
  level?: ModelIntInput | null,
  type?: ModelStringInput | null,
  ongoing?: ModelBooleanInput | null,
  description?: ModelStringInput | null,
  selected?: ModelBooleanInput | null,
  tags?: ModelStringInput | null,
  source?: ModelStringInput | null,
  profession?: ModelStringInput | null,
  and?: Array< ModelSpellConditionInput | null > | null,
  or?: Array< ModelSpellConditionInput | null > | null,
  not?: ModelSpellConditionInput | null,
  _deleted?: ModelBooleanInput | null,
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
  selected?: boolean | null,
  tags?: Array< string | null > | null,
  source: string,
  profession: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateSpellInput = {
  id: string,
  name?: string | null,
  level?: number | null,
  type?: string | null,
  ongoing?: boolean | null,
  description?: string | null,
  selected?: boolean | null,
  tags?: Array< string | null > | null,
  source?: string | null,
  profession?: string | null,
  _version?: number | null,
};

export type DeleteSpellInput = {
  id: string,
  _version?: number | null,
};

export type CreateGearInput = {
  id?: string | null,
  description: string,
  weight: number,
  uses?: number | null,
  tags?: Array< string | null > | null,
  source: string,
  _version?: number | null,
};

export type ModelGearConditionInput = {
  description?: ModelStringInput | null,
  weight?: ModelIntInput | null,
  uses?: ModelIntInput | null,
  tags?: ModelStringInput | null,
  source?: ModelStringInput | null,
  and?: Array< ModelGearConditionInput | null > | null,
  or?: Array< ModelGearConditionInput | null > | null,
  not?: ModelGearConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type Gear = {
  __typename: "Gear",
  id: string,
  description: string,
  weight: number,
  uses?: number | null,
  tags?: Array< string | null > | null,
  source: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateGearInput = {
  id: string,
  description?: string | null,
  weight?: number | null,
  uses?: number | null,
  tags?: Array< string | null > | null,
  source?: string | null,
  _version?: number | null,
};

export type DeleteGearInput = {
  id: string,
  _version?: number | null,
};

export type CreateMoveInput = {
  id?: string | null,
  name: string,
  description: string,
  selected?: boolean | null,
  profession: string,
  source: string,
  _version?: number | null,
};

export type ModelMoveConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  selected?: ModelBooleanInput | null,
  profession?: ModelStringInput | null,
  source?: ModelStringInput | null,
  and?: Array< ModelMoveConditionInput | null > | null,
  or?: Array< ModelMoveConditionInput | null > | null,
  not?: ModelMoveConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type Move = {
  __typename: "Move",
  id: string,
  name: string,
  description: string,
  selected?: boolean | null,
  profession: string,
  source: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateMoveInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  selected?: boolean | null,
  profession?: string | null,
  source?: string | null,
  _version?: number | null,
};

export type DeleteMoveInput = {
  id: string,
  _version?: number | null,
};

export type CreateBondInput = {
  id?: string | null,
  description?: string | null,
  profession: string,
  value?: string | null,
  tags?: Array< string | null > | null,
  _version?: number | null,
};

export type ModelBondConditionInput = {
  description?: ModelStringInput | null,
  profession?: ModelStringInput | null,
  value?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelBondConditionInput | null > | null,
  or?: Array< ModelBondConditionInput | null > | null,
  not?: ModelBondConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type Bond = {
  __typename: "Bond",
  id: string,
  description?: string | null,
  profession: string,
  value?: string | null,
  tags?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateBondInput = {
  id: string,
  description?: string | null,
  profession?: string | null,
  value?: string | null,
  tags?: Array< string | null > | null,
  _version?: number | null,
};

export type DeleteBondInput = {
  id: string,
  _version?: number | null,
};

export type CreateAbilityScoreInput = {
  id?: string | null,
  name: string,
  shortName: string,
  debility: string,
  debilityPenalty: string,
  value: string,
  bonus: number,
  tags?: Array< string | null > | null,
  _version?: number | null,
};

export type ModelAbilityScoreConditionInput = {
  name?: ModelStringInput | null,
  shortName?: ModelStringInput | null,
  debility?: ModelStringInput | null,
  debilityPenalty?: ModelStringInput | null,
  value?: ModelStringInput | null,
  bonus?: ModelIntInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelAbilityScoreConditionInput | null > | null,
  or?: Array< ModelAbilityScoreConditionInput | null > | null,
  not?: ModelAbilityScoreConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type AbilityScore = {
  __typename: "AbilityScore",
  id: string,
  name: string,
  shortName: string,
  debility: string,
  debilityPenalty: string,
  value: string,
  bonus: number,
  tags?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateAbilityScoreInput = {
  id: string,
  name?: string | null,
  shortName?: string | null,
  debility?: string | null,
  debilityPenalty?: string | null,
  value?: string | null,
  bonus?: number | null,
  tags?: Array< string | null > | null,
  _version?: number | null,
};

export type DeleteAbilityScoreInput = {
  id: string,
  _version?: number | null,
};

export type CreateRaceInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  profession: string,
  selected: boolean,
  source: string,
  _version?: number | null,
};

export type ModelRaceConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  profession?: ModelStringInput | null,
  selected?: ModelBooleanInput | null,
  source?: ModelStringInput | null,
  and?: Array< ModelRaceConditionInput | null > | null,
  or?: Array< ModelRaceConditionInput | null > | null,
  not?: ModelRaceConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type Race = {
  __typename: "Race",
  id: string,
  name?: string | null,
  description?: string | null,
  profession: string,
  selected: boolean,
  source: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateRaceInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  profession?: string | null,
  selected?: boolean | null,
  source?: string | null,
  _version?: number | null,
};

export type DeleteRaceInput = {
  id: string,
  _version?: number | null,
};

export type CreateAlignmentInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  selected?: boolean | null,
  profession: string,
  _version?: number | null,
};

export type ModelAlignmentConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  selected?: ModelBooleanInput | null,
  profession?: ModelStringInput | null,
  and?: Array< ModelAlignmentConditionInput | null > | null,
  or?: Array< ModelAlignmentConditionInput | null > | null,
  not?: ModelAlignmentConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type Alignment = {
  __typename: "Alignment",
  id: string,
  name?: string | null,
  description?: string | null,
  selected?: boolean | null,
  profession: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateAlignmentInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  selected?: boolean | null,
  profession?: string | null,
  _version?: number | null,
};

export type DeleteAlignmentInput = {
  id: string,
  _version?: number | null,
};

export type CreateLookInput = {
  id?: string | null,
  name: string,
  description: string,
  value?: string | null,
  profession: string,
  _version?: number | null,
};

export type ModelLookConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  value?: ModelStringInput | null,
  profession?: ModelStringInput | null,
  and?: Array< ModelLookConditionInput | null > | null,
  or?: Array< ModelLookConditionInput | null > | null,
  not?: ModelLookConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type Look = {
  __typename: "Look",
  id: string,
  name: string,
  description: string,
  value?: string | null,
  profession: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateLookInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  value?: string | null,
  profession?: string | null,
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
  notes?: Array< string | null > | null,
  gear?: string | null,
  startingMoves?: string | null,
  advancedMovesTwoToTen?: string | null,
  advancedMovesSixToTen?: string | null,
  bonds?: string | null,
  abilityScores?: string | null,
  race?: string | null,
  alignment?: string | null,
  look?: string | null,
  profession?: string | null,
  spells?: string | null,
  _version?: number | null,
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
  gear?: ModelStringInput | null,
  startingMoves?: ModelStringInput | null,
  advancedMovesTwoToTen?: ModelStringInput | null,
  advancedMovesSixToTen?: ModelStringInput | null,
  bonds?: ModelStringInput | null,
  abilityScores?: ModelStringInput | null,
  race?: ModelStringInput | null,
  alignment?: ModelStringInput | null,
  look?: ModelStringInput | null,
  profession?: ModelStringInput | null,
  spells?: ModelStringInput | null,
  and?: Array< ModelCharacterConditionInput | null > | null,
  or?: Array< ModelCharacterConditionInput | null > | null,
  not?: ModelCharacterConditionInput | null,
  _deleted?: ModelBooleanInput | null,
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
  tags?: Array< string | null > | null,
  notes?: Array< string | null > | null,
  gear?: string | null,
  startingMoves?: string | null,
  advancedMovesTwoToTen?: string | null,
  advancedMovesSixToTen?: string | null,
  bonds?: string | null,
  abilityScores?: string | null,
  race?: string | null,
  alignment?: string | null,
  look?: string | null,
  profession?: string | null,
  spells?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
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
  notes?: Array< string | null > | null,
  gear?: string | null,
  startingMoves?: string | null,
  advancedMovesTwoToTen?: string | null,
  advancedMovesSixToTen?: string | null,
  bonds?: string | null,
  abilityScores?: string | null,
  race?: string | null,
  alignment?: string | null,
  look?: string | null,
  profession?: string | null,
  spells?: string | null,
  _version?: number | null,
};

export type DeleteCharacterInput = {
  id: string,
  _version?: number | null,
};

export type ModelProfessionFilterInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  diceType?: ModelStringInput | null,
  source?: ModelStringInput | null,
  and?: Array< ModelProfessionFilterInput | null > | null,
  or?: Array< ModelProfessionFilterInput | null > | null,
  not?: ModelProfessionFilterInput | null,
  _deleted?: ModelBooleanInput | null,
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
  selected?: ModelBooleanInput | null,
  tags?: ModelStringInput | null,
  source?: ModelStringInput | null,
  profession?: ModelStringInput | null,
  and?: Array< ModelSpellFilterInput | null > | null,
  or?: Array< ModelSpellFilterInput | null > | null,
  not?: ModelSpellFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSpellConnection = {
  __typename: "ModelSpellConnection",
  items:  Array<Spell | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelGearFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  weight?: ModelIntInput | null,
  uses?: ModelIntInput | null,
  tags?: ModelStringInput | null,
  source?: ModelStringInput | null,
  and?: Array< ModelGearFilterInput | null > | null,
  or?: Array< ModelGearFilterInput | null > | null,
  not?: ModelGearFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelGearConnection = {
  __typename: "ModelGearConnection",
  items:  Array<Gear | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMoveFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  selected?: ModelBooleanInput | null,
  profession?: ModelStringInput | null,
  source?: ModelStringInput | null,
  and?: Array< ModelMoveFilterInput | null > | null,
  or?: Array< ModelMoveFilterInput | null > | null,
  not?: ModelMoveFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelMoveConnection = {
  __typename: "ModelMoveConnection",
  items:  Array<Move | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelBondFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  profession?: ModelStringInput | null,
  value?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelBondFilterInput | null > | null,
  or?: Array< ModelBondFilterInput | null > | null,
  not?: ModelBondFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelBondConnection = {
  __typename: "ModelBondConnection",
  items:  Array<Bond | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAbilityScoreFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  shortName?: ModelStringInput | null,
  debility?: ModelStringInput | null,
  debilityPenalty?: ModelStringInput | null,
  value?: ModelStringInput | null,
  bonus?: ModelIntInput | null,
  tags?: ModelStringInput | null,
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

export type ModelRaceFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  profession?: ModelStringInput | null,
  selected?: ModelBooleanInput | null,
  source?: ModelStringInput | null,
  and?: Array< ModelRaceFilterInput | null > | null,
  or?: Array< ModelRaceFilterInput | null > | null,
  not?: ModelRaceFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelRaceConnection = {
  __typename: "ModelRaceConnection",
  items:  Array<Race | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAlignmentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  selected?: ModelBooleanInput | null,
  profession?: ModelStringInput | null,
  and?: Array< ModelAlignmentFilterInput | null > | null,
  or?: Array< ModelAlignmentFilterInput | null > | null,
  not?: ModelAlignmentFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelAlignmentConnection = {
  __typename: "ModelAlignmentConnection",
  items:  Array<Alignment | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelLookFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  value?: ModelStringInput | null,
  profession?: ModelStringInput | null,
  and?: Array< ModelLookFilterInput | null > | null,
  or?: Array< ModelLookFilterInput | null > | null,
  not?: ModelLookFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelLookConnection = {
  __typename: "ModelLookConnection",
  items:  Array<Look | null >,
  nextToken?: string | null,
  startedAt?: number | null,
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
  gear?: ModelStringInput | null,
  startingMoves?: ModelStringInput | null,
  advancedMovesTwoToTen?: ModelStringInput | null,
  advancedMovesSixToTen?: ModelStringInput | null,
  bonds?: ModelStringInput | null,
  abilityScores?: ModelStringInput | null,
  race?: ModelStringInput | null,
  alignment?: ModelStringInput | null,
  look?: ModelStringInput | null,
  profession?: ModelStringInput | null,
  spells?: ModelStringInput | null,
  and?: Array< ModelCharacterFilterInput | null > | null,
  or?: Array< ModelCharacterFilterInput | null > | null,
  not?: ModelCharacterFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelCharacterConnection = {
  __typename: "ModelCharacterConnection",
  items:  Array<Character | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionProfessionFilterInput = {
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  diceType?: ModelSubscriptionStringInput | null,
  source?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProfessionFilterInput | null > | null,
  or?: Array< ModelSubscriptionProfessionFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
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

export type ModelSubscriptionSpellFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  level?: ModelSubscriptionIntInput | null,
  type?: ModelSubscriptionStringInput | null,
  ongoing?: ModelSubscriptionBooleanInput | null,
  description?: ModelSubscriptionStringInput | null,
  selected?: ModelSubscriptionBooleanInput | null,
  tags?: ModelSubscriptionStringInput | null,
  source?: ModelSubscriptionStringInput | null,
  profession?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSpellFilterInput | null > | null,
  or?: Array< ModelSubscriptionSpellFilterInput | null > | null,
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

export type ModelSubscriptionGearFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  weight?: ModelSubscriptionIntInput | null,
  uses?: ModelSubscriptionIntInput | null,
  tags?: ModelSubscriptionStringInput | null,
  source?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGearFilterInput | null > | null,
  or?: Array< ModelSubscriptionGearFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionMoveFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  selected?: ModelSubscriptionBooleanInput | null,
  profession?: ModelSubscriptionStringInput | null,
  source?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMoveFilterInput | null > | null,
  or?: Array< ModelSubscriptionMoveFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionBondFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  profession?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionStringInput | null,
  tags?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBondFilterInput | null > | null,
  or?: Array< ModelSubscriptionBondFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionAbilityScoreFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  shortName?: ModelSubscriptionStringInput | null,
  debility?: ModelSubscriptionStringInput | null,
  debilityPenalty?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionStringInput | null,
  bonus?: ModelSubscriptionIntInput | null,
  tags?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAbilityScoreFilterInput | null > | null,
  or?: Array< ModelSubscriptionAbilityScoreFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionRaceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  profession?: ModelSubscriptionStringInput | null,
  selected?: ModelSubscriptionBooleanInput | null,
  source?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRaceFilterInput | null > | null,
  or?: Array< ModelSubscriptionRaceFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionAlignmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  selected?: ModelSubscriptionBooleanInput | null,
  profession?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAlignmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionAlignmentFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionLookFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionStringInput | null,
  profession?: ModelSubscriptionStringInput | null,
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
  gear?: ModelSubscriptionStringInput | null,
  startingMoves?: ModelSubscriptionStringInput | null,
  advancedMovesTwoToTen?: ModelSubscriptionStringInput | null,
  advancedMovesSixToTen?: ModelSubscriptionStringInput | null,
  bonds?: ModelSubscriptionStringInput | null,
  abilityScores?: ModelSubscriptionStringInput | null,
  race?: ModelSubscriptionStringInput | null,
  alignment?: ModelSubscriptionStringInput | null,
  look?: ModelSubscriptionStringInput | null,
  profession?: ModelSubscriptionStringInput | null,
  spells?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCharacterFilterInput | null > | null,
  or?: Array< ModelSubscriptionCharacterFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreateProfessionMutationVariables = {
  input: CreateProfessionInput,
  condition?: ModelProfessionConditionInput | null,
};

export type CreateProfessionMutation = {
  createProfession?:  {
    __typename: "Profession",
    name: string,
    description: string,
    diceType: string,
    source: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateProfessionMutationVariables = {
  input: UpdateProfessionInput,
  condition?: ModelProfessionConditionInput | null,
};

export type UpdateProfessionMutation = {
  updateProfession?:  {
    __typename: "Profession",
    name: string,
    description: string,
    diceType: string,
    source: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteProfessionMutationVariables = {
  input: DeleteProfessionInput,
  condition?: ModelProfessionConditionInput | null,
};

export type DeleteProfessionMutation = {
  deleteProfession?:  {
    __typename: "Profession",
    name: string,
    description: string,
    diceType: string,
    source: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    selected?: boolean | null,
    tags?: Array< string | null > | null,
    source: string,
    profession: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    selected?: boolean | null,
    tags?: Array< string | null > | null,
    source: string,
    profession: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    selected?: boolean | null,
    tags?: Array< string | null > | null,
    source: string,
    profession: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    source: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    source: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    source: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    name: string,
    description: string,
    selected?: boolean | null,
    profession: string,
    source: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    name: string,
    description: string,
    selected?: boolean | null,
    profession: string,
    source: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    name: string,
    description: string,
    selected?: boolean | null,
    profession: string,
    source: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    profession: string,
    value?: string | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    profession: string,
    value?: string | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    profession: string,
    value?: string | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    value: string,
    bonus: number,
    tags?: Array< string | null > | null,
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
    value: string,
    bonus: number,
    tags?: Array< string | null > | null,
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
    value: string,
    bonus: number,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    profession: string,
    selected: boolean,
    source: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    profession: string,
    selected: boolean,
    source: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    profession: string,
    selected: boolean,
    source: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    selected?: boolean | null,
    profession: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    selected?: boolean | null,
    profession: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    selected?: boolean | null,
    profession: string,
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
    value?: string | null,
    profession: string,
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
    value?: string | null,
    profession: string,
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
    value?: string | null,
    profession: string,
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
    tags?: Array< string | null > | null,
    notes?: Array< string | null > | null,
    gear?: string | null,
    startingMoves?: string | null,
    advancedMovesTwoToTen?: string | null,
    advancedMovesSixToTen?: string | null,
    bonds?: string | null,
    abilityScores?: string | null,
    race?: string | null,
    alignment?: string | null,
    look?: string | null,
    profession?: string | null,
    spells?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    tags?: Array< string | null > | null,
    notes?: Array< string | null > | null,
    gear?: string | null,
    startingMoves?: string | null,
    advancedMovesTwoToTen?: string | null,
    advancedMovesSixToTen?: string | null,
    bonds?: string | null,
    abilityScores?: string | null,
    race?: string | null,
    alignment?: string | null,
    look?: string | null,
    profession?: string | null,
    spells?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    tags?: Array< string | null > | null,
    notes?: Array< string | null > | null,
    gear?: string | null,
    startingMoves?: string | null,
    advancedMovesTwoToTen?: string | null,
    advancedMovesSixToTen?: string | null,
    bonds?: string | null,
    abilityScores?: string | null,
    race?: string | null,
    alignment?: string | null,
    look?: string | null,
    profession?: string | null,
    spells?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetProfessionQueryVariables = {
  id: string,
};

export type GetProfessionQuery = {
  getProfession?:  {
    __typename: "Profession",
    name: string,
    description: string,
    diceType: string,
    source: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      name: string,
      description: string,
      diceType: string,
      source: string,
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
      name: string,
      description: string,
      diceType: string,
      source: string,
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
    selected?: boolean | null,
    tags?: Array< string | null > | null,
    source: string,
    profession: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      selected?: boolean | null,
      tags?: Array< string | null > | null,
      source: string,
      profession: string,
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
      selected?: boolean | null,
      tags?: Array< string | null > | null,
      source: string,
      profession: string,
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
    source: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      source: string,
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
      source: string,
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

export type GetMoveQueryVariables = {
  id: string,
};

export type GetMoveQuery = {
  getMove?:  {
    __typename: "Move",
    id: string,
    name: string,
    description: string,
    selected?: boolean | null,
    profession: string,
    source: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      name: string,
      description: string,
      selected?: boolean | null,
      profession: string,
      source: string,
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
      name: string,
      description: string,
      selected?: boolean | null,
      profession: string,
      source: string,
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

export type GetBondQueryVariables = {
  id: string,
};

export type GetBondQuery = {
  getBond?:  {
    __typename: "Bond",
    id: string,
    description?: string | null,
    profession: string,
    value?: string | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      profession: string,
      value?: string | null,
      tags?: Array< string | null > | null,
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
      profession: string,
      value?: string | null,
      tags?: Array< string | null > | null,
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
    value: string,
    bonus: number,
    tags?: Array< string | null > | null,
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
      value: string,
      bonus: number,
      tags?: Array< string | null > | null,
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
      value: string,
      bonus: number,
      tags?: Array< string | null > | null,
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

export type GetRaceQueryVariables = {
  id: string,
};

export type GetRaceQuery = {
  getRace?:  {
    __typename: "Race",
    id: string,
    name?: string | null,
    description?: string | null,
    profession: string,
    selected: boolean,
    source: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      profession: string,
      selected: boolean,
      source: string,
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
      profession: string,
      selected: boolean,
      source: string,
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

export type GetAlignmentQueryVariables = {
  id: string,
};

export type GetAlignmentQuery = {
  getAlignment?:  {
    __typename: "Alignment",
    id: string,
    name?: string | null,
    description?: string | null,
    selected?: boolean | null,
    profession: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      selected?: boolean | null,
      profession: string,
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
      selected?: boolean | null,
      profession: string,
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
    value?: string | null,
    profession: string,
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
      value?: string | null,
      profession: string,
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
      value?: string | null,
      profession: string,
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
    tags?: Array< string | null > | null,
    notes?: Array< string | null > | null,
    gear?: string | null,
    startingMoves?: string | null,
    advancedMovesTwoToTen?: string | null,
    advancedMovesSixToTen?: string | null,
    bonds?: string | null,
    abilityScores?: string | null,
    race?: string | null,
    alignment?: string | null,
    look?: string | null,
    profession?: string | null,
    spells?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      notes?: Array< string | null > | null,
      gear?: string | null,
      startingMoves?: string | null,
      advancedMovesTwoToTen?: string | null,
      advancedMovesSixToTen?: string | null,
      bonds?: string | null,
      abilityScores?: string | null,
      race?: string | null,
      alignment?: string | null,
      look?: string | null,
      profession?: string | null,
      spells?: string | null,
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
      notes?: Array< string | null > | null,
      gear?: string | null,
      startingMoves?: string | null,
      advancedMovesTwoToTen?: string | null,
      advancedMovesSixToTen?: string | null,
      bonds?: string | null,
      abilityScores?: string | null,
      race?: string | null,
      alignment?: string | null,
      look?: string | null,
      profession?: string | null,
      spells?: string | null,
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

export type OnCreateProfessionSubscriptionVariables = {
  filter?: ModelSubscriptionProfessionFilterInput | null,
};

export type OnCreateProfessionSubscription = {
  onCreateProfession?:  {
    __typename: "Profession",
    name: string,
    description: string,
    diceType: string,
    source: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateProfessionSubscriptionVariables = {
  filter?: ModelSubscriptionProfessionFilterInput | null,
};

export type OnUpdateProfessionSubscription = {
  onUpdateProfession?:  {
    __typename: "Profession",
    name: string,
    description: string,
    diceType: string,
    source: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteProfessionSubscriptionVariables = {
  filter?: ModelSubscriptionProfessionFilterInput | null,
};

export type OnDeleteProfessionSubscription = {
  onDeleteProfession?:  {
    __typename: "Profession",
    name: string,
    description: string,
    diceType: string,
    source: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    selected?: boolean | null,
    tags?: Array< string | null > | null,
    source: string,
    profession: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    selected?: boolean | null,
    tags?: Array< string | null > | null,
    source: string,
    profession: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    selected?: boolean | null,
    tags?: Array< string | null > | null,
    source: string,
    profession: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    source: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    source: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    source: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateMoveSubscriptionVariables = {
  filter?: ModelSubscriptionMoveFilterInput | null,
};

export type OnCreateMoveSubscription = {
  onCreateMove?:  {
    __typename: "Move",
    id: string,
    name: string,
    description: string,
    selected?: boolean | null,
    profession: string,
    source: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMoveSubscriptionVariables = {
  filter?: ModelSubscriptionMoveFilterInput | null,
};

export type OnUpdateMoveSubscription = {
  onUpdateMove?:  {
    __typename: "Move",
    id: string,
    name: string,
    description: string,
    selected?: boolean | null,
    profession: string,
    source: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMoveSubscriptionVariables = {
  filter?: ModelSubscriptionMoveFilterInput | null,
};

export type OnDeleteMoveSubscription = {
  onDeleteMove?:  {
    __typename: "Move",
    id: string,
    name: string,
    description: string,
    selected?: boolean | null,
    profession: string,
    source: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    profession: string,
    value?: string | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    profession: string,
    value?: string | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    profession: string,
    value?: string | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    value: string,
    bonus: number,
    tags?: Array< string | null > | null,
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
    value: string,
    bonus: number,
    tags?: Array< string | null > | null,
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
    value: string,
    bonus: number,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    profession: string,
    selected: boolean,
    source: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    profession: string,
    selected: boolean,
    source: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    profession: string,
    selected: boolean,
    source: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    selected?: boolean | null,
    profession: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    selected?: boolean | null,
    profession: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    selected?: boolean | null,
    profession: string,
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
    value?: string | null,
    profession: string,
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
    value?: string | null,
    profession: string,
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
    value?: string | null,
    profession: string,
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
    tags?: Array< string | null > | null,
    notes?: Array< string | null > | null,
    gear?: string | null,
    startingMoves?: string | null,
    advancedMovesTwoToTen?: string | null,
    advancedMovesSixToTen?: string | null,
    bonds?: string | null,
    abilityScores?: string | null,
    race?: string | null,
    alignment?: string | null,
    look?: string | null,
    profession?: string | null,
    spells?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    tags?: Array< string | null > | null,
    notes?: Array< string | null > | null,
    gear?: string | null,
    startingMoves?: string | null,
    advancedMovesTwoToTen?: string | null,
    advancedMovesSixToTen?: string | null,
    bonds?: string | null,
    abilityScores?: string | null,
    race?: string | null,
    alignment?: string | null,
    look?: string | null,
    profession?: string | null,
    spells?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    tags?: Array< string | null > | null,
    notes?: Array< string | null > | null,
    gear?: string | null,
    startingMoves?: string | null,
    advancedMovesTwoToTen?: string | null,
    advancedMovesSixToTen?: string | null,
    bonds?: string | null,
    abilityScores?: string | null,
    race?: string | null,
    alignment?: string | null,
    look?: string | null,
    profession?: string | null,
    spells?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
