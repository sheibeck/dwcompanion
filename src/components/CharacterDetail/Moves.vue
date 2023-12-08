<template>
    <div class="container-fluid mb-2 moves">
        <div class="bg-dark text-light fs-5 ps-1 mb-1">{{ getLabel }}</div>
        <div class="items">
            <div v-for="(move, index) in getMoves" :index="move.id" class="card m-1" :class="{'compact': index > 0}">
                <div class="card-body p-0">
                    <h5 class="card-title"><input type="checkbox" class="form-check-input" v-model="move.selected" /> {{ move.name }}</h5>
                    <div class="card-text">
                        <EditableDescription :item="move.description" @save-item="(data) => move.description = data" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { MoveType } from '@/enums/moveType';
import { getMovesByProfession } from '@/services/lookupTableService';
import { computed } from 'vue';
import  EditableDescription from '@/components/CharacterDetail/EditableDescription.vue';


const { character, moveType } = defineProps<{
    character: any;
    moveType: MoveType;
}>();

const getLabel = computed(() => "Starting Moves");
const getMoves = computed(() => character.startingMoves);

async function initialize() {
    const moves = await getMovesByProfession(character.profession.name);
    switch(moveType) {
        case MoveType.STARTING_MOVES:
            if (!character.startingMoves || character.startingMoves.length === 0)
                character.startingMoves = moves.filter( m => m.isStartingMove == true);
                character.startingMoves.forEach( (move: any) => {
                    move.selected = move.selectedOnNew;
                });
            break;
        case MoveType.TWO_TO_TEN:
            if (!character.advancedMovesTwoToTen || character.advancedMovesTwoToTen.length === 0)
                character.advancedMovesTwoToTen = moves.filter( m => m.isTwoToTenMove == true);
            break;
        case MoveType.TWO_TO_TEN:
            if (!character.advancedMovesSixToTen || character.advancedMovesSixToTen.length === 0)
                character.advancedMovesSixToTen = moves.filter( m => m.isSixToTenMove == true);
        break;
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