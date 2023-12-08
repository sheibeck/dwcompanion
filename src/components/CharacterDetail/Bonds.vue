<template>
    <div class="p-1 mt-0 mb-2">
        <div class="bg-dark text-light fs-5 ps-1">Bonds</div>
        <div v-for="(bond, index) in character.bonds" :key="bond.id" class="item" :class="{'compact': index > 0}">
            <div class="input-group input-group-sm">
                <input type="text" class="form-control" v-model="bond.value" />
            </div>
            <div class="form-text">
                <EditableDescription :item="bond.description"  @save-item="(data) => bond.description = data" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
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
            font-size: .9em !important;
        }
    }
</style>