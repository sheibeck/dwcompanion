<template>
<div id="abilities" class="container-fluid">
    <!-- score -->
    <div v-for="ability in character.abilityScores" class="mb-2 ability">
        <div class="border border-dark fs-5 p-1">{{ ability.name }}</div>
        <div class="input-group input-group-lg bg-dark text-light">
            <span class="attr-label text-dark">{{ ability.shortName }}</span>
            <input type="text" class="form-control fs-4 text-center attr-circle">
            <div class="d-flex justify-content-end d-flex flex-fill debility">
                <span class="form-check">
                    <input class="" type="checkbox" v-model="ability.debilitySelected"
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

    .ability {
        margin: 2px;

        .debility {
            .form-check {
                padding-left: 0px;
            }

            label {
                font-size: .88em;
            }
        }
    }

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

@media print {
    .debility {
        
        label {
            font-size: .88em;
        }
    }
}

@media(min-width: 800px) { 
    #abilities {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

            
        .ability {
            
        }

    }
}
</style>