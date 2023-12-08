<template>
    <div class="container-fluid mb-2">
        <div class="bg-dark text-light fs-5 ps-1">Bonds</div>
        <div v-for="(bond, index) in character.bonds" :key="bond.id" class="item" :class="{'compact': index > 0}">
            <div class="input-group input-group-sm">
                <input type="text" class="form-control" v-model="bond.value" />
            </div>
            <EditableDescription :item="bond.description"  @save-item="(data) => bond.description = data" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import  EditableDescription from '@/components/CharacterDetail/EditableDescription.vue';
import { getBondsByProfession } from '@/services/lookupTableService';

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

    .item {
        line-height: .9em;

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