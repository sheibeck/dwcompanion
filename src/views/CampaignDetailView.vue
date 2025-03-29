<template>
  <div class="container py-4">
    <div v-if="!userId">
      <p class="text-muted">Please login to view this campaign.</p>
    </div>

    <div v-else-if="!campaign">
      <p class="text-muted">Loading campaign...</p>
    </div>

    <div v-else>
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h1 class="d-print-none">Campaign</h1>
        <div v-if="isOwner" class="d-flex gap-2">
          <a href="/campaigns/" class="btn btn-outline-secondary">
            <img src="@/assets/earth-asia-solid.svg" alt="planet icon" class="filter-black" /> My Campaigns
          </a>
          <button @click="saveCampaignDetails" class="btn btn-outline-primary btn-sm">Save Campaign</button>
        </div>
      </div>

      <div class="mb-4">
        <input v-model="campaign.name" class="form-control form-control-lg mb-2" placeholder="Campaign Name" />
        <textarea v-model="campaign.description" class="form-control mb-2" placeholder="Campaign Description"></textarea>
      </div>

      <section class="mb-4">
        <h2 class="h5 mb-3">Campaign Items
          <button v-if="isOwner" class="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#assignModal">
            Assign Items
          </button>
        </h2> 
        <div class="row">
          <div class="col-md-6 mb-3">
            <div class="border rounded p-2 overflow-auto" style="max-height: 200px;">
              <strong>Characters:</strong>
              <ul class="list-unstyled mb-0">
                <li v-for="char in linkedCharacters" :key="char.id">
                  <RouterLink :to="{ name: 'character', params: { id: char.id } }" class="link-primary">
                    {{ char.name }} ({{ char.profession.name }})
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="border rounded p-2 overflow-auto" style="max-height: 200px;">
              <strong>Fronts:</strong>
              <ul class="list-unstyled mb-0">
                <li v-for="front in linkedFronts" :key="front.id">
                  <span v-if="front.resolved" class="me-1">☑</span>
                  <span v-else class="me-1">☐</span>
                  <RouterLink :to="{ name: 'front', params: { id: front.id } }" class="link-primary">
                    {{ front.name }} ({{ front.type }})
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="border rounded p-2 overflow-auto" style="max-height: 200px;">
              <strong>Maps:</strong>
              <ul class="list-unstyled mb-0">
                <li v-for="map in linkedMaps" :key="map.id">
                  <RouterLink :to="{ name: 'map', params: { id: map.id } }" class="link-primary">
                    {{ map.name }}
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="border rounded p-2 overflow-auto" style="max-height: 200px;">
              <strong>Steadings:</strong>
              <ul class="list-unstyled mb-0">
                <li v-for="steading in linkedSteadings" :key="steading.id">
                  <RouterLink :to="{ name: 'steading', params: { id: steading.id } }" class="link-primary">
                    {{ steading.name }} ({{ steading.type }})
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-4">
        <h2 class="h5 mb-2">Sessions</h2>
        <ul v-if="campaign.sessions?.length" class="list-group mb-3">
          <li v-for="session in sortedSessions" :key="session.id" class="list-group-item">
            <div class="d-flex justify-content-between align-items-start">
              <div class="me-auto w-100">
                <div v-if="sessionEditId === session.id">
                  <input v-model="session.title" class="form-control form-control-sm mb-2" />
                  <input v-model="session.date" type="date" class="form-control form-control-sm mb-2" />
                  <textarea v-model="session.notes" class="form-control form-control-sm mb-2 w-100"></textarea>
                  <div class="d-flex gap-2" v-if="isOwner">
                    <button class="btn btn-sm btn-success" @click="saveSessionEdits">Save</button>
                    <button class="btn btn-sm btn-secondary" @click="sessionEditId = null">Cancel</button>
                  </div>
                </div>
                <div v-else>
                  <h3 class="h6 mb-1">{{ session.title }}</h3>
                  <p class="text-muted small mb-2">{{ session.date }}</p>
                  <div v-html="renderMarkdown(session.notes)" class="prose"></div>
                  <div class="mt-2" v-if="isOwner">
                    <button class="btn btn-sm btn-outline-secondary" @click="editSession(session.id)">Edit</button>
                    <button class="btn btn-sm btn-outline-danger ms-2" @click="confirmDelete(session.id)">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <p v-else class="text-muted">No sessions yet.</p>
      </section>

      <section v-if="isOwner">
        <h2 class="h5 mb-2">Add Session</h2>
        <input v-model="newSession.title" class="form-control mb-2" placeholder="Session Title" />
        <textarea v-model="newSession.notes" class="form-control mb-2 w-100" placeholder="Markdown session notes" />
        <button @click="addSession" class="btn btn-success">Add Session</button>
      </section>
    </div>

    <!-- Assign Items Modal -->
    <div class="modal fade" id="assignModal" tabindex="-1" aria-labelledby="assignModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="assignModalLabel">Assign Entities to Campaign</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row g-3">
              <!-- Characters -->
              <div class="col-md-6">
                <label class="form-label">Characters</label>
                <div class="border rounded p-2 overflow-auto" style="max-height: 200px;">
                  <div
                    class="form-check"
                    v-for="char in sortedCharacters"
                    :key="char.id"
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :id="'char-' + char.id"
                      :value="char.id"
                      v-model="campaign.characterIds"
                    />
                    <label class="form-check-label" :for="'char-' + char.id">
                      {{ char.name }} ({{ char.profession.name }})
                    </label>
                  </div>
                </div>
              </div>

              <!-- Maps -->
              <div class="col-md-6">
                <label class="form-label">Maps</label>
                <div class="border rounded p-2 overflow-auto" style="max-height: 200px;">
                  <div
                    class="form-check"
                    v-for="map in sortedMaps"
                    :key="map.id"
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :id="'map-' + map.id"
                      :value="map.id"
                      v-model="campaign.mapIds"
                    />
                    <label class="form-check-label" :for="'map-' + map.id">
                      {{ map.name }}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="saveLinkedEntitiesAndClose">Save</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useCampaignStore } from '@/stores/campaignStore';
import { useGlobalStore } from '@/stores/globalStore';
import { useRoute } from 'vue-router';
import { getCharacter, getCharactersWithProfessions } from '@/services/characterService';
import { getMap, getMaps } from '@/services/mapService';
import MarkdownIt from 'markdown-it';
import { toast } from 'vue3-toastify';

const route = useRoute();
const campaignStore = useCampaignStore();
const globalStore = useGlobalStore();
const campaign = ref<any>(null);
const newSession = ref({ title: '', notes: '' });
const sessionEditId = ref<string | null>(null);

const allCharacters = ref<any[]>([]);
const allMaps = ref<any[]>([]);
const characters = ref<Record<string, any>>({});
const maps = ref<Record<string, any>>({});
const userId = ref<null | String>(null);

const md = new MarkdownIt();

const isOwner = computed(() => {
  return userId.value !== null && (campaign.value?.userId === userId.value);
});

const sortedSessions = computed(() => {
  return [...(campaign.value?.sessions || [])].sort((a, b) => b.date.localeCompare(a.date));
});

const sortedCharacters = computed(() =>
  [...allCharacters.value].sort((a, b) => a.name.localeCompare(b.name))
);

const sortedMaps = computed(() =>
  [...allMaps.value].sort((a, b) => a.name.localeCompare(b.name))
);

const loadCampaign = async () => {
  await campaignStore.fetchCampaignById(route.params.id as string);
  campaign.value = campaignStore.selectedCampaign;
  await loadLinkedMapsAndCharacters();
  await loadAvailableMapsAndCharacters();
};

const loadLinkedMapsAndCharacters = async () => {
  if (!campaign.value) return;
  const characterPromises = campaign.value.characterIds.map(async (id: string) => {
    const c = await getCharacter(id);
    if (c) characters.value[id] = c;
  });
  const mapPromises = campaign.value.mapIds.map(async (id: string) => {
    const m = await getMap(id);
    if (m) maps.value[id] = m;
  });
  await Promise.all([...characterPromises, ...mapPromises]);
};

const loadAvailableMapsAndCharacters = async () => {
  if (!campaign.value?.userId) return;
  allCharacters.value = await getCharactersWithProfessions(campaign.value.userId);
  allMaps.value = await getMaps(campaign.value.userId);
};

const renderMarkdown = (text: string) => md.render(text || '');

const addSession = async () => {
  if (!newSession.value.title.trim() || !newSession.value.notes.trim()) return;
  const session = {
    id: crypto.randomUUID(),
    title: newSession.value.title,
    date: new Date().toISOString().split('T')[0],
    notes: newSession.value.notes
  };
  campaign.value.sessions.push(session);
  await campaignStore.updateCampaign(campaign.value.id, { sessions: campaign.value.sessions });
  toast("Session added.");
  newSession.value = { title: '', notes: '' };
};

const editSession = (id: string) => {
  sessionEditId.value = id;
};

const confirmDelete = (id: string) => {
  if (confirm('Are you sure you want to delete this session?')) {
    deleteSession(id);
  }
};

const deleteSession = async (id: string) => {
  campaign.value.sessions = campaign.value.sessions.filter((s: any) => s.id !== id);
  await campaignStore.updateCampaign(campaign.value.id, { sessions: campaign.value.sessions });
  toast("Session deleted.");
};

const saveSessionEdits = async () => {
  sessionEditId.value = null;
  toast("Session saved.");
  await campaignStore.updateCampaign(campaign.value.id, { sessions: campaign.value.sessions });
};

const saveLinkedEntitiesAndClose = async () => {
  await campaignStore.updateCampaign(campaign.value.id, {
    characterIds: campaign.value.characterIds,
    mapIds: campaign.value.mapIds
  });

  // Immediately fetch and update local entity objects
  await loadLinkedMapsAndCharacters();
  await campaignStore.loadLinkedEntities();

  toast('Campaign updated.');
};

const saveCampaignDetails = async () => {
  await campaignStore.updateCampaign(campaign.value.id, {
    name: campaign.value.name,
    description: campaign.value.description
  });
  toast(`Saved campaign.`);
};

const linkedCharacters = computed(() =>
  (campaign.value?.characterIds.map((id: string) => characters.value[id]).filter(Boolean) || [])
    .sort((a: any, b: any) => a.name.localeCompare(b.name))
);

const linkedFronts = computed(() =>
  [...campaignStore.linkedFronts].sort((a: any, b: any) => {
    if (a.resolved === b.resolved) {
      return a.name.localeCompare(b.name);
    }
    return a.resolved ? 1 : -1;
  })
);

const linkedMaps = computed(() =>
  (campaign.value?.mapIds.map((id: string) => maps.value[id]).filter(Boolean) || [])
    .sort((a: any, b: any) => a.name.localeCompare(b.name))
);

const linkedSteadings = computed(() =>
  [...campaignStore.linkedSteadings].sort((a: any, b: any) => a.name.localeCompare(b.name))
);

onMounted(async () => {
  userId.value = await globalStore.getUserId();
  await loadCampaign();
});
</script>
