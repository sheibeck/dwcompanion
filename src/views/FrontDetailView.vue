<template>
  <h1 class="d-print-none">Front</h1>

  <div class="container-md" v-if="front">
    <div class="d-md-flex border-bottom">
      <div class="d-flex flex-wrap">
        <div class="form-check d-print-none pb-2">
          <input class="form-check-input" type="radio" name="frontCampaign" value="Campaign" v-model="front.type" id="frontCampaign">
          <label class="form-check-label" for="frontCampaign">
            Campaign
          </label>
        </div>
        <div class="form-check d-print-none">
          <input class="form-check-input" type="radio" name="frontAdventure" value="Adventure" v-model="front.type" id="frontAdventure" checked>
          <label class="form-check-label" for="frontAdventure">
            Adventure
          </label>
        </div>
      </div>
      
      <div class="input-group mb-2 pe-md-2  d-print-none">
          <span class="input-group-text text-dark" id="name">Name</span>
          <input type="text" class="form-control text-dark" aria-label="Name" aria-describedby="name"
              v-model="front.name">
      </div>
       
      <div class="d-print-none">
        <button type="button" class="m-1 btn btn-secondary" @click="generateFrontDescription()">Generate {{ front.type }} Front</button>
        <div v-if="creatingFront" class="d-flex">
          <span>Generating front, please do not navigate away from this page ... </span>
          <VueSpinnerHourglass v-if="creatingFront" />
        </div>
      </div>
    </div>
    <div class="mt-3">
        <div v-if="!isEditing" class="d-flex edit-controls open">
            <VueShowdown :markdown="front.description" class="description" />
            <div class="edit-controls closed d-flex mt-0 align-self-start">
                <button class="btn btn-link d-print-none" type="button" @click="isEditing = true">
                    <img src="@/assets/pencil-solid.svg" alt="edit description"/>
                </button>
            </div>
        </div>

        <div v-if="isEditing" class="d-flex d-print-none edit-controls open">
            <textarea type="text" class="form-control from-control-sm" ref="description" :rows="20" v-model="front.description"></textarea>

            <div class="edit-controls d-flex align-self-start">
                <button class="btn btn-link" type="button" @click="saveDescription()">
                    <img src="@/assets/floppy-disk-solid.svg" alt="save description"/>
                </button>
            </div>
        </div>
    </div>

    <div class="d-print-none action-bar d-flex justify-content-end border-top p-1 mt-5" v-if="isAuthenticated">
        <a href="/fronts" type="button" class="btn btn-danger me-2">Close</a>
        <button type="button" class="btn btn-secondary me-2" @click="print()">Print</button>
        <button type="button" class="btn btn-dark" @click="save()">Save</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { generateDungeonWorldFront, getFront, createFront, updateFront } from '@/services/frontsService';
import { VueSpinnerHourglass } from 'vue3-spinners';
import { useGlobalStore } from '@/stores/globalStore';
import { FrontType } from '@/enums/frontType';
import { VueShowdown } from 'vue-showdown';
import { toast } from 'vue3-toastify';


const globalStore = useGlobalStore();
const route = useRoute();
const router = useRouter();
const frontId = ref<any>(route.params.id);
const isEditing = ref(false);
const isAuthenticated = ref(false);

const front = ref();
const creatingFront = ref(false);
const apiKey = ref<string | null>(localStorage.getItem('dungeonworld_fronts_api_key') || null);

const frontTemplate = `
# Title
## Danger Name
  * __Impulse__: Impulse description
  * __Moves__:
    * Move
    * Move
    * etc
  * __Impending Doom__: Impending doom description/example
## Grim Portents
  1. Portent
  2. Portent
  3. Etc
## Stakes
  1. Stake
  2. Stake
  3. Stake
## Cast
  __name__: description
`

onMounted(async () => {
  isAuthenticated.value = await globalStore.isAuthenticated();
  await setupFront();
})

async function setupFront() {
    const userId = globalStore.getUserId();

    if (frontId.value === "new-front") {
        const newFront = {
          type: FrontType.Adventure,
          name: "New Front",
          description: frontTemplate,
          userId: userId,
        }
        front.value = newFront;
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


const promptApiKey = () => {
  const userApiKey = prompt('You must have a ChatGPT Api Key. Enter your API key here to use this feature:');

  if (userApiKey) {
    apiKey.value = userApiKey;
    localStorage.setItem('dungeonworld_fronts_api_key', userApiKey);
  }
}

async function generateFrontDescription() {
  const confirmed = confirm("Are you sure you want to generate a front description?");
  if (!confirmed) {
    return;
  }

  isEditing.value  = false;
  const frontType = front.value.type ?? FrontType.Adventure

  if (apiKey.value == null) {
    promptApiKey();
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
      return trimmedLine.replace("#", "");
    }
  }

  return null; // If the Markdown text is empty or only contains empty lines
}

function print() {
  window.print();
}

</script>

<style scoped lang="scss">
</style>