<template>
    <div class="editor">
        <div v-if="!isEditing" class="d-flex edit-controls open">
            <VueShowdown :markdown="item" class="description" />
            <div class="edit-controls closed d-flex mt-0">
                <button class="btn btn-link d-print-none" type="button" @click="isEditing = true">
                    <img src="@/assets/pencil-solid.svg" alt="edit description"/>
                </button>
            </div>
        </div>

        <div v-if="isEditing" class="d-flex d-print-none edit-controls open">
            <textarea type="text" class="form-control from-control-sm" ref="description" :rows="editRows ?? 3" :value="item"></textarea>

            <div class="edit-controls d-flex">
                <button class="btn btn-link" type="button" @click="saveEdit()">
                    <img src="@/assets/floppy-disk-solid.svg" alt="save description"/>
                </button>
                <button class="btn btn-link" type="button" @click="isEditing = false">
                    <img src="@/assets/ban-solid.svg" alt="cancel edit description"/>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, } from 'vue';
import { VueShowdown } from 'vue-showdown';

const emit = defineEmits(['saveItem'])

const isEditing = ref(false);
const description = ref<HTMLTextAreaElement|null>(null);

const { item, editRows } = defineProps<{
    item: any,
    editRows?: any
}>();

function saveEdit() {
    if (description.value) {
        emit('saveItem', description.value.value);
    }

    isEditing.value = false;
}

</script>

<style scoped lang="scss">

    .editor {
        display: grid;
        

        .edit-controls {
            align-self: start;
        }

        button {
            padding: 0;
            padding-left: 5px;
            margin-top: -7px;
        }
    }
</style>