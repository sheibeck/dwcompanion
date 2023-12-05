<template>
<div id="abilities">
    <!-- score -->
    <div v-for="ability in character.abilityScores" class="container-fluid mb-3">
        <div class="border border-dark fs-5 p-1">{{ ability.name }}</div>
        <div class="input-group input-group-lg bg-dark text-light">
            <span class="attr-label text-dark" id="level">{{ ability.shortName }}</span>
            <input type="text" class="form-control fs-4 text-center attr-circle">
            <div class="d-flex justify-content-end d-flex   flex-fill" id="level">
                <span class="form-check debility">
                    <input class="" type="checkbox" v-model="ability.debility"
                        :id="`${ability.name}-debility`">
                    <label class="" :for="`${ability.name}-debility`">
                        {{ ability.debility }} ({{ ability.debilityPenalty }})
                    </label>
                </span>
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">

const { character } = defineProps<{
    character: any;
}>();
</script>

<style scoped lang="scss">
#abilities {
    display: grid;
    grid-template-columns: 50% 50%;

    .attr-circle {
        border-radius: 25px;
        width: 60px;
        max-width: 60px;
        min-width: 60px;
    }

    .attr-label {
        background-color: transparent;
        position: absolute;
        font-size: 12px;
        z-index: 1;
        font-weight: 700;
        text-align: center;
        width: 60px;
        max-width: 60px;
        min-width: 60px;
    }
}

@media(min-width: 800px) { 
    #abilities {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
}
</style>