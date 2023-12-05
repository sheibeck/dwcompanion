<template>
    <div class="container-fluid  mb-3">
        <div class="input-group mb-1">
            <span class="input-group-text w-75 fs-5" id="level">Armor</span>
            <input type="text" class="form-control fs-5 text-center" v-model="character.armor">
        </div>

        <div class="input-group">
            <span class="input-group-text w-50 fs-5" id="level">Hit Points</span>
            <input type="text" class="form-control fs-5 text-center" aria-describedby="hitpoint-description"
                v-model="character.hitPointsMax">
            <input type="text" class="form-control fs-5 text-center" aria-describedby="hitpoint-description"
                v-model="character.hitPointsCurrent">
        </div>
        <div class="form-text text-end mb-1" id="hitpoint-description">Max (8 + Constitution) / Current</div>

        <div class="input-group">
            <span class="input-group-text w-75 fs-5" id="level">Damage</span>
            <input type="text" class="form-control fs-5 text-center">
        </div>
    </div>
</template>

<script setup lang="ts">

const { character } = defineProps<{
    character: any;
}>();
</script>

<style scoped lang="scss">
</style>