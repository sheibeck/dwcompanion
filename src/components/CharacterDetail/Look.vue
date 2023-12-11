<template>
    <div class="p-1 mb-2 look flex-fill">
        <div class="bg-dark text-light fs-5 p-1 mb-1 d-flex">Look <AddItem :character="character" item-type="Look" /></div>
            <div v-for="(look, index) in character.look" :index="look.id" class="item" :class="{'compact': index > 0}">
            <div class="input-group input-group-sm">
                <span class="me-1 mt-2 fs-6 name">
                    <EditableDescription :item="look.name" :item-id="look.id" 
                            @save-item="(data) => look.name = data"
                            @delete-item="(id) => character.look.splice(character.look?.findIndex( (i : any) => i.id == id), 1)"
                        />
                </span>
                <input type="text" class="form-control" v-model="look.value">
            </div>
            <div class="form-text">
                <EditableDescription  :item-id="look.id" :item="look.description" @save-item="(data) => look.description = data" hide-delete=true />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getLooksByProfession } from '@/services/lookupTableService';
import AddItem from '@/components/CharacterDetail/AddItem.vue';
import EditableDescription from '@/components/CharacterDetail/EditableDescription.vue';

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
   
    .item {
        line-height: .5em;
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
            &.compact {
                padding: 0px !important;
                line-height: .75em;
            }

            .description {
                margin-top: 0px;
            }
        }
    }
}

</style>