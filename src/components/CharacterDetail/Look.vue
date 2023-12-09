<template>
    <div class="p-1 mb-2 look">
        <div class="bg-dark text-light fs-5 p-1 mb-1 d-flex">Look <AddItem :character="character" item-type="Look" /></div>
            <div v-for="(look, index) in character.look" :index="look.id" class="item" :class="{'compact': index > 0}">
            <div class="input-group input-group-sm">
                <span class="input-group-text fs-6 name">{{ look.name }}</span>
                <input type="text" class="form-control" v-model="look.value">
            </div>
            <div class="form-text text-end description">{{ look.description }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getLooksByProfession } from '@/services/lookupTableService';
import AddItem from '@/components/CharacterDetail/AddItem.vue';

const { character } = defineProps<{
    character: any;
}>();

async function initialize() {
    if (!character.look || character.look.length === 0) {
        const result = await getLooksByProfession(character.profession.name);
        character.look = result;
    }
}

initialize();

</script>


<style scoped lang="scss">
.look {
   

    .description {
        line-height: .9em;
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
}

@media print {
    .look {
        .item {
            .name {
                font-size: .9em !important;
            }

            &.compact {
                padding: 0px !important;
            }

            .description {
                margin-top: 0px;
            }
        }
    }
}

</style>