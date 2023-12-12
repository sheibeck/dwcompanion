<template>
    <div id="identity" class="" data-bs-theme="dark">
        <div class="input-group mb-2 pe-md-2">
            <span class="input-group-text text-dark" id="name">Name</span>
            <input type="text" class="form-control text-dark" aria-label="Name" aria-describedby="name"
                v-model="character.name">
        </div>
        <div class="input-group mb-2 pe-md-2">
            <span class="input-group-text text-dark" id="level">Level</span>
            <input type="text" class="form-control text-dark" aria-label="Level"
                aria-describedby="level" v-model="character.level">
        </div>
        <div class="input-group mb-2">
            <span class="input-group-text text-dark" id="xp">XP</span>
            <input type="text" class="form-control text-dark" aria-label="XP" aria-describedby="xp"
                v-model="character.xp">
        </div>
    </div>
</template>

<script setup lang="ts">
const { character } = defineProps<{
    character: any;
}>();
</script>

<style scoped lang="scss">
    #identity {
        display: flex;
        flex-wrap: wrap;
        .input-group-text {
            background-color: white;
            border-width: 0px;
        }
        .form-control {
            background-color: white;
        }
    }

    @media(min-width: 800px) {
        #identity {
            display: grid;
            grid-template-columns: auto 150px 200px;
        }
    }

    @media print {
        .form-control {
            border-width: 0px;
        }
    }
</style>