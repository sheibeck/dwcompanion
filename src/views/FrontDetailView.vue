<template>
  <h1 class="d-print-none d-flex">
    Front
    <div v-if="isOwner">
        <a href="/fronts/" class="btn btn-secondary ms-2"><img src="@/assets/book-open-solid.svg" alt="plus icon" class="filter-white" /> My Fronts</a>
    </div>
    <div v-if="isOwner">
        <a href="https://chatgpt.com/g/g-KGuVuFdDg-dungeon-world-fronts" class="btn btn-outline-secondary ms-2">Create with AI</a>
    </div>
    <button v-if="isOwner" class="btn btn-secondary text-light ms-auto" @click="settingsModal.show()">
        <img src="@/assets/gear-solid.svg" alt="share icon" class="filter-white" /> Settings
    </button>
  </h1>

  <div class="container-md front" v-if="front">
    <div class="d-print-none d-flex justify-content-center" v-if="isGuest"> 
        <span class="text-danger">
            You must <a href="/login">sign in</a> to save fronts. While not logged in, data you enter will be lost if you navigate away from this page.
        </span>
    </div>
    
    <div class="gradient-background"></div>
    <div class="page">
      <div class="sheet-label">
          <div class="banner-top">
              <img loading="lazy" src="@/assets/page-banner-top.png" alt="page banner top" />
          </div>
          <div class="banner-middle">
              <div class="rotated-text">
                  Front
              </div>
          </div>
          <div class="banner-bottom">
              <img loading="lazy" src="@/assets/page-banner-bottom.png" alt="page banner bottom" />
              <img loading="lazy" class="banner-bottom-fill" src="@/assets/page-banner-bottom-fill.png" alt="page banner bottom fill" />
          </div>
      </div>
      <div class="front-detail">
        <div class="mt-3 front-content">
          <div v-if="!isEditing" class="d-flex">
              <VueShowdown :markdown="front.description" class="description w-100" />
              <div class="edit-controls closed d-flex mt-0 align-self-start" v-if="isOwner">
                  <button class="btn btn-link d-print-none" type="button" @click="isEditing = true">
                      <img src="@/assets/pencil-solid.svg" alt="edit description"/>
                  </button>
              </div>
          </div>

          <div v-if="isEditing" class="d-flex d-print-none">
              <textarea type="text" class="form-control from-control-sm" ref="description" :rows="20" v-model="front.description"></textarea>

              <div class="d-flex align-self-start">
                  <button class="btn btn-link" type="button" @click="saveDescription();update()">
                      <img src="@/assets/floppy-disk-solid.svg" alt="save description"/>
                  </button>
              </div>
          </div>
        </div>
      </div>
    </div>

    <div class="d-print-none action-bar d-flex justify-content-end p-1 border-top">
        <a href="/fronts" type="button" class="btn btn-danger me-2">Close</a>
        <button type="button" class="btn btn-secondary me-2" @click="print()">Print</button>
        <button v-if="isOwner" type="button" class="btn btn-dark" @click="save()">Save</button>
    </div>
  </div>

    <!-- Modal -->
    <div class="modal fade" ref="settingsModalEl" tabindex="-1" aria-labelledby="settingsModalLabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="settingsModalLabel">Front Settings</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="meta-data" v-if="front">
                  <div class="d-flex flex-wrap pb-1">
                    <label class="me-2">Front Type:</label>
                    <div class="form-check me-2">
                      <input class="form-check-input" type="radio" name="front" value="Campaign" v-model="front.type" id="frontCampaign">
                      <label class="form-check-label" for="frontCampaign">
                        Campaign
                      </label>
                    </div>
                    <div class="form-check me-2">
                      <input class="form-check-input" type="radio" name="front" value="Adventure" v-model="front.type" id="frontAdventure">
                      <label class="form-check-label" for="frontAdventure">
                        Adventure
                      </label>
                    </div>
                  </div>
                  
                  <div class="input-group mb-2 pe-md-2">
                      <span class="input-group-text text-dark" id="name">Name</span>
                      <input type="text" class="form-control text-dark" disabled="true" aria-label="Name" aria-describedby="name"
                          v-model="front.name">
                      <small>Name will auto populate from frist line in your Front description. Make sure it starts with # </small>
                  </div>

                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" v-model="front.active" id="active">
                    <label class="form-check-label" for="active">
                      Is Active?
                    </label>
                  </div>

                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" v-model="front.resolved" id="resolved">
                    <label class="form-check-label" for="resolved">
                      Is Resolved?
                    </label>
                  </div>
                  
                  <hr />

                  <button type="button" class="m-1 btn btn-secondary" @click="generateFrontDescription()">Generate {{ front.type }} Front</button>
                  <div v-if="creatingFront" class="d-flex">
                    <span>Generating front, please do not navigate away from this page ... </span>
                    <VueSpinnerHourglass class="w-25" v-if="creatingFront" />
                  </div>
                 
                  <div class="bg-warning w-100 small p-1 rounded">The generate front button is experimental and will require you to have a ChatGPT Api Key.</div>
                </div>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" @click="settingsModal.hide()">Close</button>
                  <button type="button" class="btn btn-dark" @click="save()">Save</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { generateDungeonWorldFront, getFront, createFront, updateFront } from '@/services/frontService';
import { VueSpinnerHourglass } from 'vue3-spinners';
import { useGlobalStore } from '@/stores/globalStore';
import { FrontType } from '@/enums/frontType';
import { VueShowdown } from 'vue-showdown';
import { toast } from 'vue3-toastify';
import { getApiKey } from '@/services/openAiService';
import Modal from 'bootstrap/js/dist/modal';

const emit = defineEmits(['openUserSettingsModal']);

const globalStore = useGlobalStore();
const route = useRoute();
const router = useRouter();
const frontId = ref<any>(route.params.id);
const isEditing = ref(false);
const isAuthenticated = ref(false);
const userId = ref<null|String>(null);

const front = ref();
const creatingFront = ref(false);
const settingsModalEl = ref();
const settingsModal = ref();

const isOwner = computed(()=> {  
    return userId.value !== null && (front.value?.userId === userId.value || frontId.value == "new-front");
});

const isGuest = computed(()=> {
  return userId.value == null;
});

const frontTemplate = `
# Title
## Danger Name
  * __Impulse__: Impulse description
  * __Grim Portents__: 1-3 for adventure, 3-5 for campaign 
    - [ ] Portent
    - [ ] Portent
    - [ ] Etc.
  * __Impending Doom__: Impending doom description/example
  * __Moves__: a list of moves
    * Move
    * Move
    * etc
## Stakes
  1. Stake
  2. Stake
  3. Stake
## Cast
  * __cast member__: description and a leading body part
`

onMounted(async () => {
  isAuthenticated.value = await globalStore.isAuthenticated();
  userId.value = await globalStore.getUserId();

  settingsModal.value = new Modal(settingsModalEl.value, {
      keyboard: false
  });

  await setupFront();
})

watch(front, (newVal) => {
  if (newVal?.name) {
    globalStore.updateTabTitle(newVal?.name);
  }
});

async function setupFront() {
    const userId = await globalStore.getUserId();

    if (frontId.value === "new-front") {
        const newFront = {
          type: FrontType.Adventure,
          name: "New Front",
          description: frontTemplate,
          userId: userId,
        }
        front.value = newFront;
        
        settingsModal.value.show();
        return;
    }
    
    front.value = await getFront(frontId.value);
} 

async function save() {
  saveDescription();
  
  const authenticated = await globalStore.isAuthenticated();
  if (authenticated && !front.value.id) {
      const userId = await globalStore.getUserId();
      front.value.userId = userId;

      if (!front.value.name || front.value.name.trim().length === 0) {
          toast("You must give your front a name.")
          return;
      }

      const newFrontId = await createFront(front.value);
      if (newFrontId) {
        front.value.id = newFrontId;
        
        toast(`Created ${front.value.type} front: ${front.value.name}.`)

        setTimeout(async () => {
            await router.push({ name: "front", params: { id: newFrontId }, replace: true });
        }, 2000);
          
      }
      else {
          toast(`Failed to create front!`);
      }
  }

  else {
      await update();
  }
}

function saveDescription() {
  isEditing.value=false;
  front.value.name = getFrontNameFromMarkdown(front.value.description);
}

async function update() {
    const updatedFront = await updateFront(front.value);

    if (updatedFront) {
        toast(`Front saved.`);
    }
    else {
        toast('There was a problem saving front!');
    }
}

async function generateFrontDescription() {
  const confirmed = confirm("Are you sure you want to generate a front description?");
  if (!confirmed) {
    return;
  }

  isEditing.value  = false;
  const frontType = front.value.type ?? FrontType.Adventure

  if (!getApiKey()) {
    emit('openUserSettingsModal');
  }
  else {
    creatingFront.value = true;

    try {
      const frontMd = await generateDungeonWorldFront(frontType);
      front.value.description = frontMd;
      front.value.name = getFrontNameFromMarkdown(frontMd);
    }
    catch(ex: any) {
      toast(`There was an error generating your front: ${ex}`);
    }

    creatingFront.value = false;
  }
}

function getFrontNameFromMarkdown(markdownText: string): string | null {
  const lines = markdownText.split('\n');

  for (const line of lines) {
    const trimmedLine = line.trim();
    if (trimmedLine !== '') {
      return trimmedLine.replace("#", "").trim();
    }
  }

  return null; // If the Markdown text is empty or only contains empty lines
}

function print() {
  window.print();
}
</script>

<style scoped lang="scss">

.front {
  .gradient-background {
      background: linear-gradient(to bottom, lightgray, #fff);
      height: 400px;
      width: 100%;
      position:absolute;
      left: 0;
      margin-top: -5px;
      z-index: -1;
  }

  .page {
    background-color: transparent;
    display: grid;
    grid-template-columns: 1fr;

    .sheet-label {
      display: none;
      grid-template-rows: auto 600px 1fr;
      font-weight: 700;
      font-family: 'Cinzel Decorative', serif;
      height: 100%;
      max-height: 1012px;

      .banner-middle {
          .rotated-text {
              width: 600px;
              transform: translate(-43%, 270%) rotate(-90deg);
              font-size: 60px;
              text-align: center;
          }
      }

      .banner-bottom {
          height: 100%;
          width: 70px;
          margin-top: -30px;
          
          img {
              margin: 0px;
          }

          &-fill {
              height: 100%;
              width: 79px;
          }
      }
    }
  }

  @media(min-width: 800px) {
    .page {
      grid-template-columns: 80px 1fr;
      grid-column-gap: 15px;
      
      .sheet-label {
          display: grid;
      }
    }  
  }
}

@media print {
    .front {   
      margin: 0px;
      padding: 0px;

      .page {
        padding-top: 10px;
        height: 1012px;

        p, ul, ol, h2 {
          page-break-inside: avoid;
        }

        .front-content {
          margin-top: 0px !important;
        }
      }
    }
}
</style>