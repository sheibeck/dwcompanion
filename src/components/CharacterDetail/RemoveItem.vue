<template>
    <div class="editor d-print-none">
        <button class="btn btn-link" type="button" @click="removeItem()">
            <img src="@/assets/trash-solid.svg" alt="add new item"/>
        </button>
    </div>
</template>

<script setup lang="ts">

const { character, itemType, itemId} = defineProps<{
    character: any,
    itemType: String,
    itemId: String
}>();


function removeItem() {
    if (!confirm("Are you sure you want to delete this item?")) {
        return;
    }

    switch(itemType) {
        case "Bond":
            {
                const idx = character.bonds?.findIndex( (i : any) => i.id == itemId);
                if (idx >= 0) {
                    character.bonds.splice(idx, 1);
                }
            }
            break;
        case "Alignment":
            {
                const idx = character.alignment?.findIndex( (i : any) => i.id == itemId);
                if (idx >= 0) {
                    character.alignment.splice(idx, 1);
                }
            }
            break;
        case "Race":
            {
                const idx = character.race?.findIndex( (i : any) => i.id == itemId);
                if (idx >= 0) {
                    character.race.splice(idx, 1);
                }
            }
            break;
        case "Look":
            {
                const idx = character.look?.findIndex( (i : any) => i.id == itemId);
                if (idx >= 0) {
                    character.look.splice(idx, 1);
                }
            }
            break;
        case "Gear":
            {
                const idx = character.gear?.findIndex( (i : any) => i.id == itemId);
                if (idx >= 0) {
                    character.gear.splice(idx, 1);
                }
            }
            break;
        case "TwoTenMove":
            {
                const idx = character.advancedMovesTwoToTen?.findIndex( (i : any) => i.id == itemId);
                if (idx >= 0) {
                    character.advancedMovesTwoToTen.splice(idx, 1);
                }
            }
            break;
        case "SixTenMove":
            {
                const idx = character.advancedMovesSixToTen?.findIndex( (i : any) => i.id == itemId);
                if (idx >= 0) {
                    character.advancedMovesSixToTen.splice(idx, 1);
                }
            }   
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