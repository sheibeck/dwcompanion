<template>
    <div>
        <div class="d-flex">
            <h1>Maps</h1>
            <div>
                <a href="/map/new-map" class="btn btn-secondary ms-2"><img src="@/assets/plus-solid.svg" alt="plus icon" class="filter-white" /> Create a Map</a>
            </div>
        </div>
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
            <div v-for="map in mapList" class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{ map.name }}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">{{ map.type }}</h6>

                        <div class="card-header py-0 px-1">
                            Active Fronts:
                        </div>
                        <ul class="list-group list-group-flush" v-if="frontsByMapData[map.id]?.length == 0 ?? true">
                            <li class="list-group-item py-0 px-1">
                                No active fronts on this map.
                            </li>
                        </ul>
                        <ul class="list-group list-group-flush" v-for="front in frontsByMapData[map.id]">
                            <li class="list-group-item py-0 px-1">
                                <a target="_blank" :href="`/front/${front.id}`">{{ front.name }}</a>
                            </li>
                        </ul>

                        <button class="btn btn-sm btn-secondary me-3 ms-1" title="Ctrl+Click to open in new window" type="button" @click="view($event, map.id)">View</button>
                        <button class="btn btn-sm btn-danger" type="button" @click="removeMap(map.id)">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';
import { useRouter } from 'vue-router';
import { getMaps, deleteMap } from '@/services/mapService';
import { toast } from 'vue3-toastify';
import { remove } from '@aws-amplify/storage'
import { getFront } from '@/services/frontService';

const globalStore = useGlobalStore();
const router = useRouter();
const mapList = ref<Array<any>>([]);
const userId = ref()
const frontsByMapData = ref<any>({});

onMounted(async () => {
    userId.value = globalStore.currentUser;
    mapList.value = await getMaps(userId.value);

    for (const map of mapList.value) {
        frontsByMapData.value[map.id] = await frontsByMap(map);
    }

    globalStore.updateTabTitle("Maps");
});

async function view(event: MouseEvent, id: string) {
    if (event.ctrlKey || event.metaKey || event.button === 1) {
        // Ctrl + Click (Windows), Cmd + Click (Mac), or Middle Mouse Click
        window.open(`/map/${id}`, '_blank');
    } else {
        // Standard left-click navigation
        await router.push({ name: "map", params: { id: id } });
    }
}

async function frontsByMap(map: any): Promise<any[]> {
    const listOfFronts: any[] = [];
    
    if (map.locations) {
        await Promise.all(map.locations.flatMap(async (location: any) => {
            if (location.fronts) {
                const fronts = await Promise.all(location.fronts.map((frontId: string) => getFront(frontId)));
                listOfFronts.push(...fronts.filter(front => front !== null && front.active == true));
            }
        }));
    }
    
    return listOfFronts;
}

async function removeMap(id: string) {
    const confirmed = confirm("Are you sure you want to delete this map?");

    const authenticated = await globalStore.isAuthenticated();

    if (authenticated && confirmed) {
        await deleteMap(id);

        const mapToDelete = mapList.value.find( (c: any) => c.id === id);
        await deleteSvg(mapToDelete.mapFile);
        
        const idx = mapList.value.findIndex( c => c.id === id);
        mapList.value.splice(idx, 1);

        
        toast(`Deleted map ${mapToDelete.name}`);
    }
}

const deleteSvg = async (fileName: string) => {
    try {
        const result = await remove({ key: fileName });
    } catch (error) {
        console.error('Error retrieving file:', error);
    }
}

</script>

<style scoped lang="scss">

</style>