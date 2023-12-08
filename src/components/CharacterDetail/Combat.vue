<template>
    <div class="container-fluid mb-2">
        <div class="input-group mb-1">
            <span class="input-group-text w-75 fs-5 bg-dark text-light label">Armor</span>
            <input type="text" class="form-control fs-5 text-center" v-model="character.armor">
        </div>

        <div class="input-group">
            <span class="input-group-text w-50 fs-5 bg-dark text-light label">Hit Points</span>
            <input type="text" class="form-control fs-5 text-center" aria-describedby="hitpoint-description"
                v-model="character.hitPointsMax">
            <input type="text" class="form-control fs-5 text-center" aria-describedby="hitpoint-description"
                v-model="character.hitPointsCurrent">
        </div>
        <div class="form-text text-end mb-1 label" id="hitpoint-description">Max (8 + Constitution) / Current</div>

        <div class="input-group">
            <span class="input-group-text w-75 fs-5 bg-dark text-light label">Damage</span>
            <input type="text" disabled class="form-control fs-5 text-center" v-model="character.profession.diceType">
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
    }

    input {
        border-radius: 25px !important;
        width: 50px;
        height: 50px;
        border-width: 3px;
        border-color: black;
    }
</style>