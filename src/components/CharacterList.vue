<template>
    <div>
        <h1>Characters</h1>

        <div v-if="hasCharacters">
            <div v-for="character in characterList">
                {{ character.name }} ({{ character.profession?.name ?? "Unknown" }}) 
                <button class="btn btn-sm btn-dark" type="button" @click="viewCharacter(character.id)">View</button>
                <button class="btn btn-sm btn-danger" type="button" @click="removeCharacter(character.id)">Delete</button>
            </div>
        </div>

        <a href="/" class="btn btn-secondary">Create a Character</a>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';
import { useRouter } from 'vue-router';
import { getCharactersWithProfessions, deleteCharacter } from '@/services/characterService';
import type { Character } from '@/models';

const globalStore = useGlobalStore();
const router = useRouter();

const characterList = ref<Array<any>>([]);
const hasCharacters = computed(() => characterList.value?.length > 0);
const userId = ref()

onMounted(async () => {
    userId.value = globalStore.currentUser;
    characterList.value = await getCharactersWithProfessions(userId.value);
});

async function viewCharacter(id: string) {
    await router.push({ name: "character", params: { id: id } });
}

async function removeCharacter(id: string) {
    const confirmed = confirm("Are you sure you want to delete this character?");

    if (confirmed) {
        await deleteCharacter(id);

        const objectToRemove = characterList.value.find( (c: any) => c.id === id);
        const idx = characterList.value.indexOf(objectToRemove);
        characterList.value.splice(idx, 1);
    }
}
</script>

<style>
</style>