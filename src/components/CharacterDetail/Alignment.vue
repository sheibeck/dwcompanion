<template>
    <div class="container-fluid alignment">
        <div class="bg-dark text-light fs-5 p-1">Alignment</div>
        <div v-for="(alignment, index) in character.alignment" :key="alignment.id" class="input-group input-group-lg item" :class="{'compact': index > 0}">
            <div class="input-group-text">
                <input class="form-check-input mt-0" type="checkbox" v-model="alignment.selected"
                    :aria-label="`Alignment checkbox for ${alignment.name}`">
            </div>
            <div class="form-text p-1">
                <div class="fs-5">{{ alignment.name }}</div>
                <div class="form-text description">{{ alignment.description }}</div>
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
 .alignment {
    div {
        margin: 0px;
    }

    .input-group {
        flex-wrap: nowrap;

        .input-group-text {
            background-color: unset;
            border: unset;
        }
    }
}

@media print {
   .alignment {

        .item {
            &.compact {
                margin-top: -12px !important;
                padding: 0px !important;
            }
            
            .form-text {
                margin-top: -2px !important;
            }
    
            .input-group-text {
                margin: 0px;
                padding-bottom: 0px;
                padding-top: 0px;
                padding-left: 2px;

                .form-check-input {
                    height: 20px;
                    width: 20px;
                }
            }
        }


        .name {
            font-size: .9em !important;
        }

        &.compact {
            margin-top: -5px !important;
            padding: 0px !important;
        }

        .description {
            padding: 0px;
            margin: 0px;
        }
    }
}

</style>