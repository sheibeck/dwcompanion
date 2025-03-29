<template>
    <div class="p-6">
      <div v-if="!campaign">
        <p class="text-gray-500">Loading campaign...</p>
      </div>
  
      <div v-else>
        <h1 class="text-2xl font-bold mb-2">{{ campaign.name }}</h1>
        <p class="text-gray-600 mb-4">{{ campaign.description }}</p>
  
        <section class="mb-6">
          <h2 class="text-lg font-semibold mb-2">Linked Items</h2>
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Characters:</strong>
              <ul>
                <li v-for="id in campaign.characterIds" :key="id">{{ id }}</li>
              </ul>
            </div>
            <div>
              <strong>Fronts:</strong>
              <ul>
                <li v-for="id in campaign.frontIds" :key="id">{{ id }}</li>
              </ul>
            </div>
            <div>
              <strong>Maps:</strong>
              <ul>
                <li v-for="id in campaign.mapIds" :key="id">{{ id }}</li>
              </ul>
            </div>
            <div>
              <strong>Steadings:</strong>
              <ul>
                <li v-for="id in campaign.steadingIds" :key="id">{{ id }}</li>
              </ul>
            </div>
          </div>
        </section>
  
        <section class="mb-6">
          <h2 class="text-lg font-semibold mb-2">Sessions</h2>
          <ul v-if="campaign.sessions.length">
            <li
              v-for="session in campaign.sessions"
              :key="session.id"
              class="border p-4 mb-2 rounded shadow"
            >
              <h3 class="font-semibold text-base">{{ session.title }}</h3>
              <p class="text-xs text-gray-500">{{ session.date }}</p>
              <div v-html="renderMarkdown(session.notes)" class="prose max-w-none mt-2" />
            </li>
          </ul>
          <p v-else class="text-gray-500">No sessions yet.</p>
        </section>
  
        <section>
          <h2 class="text-lg font-semibold mb-2">Add Session</h2>
          <input
            v-model="newSession.title"
            class="border p-2 w-full mb-2"
            placeholder="Session Title"
          />
          <textarea
            v-model="newSession.notes"
            class="border p-2 w-full mb-2"
            placeholder="Markdown session notes"
          />
          <button @click="addSession" class="bg-green-600 text-white px-4 py-2 rounded">
            Add Session
          </button>
        </section>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';
    import { useCampaignStore } from '@/stores/campaignStore';
    import MarkdownIt from 'markdown-it';


    import { getCharacter } from '@/services/characterService';
    import { getFront } from '@/services/frontService';
    import { getMap } from '@/services/mapService';
    import { getSteading } from '@/services/steadingService';

    const characters = ref<Record<string, any>>({});
    const fronts = ref<Record<string, any>>({});
    const maps = ref<Record<string, any>>({});
    const steadings = ref<Record<string, any>>({});

    const route = useRoute();
    const campaignStore = useCampaignStore();

    const campaign = ref(campaignStore.selectedCampaign);
    const newSession = ref({ title: '', notes: '' });

    const md = new MarkdownIt({
        html: true,
        linkify: true,
        breaks: true
    });

    const loadLinkedEntities = async () => {
      if (!campaign.value) return;

      const characterPromises = campaign.value.characterIds.map(async (id: any) => {
          const character = await getCharacter(id);
          characters.value[id] = character;
      });

      const frontPromises = campaign.value.frontIds.map(async (id: any) => {
          const front = await getFront(id);
          fronts.value[id] = front;
      });

      const mapPromises = campaign.value.mapIds.map(async (id: any) => {
          const map = await getMap(id);
          maps.value[id] = map;
      });

      const steadingPromises = campaign.value.steadingIds.map(async (id: any) => {
          const steading = await getSteading(id);
          steadings.value[id] = steading;
      });

      await Promise.all([
          ...characterPromises,
          ...frontPromises,
          ...mapPromises,
          ...steadingPromises
      ]);
    };

    const loadCampaign = async () => {
      await campaignStore.fetchCampaignById(route.params.id as string);
          campaign.value = campaignStore.selectedCampaign;
      };

      const addSession = async () => {
      if (!newSession.value.title.trim() || !newSession.value.notes.trim()) return;

      const session = {
          id: crypto.randomUUID(),
          title: newSession.value.title,
          date: new Date().toISOString().split('T')[0],
          notes: newSession.value.notes
      };

      const updatedSessions = [...(campaign.value?.sessions || []), session];
      await campaignStore.updateCampaign(campaign.value!.id, {
          sessions: updatedSessions
      });

      newSession.value.title = '';
      newSession.value.notes = '';
      await loadCampaign();
    };

    const renderMarkdown = (text: string) => md.render(text || '');

    onMounted(async () => {
    await loadCampaign();
    await loadLinkedEntities();
    });
  </script>
  