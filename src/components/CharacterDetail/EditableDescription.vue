<template>
    <div v-if="!isEditing" class="d-flex">
        <VueShowdown :markdown="item" class="description" />
        <button class="btn btn-link d-print-none" type="button" @click="isEditing = true">
            <img src="@/assets/pencil-solid.svg" alt="edit description"/>
        </button>
    </div>

    <div v-if="isEditing" class="d-flex d-print-none">
        <textarea type="text" class="form-control from-control-sm" ref="description" :value="item"></textarea>

        <button class="btn btn-link" type="button" @click="saveEdit()">
            <img src="@/assets/floppy-disk-solid.svg" alt="save description"/>
        </button>
        <button class="btn btn-link" type="button" @click="isEditing = false">
            <img src="@/assets/ban-solid.svg" alt="cancel edit description"/>
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref, } from 'vue';
import { VueShowdown } from 'vue-showdown';

const emit = defineEmits(['saveItem'])

const isEditing = ref(false);
const description = ref<HTMLTextAreaElement|null>(null);

const { item } = defineProps<{
    item: any
}>();

function saveEdit() {
    if (description.value) {
        emit('saveItem', description.value.value);
    }

    isEditing.value = false;
}


</script>

<style scoped lang="scss">

    button {
        padding: 0;
        padding-left: 2px;
        margin-top: -15px;
    }
</style>