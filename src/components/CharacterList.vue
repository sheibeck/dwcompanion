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

        <div class="h3">Bard Moves</div>
        <div v-for="move in moveList">
            <div class="h5">
                {{ move.name }}
            </div>
            <VueShowdown
                :markdown="move.description"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';
import { getCharactersWithProfessions, getMovesByProfession } from '@/services/characterService';
import { Profession } from '@/enums/profession';
import { VueShowdown } from 'vue-showdown';

const globalStore = useGlobalStore();

const characterList = ref<any>([]);
const moveList = ref<any>([]);
const hasCharacters = computed(() => characterList.value?.length > 0);

onMounted(async () => {
    characterList.value = await getCharactersWithProfessions(globalStore.getUserId);
    moveList.value = await getMovesByProfession(Profession.BARD);
});
</script>
<style>
</style>