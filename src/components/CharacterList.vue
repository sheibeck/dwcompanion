<template>
    <div>
        <!-- Your page content goes here -->
        <h1>Characters</h1>

        <div v-if="hasCharacters">
            <div v-for="character in characterList">
                {{ character.Character.name }} {{ character.Profession.name }}
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
const hasCharacters = computed(() => characterList.value?.length > 0);

onMounted(async () => {
    const items = await getCharactersWithProfessions(globalStore.getUserId);
    characterList.value = items;
});

</script>