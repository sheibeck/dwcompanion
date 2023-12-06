<template>
    <div class="container-fluid mb-3">
        <div class="bg-dark text-light fs-5 p-1">Bonds</div>
        <div v-for="(bond, index) in character.bonds" :key="bond.id" class="item" :class="{'compact': index > 0}">
            <div class="input-group input-group-sm">
                <input type="text" class="form-control" v-model="bond.value" />
            </div>

            <div v-if="!isEditing" class="d-flex">
                <VueShowdown :markdown="bond.description" class="description" />
                <button class="btn btn-link d-print-none" type="button" @click="isEditing=true">
                    <img src="../../assets/pencil-solid.svg" alt="edit description"/>
                </button>
            </div>
            
            <div v-if="isEditing" class="d-flex d-print-none">
                <input type="text" class="form-control from-control-sm" v-model="bond.description" />

                <button class="btn btn-link" type="button" @click="isEditing=false">
                    <img src="../../assets/floppy-disk-solid.svg" alt="save description"/>
                </button>
                <button class="btn btn-link" type="button" @click="isEditing=false">
                    <img src="../../assets/ban-solid.svg" alt="cancel edit description"/>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VueShowdown } from 'vue-showdown';
import { getBondsByProfession } from '@/services/lookupTableService';

const isEditing = ref(false);

const { character } = defineProps<{
    character: any;
}>();

async function initialize() {
    if (!character.bonds || character.bonds.length === 0) {
        const bonds = await getBondsByProfession(character.profession.name);
        character.bonds = bonds;
    }
}

initialize();

</script>

<style scoped lang="scss">
    .container-fluid {
        margin-top: 0px !important;
    }

    
    .input-group {
        flex-wrap: nowrap;

        .input-group-text {
            background-color: unset;
            border: unset;
        }

        input {
            border: unset;
            border-bottom: 1px solid black;
        }
    }
        
    @media print {
        .item {
            &.compact {
                margin-top: -20px;
            }
        }

        .description {
            font-size: .75em !important;
        }
    }
</style>