<template>
    <div class="container-fluid mb-3">
        <div class="bg-dark text-light fs-5 p-1">Bonds</div>
        <div>
            <div class="input-group input-group-sm">
                <input type="text" class="form-control" id="basic-url" value=""
                    aria-describedby="bond-description-1">
            </div>
            <div class="form-text" id="bond-description-1">____ is puny and foolish, but amusing to me.
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
    .container-fluid {
        margin-top: 0px !important;
    }
</style>