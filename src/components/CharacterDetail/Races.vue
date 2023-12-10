<template>
    <div class="p-1 blood">
        <div class="bg-dark text-light fs-5 p-1 d-flex">Blood  <AddItem :character="character" item-type="Race" /></div>
        <div v-for="(race, index) in character.race" :key="race.id" class="input-group input-group-lg item" :class="{'compact': index > 0}">
            <div class="input-group-text">
                <input class="form-check-input mt-0 p-0" type="checkbox" v-model="race.selected"
                    :aria-label="`Blood checkbox for ${race.name}`">
            </div>
            <div class="form-text p-1">
                <div class="fs-5 p-0 m-0 name text-dark">
                    <EditableDescription :item="race.name" :item-id="race.id"
                        @save-item="(data) => race.name = data"
                        @delete-item="(id) => character.race.splice(character.race?.indexOf( (i : any) => i.id == id), 1)"
                    />
                </div>
                <EditableDescription :item-id="race.id" :item="race.description" @save-item="(data) => race.description = data" hide-delete=true edit-rows="3" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getRaceByProfession } from '@/services/lookupTableService';
import EditableDescription from '@/components/CharacterDetail/EditableDescription.vue';
import AddItem from '@/components/CharacterDetail/AddItem.vue';

const { character } = defineProps<{
    character: any;
}>();

async function initialize() {
    if (!character.race || character.race.length === 0) {
        const result = await getRaceByProfession(character.profession.name);
        character.race = result;
    }
}

initialize();
</script>

<style scoped lang="scss">
 .blood {
    line-height: .9em;
    
    .name {
        margin-bottom: -5px !important;
    }

    .description {
      p {
        margin-bottom: 0px !important;
      }
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
   .blood {
    
        .item {
            &.compact {
                margin-top: -12px !important;
                padding: 0px !important;
            }
            
            .form-text {
                margin-top: -2px !important;
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


        .description {
            font-size: .9em !important;
            line-height: .95em !important;
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