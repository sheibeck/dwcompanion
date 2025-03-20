<template>
    <div class="">
        <div class="input-group">
            <span class="input-group-text w-50 fs-5 bg-dark text-light label d-flex">Gear <AddItem :character="character" item-type="Gear" /></span>
            <input type="number" min="0" class="pe-0 form-control fs-5 text-center" aria-describedby="gear-description"
                :value="character.loadMax">
            <input type="number" min="0" class="pe-0 form-control fs-5 text-center" aria-describedby="gear-description"
                v-model="character.loadCurrent">
        </div>
        <div class="form-text text-end mb-2 label" id="gear-description">Max Load ({{character.profession.loadBonus}}+ STR) / Current</div>
        <div v-for="(gear, index) in character.gear" class="form-text gear">
            <EditableDescription :item="gear.description" :item-id="gear.id"
                @save-item="(data) => gear.description = data" :editRows="20" 
                @delete-item="(id) => character.gear.splice(character.gear.findIndex( (i : any) => i.id == id), 1)"
            /> 
        </div>
    </div>
</template>

<script setup lang="ts">
import  EditableDescription from '@/components/CharacterDetail/EditableDescription.vue';
import  AddItem from '@/components/CharacterDetail/AddItem.vue';
import { getStartingGearByProfession } from '@/services/lookupTableService';

const { character } = defineProps<{
    character: any;
}>();

async function initialize() {
    if (!character.gear || character.gear.length === 0) {
        const gear = await getStartingGearByProfession(character.profession.name);
        character.gear = gear;
    }
}

initialize();

</script>

<style scoped lang="scss">

    .gear {
        line-height: .9em;
    }
        
    @media print {
        .card-title {
            font-size: 1.1em;

            input {
                height: 10px !important;
                width: 10px !important;
            }
        }
    }
</style>