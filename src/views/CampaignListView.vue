<template>
  <div class="container py-4">
    <h1 class="text-2xl font-bold mb-4">Campaigns</h1>

    <div v-if="campaigns.length === 0" class="text-muted mb-4">
      No campaigns yet. Create one below!
    </div>

    <ul class="list-group mb-4">
      <li
        v-for="campaign in campaigns"
        :key="campaign.id"
        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        @click="goToCampaign(campaign.id)"
        style="cursor: pointer;"
      >
        <div>
          <h5 class="mb-1">{{ campaign.name }}</h5>
          <small class="text-muted">{{ campaign.description }}</small>
        </div>
        <button class="btn btn-sm btn-outline-danger" @click.stop="confirmDelete(campaign.id)">Delete</button>
      </li>
    </ul>

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Create New Campaign</h5>
        <input
          v-model="newCampaign.name"
          placeholder="Campaign name"
          class="form-control mb-2"
        />
        <textarea
          v-model="newCampaign.description"
          placeholder="Description (optional)"
          class="form-control mb-2"
        />
        <button @click="createCampaign" class="btn btn-primary">Create Campaign</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCampaignStore } from '@/stores/campaignStore';
import { useGlobalStore } from '@/stores/globalStore';
import { toast } from 'vue3-toastify';

const router = useRouter();
const campaignStore = useCampaignStore();
const globalStore = useGlobalStore();

const campaigns = ref(campaignStore.campaigns);
const newCampaign = ref({
  name: '',
  description: ''
});

const userId = ref<string | null>(null);

const loadCampaigns = async () => {
  if (!userId.value) return;
  await campaignStore.fetchCampaigns(userId.value);
  campaigns.value = campaignStore.campaigns;
};

const createCampaign = async () => {
  if (!newCampaign.value.name.trim()) return;

  const result = await campaignStore.createCampaign({
    name: newCampaign.value.name,
    description: newCampaign.value.description,
    characterIds: [],
    mapIds: [],
    frontIds: [],
    steadingIds: [],
    sessions: []
  }, userId.value!);

  if (result !== true) {
    toast(result);
  } else {
    toast('Campaign created.');
    newCampaign.value.name = '';
    newCampaign.value.description = '';
    await loadCampaigns();
  }
};

const confirmDelete = async (id: string) => {
  if (confirm('Are you sure you want to delete this campaign?')) {
    const result = await campaignStore.deleteCampaign(id);
    if (result !== true) {
      toast(result);
    } else {
      toast('Campaign deleted.');
      await loadCampaigns();
    }
  }
};

const goToCampaign = (id: string) => {
  router.push({ name: 'campaign', params: { id } });
};

onMounted(async () => {
  userId.value = await globalStore.getUserId();
  await loadCampaigns();

  
  document.title = `Campaign List | Dungeon World Companion`;
});

onMounted(() => {
  document.title = "Campaigns";
});

</script>

<style scoped>
.list-group-item-action:hover {
  background-color: #f8f9fa;
}
</style>
