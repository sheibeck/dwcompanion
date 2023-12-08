<template>
    <div class="container-fluid mb-2 moves">
        <div class="bg-dark text-light fs-5 p-1 mb-1">{{ getLabel }}</div>
        <div class="items">
            <div v-for="(move, index) in getMoves" :index="move.id" class="card m-1" :class="{'compact': index > 0}">
                <div class="card-body p-0">
                    <h5 class="card-title"><input type="checkbox" class="form-check-input" v-model="move.selected" /> {{ move.name }}</h5>
                    <div class="card-text">
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
        </div>
    </div>
</template>

<script setup lang="ts">
import type { MoveType } from '@/enums/moveType';
import { getMovesByProfession } from '@/services/lookupTableService';
import { computed, ref } from 'vue';
import { VueShowdown } from 'vue-showdown';


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

ol, ul, dl, p {
    margin-bottom: 0px !important;
}

.moves {
    .items {
        display:grid;
        grid-template-columns: 1fr;

        .card {
            border: 0;
            
            .card-text {
                line-height: 1em;

                .description {
                    p {
                        margin-bottom: 5px !important;
                    }
                }
            }

            .form-check-input {
                width: 20px;
                height: 20px;
            }
        }
    }

    @media(min-width: 800px) {
        .items {
            grid-template-columns: repeat(2, 1fr);
        }
    }
}

@media print {
    .moves {   
        .card-text {
            font-size: .75em;
        }
    }
}

</style>