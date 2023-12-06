<template>
    <div class="container-fluid mb-3 look">
        <div class="bg-dark text-light fs-5 p-1 mb-1">{{ getLabel }}</div>
            <div v-for="(move, index) in getMoves" :index="move.id" class="item d-flex" :class="{'compact': index > 0}">
                <div>
                    <input type="checkbox" v-model="move.selected" />
                </div>
                <div>
                    <div class="fs-5">{{ move.name }}</div>
                    <div v-if="!isEditing" class="d-flex">
                        <VueShowdown :markdown="move.description" class="description" />
                        <button class="btn btn-link d-print-none" type="button" @click="isEditing=true">
                            <img src="@/assets/pencil-solid.svg" alt="edit description"/>
                        </button>
                    </div>
                    
                    <div v-if="isEditing" class="d-flex d-print-none">
                        <textarea type="text" class="form-control from-control-sm" v-model="move.description"></textarea>

                        <button class="btn btn-link" type="button" @click="isEditing=false">
                            <img src="@/assets/floppy-disk-solid.svg" alt="save description"/>
                        </button>
                        <button class="btn btn-link" type="button" @click="isEditing=false">
                            <img src="@/assets/ban-solid.svg" alt="cancel edit description"/>
                        </button>
                    </div>
                </div>
            </div>
    </div>
</template>

<script setup lang="ts">
import type { MoveType } from '@/enums/moveType';
import { getMovesByProfession } from '@/services/lookupTableService';
import { computed, ref } from 'vue';


const { character } = defineProps<{
    character: any;
    moveType: MoveType;
}>();

const isEditing = ref(false);

const getLabel = computed(() => "Starting Moves");
const getMoves = computed(() => character.startingMoves);

async function initialize() {
    if (!character.startingMoves || character.startingMoves.length === 0) {
        const startingMoves = await getMovesByProfession(character.profession.name);
        character.startingMoves = startingMoves;
    }
}

initialize();

</script>


<style scoped lang="scss">
.look {
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
                margin-top: -3px !important;
                padding: 0px !important;
            }

            .description {
                margin-top: -3px;
            }
        }
    }
}

</style>