<template>
    <div>
        <div class="d-flex">
            <h1>Characters</h1>
            <div>
                <a href="/" class="btn btn-secondary ms-2"><img src="@/assets/plus-solid.svg" alt="plus icon" class="filter-white" /> Create a Character</a>
            </div>
        </div>
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
            <div v-for="character in characterList" class="col">
                <div class="card">
                    <div class="row g-0 flex-column flex-md-row text-center text-md-start">
                        <!-- Text Section -->
                        <div class="col-12 col-md-8 d-flex flex-column align-items-center align-items-md-start">
                            <div class="card-body w-100">
                                <h5 class="card-title">{{ character.name }}</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">{{ character.profession?.name ?? "Unknown" }}</h6>
                                <div class="d-flex justify-content-center justify-content-md-start">
                                    <button 
                                        class="btn btn-sm btn-secondary me-2" 
                                        type="button" 
                                        title="Ctrl+Click to open in new window" 
                                        @click="view($event, character.id)"
                                    >
                                        View
                                    </button>
                                    <button 
                                        class="btn btn-sm btn-danger" 
                                        type="button" 
                                        @click="removeCharacter(character.id)"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Portrait Section -->
                        <div class="col-12 col-md-4 d-flex align-items-center justify-content-center">
                            <img loading="lazy" :src="`/professions/${character.profession.name.toLowerCase()}.png`" 
                                class="w-100 img-fluid rounded-end portrait-image" 
                                :alt="`Portrait of ${character.profession.name}`">
                        </div>
                    </div>
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

async function view(event: MouseEvent, id: string) {
    if (event.ctrlKey || event.metaKey || event.button === 1) {
        // Ctrl + Click (Windows), Cmd + Click (Mac), or Middle Mouse Click
        window.open(`/character/${id}`, '_blank');
    } else {
        // Standard left-click navigation
        await router.push({ name: "character", params: { id: id } });
    }
}

async function removeCharacter(id: string) {
    const confirmed = confirm("Are you sure you want to delete this character?");

    const authenticated = await globalStore.isAuthenticated();

    if (authenticated && confirmed) {
        await deleteCharacter(id);

        const characterToDelete = characterList.value.find( (c: any) => c.id === id);
        const idx = characterList.value.findIndex( c => c.id === id);
        characterList.value.splice(idx, 1);

        toast(`Deleted character ${characterToDelete.name}`);
    }
}
</script>

<style scoped lang="scss">
.portrait-image {
    max-width: 150px;  /* Prevents large, fuzzy images */
    height: auto;      /* Maintains aspect ratio */
    object-fit: cover; /* Ensures the image scales nicely */
}
</style>