<template>
    <div id="identity" class="container-fluid">
        <div class="input-group mb-3 pe-md-2">
            <span class="input-group-text" id="name">Name</span>
            <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="name"
                v-model="character.name">
        </div>
        <div class="input-group mb-3 pe-md-2">
            <span class="input-group-text" id="level">Level</span>
            <input type="text" class="form-control" placeholder="Level" aria-label="Level"
                aria-describedby="level" v-model="character.level">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="xp">XP</span>
            <input type="text" class="form-control" placeholder="XP" aria-label="XP" aria-describedby="xp"
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
    }

    @media(min-width: 800px) {
        #identity {
            display: grid;
            grid-template-columns: auto 150px 200px;
        }
    }
</style>