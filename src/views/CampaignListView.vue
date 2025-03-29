<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Campaigns</h1>

    <div v-if="campaigns.length === 0" class="text-gray-500 mb-4">
      No campaigns yet. Create one below!
    </div>

    <ul class="space-y-2 mb-6">
      <li
        v-for="campaign in campaigns"
        :key="campaign.id"
        class="p-4 border rounded shadow hover:bg-gray-100 cursor-pointer"
        @click="goToCampaign(campaign.id)"
      >
        <h2 class="text-lg font-semibold">{{ campaign.name }}</h2>
        <p class="text-sm text-gray-600">{{ campaign.description }}</p>
      </li>
    </ul>

    <div class="mt-4">
      <h2 class="text-lg font-semibold mb-2">Create New Campaign</h2>
      <input
        v-model="newCampaign.name"
        placeholder="Campaign name"
        class="border p-2 w-full mb-2"
      />
      <textarea
        v-model="newCampaign.description"
        placeholder="Description (optional)"
        class="border p-2 w-full mb-2"
      />
      <button @click="createCampaign" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Create Campaign
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCampaignStore } from '@/stores/campaignStore';

const router = useRouter();
const campaignStore = useCampaignStore();

const campaigns = ref(campaignStore.campaigns);
const newCampaign = ref({
  name: '',
  description: ''
});

const loadCampaigns = async () => {
  await campaignStore.fetchCampaigns();
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
  });

  newCampaign.value.name = '';
  newCampaign.value.description = '';
  await loadCampaigns();
};

const goToCampaign = (id: string) => {
  router.push({ name: 'campaign', params: { id } });
};

onMounted(loadCampaigns);
</script>
