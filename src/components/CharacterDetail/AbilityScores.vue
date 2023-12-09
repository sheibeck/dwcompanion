<template>
<div class="small d-flex flex-fill justify-content-center">
Assign these scores to your stats: 16(+2), 15(+1), 13(+1), 12(0), 9(0), 8(-1)
</div>
<div id="abilities" class="p-1 d-flex-row">
    <!-- score -->
    <div v-for="ability in character.abilityScores" class="mb-2 ability">
        <div class="border border-dark fs-5 p-1 d-flex justify-content-between">
            <span>{{ ability.name }}</span> <input type="number" min="1" max="18" class="pe-0 form-control form-control text-center ability-value align-self-end" 
                v-model="ability.value" @change="updateBonus(ability)">
        </div>
        <div class="input-group input-group-lg bg-dark text-light">
            <span class="attr-label text-dark">{{ ability.shortName }}</span>
            <input type="text" disabled class="form-control fs-4 text-center attr-circle" v-model="ability.bonus">
            <div class="d-flex justify-content-end d-flex flex-fill debility">
                <span class="form-check">
                    <input class="" type="checkbox" v-model="ability.debilitySelected"
                        :id="`${ability.name}-debility`">
                    <label class="" :for="`${ability.name}-debility`">
                        {{ ability.debility }} ({{ ability.debilityPenalty }})
                    </label>
                </span>
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">

import { getAbilityScores } from '@/services/lookupTableService';
const { character } = defineProps<{
    character: any;
}>();

async function initialize() {
    if (!character.abilityScores || character.abilityScores.length === 0) {
        const result = await getAbilityScores();
        character.abilityScores = result;
    }
}

initialize();

function updateBonus(ability: any) {
    if (ability.value) {
        ability.bonus = getAbilityScoreBonus(ability.value)
    }
}

function getAbilityScoreBonus(abilityScore: number): number {
  if (abilityScore <= 3) {
    return -3;
  } else if (abilityScore >= 4 && abilityScore <= 5) {
    return -2;
  } else if (abilityScore >= 6 && abilityScore <= 8) {
    return -1;
  } else if (abilityScore >= 9 && abilityScore <= 12) {
    return 0;
  } else if (abilityScore >= 13 && abilityScore <= 15) {
    return 1;
  } else if (abilityScore >= 16 && abilityScore <= 17) {
    return 2;
  } else if (abilityScore > 17) {
    return 3;
  } else {
    // Handle invalid ability scores or other cases
    return 0; // You can adjust this default value based on your requirements
  }
}

</script>

<style scoped lang="scss">
#abilities {
    display: grid;
    grid-template-columns: 50% 50%;

    .ability {
        margin: 2px;

        .debility {
            .form-check {
                padding-left: 0px;
            }

            label {
                font-size: .88em;
            }
        }
    }

    .attr-circle {
        border-radius: 25px;
        width: 60px;
        max-width: 60px;
        min-width: 60px;
    }

    .attr-label {
        background-color: transparent;
        position: absolute;
        font-size: 12px;
        z-index: 1;
        font-weight: 700;
        text-align: center;
        width: 60px;
        max-width: 60px;
        min-width: 60px;
    }
}

@media print {
    .debility {
        
        label {
            font-size: .88em;
        }
    }
}

@media(min-width: 800px) { 
    #abilities {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

            
        .ability {
            .ability-value {
                width:60px;
                max-height: 30px;
            }
        }

    }
}
</style>