<template>
    <div class="alignment">
        <div class="bg-dark text-light fs-5 p-1 d-flex">Alignment <AddItem :character="character" item-type="Alignment" /></div>
        <div v-for="(alignment, index) in character.alignment" :key="alignment.id" class="input-group input-group-lg item" :class="{'compact': index > 0}">
            <div class="input-group-text">
                <input class="form-check-input mt-0" type="checkbox" v-model="alignment.selected"
                    :aria-label="`Alignment checkbox for ${alignment.name}`">
            </div>
            <div class="form-text p-1">
                <div class="fs-5 text-dark">{{ alignment.name }}</div>
                <div class="form-text description">{{ alignment.description }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getAlignmentsByProfession } from '@/services/lookupTableService';
import  AddItem from '@/components/CharacterDetail/AddItem.vue';

const { character } = defineProps<{
    character: any;
}>();

async function initialize() {
    if (!character.alignment || character.alignment.length === 0) {
        const result = await getAlignmentsByProfession(character.profession.name);
        character.alignment = result;
    }
}

initialize();
</script>

<style scoped lang="scss">
 .alignment {
    line-height: 1.25em;

    .description {
        line-height: .9em;
    }
    
    div {
        margin: 0px;
    }

    .input-group {
        flex-wrap: nowrap;

        .input-group-text {
            background-color: unset;
            border: unset;
        }
    }
}

@media print {
   .alignment {
    
        .item {
            &.compact {
                margin-top: -12px !important;
                padding: 0px !important;
            }
            
            .form-text {
                
            }
    
            .input-group-text {
                margin: 0px;
                padding-bottom: 0px;
                padding-top: 0px;
                padding-left: 2px;

                .form-check-input {
                    height: 20px;
                    width: 20px;
                }
            }
        }


        .name {
            //font-size: .9em !important;
        }

        &.compact {
            margin-top: -5px !important;
            padding: 0px !important;
            line-height: 1em;
        }

        .description {
            padding: 0px;
            margin: 0px;
        }
    }
}

</style>