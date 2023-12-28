<template>
  <h1 class="d-print-none d-flex">
    Steading
    <div v-if="isOwner">
        <a href="/steadings/" class="btn btn-secondary ms-2"><img src="@/assets/tree-city-solid.svg" alt="plus icon" class="filter-white" /> My Steadings</a>
    </div>
  </h1>

  <div class="container-md steading" v-if="steading">
    <div class="d-print-none d-flex justify-content-center" v-if="isGuest"> 
        <span class="text-danger">
            You must <a href="/login">sign in</a> to save steadings. While not logged in, data you enter will be lost if you navigate away from this page.
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
                  Steading
              </div>
          </div>
          <div class="banner-bottom">
              <img loading="lazy" src="@/assets/page-banner-bottom.png" alt="page banner bottom" />
              <img loading="lazy" class="banner-bottom-fill" src="@/assets/page-banner-bottom-fill.png" alt="page banner bottom fill" />
          </div>
      </div>
      <div class="steading-detail">
        <div class="meta-data d-print-none border-bottom border-black pb-2">
          <div class="d-flex flex-wrap pb-1">
            <div class="form-check me-2">
              <input class="form-check-input" type="radio" name="steading" value="Village" v-model="steading.type" id="steadingVillage">
              <label class="form-check-label" for="steadingVillage">
                Village
              </label>
            </div>
            <div class="form-check me-2">
              <input class="form-check-input" type="radio" name="steading" value="Town" v-model="steading.type" id="steadingTown">
              <label class="form-check-label" for="steadingTown">
                Town
              </label>
            </div>
            <div class="form-check me-2">
              <input class="form-check-input" type="radio" name="steading" value="Keep" v-model="steading.type" id="steadingKeep">
              <label class="form-check-label" for="steadingKeep">
                Keep
              </label>
            </div>
            <div class="form-check me-2">
              <input class="form-check-input" type="radio" name="steading" value="City" v-model="steading.type" id="steadingCity">
              <label class="form-check-label" for="steadingCity">
                City
              </label>
            </div>
          </div>
          
          <div class="input-group mb-2 pe-md-2">
              <span class="input-group-text text-dark" id="name">Name</span>
              <input type="text" class="form-control text-dark" aria-label="Name" aria-describedby="name"
                  v-model="steading.name">
          </div>
          
          <div class="" v-if="isOwner">
            <button type="button" class="m-1 btn btn-secondary" @click="generateSteadingDescription()">Generate a {{ steading.type }}</button>
            <div v-if="creatingSteading" class="d-flex">
              <span>Generating steading, please do not navigate away from this page ... </span>
              <VueSpinnerHourglass class="w-25" v-if="creatingSteading" />
            </div>
          </div>

          <div class="bg-warning w-100 small p-1 rounded">The generate steading button is experimental and will require you to have a ChatGPT Api Key.</div>
        </div>

        <div class="mt-3 steading-content">
          <div v-if="!isEditing" class="d-flex">
              <VueShowdown :markdown="steading.description" class="description w-100" />
              <div class="edit-controls closed d-flex mt-0 align-self-start" v-if="isOwner">
                  <button class="btn btn-link d-print-none" type="button" @click="isEditing = true">
                      <img src="@/assets/pencil-solid.svg" alt="edit description"/>
                  </button>
              </div>
          </div>

          <div v-if="isEditing" class="d-flex d-print-none">
              <textarea type="text" class="form-control from-control-sm" ref="description" :rows="20" v-model="steading.description"></textarea>

              <div class="d-flex align-self-start">
                  <button class="btn btn-link" type="button" @click="saveDescription()">
                      <img src="@/assets/floppy-disk-solid.svg" alt="save description"/>
                  </button>
              </div>
          </div>
        </div>
      </div>
    </div>

    <div class="d-print-none action-bar d-flex justify-content-end p-1 border-top">
        <a href="/steadings" type="button" class="btn btn-danger me-2">Close</a>
        <button type="button" class="btn btn-secondary me-2" @click="print()">Print</button>
        <button v-if="isOwner" type="button" class="btn btn-dark" @click="save()">Save</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { generateDungeonWorldSteading, getSteading, createSteading, updateSteading } from '@/services/steadingService';
import { VueSpinnerHourglass } from 'vue3-spinners';
import { useGlobalStore } from '@/stores/globalStore';
import { SteadingType } from '@/enums/steadingType';
import { VueShowdown } from 'vue-showdown';
import { toast } from 'vue3-toastify';
import { getApiKey } from '@/services/openAiService';
import { defineEmits } from 'vue';

const emit = defineEmits(['openUserSettingsModal']);
const globalStore = useGlobalStore();
const route = useRoute();
const router = useRouter();
const steadingId = ref<any>(route.params.id);
const isEditing = ref(false);
const isAuthenticated = ref(false);
const userId = ref<null|String>(null);

const steading = ref();
const creatingSteading = ref(false);

const isOwner = computed(()=> {  
    return userId.value !== null && (steading.value?.userId === userId.value || steadingId.value == "new-steading");
});

const isGuest = computed(()=> {
  return userId.value == null;
});

const steadingTemplate = `
# Steading Name
  * __Type__: Steading Type

### Tags
__Prosperity:__ (list any prosperity tags)
  * __Tag Name__: description of tag
  * __Tag Name__: description of tag
  * Etc.

__Population:__  (list any population tags)
  * __Tag Name__: description of tag
  * __Tag Name__: description of tag
  * Etc.

__Defenses:__  (list any defense tags)
  * __Tag Name__: description of tag
  * __Tag Name__: description of tag
  * Etc.

__Other:__  (list any other tags)
  * __Tag Name__: description of tag
  * __Tag Name__: description of tag
  * Etc.

### Notable NPCs
  * __NPC Name__: description
  * __NPC Name__: description
  * Etc.

### Nearby locations
List any locations, landmarks or other important things near this steadings location
  * __Location name__: location description
  * Etc.

### Problem
Choose one problem for this steading

### Custom Moves
List any custom moves appropriate to this steading
`

onMounted(async () => {
  isAuthenticated.value = await globalStore.isAuthenticated();
  userId.value = await globalStore.getUserId();
  await setupSteading();
})

async function setupSteading() {
    const userId = await globalStore.getUserId();

    if (steadingId.value === "new-steading") {
        const newSteading = {
          type: SteadingType.Village,
          name: "New Steading",
          description: steadingTemplate,
          userId: userId,
        }
        steading.value = newSteading;
        return;
    }
    
    steading.value = await getSteading(steadingId.value);
} 


async function save() {
  saveDescription();
  
  const authenticated = await globalStore.isAuthenticated();
  if (authenticated && !steading.value.id) {
      const userId = await globalStore.getUserId();
      steading.value.userId = userId;

      if (!steading.value.name || steading.value.name.trim().length === 0) {
          toast("You must give your steading a name.")
          return;
      }

      const newSteadingId = await createSteading(steading.value);
      if (newSteadingId) {
          toast(`Created ${steading.value.type} steading: ${steading.value.name}.`)

          setTimeout(async () => {
              await router.push({ name: "steading", params: { id: newSteadingId }, replace: true });
          }, 2000);
          
      }
      else {
          toast(`Failed to create steading!`);
      }
  }

  else {
      await update();
  }
}

function saveDescription() {
  isEditing.value=false;
  steading.value.name = getSteadingNameFromMarkdown(steading.value.description);
}

async function update() {
    const updatedSteading = await updateSteading(steading.value);

    if (updatedSteading) {
        toast(`Steading saved.`);
    }
    else {
        toast('There was a problem saving steading!');
    }
}

async function generateSteadingDescription() {
  const confirmed = confirm("Are you sure you want to generate a steading description?");
  if (!confirmed) {
    return;
  }

  isEditing.value  = false;
  const steadingType = steading.value.type ?? SteadingType.Village

  if (!getApiKey()) {
    emit('openUserSettingsModal');
  }
  else {
    creatingSteading.value = true;

    try {
      const steadingMd = await generateDungeonWorldSteading(steadingType);
      steading.value.description = steadingMd;
      steading.value.name = getSteadingNameFromMarkdown(steadingMd);
    }
    catch(ex: any) {
      toast(`There was an error generating your steading: ${ex}`);
    }

    creatingSteading.value = false;
  }
}

function getSteadingNameFromMarkdown(markdownText: string): string | null {
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

.steading {
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
    
  
    .steading {   
      margin: 0px;
      padding: 0px;

      .page {
        padding-top: 10px;
        height: 1012px;

        p, ul, ol, h2 {
          page-break-inside: avoid;
        }

        .steading-content {
          margin-top: 0px !important;
        }
      }
    }
}
</style>