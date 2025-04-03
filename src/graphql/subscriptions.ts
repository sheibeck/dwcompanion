/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateProfession = /* GraphQL */ `subscription OnCreateProfession(
  $filter: ModelSubscriptionProfessionFilterInput
) {
  onCreateProfession(filter: $filter) {
    name
    description
    diceType
    source
    healthBonus
    loadBonus
    id
    createdAt
    updatedAt
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
    name
    description
    diceType
    source
    healthBonus
    loadBonus
    id
    createdAt
    updatedAt
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
    name
    description
    diceType
    source
    healthBonus
    loadBonus
    id
    createdAt
    updatedAt
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
    selected
    tags
    source
    profession
    createdAt
    updatedAt
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
    selected
    tags
    source
    profession
    createdAt
    updatedAt
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
    selected
    tags
    source
    profession
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSpellSubscriptionVariables,
  APITypes.OnDeleteSpellSubscription
>;
export const onCreateGear = /* GraphQL */ `subscription OnCreateGear($filter: ModelSubscriptionGearFilterInput) {
  onCreateGear(filter: $filter) {
    id
    description
    isStartingGear
    profession
    source
    createdAt
    updatedAt
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
    isStartingGear
    profession
    source
    createdAt
    updatedAt
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
    isStartingGear
    profession
    source
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteGearSubscriptionVariables,
  APITypes.OnDeleteGearSubscription
>;
export const onCreateMove = /* GraphQL */ `subscription OnCreateMove($filter: ModelSubscriptionMoveFilterInput) {
  onCreateMove(filter: $filter) {
    id
    name
    description
    selected
    selectedOnNew
    profession
    source
    isStartingMove
    isAdvancedMove
    isTwoToTenMove
    isSixToTenMove
    isOverflow
    createdAt
    updatedAt
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
    name
    description
    selected
    selectedOnNew
    profession
    source
    isStartingMove
    isAdvancedMove
    isTwoToTenMove
    isSixToTenMove
    isOverflow
    createdAt
    updatedAt
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
    name
    description
    selected
    selectedOnNew
    profession
    source
    isStartingMove
    isAdvancedMove
    isTwoToTenMove
    isSixToTenMove
    isOverflow
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMoveSubscriptionVariables,
  APITypes.OnDeleteMoveSubscription
>;
export const onCreateBond = /* GraphQL */ `subscription OnCreateBond($filter: ModelSubscriptionBondFilterInput) {
  onCreateBond(filter: $filter) {
    id
    description
    profession
    value
    tags
    source
    createdAt
    updatedAt
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
    profession
    value
    tags
    source
    createdAt
    updatedAt
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
    profession
    value
    tags
    source
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBondSubscriptionVariables,
  APITypes.OnDeleteBondSubscription
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
    value
    bonus
    debilityIsSelected
    sortOrder
    tags
    createdAt
    updatedAt
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
    value
    bonus
    debilityIsSelected
    sortOrder
    tags
    createdAt
    updatedAt
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
    value
    bonus
    debilityIsSelected
    sortOrder
    tags
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAbilityScoreSubscriptionVariables,
  APITypes.OnDeleteAbilityScoreSubscription
>;
export const onCreateRace = /* GraphQL */ `subscription OnCreateRace($filter: ModelSubscriptionRaceFilterInput) {
  onCreateRace(filter: $filter) {
    id
    name
    description
    profession
    selected
    source
    createdAt
    updatedAt
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
    profession
    selected
    source
    createdAt
    updatedAt
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
    profession
    selected
    source
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteRaceSubscriptionVariables,
  APITypes.OnDeleteRaceSubscription
>;
export const onCreateAlignment = /* GraphQL */ `subscription OnCreateAlignment($filter: ModelSubscriptionAlignmentFilterInput) {
  onCreateAlignment(filter: $filter) {
    id
    name
    description
    selected
    profession
    source
    createdAt
    updatedAt
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
    selected
    profession
    source
    createdAt
    updatedAt
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
    selected
    profession
    source
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAlignmentSubscriptionVariables,
  APITypes.OnDeleteAlignmentSubscription
>;
export const onCreateLook = /* GraphQL */ `subscription OnCreateLook($filter: ModelSubscriptionLookFilterInput) {
  onCreateLook(filter: $filter) {
    id
    name
    description
    value
    profession
    source
    createdAt
    updatedAt
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
    value
    profession
    source
    createdAt
    updatedAt
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
    value
    profession
    source
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLookSubscriptionVariables,
  APITypes.OnDeleteLookSubscription
>;
export const onCreateCharacter = /* GraphQL */ `subscription OnCreateCharacter(
  $filter: ModelSubscriptionCharacterFilterInput
  $owner: String
) {
  onCreateCharacter(filter: $filter, owner: $owner) {
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
    gear
    startingMoves
    advancedMovesTwoToTen
    advancedMovesSixToTen
    bonds
    abilityScores
    race
    alignment
    look
    profession
    spells
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCharacterSubscriptionVariables,
  APITypes.OnCreateCharacterSubscription
>;
export const onUpdateCharacter = /* GraphQL */ `subscription OnUpdateCharacter(
  $filter: ModelSubscriptionCharacterFilterInput
  $owner: String
) {
  onUpdateCharacter(filter: $filter, owner: $owner) {
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
    gear
    startingMoves
    advancedMovesTwoToTen
    advancedMovesSixToTen
    bonds
    abilityScores
    race
    alignment
    look
    profession
    spells
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCharacterSubscriptionVariables,
  APITypes.OnUpdateCharacterSubscription
>;
export const onDeleteCharacter = /* GraphQL */ `subscription OnDeleteCharacter(
  $filter: ModelSubscriptionCharacterFilterInput
  $owner: String
) {
  onDeleteCharacter(filter: $filter, owner: $owner) {
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
    gear
    startingMoves
    advancedMovesTwoToTen
    advancedMovesSixToTen
    bonds
    abilityScores
    race
    alignment
    look
    profession
    spells
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCharacterSubscriptionVariables,
  APITypes.OnDeleteCharacterSubscription
>;
export const onCreateFront = /* GraphQL */ `subscription OnCreateFront(
  $filter: ModelSubscriptionFrontFilterInput
  $owner: String
) {
  onCreateFront(filter: $filter, owner: $owner) {
    userId
    id
    type
    name
    description
    active
    resolved
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFrontSubscriptionVariables,
  APITypes.OnCreateFrontSubscription
>;
export const onUpdateFront = /* GraphQL */ `subscription OnUpdateFront(
  $filter: ModelSubscriptionFrontFilterInput
  $owner: String
) {
  onUpdateFront(filter: $filter, owner: $owner) {
    userId
    id
    type
    name
    description
    active
    resolved
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFrontSubscriptionVariables,
  APITypes.OnUpdateFrontSubscription
>;
export const onDeleteFront = /* GraphQL */ `subscription OnDeleteFront(
  $filter: ModelSubscriptionFrontFilterInput
  $owner: String
) {
  onDeleteFront(filter: $filter, owner: $owner) {
    userId
    id
    type
    name
    description
    active
    resolved
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFrontSubscriptionVariables,
  APITypes.OnDeleteFrontSubscription
>;
export const onCreateSteading = /* GraphQL */ `subscription OnCreateSteading(
  $filter: ModelSubscriptionSteadingFilterInput
  $owner: String
) {
  onCreateSteading(filter: $filter, owner: $owner) {
    userId
    id
    type
    name
    description
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSteadingSubscriptionVariables,
  APITypes.OnCreateSteadingSubscription
>;
export const onUpdateSteading = /* GraphQL */ `subscription OnUpdateSteading(
  $filter: ModelSubscriptionSteadingFilterInput
  $owner: String
) {
  onUpdateSteading(filter: $filter, owner: $owner) {
    userId
    id
    type
    name
    description
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSteadingSubscriptionVariables,
  APITypes.OnUpdateSteadingSubscription
>;
export const onDeleteSteading = /* GraphQL */ `subscription OnDeleteSteading(
  $filter: ModelSubscriptionSteadingFilterInput
  $owner: String
) {
  onDeleteSteading(filter: $filter, owner: $owner) {
    userId
    id
    type
    name
    description
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSteadingSubscriptionVariables,
  APITypes.OnDeleteSteadingSubscription
>;
export const onCreateMap = /* GraphQL */ `subscription OnCreateMap(
  $filter: ModelSubscriptionMapFilterInput
  $owner: String
) {
  onCreateMap(filter: $filter, owner: $owner) {
    userId
    id
    name
    mapFile
    locations
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMapSubscriptionVariables,
  APITypes.OnCreateMapSubscription
>;
export const onUpdateMap = /* GraphQL */ `subscription OnUpdateMap(
  $filter: ModelSubscriptionMapFilterInput
  $owner: String
) {
  onUpdateMap(filter: $filter, owner: $owner) {
    userId
    id
    name
    mapFile
    locations
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMapSubscriptionVariables,
  APITypes.OnUpdateMapSubscription
>;
export const onDeleteMap = /* GraphQL */ `subscription OnDeleteMap(
  $filter: ModelSubscriptionMapFilterInput
  $owner: String
) {
  onDeleteMap(filter: $filter, owner: $owner) {
    userId
    id
    name
    mapFile
    locations
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMapSubscriptionVariables,
  APITypes.OnDeleteMapSubscription
>;
export const onCreateCampaign = /* GraphQL */ `subscription OnCreateCampaign(
  $filter: ModelSubscriptionCampaignFilterInput
  $owner: String
) {
  onCreateCampaign(filter: $filter, owner: $owner) {
    userId
    id
    name
    description
    characterIds
    frontIds
    mapIds
    steadingIds
    sessions {
      id
      title
      date
      notes
      __typename
    }
    gm_notes
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCampaignSubscriptionVariables,
  APITypes.OnCreateCampaignSubscription
>;
export const onUpdateCampaign = /* GraphQL */ `subscription OnUpdateCampaign(
  $filter: ModelSubscriptionCampaignFilterInput
  $owner: String
) {
  onUpdateCampaign(filter: $filter, owner: $owner) {
    userId
    id
    name
    description
    characterIds
    frontIds
    mapIds
    steadingIds
    sessions {
      id
      title
      date
      notes
      __typename
    }
    gm_notes
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCampaignSubscriptionVariables,
  APITypes.OnUpdateCampaignSubscription
>;
export const onDeleteCampaign = /* GraphQL */ `subscription OnDeleteCampaign(
  $filter: ModelSubscriptionCampaignFilterInput
  $owner: String
) {
  onDeleteCampaign(filter: $filter, owner: $owner) {
    userId
    id
    name
    description
    characterIds
    frontIds
    mapIds
    steadingIds
    sessions {
      id
      title
      date
      notes
      __typename
    }
    gm_notes
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCampaignSubscriptionVariables,
  APITypes.OnDeleteCampaignSubscription
>;
