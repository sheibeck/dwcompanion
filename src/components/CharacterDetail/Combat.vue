<template>
    <div class="p-1 mb-2">
        <div class="input-group mb-1">
            <span class="input-group-text w-75 fs-5 bg-dark text-light label">Armor</span>
            <input type="number" min="0" class="form-control fs-5 text-center pe-0" v-model="character.armor">
        </div>

        <div class="input-group">
            <span class="input-group-text w-50 fs-5 bg-dark text-light label">Hit Points</span>
            <input type="number" min="0" class="form-control fs-5 text-center pe-0" aria-describedby="hitpoint-description"
                v-model="character.hitPointsMax">
            <input type="number" min="0" class="form-control fs-5 text-center pe-0" aria-describedby="hitpoint-description"
                v-model="character.hitPointsCurrent">
        </div>
        <div class="form-text text-end mb-2 label" id="hitpoint-description">Max Health ({{ character.profession.healthBonus }} + Constitution) / Current</div>

        <div class="input-group">
            <span class="input-group-text w-75 fs-5 bg-dark text-light label">Damage</span>
            <input type="text" class="form-control fs-5 text-center" v-model="character.profession.diceType">
        </div>
    </div>
</template>

<script setup lang="ts">

const { character } = defineProps<{
    character: any;
}>();
</script>

<style scoped lang="scss">
    .label {
        max-height: 30px;
        margin-top: 8px;
        line-height: .7em;
    }

    input {
        border-radius: 25px !important;
        width: 50px;
        height: 50px;
        border-width: 3px;
        border-color: black;
    }
</style>