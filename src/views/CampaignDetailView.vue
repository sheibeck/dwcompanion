<template>
  <div class="container py-4">
    <div v-if="!campaign">
      <p class="text-muted">Loading campaign...</p>
    </div>

    <div v-else>
      <h1 class="d-print-none d-flex">
        Campaign
        <div class="ms-3" v-if="isOwner">
          <a href="/campaigns/" class="btn btn-secondary mb-2"><img src="@/assets/earth-asia-solid.svg" alt="plus icon" class="filter-white" /> My Campaigns</a>
        </div>
      </h1>

      <div class="mb-4">
        <input v-model="campaign.name" class="form-control form-control-lg mb-2" placeholder="Campaign Name" />
        <textarea v-model="campaign.description" class="form-control mb-2" placeholder="Campaign Description"></textarea>
        <button v-if="isOwner" @click="saveCampaignDetails" class="btn btn-outline-primary btn-sm">Save Campaign</button>
      </div>

      <section class="mb-4">
        <h2 class="h5 mb-3">Linked Items</h2>
        <div class="row">
          <div class="col-md-6 mb-3">
            <strong>Characters:</strong>
            <ul class="list-unstyled">
              <li v-for="char in linkedCharacters" :key="char.id">
                <RouterLink :to="{ name: 'character', params: { id: char.id } }" class="link-primary">
                  {{ char.name }}
                </RouterLink>
              </li>
            </ul>
          </div>
          <div class="col-md-6 mb-3">
            <strong>Fronts:</strong>
            <ul class="list-unstyled">
              <li v-for="front in linkedFronts" :key="front.id">
                <span v-if="front.resolved" class="me-1">☑</span>
                <span v-else class="me-1">☐</span>
                <RouterLink :to="{ name: 'front', params: { id: front.id } }" class="link-primary">
                  {{ front.name }}
                </RouterLink>
              </li>
            </ul>
          </div>
          <div class="col-md-6 mb-3">
            <strong>Maps:</strong>
            <ul class="list-unstyled">
              <li v-for="map in linkedMaps" :key="map.id">
                <RouterLink :to="{ name: 'map', params: { id: map.id } }" class="link-primary">
                  {{ map.name }}
                </RouterLink>
              </li>
            </ul>
          </div>
          <div class="col-md-6 mb-3">
            <strong>Steadings:</strong>
            <ul class="list-unstyled">
              <li v-for="steading in linkedSteadings" :key="steading.id">
                <RouterLink :to="{ name: 'steading', params: { id: steading.id } }" class="link-primary">
                  {{ steading.name }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="mb-4" v-if="isOwner">
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#assignModal">
          Assign Items
        </button>
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
                  <div class="mt-2">
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

    <!-- Bootstrap Modal -->
    <div class="modal fade" id="assignModal" tabindex="-1" aria-labelledby="assignModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="assignModalLabel">Assign Items to Campaign</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label">Characters</label>
                <select v-if="campaign?.characterIds" v-model="campaign.characterIds" multiple class="form-select">
                  <option v-for="char in allCharacters" :key="char.id" :value="char.id">{{ char.name }}</option>
                </select>
              </div>
              <div class="col-md-6">
                <label class="form-label">Fronts</label>
                <select v-if="campaign?.frontIds" v-model="campaign.frontIds" multiple class="form-select">
                  <option v-for="front in allFronts" :key="front.id" :value="front.id">{{ front.name }}</option>
                </select>
              </div>
              <div class="col-md-6">
                <label class="form-label">Maps</label>
                <select v-if="campaign?.mapIds" v-model="campaign.mapIds" multiple class="form-select">
                  <option v-for="map in allMaps" :key="map.id" :value="map.id">{{ map.name }}</option>
                </select>
              </div>
              <div class="col-md-6">
                <label class="form-label">Steadings</label>
                <select v-if="campaign?.steadingIds" v-model="campaign.steadingIds" multiple class="form-select">
                  <option v-for="steading in allSteadings" :key="steading.id" :value="steading.id">{{ steading.name }}</option>
                </select>
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
import { getFront, getFronts } from '@/services/frontService';
import { getMap, getMaps } from '@/services/mapService';
import { getSteading, getSteadings } from '@/services/steadingService';
import MarkdownIt from 'markdown-it';
import { toast } from 'vue3-toastify';

const route = useRoute();
const campaignStore = useCampaignStore();
const globalStore = useGlobalStore();
const campaign = ref<any>(null);
const newSession = ref({ title: '', notes: '' });
const sessionEditId = ref<string | null>(null);

const allCharacters = ref<any[]>([]);
const allFronts = ref<any[]>([]);
const allMaps = ref<any[]>([]);
const allSteadings = ref<any[]>([]);

const characters = ref<Record<string, any>>({});
const fronts = ref<Record<string, any>>({});
const maps = ref<Record<string, any>>({});
const steadings = ref<Record<string, any>>({});
const userId = ref<null|String>(null);

const md = new MarkdownIt();

const isOwner = computed(()=> {  
    return userId.value !== null && (campaign.value?.userId === userId.value);
});

const isGuest = computed(()=> {
  return userId.value == null;
});

const sortedSessions = computed(() => {
  return [...(campaign.value?.sessions || [])].sort((a, b) => b.date.localeCompare(a.date));
});

const loadCampaign = async () => {
  await campaignStore.fetchCampaignById(route.params.id as string);
  campaign.value = campaignStore.selectedCampaign;
  await loadLinkedEntities();
  await loadAvailableEntities();
};

const loadLinkedEntities = async () => {
  if (!campaign.value) return;
  const characterPromises = campaign.value.characterIds.map(async (id: string) => {
    const c = await getCharacter(id);
    if (c) characters.value[id] = c;
  });
  const frontPromises = campaign.value.frontIds.map(async (id: string) => {
    const f = await getFront(id);
    if (f) fronts.value[id] = f;
  });
  const mapPromises = campaign.value.mapIds.map(async (id: string) => {
    const m = await getMap(id);
    if (m) maps.value[id] = m;
  });
  const steadingPromises = campaign.value.steadingIds.map(async (id: string) => {
    const s = await getSteading(id);
    if (s) steadings.value[id] = s;
  });
  await Promise.all([...characterPromises, ...frontPromises, ...mapPromises, ...steadingPromises]);
};

const loadAvailableEntities = async () => {
  if (!campaign.value?.userId) return;
  allCharacters.value = await getCharactersWithProfessions(campaign.value.userId);
  allFronts.value = await getFronts(campaign.value.userId);
  allMaps.value = await getMaps(campaign.value.userId);
  allSteadings.value = await getSteadings(campaign.value.userId);
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
    frontIds: campaign.value.frontIds,
    mapIds: campaign.value.mapIds,
    steadingIds: campaign.value.steadingIds
  });

  await loadLinkedEntities();
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
  (campaign.value?.frontIds.map((id: string) => fronts.value[id]).filter(Boolean) || [])
    .sort((a:any, b: any) => {
      if (a.resolved === b.resolved) {
        return a.name.localeCompare(b.name);
      }
      return a.resolved ? 1 : -1; // resolved === true goes last
    })
);

const linkedMaps = computed(() =>
  (campaign.value?.mapIds.map((id: string) => maps.value[id]).filter(Boolean) || [])
    .sort((a: any, b: any) => a.name.localeCompare(b.name))
);

const linkedSteadings = computed(() =>
  (campaign.value?.steadingIds.map((id: string) => steadings.value[id]).filter(Boolean) || [])
    .sort((a: any, b: any) => a.name.localeCompare(b.name))
);


onMounted(async () => {
    userId.value = await globalStore.getUserId();
    await loadCampaign();
});
</script>