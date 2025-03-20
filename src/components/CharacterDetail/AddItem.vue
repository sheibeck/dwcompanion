<template>
    <div class="editor d-print-none ms-1">
        <button class="btn btn-light pe-1" type="button" @click="addNew()" :title="`Add new ${itemType}`">
            <img src="@/assets/plus-solid.svg" alt="add new item"/>
        </button>
    </div>
</template>

<script setup lang="ts">
import * as uuid from 'short-uuid';

const { character, itemType} = defineProps<{
    character: any,
    itemType: String,
}>();

function addNew() {
    switch(itemType) {
        case "Bond":
            if (!character.bonds) {
                character.bonds = [];
            }
            character.bonds.push({"id": uuid.generate(), "description": "new bond", "value": "", "source": "Custom" });
            break;
        case "Alignment":
            if (!character.alignment) {
                character.alignment = [];
            }
            character.alignment.push({"id": uuid.generate(), "name": "new alignment", "description": "alignment description", "selected": false, "source": "Custom" });
            break;
        case "Race":
            if (!character.race) {
                character.race = [];
            }
            character.race.push({"id": uuid.generate(), "name": "new blood", "description": "new blood description", "selected": false, "source": "Custom" });
            break;
        case "Look":
            if (!character.look) {
                character.look = [];
            }
            character.look.push({"id": uuid.generate(), "name": "new look", "description": "new look options", "value": "", "source": "Custom" });
            break;
        case "Gear":
            if (!character.gear) {
                character.gear = [];
            }
            character.gear.push({"id": uuid.generate(), "description": "new gear", "source": "Custom" });
            break;
        case "StartingMoves":
            if (!character.startingMoves) {
                character.startingMoves = [];
            }
            character.startingMoves.push({"id": uuid.generate(), "name": "new starting move", "description": "new starting move description", "selected": false, "source": "Custom" });
            break;
        case "TwoTenMove":
            if (!character.advancedMovesTwoToTen) {
                character.advancedMovesTwoToTen = [];
            }
            character.advancedMovesTwoToTen.push({"id": uuid.generate(), "name": "new advanced move", "description": "new advanced move description", "selected": false, "source": "Custom" });
            break;
        case "SixTenMove":
            if (!character.advancedMovesSixToTen) {
                character.advancedMovesSixToTen = [];
            }
            character.advancedMovesSixToTen.push({"id": uuid.generate(), "name": "new advanced move", "description": "new advanced move description", "selected": false, "source": "Custom" });
            break;
    }
}


</script>

<style scoped lang="scss">

    .editor {
        display: grid;
        

        .edit-controls {
            align-self: start;
        }

        button {
            padding: 0;
            padding-left: 5px;
            margin-top: -3px;
        }
    }
</style>