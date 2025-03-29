<template>
  <div class="container py-4">
    <h1 class="mb-4">Campaigns</h1>

    <div v-if="campaigns.length === 0" class="text-muted mb-4">
      No campaigns yet. Create one below!
    </div>

    <ul class="list-group mb-4">
      <li
        v-for="campaign in campaigns"
        :key="campaign.id"
        class="list-group-item d-flex justify-content-between align-items-start"
      >
        <div @click="goToCampaign(campaign.id)" role="button">
          <h5 class="mb-1">{{ campaign.name }}</h5>
          <small class="text-muted">{{ campaign.description }}</small>
        </div>
        <button class="btn btn-sm btn-outline-danger" @click="confirmDelete(campaign.id)">Delete</button>
      </li>
    </ul>

    <div class="card p-4 shadow-sm">
      <h2 class="h5 mb-3">Create New Campaign</h2>
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

const userId = ref();

const loadCampaigns = async () => {
  await campaignStore.fetchCampaigns(userId.value);
  campaigns.value = campaignStore.campaigns;
};

const createCampaign = async () => {
  if (!newCampaign.value.name.trim()) return;

  await campaignStore.createCampaign({
    name: newCampaign.value.name,
    description: newCampaign.value.description,
    characterIds: [],
    frontIds: [],
    mapIds: [],
    steadingIds: [],
    sessions: []
  }, userId.value);

  newCampaign.value.name = '';
  newCampaign.value.description = '';

  toast("Campaign created.")

  await loadCampaigns();
};

const confirmDelete = (id: string) => {
  if (confirm('Are you sure you want to delete this campaign?')) {
    deleteCampaign(id);
  }
};

const deleteCampaign = async (id: string) => {
  await campaignStore.deleteCampaign(id);
  await loadCampaigns();
  toast("Campaign delete.")
};

const goToCampaign = (id: string) => {
  router.push({ name: 'campaign', params: { id } });
};

onMounted(async () => {
  userId.value = globalStore.currentUser;
  await loadCampaigns();
});
</script>
