<template>
    <div>
        <div class="d-flex">
            <h1>Steadings</h1>
            <div>
                <a href="/steading/new-steading" class="btn btn-secondary ms-2"><img src="@/assets/plus-solid.svg" alt="plus icon" class="filter-white" /> Create a Steading</a>
            </div>
        </div>
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
            <div v-for="steading in steadingList" class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{ steading.name }}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">{{ steading.type }}</h6>
                    
                        <div class="card-header py-0 px-1" v-if="filteredMapsBySteading(steading.id)">
                            Maps:
                        </div>
                        <ul class="list-group list-group-flush" v-if="filteredMapsBySteading(steading.id)?.length == 0 ?? true">
                            <li class="list-group-item py-0 px-1">
                                Not used.
                            </li>
                        </ul>
                        <ul class="list-group list-group-flush" v-for="map in filteredMapsBySteading(steading.id)">
                            <li class="list-group-item py-0 px-1">
                                <a target="_blank" :href="`/map/${map.id}`">{{ map.name }} <img src="@/assets/up-right-from-square-solid.svg" alt="plus icon" height="12" class="filter-blue" /></a>
                            </li>
                        </ul>

                        <a class="btn btn-sm btn-secondary me-3 ms-1" type="button" title="Ctrl+Click to open in new window" @click="view($event, steading.id)">View</a>
                        <button class="btn btn-sm btn-danger" type="button" @click="remove(steading.id)">Delete</button>
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
import { getSteadings, deleteSteading } from '@/services/steadingService';
import { toast } from 'vue3-toastify';
import { getMaps } from '@/services/mapService';

const globalStore = useGlobalStore();
const router = useRouter();
const steadingList = ref<Array<any>>([]);
const userId = ref()
const maps = ref();

onMounted(async () => {
    userId.value = globalStore.currentUser;
    steadingList.value = await getSteadings(userId.value);
    maps.value = await getMaps(userId.value);
    globalStore.updateTabTitle("Steadings");
});

async function view(event: MouseEvent, id: string) {
    if (event.ctrlKey || event.metaKey || event.button === 1) {
        // Ctrl + Click (Windows), Cmd + Click (Mac), or Middle Mouse Click
        window.open(`/steading/${id}`, '_blank');
    } else {
        // Standard left-click navigation
        await router.push({ name: "steading", params: { id: id } });
    }
}

// Function to filter maps based on steading id
const filteredMapsBySteading = (id: string) => {
  return maps.value?.filter((map: any) => {
    return map.locations.some((loc: any) => loc.steading_id === id);
  });
}

async function remove(id: string) {
    const confirmed = confirm("Are you sure you want to delete this steading?");

    const authenticated = await globalStore.isAuthenticated();

    if (authenticated && confirmed) {
        await deleteSteading(id);

        const steadingToDelete = steadingList.value.find( (c: any) => c.id === id);
        const idx = steadingList.value.findIndex( c => c.id === id);
        steadingList.value.splice(idx, 1);

        toast(`Deleted steading ${steadingToDelete.name}`);
    }
}
</script>

<style scoped lang="scss">

</style>