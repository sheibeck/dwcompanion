<template>
    <div>
        <div class="d-flex">
            <h1>Fronts</h1>
            <div>
                <a href="/front/new-front" class="btn btn-secondary ms-2"><img src="@/assets/plus-solid.svg" alt="plus icon" class="filter-white" /> Create a Front</a>
            </div>
        </div>
        <div class="d-md-flex">
            <div v-for="front in frontList" class="card m-2">
                <div class="card-body">
                    <h5 class="card-title">{{ front.name }}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">{{ front.type }}</h6>

                    <div class="card-header py-0 px-1" v-if="filteredMapByFronts(front.id)">
                        Maps:
                    </div>
                    <ul class="list-group list-group-flush" v-if="filteredMapByFronts(front.id)?.length == 0 ?? true">
                        <li class="list-group-item py-0 px-1">
                            Not used.
                        </li>
                    </ul>
                    <ul class="list-group list-group-flush" v-for="map in filteredMapByFronts(front.id)">
                        <li class="list-group-item py-0 px-1">
                            <a target="_blank" :href="`/map/${map.id}`">{{ map.name }}</a>
                        </li>
                    </ul>

                    <button class="btn btn-sm btn-secondary me-3 mt-1" type="button" @click="viewFront(front.id)">View</button>
                    <button class="btn btn-sm btn-danger" type="button" @click="removeFront(front.id)">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';
import { useRouter } from 'vue-router';
import { getFronts, deleteFront } from '@/services/frontService';
import { toast } from 'vue3-toastify';
import { getSteading } from '@/services/steadingService';
import { getMaps } from '@/services/mapService';

const globalStore = useGlobalStore();
const router = useRouter();
const frontList = ref<Array<any>>([]);
const userId = ref()
const maps = ref();

onMounted(async () => {
    userId.value = globalStore.currentUser;
    frontList.value = await getFronts(userId.value);

    maps.value = await getMaps(userId.value);
});

// Function to filter maps based on front id
const filteredMapByFronts = (id: string) => {
  return maps.value?.filter((map: any) => {
    return map.locations.some((loc: any) => loc.fronts?.includes(id));
  });
}

async function viewFront(id: string) {
    await router.push({ name: "front", params: { id: id } });
}

async function removeFront(id: string) {
    const confirmed = confirm("Are you sure you want to delete this front?");

    const authenticated = await globalStore.isAuthenticated();

    if (authenticated && confirmed) {
        await deleteFront(id);

        const frontToDelete = frontList.value.find( (c: any) => c.id === id);
        const idx = frontList.value.findIndex( c => c.id === id);
        frontList.value.splice(idx, 1);

        toast(`Deleted front ${frontToDelete.name}`);
    }
}

async function getMapDetails() {
    try {
        // Fetch steading details asynchronously for each front
        await Promise.all(frontList.value.map(front => fetchSteadingDetails(front, front.steadings)));
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function fetchSteadingDetails(front: any, steadingIds: Array<string>) {
    try {
        // Update steadingDetails
        steadingIds.forEach((steadingId) => async () => {
            const steading = await getSteading(steadingId);
            front["steadingDetails"] = steading;
        });
    } catch (error) {
        console.error('Error fetching steading details:', error);
    }
}

</script>

<style scoped lang="scss">

</style>