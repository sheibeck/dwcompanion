<template>
    <div>
        <h1>Characters</h1>

        <div v-if="hasCharacters">
            <div v-for="character in characterList">
                {{ character.name }} ({{ character.profession?.name ?? "Unknown" }}) <button class="btn btn-sm btn-primary" type="button" @click="viewCharacter(character.id)">View</button>
            </div>
        </div>

        <a href="/home" class="btn btn-secondary">Create a Character</a>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';
import { useRouter } from 'vue-router';
import { getCharactersWithProfessions } from '@/services/characterService';

const globalStore = useGlobalStore();
const router = useRouter();

const characterList = ref<any>([]);
const hasCharacters = computed(() => characterList.value?.length > 0);
const userId = ref()

onMounted(async () => {
    userId.value = await globalStore.userId;
    characterList.value = await getCharactersWithProfessions(userId.value);
});

function viewCharacter(id: string) {
    router.push({ name: "character", params: { id: id } });
}
</script>

<style>
</style>