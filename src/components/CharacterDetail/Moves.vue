<template>
    <div class="p-1 mb-2 moves">
        <div class="bg-dark text-light fs-5 ps-1 mb-1 d-flex">{{ movesLabel }} <AddItem v-if="addItemType" :character="character" :item-type="addItemType" /></div>
        <div class="items">
            <div v-for="(move, index) in moves" :index="move.id" class="card m-1" :class="{'compact': index > 0}">
                <div class="card-body p-0">
                    <h5 class="card-title pb-0 mb-0"><input type="checkbox" class="form-check-input" v-model="move.selected" /> {{ move.name }}</h5>
                    <div class="card-text form-text">
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
import { onMounted, ref } from 'vue';
import EditableDescription from '@/components/CharacterDetail/EditableDescription.vue';
import AddItem from '@/components/CharacterDetail/AddItem.vue';


const { character, moveType } = defineProps<{
    character: any;
    moveType: MoveType;
}>();

const allMoves = ref<any>();
const moves = ref<any>();
const movesLabel = ref("");
const addItemType = ref<String|null>(null);

function getMovesByType(): any { 
    switch(moveType) {
        case MoveType.STARTING_MOVES:
            if (!character.startingMoves || character.startingMoves.length === 0) {
                character.startingMoves = allMoves.value.filter( (m: any) => m.isStartingMove == true);
                character.startingMoves.forEach( (move: any) => {
                    move.selected = move.selectedOnNew;
                });
            }
            moves.value = character.startingMoves;
            movesLabel.value = "Starting Moves";
            addItemType.value = null;
            break;
        case MoveType.TWO_TO_TEN:
            if (!character.advancedMovesTwoToTen || character.advancedMovesTwoToTen.length === 0) {
                character.advancedMovesTwoToTen = allMoves.value.filter( (m: any) => m.isTwoToTenMove == true);
            }
            moves.value = character.advancedMovesTwoToTen;
            movesLabel.value = "Advanced Moves - Levels 2 to 10";
            addItemType.value = "TwoTenMove";
            break;
        case MoveType.SIX_TO_TEN:
            if (!character.advancedMovesSixToTen || character.advancedMovesSixToTen.length === 0) {
                character.advancedMovesSixToTen = allMoves.value.filter( (m: any) => m.isSixToTenMove == true);
            }
            moves.value = character.advancedMovesSixToTen;
            movesLabel.value = "Advanced Moves - Levels 6 to 10";
            addItemType.value = "SixTenMove";
        break;
    }
}

async function initialize() {
    allMoves.value = await getMovesByProfession(character.profession.name);
    getMovesByType();
}

onMounted(async () => {
    await initialize();
});

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
            font-size: .9em;
            line-height: 1.1em;
        }
    }
}

</style>