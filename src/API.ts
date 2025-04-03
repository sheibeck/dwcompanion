/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProfessionInput = {
  name: string,
  description: string,
  diceType: string,
  source: string,
  healthBonus?: number | null,
  loadBonus?: number | null,
  id?: string | null,
};

export type ModelProfessionConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  diceType?: ModelStringInput | null,
  source?: ModelStringInput | null,
  healthBonus?: ModelIntInput | null,
  loadBonus?: ModelIntInput | null,
  and?: Array< ModelProfessionConditionInput | null > | null,
  or?: Array< ModelProfessionConditionInput | null > | null,
  not?: ModelProfessionConditionInput | null,
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

export type Profession = {
  __typename: "Profession",
  name: string,
  description: string,
  diceType: string,
  source: string,
  healthBonus?: number | null,
  loadBonus?: number | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProfessionInput = {
  name?: string | null,
  description?: string | null,
  diceType?: string | null,
  source?: string | null,
  healthBonus?: number | null,
  loadBonus?: number | null,
  id: string,
};

export type DeleteProfessionInput = {
  id: string,
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
  profession?: string | null,
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
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
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
  profession?: string | null,
  createdAt: string,
  updatedAt: string,
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
};

export type DeleteSpellInput = {
  id: string,
};

export type CreateGearInput = {
  id?: string | null,
  description: string,
  isStartingGear?: boolean | null,
  profession?: string | null,
  source?: string | null,
};

export type ModelGearConditionInput = {
  description?: ModelStringInput | null,
  isStartingGear?: ModelBooleanInput | null,
  profession?: ModelStringInput | null,
  source?: ModelStringInput | null,
  and?: Array< ModelGearConditionInput | null > | null,
  or?: Array< ModelGearConditionInput | null > | null,
  not?: ModelGearConditionInput | null,
};

export type Gear = {
  __typename: "Gear",
  id: string,
  description: string,
  isStartingGear?: boolean | null,
  profession?: string | null,
  source?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGearInput = {
  id: string,
  description?: string | null,
  isStartingGear?: boolean | null,
  profession?: string | null,
  source?: string | null,
};

export type DeleteGearInput = {
  id: string,
};

export type CreateMoveInput = {
  id?: string | null,
  name: string,
  description: string,
  selected?: boolean | null,
  selectedOnNew?: boolean | null,
  profession?: string | null,
  source: string,
  isStartingMove?: boolean | null,
  isAdvancedMove?: boolean | null,
  isTwoToTenMove?: boolean | null,
  isSixToTenMove?: boolean | null,
  isOverflow?: boolean | null,
};

export type ModelMoveConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  selected?: ModelBooleanInput | null,
  selectedOnNew?: ModelBooleanInput | null,
  profession?: ModelStringInput | null,
  source?: ModelStringInput | null,
  isStartingMove?: ModelBooleanInput | null,
  isAdvancedMove?: ModelBooleanInput | null,
  isTwoToTenMove?: ModelBooleanInput | null,
  isSixToTenMove?: ModelBooleanInput | null,
  isOverflow?: ModelBooleanInput | null,
  and?: Array< ModelMoveConditionInput | null > | null,
  or?: Array< ModelMoveConditionInput | null > | null,
  not?: ModelMoveConditionInput | null,
};

export type Move = {
  __typename: "Move",
  id: string,
  name: string,
  description: string,
  selected?: boolean | null,
  selectedOnNew?: boolean | null,
  profession?: string | null,
  source: string,
  isStartingMove?: boolean | null,
  isAdvancedMove?: boolean | null,
  isTwoToTenMove?: boolean | null,
  isSixToTenMove?: boolean | null,
  isOverflow?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMoveInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  selected?: boolean | null,
  selectedOnNew?: boolean | null,
  profession?: string | null,
  source?: string | null,
  isStartingMove?: boolean | null,
  isAdvancedMove?: boolean | null,
  isTwoToTenMove?: boolean | null,
  isSixToTenMove?: boolean | null,
  isOverflow?: boolean | null,
};

export type DeleteMoveInput = {
  id: string,
};

export type CreateBondInput = {
  id?: string | null,
  description?: string | null,
  profession?: string | null,
  value?: string | null,
  tags?: Array< string | null > | null,
  source?: string | null,
};

export type ModelBondConditionInput = {
  description?: ModelStringInput | null,
  profession?: ModelStringInput | null,
  value?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  source?: ModelStringInput | null,
  and?: Array< ModelBondConditionInput | null > | null,
  or?: Array< ModelBondConditionInput | null > | null,
  not?: ModelBondConditionInput | null,
};

export type Bond = {
  __typename: "Bond",
  id: string,
  description?: string | null,
  profession?: string | null,
  value?: string | null,
  tags?: Array< string | null > | null,
  source?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBondInput = {
  id: string,
  description?: string | null,
  profession?: string | null,
  value?: string | null,
  tags?: Array< string | null > | null,
  source?: string | null,
};

export type DeleteBondInput = {
  id: string,
};

export type CreateAbilityScoreInput = {
  id?: string | null,
  name: string,
  shortName: string,
  debility: string,
  debilityPenalty: string,
  value: string,
  bonus: number,
  debilityIsSelected?: boolean | null,
  sortOrder?: number | null,
  tags?: Array< string | null > | null,
};

export type ModelAbilityScoreConditionInput = {
  name?: ModelStringInput | null,
  shortName?: ModelStringInput | null,
  debility?: ModelStringInput | null,
  debilityPenalty?: ModelStringInput | null,
  value?: ModelStringInput | null,
  bonus?: ModelIntInput | null,
  debilityIsSelected?: ModelBooleanInput | null,
  sortOrder?: ModelIntInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelAbilityScoreConditionInput | null > | null,
  or?: Array< ModelAbilityScoreConditionInput | null > | null,
  not?: ModelAbilityScoreConditionInput | null,
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
  debilityIsSelected?: boolean | null,
  sortOrder?: number | null,
  tags?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAbilityScoreInput = {
  id: string,
  name?: string | null,
  shortName?: string | null,
  debility?: string | null,
  debilityPenalty?: string | null,
  value?: string | null,
  bonus?: number | null,
  debilityIsSelected?: boolean | null,
  sortOrder?: number | null,
  tags?: Array< string | null > | null,
};

export type DeleteAbilityScoreInput = {
  id: string,
};

export type CreateRaceInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  profession?: string | null,
  selected: boolean,
  source?: string | null,
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
};

export type Race = {
  __typename: "Race",
  id: string,
  name?: string | null,
  description?: string | null,
  profession?: string | null,
  selected: boolean,
  source?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateRaceInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  profession?: string | null,
  selected?: boolean | null,
  source?: string | null,
};

export type DeleteRaceInput = {
  id: string,
};

export type CreateAlignmentInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  selected?: boolean | null,
  profession?: string | null,
  source?: string | null,
};

export type ModelAlignmentConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  selected?: ModelBooleanInput | null,
  profession?: ModelStringInput | null,
  source?: ModelStringInput | null,
  and?: Array< ModelAlignmentConditionInput | null > | null,
  or?: Array< ModelAlignmentConditionInput | null > | null,
  not?: ModelAlignmentConditionInput | null,
};

export type Alignment = {
  __typename: "Alignment",
  id: string,
  name?: string | null,
  description?: string | null,
  selected?: boolean | null,
  profession?: string | null,
  source?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAlignmentInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  selected?: boolean | null,
  profession?: string | null,
  source?: string | null,
};

export type DeleteAlignmentInput = {
  id: string,
};

export type CreateLookInput = {
  id?: string | null,
  name: string,
  description: string,
  value?: string | null,
  profession?: string | null,
  source?: string | null,
};

export type ModelLookConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  value?: ModelStringInput | null,
  profession?: ModelStringInput | null,
  source?: ModelStringInput | null,
  and?: Array< ModelLookConditionInput | null > | null,
  or?: Array< ModelLookConditionInput | null > | null,
  not?: ModelLookConditionInput | null,
};

export type Look = {
  __typename: "Look",
  id: string,
  name: string,
  description: string,
  value?: string | null,
  profession?: string | null,
  source?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateLookInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  value?: string | null,
  profession?: string | null,
  source?: string | null,
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
  owner?: string | null,
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
};

export type DeleteCharacterInput = {
  id: string,
};

export type CreateFrontInput = {
  userId: string,
  id?: string | null,
  type: string,
  name: string,
  description: string,
  active?: boolean | null,
  resolved?: boolean | null,
};

export type ModelFrontConditionInput = {
  userId?: ModelIDInput | null,
  type?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  resolved?: ModelBooleanInput | null,
  and?: Array< ModelFrontConditionInput | null > | null,
  or?: Array< ModelFrontConditionInput | null > | null,
  not?: ModelFrontConditionInput | null,
};

export type Front = {
  __typename: "Front",
  userId: string,
  id: string,
  type: string,
  name: string,
  description: string,
  active?: boolean | null,
  resolved?: boolean | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateFrontInput = {
  userId?: string | null,
  id: string,
  type?: string | null,
  name?: string | null,
  description?: string | null,
  active?: boolean | null,
  resolved?: boolean | null,
};

export type DeleteFrontInput = {
  id: string,
};

export type CreateSteadingInput = {
  userId: string,
  id?: string | null,
  type: string,
  name: string,
  description: string,
};

export type ModelSteadingConditionInput = {
  userId?: ModelIDInput | null,
  type?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelSteadingConditionInput | null > | null,
  or?: Array< ModelSteadingConditionInput | null > | null,
  not?: ModelSteadingConditionInput | null,
};

export type Steading = {
  __typename: "Steading",
  userId: string,
  id: string,
  type: string,
  name: string,
  description: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateSteadingInput = {
  userId?: string | null,
  id: string,
  type?: string | null,
  name?: string | null,
  description?: string | null,
};

export type DeleteSteadingInput = {
  id: string,
};

export type CreateMapInput = {
  userId: string,
  id?: string | null,
  name: string,
  mapFile: string,
  locations?: string | null,
};

export type ModelMapConditionInput = {
  userId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  mapFile?: ModelStringInput | null,
  locations?: ModelStringInput | null,
  and?: Array< ModelMapConditionInput | null > | null,
  or?: Array< ModelMapConditionInput | null > | null,
  not?: ModelMapConditionInput | null,
};

export type Map = {
  __typename: "Map",
  userId: string,
  id: string,
  name: string,
  mapFile: string,
  locations?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateMapInput = {
  userId?: string | null,
  id: string,
  name?: string | null,
  mapFile?: string | null,
  locations?: string | null,
};

export type DeleteMapInput = {
  id: string,
};

export type CreateCampaignInput = {
  userId: string,
  id?: string | null,
  name: string,
  description?: string | null,
  characterIds?: Array< string | null > | null,
  frontIds?: Array< string | null > | null,
  mapIds?: Array< string | null > | null,
  steadingIds?: Array< string | null > | null,
  sessions?: Array< SessionEntryInput | null > | null,
  gm_notes?: string | null,
};

export type SessionEntryInput = {
  id: string,
  title: string,
  date: string,
  notes?: string | null,
};

export type ModelCampaignConditionInput = {
  userId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  characterIds?: ModelStringInput | null,
  frontIds?: ModelStringInput | null,
  mapIds?: ModelStringInput | null,
  steadingIds?: ModelStringInput | null,
  gm_notes?: ModelStringInput | null,
  and?: Array< ModelCampaignConditionInput | null > | null,
  or?: Array< ModelCampaignConditionInput | null > | null,
  not?: ModelCampaignConditionInput | null,
};

export type Campaign = {
  __typename: "Campaign",
  userId: string,
  id: string,
  name: string,
  description?: string | null,
  characterIds?: Array< string | null > | null,
  frontIds?: Array< string | null > | null,
  mapIds?: Array< string | null > | null,
  steadingIds?: Array< string | null > | null,
  sessions?:  Array<SessionEntry | null > | null,
  gm_notes?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type SessionEntry = {
  __typename: "SessionEntry",
  id: string,
  title: string,
  date: string,
  notes?: string | null,
};

export type UpdateCampaignInput = {
  userId?: string | null,
  id: string,
  name?: string | null,
  description?: string | null,
  characterIds?: Array< string | null > | null,
  frontIds?: Array< string | null > | null,
  mapIds?: Array< string | null > | null,
  steadingIds?: Array< string | null > | null,
  sessions?: Array< SessionEntryInput | null > | null,
  gm_notes?: string | null,
};

export type DeleteCampaignInput = {
  id: string,
};

export type ModelProfessionFilterInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  diceType?: ModelStringInput | null,
  source?: ModelStringInput | null,
  healthBonus?: ModelIntInput | null,
  loadBonus?: ModelIntInput | null,
  and?: Array< ModelProfessionFilterInput | null > | null,
  or?: Array< ModelProfessionFilterInput | null > | null,
  not?: ModelProfessionFilterInput | null,
};

export type ModelProfessionConnection = {
  __typename: "ModelProfessionConnection",
  items:  Array<Profession | null >,
  nextToken?: string | null,
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
};

export type ModelSpellConnection = {
  __typename: "ModelSpellConnection",
  items:  Array<Spell | null >,
  nextToken?: string | null,
};

export type ModelGearFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  isStartingGear?: ModelBooleanInput | null,
  profession?: ModelStringInput | null,
  source?: ModelStringInput | null,
  and?: Array< ModelGearFilterInput | null > | null,
  or?: Array< ModelGearFilterInput | null > | null,
  not?: ModelGearFilterInput | null,
};

export type ModelGearConnection = {
  __typename: "ModelGearConnection",
  items:  Array<Gear | null >,
  nextToken?: string | null,
};

export type ModelMoveFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  selected?: ModelBooleanInput | null,
  selectedOnNew?: ModelBooleanInput | null,
  profession?: ModelStringInput | null,
  source?: ModelStringInput | null,
  isStartingMove?: ModelBooleanInput | null,
  isAdvancedMove?: ModelBooleanInput | null,
  isTwoToTenMove?: ModelBooleanInput | null,
  isSixToTenMove?: ModelBooleanInput | null,
  isOverflow?: ModelBooleanInput | null,
  and?: Array< ModelMoveFilterInput | null > | null,
  or?: Array< ModelMoveFilterInput | null > | null,
  not?: ModelMoveFilterInput | null,
};

export type ModelMoveConnection = {
  __typename: "ModelMoveConnection",
  items:  Array<Move | null >,
  nextToken?: string | null,
};

export type ModelBondFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  profession?: ModelStringInput | null,
  value?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  source?: ModelStringInput | null,
  and?: Array< ModelBondFilterInput | null > | null,
  or?: Array< ModelBondFilterInput | null > | null,
  not?: ModelBondFilterInput | null,
};

export type ModelBondConnection = {
  __typename: "ModelBondConnection",
  items:  Array<Bond | null >,
  nextToken?: string | null,
};

export type ModelAbilityScoreFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  shortName?: ModelStringInput | null,
  debility?: ModelStringInput | null,
  debilityPenalty?: ModelStringInput | null,
  value?: ModelStringInput | null,
  bonus?: ModelIntInput | null,
  debilityIsSelected?: ModelBooleanInput | null,
  sortOrder?: ModelIntInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelAbilityScoreFilterInput | null > | null,
  or?: Array< ModelAbilityScoreFilterInput | null > | null,
  not?: ModelAbilityScoreFilterInput | null,
};

export type ModelAbilityScoreConnection = {
  __typename: "ModelAbilityScoreConnection",
  items:  Array<AbilityScore | null >,
  nextToken?: string | null,
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
};

export type ModelRaceConnection = {
  __typename: "ModelRaceConnection",
  items:  Array<Race | null >,
  nextToken?: string | null,
};

export type ModelAlignmentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  selected?: ModelBooleanInput | null,
  profession?: ModelStringInput | null,
  source?: ModelStringInput | null,
  and?: Array< ModelAlignmentFilterInput | null > | null,
  or?: Array< ModelAlignmentFilterInput | null > | null,
  not?: ModelAlignmentFilterInput | null,
};

export type ModelAlignmentConnection = {
  __typename: "ModelAlignmentConnection",
  items:  Array<Alignment | null >,
  nextToken?: string | null,
};

export type ModelLookFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  value?: ModelStringInput | null,
  profession?: ModelStringInput | null,
  source?: ModelStringInput | null,
  and?: Array< ModelLookFilterInput | null > | null,
  or?: Array< ModelLookFilterInput | null > | null,
  not?: ModelLookFilterInput | null,
};

export type ModelLookConnection = {
  __typename: "ModelLookConnection",
  items:  Array<Look | null >,
  nextToken?: string | null,
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
};

export type ModelCharacterConnection = {
  __typename: "ModelCharacterConnection",
  items:  Array<Character | null >,
  nextToken?: string | null,
};

export type ModelFrontFilterInput = {
  userId?: ModelIDInput | null,
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  resolved?: ModelBooleanInput | null,
  and?: Array< ModelFrontFilterInput | null > | null,
  or?: Array< ModelFrontFilterInput | null > | null,
  not?: ModelFrontFilterInput | null,
};

export type ModelFrontConnection = {
  __typename: "ModelFrontConnection",
  items:  Array<Front | null >,
  nextToken?: string | null,
};

export type ModelSteadingFilterInput = {
  userId?: ModelIDInput | null,
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelSteadingFilterInput | null > | null,
  or?: Array< ModelSteadingFilterInput | null > | null,
  not?: ModelSteadingFilterInput | null,
};

export type ModelSteadingConnection = {
  __typename: "ModelSteadingConnection",
  items:  Array<Steading | null >,
  nextToken?: string | null,
};

export type ModelMapFilterInput = {
  userId?: ModelIDInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  mapFile?: ModelStringInput | null,
  locations?: ModelStringInput | null,
  and?: Array< ModelMapFilterInput | null > | null,
  or?: Array< ModelMapFilterInput | null > | null,
  not?: ModelMapFilterInput | null,
};

export type ModelMapConnection = {
  __typename: "ModelMapConnection",
  items:  Array<Map | null >,
  nextToken?: string | null,
};

export type ModelCampaignFilterInput = {
  userId?: ModelIDInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  characterIds?: ModelStringInput | null,
  frontIds?: ModelStringInput | null,
  mapIds?: ModelStringInput | null,
  steadingIds?: ModelStringInput | null,
  gm_notes?: ModelStringInput | null,
  and?: Array< ModelCampaignFilterInput | null > | null,
  or?: Array< ModelCampaignFilterInput | null > | null,
  not?: ModelCampaignFilterInput | null,
};

export type ModelCampaignConnection = {
  __typename: "ModelCampaignConnection",
  items:  Array<Campaign | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionProfessionFilterInput = {
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  diceType?: ModelSubscriptionStringInput | null,
  source?: ModelSubscriptionStringInput | null,
  healthBonus?: ModelSubscriptionIntInput | null,
  loadBonus?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionProfessionFilterInput | null > | null,
  or?: Array< ModelSubscriptionProfessionFilterInput | null > | null,
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

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionGearFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  isStartingGear?: ModelSubscriptionBooleanInput | null,
  profession?: ModelSubscriptionStringInput | null,
  source?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGearFilterInput | null > | null,
  or?: Array< ModelSubscriptionGearFilterInput | null > | null,
};

export type ModelSubscriptionMoveFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  selected?: ModelSubscriptionBooleanInput | null,
  selectedOnNew?: ModelSubscriptionBooleanInput | null,
  profession?: ModelSubscriptionStringInput | null,
  source?: ModelSubscriptionStringInput | null,
  isStartingMove?: ModelSubscriptionBooleanInput | null,
  isAdvancedMove?: ModelSubscriptionBooleanInput | null,
  isTwoToTenMove?: ModelSubscriptionBooleanInput | null,
  isSixToTenMove?: ModelSubscriptionBooleanInput | null,
  isOverflow?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionMoveFilterInput | null > | null,
  or?: Array< ModelSubscriptionMoveFilterInput | null > | null,
};

export type ModelSubscriptionBondFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  profession?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionStringInput | null,
  tags?: ModelSubscriptionStringInput | null,
  source?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBondFilterInput | null > | null,
  or?: Array< ModelSubscriptionBondFilterInput | null > | null,
};

export type ModelSubscriptionAbilityScoreFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  shortName?: ModelSubscriptionStringInput | null,
  debility?: ModelSubscriptionStringInput | null,
  debilityPenalty?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionStringInput | null,
  bonus?: ModelSubscriptionIntInput | null,
  debilityIsSelected?: ModelSubscriptionBooleanInput | null,
  sortOrder?: ModelSubscriptionIntInput | null,
  tags?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAbilityScoreFilterInput | null > | null,
  or?: Array< ModelSubscriptionAbilityScoreFilterInput | null > | null,
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
};

export type ModelSubscriptionAlignmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  selected?: ModelSubscriptionBooleanInput | null,
  profession?: ModelSubscriptionStringInput | null,
  source?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAlignmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionAlignmentFilterInput | null > | null,
};

export type ModelSubscriptionLookFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionStringInput | null,
  profession?: ModelSubscriptionStringInput | null,
  source?: ModelSubscriptionStringInput | null,
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
};

export type ModelSubscriptionFrontFilterInput = {
  userId?: ModelSubscriptionIDInput | null,
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  resolved?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionFrontFilterInput | null > | null,
  or?: Array< ModelSubscriptionFrontFilterInput | null > | null,
};

export type ModelSubscriptionSteadingFilterInput = {
  userId?: ModelSubscriptionIDInput | null,
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSteadingFilterInput | null > | null,
  or?: Array< ModelSubscriptionSteadingFilterInput | null > | null,
};

export type ModelSubscriptionMapFilterInput = {
  userId?: ModelSubscriptionIDInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  mapFile?: ModelSubscriptionStringInput | null,
  locations?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMapFilterInput | null > | null,
  or?: Array< ModelSubscriptionMapFilterInput | null > | null,
};

export type ModelSubscriptionCampaignFilterInput = {
  userId?: ModelSubscriptionIDInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  characterIds?: ModelSubscriptionStringInput | null,
  frontIds?: ModelSubscriptionStringInput | null,
  mapIds?: ModelSubscriptionStringInput | null,
  steadingIds?: ModelSubscriptionStringInput | null,
  gm_notes?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCampaignFilterInput | null > | null,
  or?: Array< ModelSubscriptionCampaignFilterInput | null > | null,
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
    healthBonus?: number | null,
    loadBonus?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
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
    healthBonus?: number | null,
    loadBonus?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
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
    healthBonus?: number | null,
    loadBonus?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
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
    profession?: string | null,
    createdAt: string,
    updatedAt: string,
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
    profession?: string | null,
    createdAt: string,
    updatedAt: string,
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
    profession?: string | null,
    createdAt: string,
    updatedAt: string,
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
    isStartingGear?: boolean | null,
    profession?: string | null,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
    isStartingGear?: boolean | null,
    profession?: string | null,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
    isStartingGear?: boolean | null,
    profession?: string | null,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
    selectedOnNew?: boolean | null,
    profession?: string | null,
    source: string,
    isStartingMove?: boolean | null,
    isAdvancedMove?: boolean | null,
    isTwoToTenMove?: boolean | null,
    isSixToTenMove?: boolean | null,
    isOverflow?: boolean | null,
    createdAt: string,
    updatedAt: string,
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
    selectedOnNew?: boolean | null,
    profession?: string | null,
    source: string,
    isStartingMove?: boolean | null,
    isAdvancedMove?: boolean | null,
    isTwoToTenMove?: boolean | null,
    isSixToTenMove?: boolean | null,
    isOverflow?: boolean | null,
    createdAt: string,
    updatedAt: string,
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
    selectedOnNew?: boolean | null,
    profession?: string | null,
    source: string,
    isStartingMove?: boolean | null,
    isAdvancedMove?: boolean | null,
    isTwoToTenMove?: boolean | null,
    isSixToTenMove?: boolean | null,
    isOverflow?: boolean | null,
    createdAt: string,
    updatedAt: string,
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
    profession?: string | null,
    value?: string | null,
    tags?: Array< string | null > | null,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
    profession?: string | null,
    value?: string | null,
    tags?: Array< string | null > | null,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
    profession?: string | null,
    value?: string | null,
    tags?: Array< string | null > | null,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
    debilityIsSelected?: boolean | null,
    sortOrder?: number | null,
    tags?: Array< string | null > | null,
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
    value: string,
    bonus: number,
    debilityIsSelected?: boolean | null,
    sortOrder?: number | null,
    tags?: Array< string | null > | null,
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
    value: string,
    bonus: number,
    debilityIsSelected?: boolean | null,
    sortOrder?: number | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
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
    profession?: string | null,
    selected: boolean,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
    profession?: string | null,
    selected: boolean,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
    profession?: string | null,
    selected: boolean,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
    profession?: string | null,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
    profession?: string | null,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
    profession?: string | null,
    source?: string | null,
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
    value?: string | null,
    profession?: string | null,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
    profession?: string | null,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
    profession?: string | null,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
    owner?: string | null,
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
    owner?: string | null,
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
    owner?: string | null,
  } | null,
};

export type CreateFrontMutationVariables = {
  input: CreateFrontInput,
  condition?: ModelFrontConditionInput | null,
};

export type CreateFrontMutation = {
  createFront?:  {
    __typename: "Front",
    userId: string,
    id: string,
    type: string,
    name: string,
    description: string,
    active?: boolean | null,
    resolved?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateFrontMutationVariables = {
  input: UpdateFrontInput,
  condition?: ModelFrontConditionInput | null,
};

export type UpdateFrontMutation = {
  updateFront?:  {
    __typename: "Front",
    userId: string,
    id: string,
    type: string,
    name: string,
    description: string,
    active?: boolean | null,
    resolved?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteFrontMutationVariables = {
  input: DeleteFrontInput,
  condition?: ModelFrontConditionInput | null,
};

export type DeleteFrontMutation = {
  deleteFront?:  {
    __typename: "Front",
    userId: string,
    id: string,
    type: string,
    name: string,
    description: string,
    active?: boolean | null,
    resolved?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateSteadingMutationVariables = {
  input: CreateSteadingInput,
  condition?: ModelSteadingConditionInput | null,
};

export type CreateSteadingMutation = {
  createSteading?:  {
    __typename: "Steading",
    userId: string,
    id: string,
    type: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateSteadingMutationVariables = {
  input: UpdateSteadingInput,
  condition?: ModelSteadingConditionInput | null,
};

export type UpdateSteadingMutation = {
  updateSteading?:  {
    __typename: "Steading",
    userId: string,
    id: string,
    type: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteSteadingMutationVariables = {
  input: DeleteSteadingInput,
  condition?: ModelSteadingConditionInput | null,
};

export type DeleteSteadingMutation = {
  deleteSteading?:  {
    __typename: "Steading",
    userId: string,
    id: string,
    type: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateMapMutationVariables = {
  input: CreateMapInput,
  condition?: ModelMapConditionInput | null,
};

export type CreateMapMutation = {
  createMap?:  {
    __typename: "Map",
    userId: string,
    id: string,
    name: string,
    mapFile: string,
    locations?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateMapMutationVariables = {
  input: UpdateMapInput,
  condition?: ModelMapConditionInput | null,
};

export type UpdateMapMutation = {
  updateMap?:  {
    __typename: "Map",
    userId: string,
    id: string,
    name: string,
    mapFile: string,
    locations?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteMapMutationVariables = {
  input: DeleteMapInput,
  condition?: ModelMapConditionInput | null,
};

export type DeleteMapMutation = {
  deleteMap?:  {
    __typename: "Map",
    userId: string,
    id: string,
    name: string,
    mapFile: string,
    locations?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateCampaignMutationVariables = {
  input: CreateCampaignInput,
  condition?: ModelCampaignConditionInput | null,
};

export type CreateCampaignMutation = {
  createCampaign?:  {
    __typename: "Campaign",
    userId: string,
    id: string,
    name: string,
    description?: string | null,
    characterIds?: Array< string | null > | null,
    frontIds?: Array< string | null > | null,
    mapIds?: Array< string | null > | null,
    steadingIds?: Array< string | null > | null,
    sessions?:  Array< {
      __typename: "SessionEntry",
      id: string,
      title: string,
      date: string,
      notes?: string | null,
    } | null > | null,
    gm_notes?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCampaignMutationVariables = {
  input: UpdateCampaignInput,
  condition?: ModelCampaignConditionInput | null,
};

export type UpdateCampaignMutation = {
  updateCampaign?:  {
    __typename: "Campaign",
    userId: string,
    id: string,
    name: string,
    description?: string | null,
    characterIds?: Array< string | null > | null,
    frontIds?: Array< string | null > | null,
    mapIds?: Array< string | null > | null,
    steadingIds?: Array< string | null > | null,
    sessions?:  Array< {
      __typename: "SessionEntry",
      id: string,
      title: string,
      date: string,
      notes?: string | null,
    } | null > | null,
    gm_notes?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteCampaignMutationVariables = {
  input: DeleteCampaignInput,
  condition?: ModelCampaignConditionInput | null,
};

export type DeleteCampaignMutation = {
  deleteCampaign?:  {
    __typename: "Campaign",
    userId: string,
    id: string,
    name: string,
    description?: string | null,
    characterIds?: Array< string | null > | null,
    frontIds?: Array< string | null > | null,
    mapIds?: Array< string | null > | null,
    steadingIds?: Array< string | null > | null,
    sessions?:  Array< {
      __typename: "SessionEntry",
      id: string,
      title: string,
      date: string,
      notes?: string | null,
    } | null > | null,
    gm_notes?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    healthBonus?: number | null,
    loadBonus?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
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
      healthBonus?: number | null,
      loadBonus?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
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
    selected?: boolean | null,
    tags?: Array< string | null > | null,
    source: string,
    profession?: string | null,
    createdAt: string,
    updatedAt: string,
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
      profession?: string | null,
      createdAt: string,
      updatedAt: string,
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
    isStartingGear?: boolean | null,
    profession?: string | null,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
      isStartingGear?: boolean | null,
      profession?: string | null,
      source?: string | null,
      createdAt: string,
      updatedAt: string,
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
    name: string,
    description: string,
    selected?: boolean | null,
    selectedOnNew?: boolean | null,
    profession?: string | null,
    source: string,
    isStartingMove?: boolean | null,
    isAdvancedMove?: boolean | null,
    isTwoToTenMove?: boolean | null,
    isSixToTenMove?: boolean | null,
    isOverflow?: boolean | null,
    createdAt: string,
    updatedAt: string,
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
      selectedOnNew?: boolean | null,
      profession?: string | null,
      source: string,
      isStartingMove?: boolean | null,
      isAdvancedMove?: boolean | null,
      isTwoToTenMove?: boolean | null,
      isSixToTenMove?: boolean | null,
      isOverflow?: boolean | null,
      createdAt: string,
      updatedAt: string,
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
    profession?: string | null,
    value?: string | null,
    tags?: Array< string | null > | null,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
      profession?: string | null,
      value?: string | null,
      tags?: Array< string | null > | null,
      source?: string | null,
      createdAt: string,
      updatedAt: string,
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
    value: string,
    bonus: number,
    debilityIsSelected?: boolean | null,
    sortOrder?: number | null,
    tags?: Array< string | null > | null,
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
      value: string,
      bonus: number,
      debilityIsSelected?: boolean | null,
      sortOrder?: number | null,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
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
    profession?: string | null,
    selected: boolean,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
      profession?: string | null,
      selected: boolean,
      source?: string | null,
      createdAt: string,
      updatedAt: string,
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
    selected?: boolean | null,
    profession?: string | null,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
      profession?: string | null,
      source?: string | null,
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
    value?: string | null,
    profession?: string | null,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
      profession?: string | null,
      source?: string | null,
      createdAt: string,
      updatedAt: string,
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
    owner?: string | null,
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
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFrontQueryVariables = {
  id: string,
};

export type GetFrontQuery = {
  getFront?:  {
    __typename: "Front",
    userId: string,
    id: string,
    type: string,
    name: string,
    description: string,
    active?: boolean | null,
    resolved?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListFrontsQueryVariables = {
  filter?: ModelFrontFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFrontsQuery = {
  listFronts?:  {
    __typename: "ModelFrontConnection",
    items:  Array< {
      __typename: "Front",
      userId: string,
      id: string,
      type: string,
      name: string,
      description: string,
      active?: boolean | null,
      resolved?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSteadingQueryVariables = {
  id: string,
};

export type GetSteadingQuery = {
  getSteading?:  {
    __typename: "Steading",
    userId: string,
    id: string,
    type: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListSteadingsQueryVariables = {
  filter?: ModelSteadingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSteadingsQuery = {
  listSteadings?:  {
    __typename: "ModelSteadingConnection",
    items:  Array< {
      __typename: "Steading",
      userId: string,
      id: string,
      type: string,
      name: string,
      description: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMapQueryVariables = {
  id: string,
};

export type GetMapQuery = {
  getMap?:  {
    __typename: "Map",
    userId: string,
    id: string,
    name: string,
    mapFile: string,
    locations?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListMapsQueryVariables = {
  filter?: ModelMapFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMapsQuery = {
  listMaps?:  {
    __typename: "ModelMapConnection",
    items:  Array< {
      __typename: "Map",
      userId: string,
      id: string,
      name: string,
      mapFile: string,
      locations?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCampaignQueryVariables = {
  id: string,
};

export type GetCampaignQuery = {
  getCampaign?:  {
    __typename: "Campaign",
    userId: string,
    id: string,
    name: string,
    description?: string | null,
    characterIds?: Array< string | null > | null,
    frontIds?: Array< string | null > | null,
    mapIds?: Array< string | null > | null,
    steadingIds?: Array< string | null > | null,
    sessions?:  Array< {
      __typename: "SessionEntry",
      id: string,
      title: string,
      date: string,
      notes?: string | null,
    } | null > | null,
    gm_notes?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCampaignsQueryVariables = {
  filter?: ModelCampaignFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCampaignsQuery = {
  listCampaigns?:  {
    __typename: "ModelCampaignConnection",
    items:  Array< {
      __typename: "Campaign",
      userId: string,
      id: string,
      name: string,
      description?: string | null,
      characterIds?: Array< string | null > | null,
      frontIds?: Array< string | null > | null,
      mapIds?: Array< string | null > | null,
      steadingIds?: Array< string | null > | null,
      gm_notes?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
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
    healthBonus?: number | null,
    loadBonus?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
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
    healthBonus?: number | null,
    loadBonus?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
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
    healthBonus?: number | null,
    loadBonus?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
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
    profession?: string | null,
    createdAt: string,
    updatedAt: string,
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
    profession?: string | null,
    createdAt: string,
    updatedAt: string,
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
    profession?: string | null,
    createdAt: string,
    updatedAt: string,
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
    isStartingGear?: boolean | null,
    profession?: string | null,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
    isStartingGear?: boolean | null,
    profession?: string | null,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
    isStartingGear?: boolean | null,
    profession?: string | null,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
    selectedOnNew?: boolean | null,
    profession?: string | null,
    source: string,
    isStartingMove?: boolean | null,
    isAdvancedMove?: boolean | null,
    isTwoToTenMove?: boolean | null,
    isSixToTenMove?: boolean | null,
    isOverflow?: boolean | null,
    createdAt: string,
    updatedAt: string,
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
    selectedOnNew?: boolean | null,
    profession?: string | null,
    source: string,
    isStartingMove?: boolean | null,
    isAdvancedMove?: boolean | null,
    isTwoToTenMove?: boolean | null,
    isSixToTenMove?: boolean | null,
    isOverflow?: boolean | null,
    createdAt: string,
    updatedAt: string,
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
    selectedOnNew?: boolean | null,
    profession?: string | null,
    source: string,
    isStartingMove?: boolean | null,
    isAdvancedMove?: boolean | null,
    isTwoToTenMove?: boolean | null,
    isSixToTenMove?: boolean | null,
    isOverflow?: boolean | null,
    createdAt: string,
    updatedAt: string,
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
    profession?: string | null,
    value?: string | null,
    tags?: Array< string | null > | null,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
    profession?: string | null,
    value?: string | null,
    tags?: Array< string | null > | null,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
    profession?: string | null,
    value?: string | null,
    tags?: Array< string | null > | null,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
    debilityIsSelected?: boolean | null,
    sortOrder?: number | null,
    tags?: Array< string | null > | null,
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
    value: string,
    bonus: number,
    debilityIsSelected?: boolean | null,
    sortOrder?: number | null,
    tags?: Array< string | null > | null,
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
    value: string,
    bonus: number,
    debilityIsSelected?: boolean | null,
    sortOrder?: number | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
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
    profession?: string | null,
    selected: boolean,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
    profession?: string | null,
    selected: boolean,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
    profession?: string | null,
    selected: boolean,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
    profession?: string | null,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
    profession?: string | null,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
    profession?: string | null,
    source?: string | null,
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
    value?: string | null,
    profession?: string | null,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
    profession?: string | null,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
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
    profession?: string | null,
    source?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCharacterSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterFilterInput | null,
  owner?: string | null,
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
    owner?: string | null,
  } | null,
};

export type OnUpdateCharacterSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterFilterInput | null,
  owner?: string | null,
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
    owner?: string | null,
  } | null,
};

export type OnDeleteCharacterSubscriptionVariables = {
  filter?: ModelSubscriptionCharacterFilterInput | null,
  owner?: string | null,
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
    owner?: string | null,
  } | null,
};

export type OnCreateFrontSubscriptionVariables = {
  filter?: ModelSubscriptionFrontFilterInput | null,
  owner?: string | null,
};

export type OnCreateFrontSubscription = {
  onCreateFront?:  {
    __typename: "Front",
    userId: string,
    id: string,
    type: string,
    name: string,
    description: string,
    active?: boolean | null,
    resolved?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateFrontSubscriptionVariables = {
  filter?: ModelSubscriptionFrontFilterInput | null,
  owner?: string | null,
};

export type OnUpdateFrontSubscription = {
  onUpdateFront?:  {
    __typename: "Front",
    userId: string,
    id: string,
    type: string,
    name: string,
    description: string,
    active?: boolean | null,
    resolved?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteFrontSubscriptionVariables = {
  filter?: ModelSubscriptionFrontFilterInput | null,
  owner?: string | null,
};

export type OnDeleteFrontSubscription = {
  onDeleteFront?:  {
    __typename: "Front",
    userId: string,
    id: string,
    type: string,
    name: string,
    description: string,
    active?: boolean | null,
    resolved?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateSteadingSubscriptionVariables = {
  filter?: ModelSubscriptionSteadingFilterInput | null,
  owner?: string | null,
};

export type OnCreateSteadingSubscription = {
  onCreateSteading?:  {
    __typename: "Steading",
    userId: string,
    id: string,
    type: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateSteadingSubscriptionVariables = {
  filter?: ModelSubscriptionSteadingFilterInput | null,
  owner?: string | null,
};

export type OnUpdateSteadingSubscription = {
  onUpdateSteading?:  {
    __typename: "Steading",
    userId: string,
    id: string,
    type: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteSteadingSubscriptionVariables = {
  filter?: ModelSubscriptionSteadingFilterInput | null,
  owner?: string | null,
};

export type OnDeleteSteadingSubscription = {
  onDeleteSteading?:  {
    __typename: "Steading",
    userId: string,
    id: string,
    type: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateMapSubscriptionVariables = {
  filter?: ModelSubscriptionMapFilterInput | null,
  owner?: string | null,
};

export type OnCreateMapSubscription = {
  onCreateMap?:  {
    __typename: "Map",
    userId: string,
    id: string,
    name: string,
    mapFile: string,
    locations?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateMapSubscriptionVariables = {
  filter?: ModelSubscriptionMapFilterInput | null,
  owner?: string | null,
};

export type OnUpdateMapSubscription = {
  onUpdateMap?:  {
    __typename: "Map",
    userId: string,
    id: string,
    name: string,
    mapFile: string,
    locations?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteMapSubscriptionVariables = {
  filter?: ModelSubscriptionMapFilterInput | null,
  owner?: string | null,
};

export type OnDeleteMapSubscription = {
  onDeleteMap?:  {
    __typename: "Map",
    userId: string,
    id: string,
    name: string,
    mapFile: string,
    locations?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateCampaignSubscriptionVariables = {
  filter?: ModelSubscriptionCampaignFilterInput | null,
  owner?: string | null,
};

export type OnCreateCampaignSubscription = {
  onCreateCampaign?:  {
    __typename: "Campaign",
    userId: string,
    id: string,
    name: string,
    description?: string | null,
    characterIds?: Array< string | null > | null,
    frontIds?: Array< string | null > | null,
    mapIds?: Array< string | null > | null,
    steadingIds?: Array< string | null > | null,
    sessions?:  Array< {
      __typename: "SessionEntry",
      id: string,
      title: string,
      date: string,
      notes?: string | null,
    } | null > | null,
    gm_notes?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCampaignSubscriptionVariables = {
  filter?: ModelSubscriptionCampaignFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCampaignSubscription = {
  onUpdateCampaign?:  {
    __typename: "Campaign",
    userId: string,
    id: string,
    name: string,
    description?: string | null,
    characterIds?: Array< string | null > | null,
    frontIds?: Array< string | null > | null,
    mapIds?: Array< string | null > | null,
    steadingIds?: Array< string | null > | null,
    sessions?:  Array< {
      __typename: "SessionEntry",
      id: string,
      title: string,
      date: string,
      notes?: string | null,
    } | null > | null,
    gm_notes?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCampaignSubscriptionVariables = {
  filter?: ModelSubscriptionCampaignFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCampaignSubscription = {
  onDeleteCampaign?:  {
    __typename: "Campaign",
    userId: string,
    id: string,
    name: string,
    description?: string | null,
    characterIds?: Array< string | null > | null,
    frontIds?: Array< string | null > | null,
    mapIds?: Array< string | null > | null,
    steadingIds?: Array< string | null > | null,
    sessions?:  Array< {
      __typename: "SessionEntry",
      id: string,
      title: string,
      date: string,
      notes?: string | null,
    } | null > | null,
    gm_notes?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
