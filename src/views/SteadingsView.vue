<template>
    <div>
        <div class="d-flex">
            <h1>Steadings</h1>
            <div>
                <a href="/steading/new-steading" class="btn btn-secondary ms-2"><img src="@/assets/plus-solid.svg" alt="plus icon" class="filter-white" /> Create a Steading</a>
            </div>
        </div>
        <div class="d-md-flex">
            <div v-for="steading in steadingList" class="card m-2">
                <div class="card-body">
                    <h5 class="card-title">{{ steading.name }}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">{{ steading.type }}</h6>
                
                    <div class="card-header" v-if="steading.maps && steading.maps.length > 0">
                        Maps:
                    </div>
                    <ul class="list-group list-group-flush" v-for="map in steading.maps">
                        <li class="list-group-item">
                            <a target="_blank" :href="`/map/${getMapId(map)}`">{{ getMapName(map) }}</a>
                        </li>
                    </ul>

                    <button class="btn btn-sm btn-secondary me-3" type="button" @click="viewSteading(steading.id)">View</button>
                    <button class="btn btn-sm btn-danger" type="button" @click="removeSteading(steading.id)">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';
import { useRouter } from 'vue-router';
import { getSteadings, deleteSteading } from '@/services/steadingService';
import { toast } from 'vue3-toastify';

const globalStore = useGlobalStore();
const router = useRouter();
const steadingList = ref<Array<any>>([]);
const userId = ref()

onMounted(async () => {
    userId.value = globalStore.currentUser;
    steadingList.value = await getSteadings(userId.value);
});

async function viewSteading(id: string) {
    await router.push({ name: "steading", params: { id: id } });
}

async function removeSteading(id: string) {
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

function getMapName(map: string) {
    return map.split("|")[1];
}

function getMapId(map: string) {
    return map.split("|")[0];
}

</script>

<style scoped lang="scss">

</style>