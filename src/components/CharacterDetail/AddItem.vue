<template>
    <div class="editor d-print-none">
        <button class="btn btn-link" type="button" @click="addNew()">
            <img src="@/assets/plus-solid.svg" alt="add new item"/>
        </button>
    </div>
</template>

<script setup lang="ts">

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
            character.bonds.push({"description": "new bond", "value": "", "source": "Custom" });
            break;
        case "Alignment":
            if (!character.alignment) {
                character.alignment = [];
            }
            character.alignment.push({"name": "new alignment", "description": "alignment description", "selected": false, "source": "Custom" });
            break;
        case "Race":
            if (!character.race) {
                character.race = [];
            }
            character.race.push({"name": "new blood", "description": "new blood description", "selected": false, "source": "Custom" });
            break;
        case "Look":
            if (!character.look) {
                character.look = [];
            }
            character.look.push({"name": "new look", "description": "new look options", "value": "", "source": "Custom" });
            break;
        case "Gear":
            if (!character.gear) {
                character.gear = [];
            }
            character.gear.push({"description": "new gear", "source": "Custom" });
            break;
        case "TwoTenMove":
            if (!character.advancedMovesTwoToTen) {
                character.advancedMovesTwoToTen = [];
            }
            character.advancedMovesTwoToTen.push({"name": "new advanced move", "description": "new advanced move description", "selected": false, "source": "Custom" });
            break;
        case "SixTenMove":
            if (!character.advancedMovesSixToTen) {
                character.advancedMovesTwoToTen = [];
            }
            character.advancedMovesSixToTen.push({"name": "new advanced move", "description": "new advanced move description", "selected": false, "source": "Custom" });
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
            margin-top: -7px;
        }
    }
</style>