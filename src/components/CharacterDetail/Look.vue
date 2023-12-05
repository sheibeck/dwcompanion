<template>
    <div class="container-fluid mb-3 look">
        <div class="bg-dark text-light fs-5 p-1 mb-1">Look</div>
            <div v-for="(look, index) in character.look" :index="look.id" class="item" :class="{'compact': index > 0}">
            <div class="input-group input-group-sm">
                <span class="input-group-text fs-5 name" id="basic-addon3">{{ look.name }}</span>
                <input type="text" class="form-control" aria-describedby="basic-addon3 basic-addon4"
                    v-model="look.value">
            </div>
            <div class="form-text text-end" id="basic-addon4">{{ look.description }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">

const { character } = defineProps<{
    character: any;
}>();

</script>


<style scoped lang="scss">
.look {
    .input-group {
        flex-wrap: nowrap;

        .input-group-text {
            background-color: unset;
            border: unset;
        }

        input {
            border: unset;
            border-bottom: 1px solid black;
        }
    }
}

@media print {
    .look {
        .item {
            .name {
                font-size: .9em !important;
            }

            &.compact {
                margin-top: -6px !important;
                padding: 0px !important;
            }
        }
    }
}

</style>