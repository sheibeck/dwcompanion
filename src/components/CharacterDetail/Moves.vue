<template>
    <div class="p-1 mb-2 moves">
        <div class="bg-dark text-light fs-5 ps-1 mb-1 d-flex">{{ movesLabel }} <AddItem v-if="addItemType" :character="character" :item-type="addItemType" /></div>
        <div class="items">
            <div v-for="(move, index) in getMoveList" :index="move.id" class="card m-1" :class="{'compact': index > 0}">
                <div class="card-body p-0">
                    <h5 class="card-title pb-0 mb-0">
                        <input type="checkbox" class="form-check-input" v-model="move.selected" /> 
                        <EditableDescription :item="move.name" :item-id="move.id" edit-rows="10"
                            @save-item="(data) => move.name = data"
                            @delete-item="(id) => deleteItem(id)"
                        />
                    </h5>
                    <div class="card-text form-text">
                        <EditableDescription :item="move.description" :hide-delete="true" :item-id="move.id" edit-rows="10"
                            @save-item="(data) => move.description = data"
                            @delete-item="(id) => deleteItem(id)"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { MoveType } from '@/enums/moveType';
import { getMovesByProfession } from '@/services/lookupTableService';
import { computed, onMounted, ref } from 'vue';
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

function deleteItem(id: String): any { 
    switch(moveType) {
        case MoveType.STARTING_MOVES:
            character.startingMoves?.splice(character.startingMoves?.findIndex( (i : any) => i.id == id), 1)
            break;
        case MoveType.TWO_TO_TEN:
            character.advancedMovesTwoToTen?.splice(character.advancedMovesTwoToTen?.findIndex( (i : any) => i.id == id), 1)
            break;
        case MoveType.SIX_TO_TEN:
            character.advancedMovesSixToTen?.splice(character.advancedMovesSixToTen?.findIndex( (i : any) => i.id == id), 1)
            break;
    }
}

const getMoveList = computed(() =>{ 
    switch(moveType) {
        case MoveType.STARTING_MOVES:
            return character.startingMoves;
            break;

        case MoveType.TWO_TO_TEN:
            return character.advancedMovesTwoToTen;
            break;

        case MoveType.SIX_TO_TEN:
            return character.advancedMovesSixToTen;
        break;
    }
})

function getMovesByType(): any { 
    switch(moveType) {
        case MoveType.STARTING_MOVES:
            if (!character.startingMoves || character.startingMoves.length === 0) {
                const moves = allMoves.value.filter( (m: any) => m.isStartingMove == true);
                if (moves.length > 0) {
                    character.startingMoves = [];

                    moves.forEach((move: any) => {
                        move.selected = move.selectedOnNew;
                        character.startingMoves.push(moves);
                    });
                }
            }

            movesLabel.value = "Starting Moves";
            addItemType.value = "StartingMoves";
            break;
        case MoveType.TWO_TO_TEN:
            if (!character.advancedMovesTwoToTen || character.advancedMovesTwoToTen.length === 0) {
                const moves = allMoves.value.filter( (m: any) => m.isTwoToTenMove == true);
                if (moves.length > 0) {
                    character.advancedMovesTwoToTen = [];
                    moves.forEach((move: any) => {
                        character.advancedMovesTwoToTen.push(moves);
                    });
                }
            }
 
            movesLabel.value = "Advanced Moves - Levels 2 to 10";
            addItemType.value = "TwoTenMove";
            break;
        case MoveType.SIX_TO_TEN:
            if (!character.advancedMovesSixToTen || character.advancedMovesSixToTen.length === 0) {
                const moves = allMoves.value.filter( (m: any) => m.isSixToTenMove == true);
                if (moves.length > 0) {
                    character.advancedMovesSixToTen = [];
                    moves.forEach((move: any) => {
                        character.advancedMovesSixToTen.push(moves);
                    });
                }
            }

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