<template>
    <div>
        <div class="d-flex">
            <h1>Fronts</h1>
            <div>
                <a href="/front/new-front" class="btn btn-secondary ms-2"><img src="@/assets/plus-solid.svg" alt="create a front"/> Create a Front</a>
            </div>
        </div>
        <div class="d-md-flex">
            <div v-for="front in frontList" class="card m-2">
                <div class="card-body">
                    <h5 class="card-title">{{ front.name }}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">{{ front.type }}</h6>
                    <button class="btn btn-sm btn-secondary me-3" type="button" @click="viewFront(front.id)">View</button>
                    <button class="btn btn-sm btn-danger" type="button" @click="removeFront(front.id)">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';
import { useRouter } from 'vue-router';
import { getFronts, deleteFront } from '@/services/frontsService';
import { toast } from 'vue3-toastify';

const globalStore = useGlobalStore();
const router = useRouter();
const frontList = ref<Array<any>>([]);
const userId = ref()

onMounted(async () => {
    userId.value = globalStore.currentUser;
    frontList.value = await getFronts(userId.value);
});

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
</script>

<style scoped lang="scss">

</style>