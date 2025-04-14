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
                  <a
                    :href="`/character/${char.id}`"
                    class="link-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ char.name }} ({{ char.profession.name }})
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 mb-3" v-if="isOwner">
            <div class="border rounded p-2 overflow-auto" style="max-height: 200px;">
              <span><strong>Fronts:</strong> <small>(☑ completed front, only visible to you)</small></span>
              <ul class="list-unstyled mb-0">
                <li v-for="front in linkedFronts" :key="front.id">
                  <span v-if="front.resolved" class="me-1">☑</span>
                  <span v-else class="me-1">☐</span>
                  <a
                    :href="`/front/${front.id}`"
                    class="link-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ front.name }} ({{ front.type }})
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="border rounded p-2 overflow-auto" style="max-height: 200px;">
              <strong>Maps:</strong>
              <ul class="list-unstyled mb-0">
                <li v-for="map in linkedMaps" :key="map.id">
                  <a
                    :href="`/map/${map.id}`"
                    class="link-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ map.name }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="border rounded p-2 overflow-auto" style="max-height: 200px;">
              <span><strong>Steadings:</strong> <small>(★ current party location)</small></span>
              <ul class="list-unstyled mb-0">
                <li v-for="steading in linkedSteadings" :key="steading.id">
                  <span v-if="isPartyLocation(steading.id)" class="me-1">★</span>
                  <a
                    :href="`/steading/${steading.id}`"
                    class="link-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ steading.name }} ({{ steading.type }})
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-4" v-if="isOwner">
        <h2 class="h5 mb-2">Gm Notes</h2>
        <small>(Only visible to you)</small>
        <div class="d-flex justify-content-between align-items-start">
          <div class="me-auto w-100">
            <div v-if="gmedit">
              <textarea v-model="campaign.gm_notes" class="form-control form-control-sm mb-2 w-100" rows="10"></textarea>
              <div class="d-flex gap-2" v-if="isOwner">
                <button class="btn btn-sm btn-success" @click="saveCampaignDetails(); gmedit = false">Save</button>
                <button class="btn btn-sm btn-secondary" @click="gmedit = false">Cancel</button>
              </div>
            </div>
            <div v-else>
              <div v-if="isGmNotesExpanded" v-html="renderMarkdown(campaign.gm_notes ?? '')" class="prose"></div>
              <div v-else v-html="renderMarkdown(campaign.gm_notes?.substring(0, 500) ?? '')" class="prose"></div>
              <div class="mt-2">
                <button class="btn btn-sm btn-outline-secondary" @click="toggleGmNotes">
                  {{ isGmNotesExpanded ? 'Collapse' : 'Expand' }}
                </button>
                <button class="btn btn-sm btn-outline-secondary ms-2" @click="gmedit = true">Edit</button>
              </div>
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
                  <textarea v-model="session.notes" class="form-control form-control-sm mb-2 w-100" rows="10"></textarea>
                  <div class="d-flex gap-2" v-if="isOwner">
                    <button class="btn btn-sm btn-success" @click="saveSessionEdits">Save</button>
                    <button class="btn btn-sm btn-secondary" @click="sessionEditId = null">Cancel</button>
                  </div>
                </div>
                <div v-else>
                  <h3 class="h6 mb-1">{{ session.title }}</h3>
                  <p class="text-muted small mb-2">{{ session.date }}</p>
                  <div v-if="expandedSessions[session.id]" v-html="renderMarkdown(session.notes)" class="prose"></div>
                  <div v-else v-html="renderMarkdown(session.notes.substring(0, 500) + '...')" class="prose"></div>
                  <div class="mt-2" v-if="isOwner">
                    <button class="btn btn-sm btn-outline-secondary" @click="toggleSession(session.id)">
                      {{ expandedSessions[session.id] ? 'Collapse' : 'Expand' }}
                    </button>
                    <button class="btn btn-sm btn-outline-secondary ms-2" @click="editSession(session.id)">Edit</button>
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
        <textarea rows="10" v-model="newSession.notes" class="form-control mb-2 w-100" placeholder="Markdown session notes" />
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
import { computed, onMounted, ref, watch } from 'vue';
import { useCampaignStore } from '@/stores/campaignStore';
import { useGlobalStore } from '@/stores/globalStore';
import { useRoute } from 'vue-router';
import { getCharacter, getCharactersWithProfessions } from '@/services/characterService';
import { getMap, getMaps } from '@/services/mapService';
import MarkdownIt from 'markdown-it';
import { toast } from 'vue3-toastify';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

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

const gmedit = ref<boolean>(false);

const md = new MarkdownIt();

const isDevelopment = window.location.hostname !== 'dungeon-world-companion.com';

const isOwner = computed(() => {
  return userId.value !== null && (campaign.value?.userId === userId.value);
});

// State to track if GM notes are expanded
const isGmNotesExpanded = ref(false);

// State to track if each session's details are expanded
const expandedSessions = ref<any>({});

// Function to toggle GM notes expansion
const toggleGmNotes = () => {
  isGmNotesExpanded.value = !isGmNotesExpanded.value;
};

// Function to toggle session details expansion
const toggleSession = (sessionId: any) => {
  expandedSessions.value[sessionId] = !expandedSessions.value[sessionId];
};

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
    description: campaign.value.description,
    gm_notes: campaign.value.gm_notes,
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

const isPartyLocation = (steadingId: string): boolean => {
  return linkedMaps.value.some((map: any) =>
    (map.locations || []).some((location: any) =>
      location.currentPartyLocation === true &&
      (location.steading_id === steadingId || (location.fronts || []).includes(steadingId))
    )
  );
};

const chatUrl = `https://sterling.braceyourself.solutions/webhook/73ed1047-b5d5-4208-8e68-aa5426cf9ed5/chat`;
const aiEnabaledUsers = ["856b1c6b-c662-4cc0-a049-db77eabcf914", "8b9fc86a-725c-4b57-9c3a-90b23af44252"]

async function enableAiGm() {
  if (aiEnabaledUsers.findIndex(uid => userId.value === uid) > -1) {
    await createChat({
      webhookUrl: chatUrl,
      webhookConfig: {
        method: 'POST',
        headers: {}
      },
      target: '#n8n-chat',
      mode: 'window',
      chatInputKey: 'chatInput',
      chatSessionKey: 'sessionId',
      metadata: {
        campaignId: `${campaign.value.id}`,
        isStaging: isDevelopment,
      },
      showWelcomeScreen: false,
      defaultLanguage: 'en',
      initialMessages: [
        'Hail, I am S.A.G.E., a humble but clever helper who’s always ready with a tale or twist.'
      ],
      i18n: {
        en: {
          title: 'S.A.G.E.',
          subtitle: "Storycraft Advisor & GM Enhancer",
          footer: '',
          getStarted: 'New Conversation',
          inputPlaceholder: 'Tell me how I can assist you ...',
          closeButtonTooltip: 'Close chat'
        },
      },
    });
  }
}

onMounted(async () => {
  userId.value = await globalStore.getUserId();
  await loadCampaign();
  await enableAiGm();

  const observer = new MutationObserver(() => {
    const chatEl = document.getElementById('n8n-chat')
    const toggleEl = document.querySelector('.chat-window-toggle')

    if (chatEl && toggleEl) {
      toggleEl.innerHTML = `
        <img src="/src/assets/sage_logo.png" alt="S.A.G.E. Logo" width="80" height="80" />
      `
      observer.disconnect(); // Done observing
    }
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true
  })
});

watch(campaign, (newVal) => {
  if (newVal?.name) {
    globalStore.updateTabTitle(newVal?.name);
  }
});

</script>
<style>
  /* Force chat window to fill its parent */
  .chat-window-wrapper .chat-window {
    width: 100vw !important;
    height: 100vh !important;
  }
  .chat-window-toggle {
    background-color: black !important;
  }
</style>
