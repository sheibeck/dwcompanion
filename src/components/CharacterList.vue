<template>
    <div>
        <div class="d-flex">
            <h1>Characters</h1>
            <div>
                <a href="/" class="btn btn-secondary ms-2"><img src="@/assets/plus-solid.svg" alt="create a character"/> Create a Character</a>
            </div>
        </div>
        <div class="d-md-flex">
            <div v-for="character in characterList" class="card m-2">
                <div class="card-body">
                    <h5 class="card-title">{{ character.name }}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">{{ character.profession?.name ?? "Unknown" }}</h6>
                    <button class="btn btn-sm btn-secondary me-3" type="button" @click="viewCharacter(character.id)">View</button>
                    <button class="btn btn-sm btn-danger" type="button" @click="removeCharacter(character.id)">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';
import { useRouter } from 'vue-router';
import { getCharactersWithProfessions, deleteCharacter } from '@/services/characterService';
import { toast } from 'vue3-toastify';

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

    const authenticated = await globalStore.isAuthenticated();

    if (authenticated && confirmed) {
        await deleteCharacter(id);

        const characterToDelete = characterList.value.find( (c: any) => c.id === id);
        const idx = characterList.value.findIndex( c => characterToDelete.id === id);
        characterList.value.splice(idx, 1);

        toast(`Deleted character ${characterToDelete.name}`);
    }
}
</script>

<style scoped lang="scss">
</style>