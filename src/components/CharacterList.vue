<template>
    <div>
        <!-- Your page content goes here -->
        <h1>Characters</h1>

        <div v-if="hasCharacters">
            <div v-for="character in characterList">
                {{ character.name }} ({{ character.profession?.name ?? "Unknown" }})
            </div>
        </div>

        <button type="button" class="btn btn-secondary" @click="">Create a Character</button>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';
import { getCharactersWithProfessions } from '@/services/characterService';

const globalStore = useGlobalStore();

const characterList = ref<any>([]);
const moveList = ref<any>([]);
const hasCharacters = computed(() => characterList.value?.length > 0);

onMounted(async () => {
    const userId = await globalStore.getUserId();
    characterList.value = await getCharactersWithProfessions(userId);
});

</script>
<style>
</style>