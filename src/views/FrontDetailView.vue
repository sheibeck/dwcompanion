<template>
  <div class="d-flex">
      <h1>Fronts</h1>
      <div>
        <button type="button" class="m-1 btn btn-secondary" @click="generateFrontDescription('Adventure')">Create Adventure Front</button>
        <button type="button" class="m-1 btn btn-secondary" @click="generateFrontDescription('Campaign')">Create Campaign Front</button>
      </div>
  </div>

  <div class="container-md">
    <div class="form-check">
      <input class="form-check-input" type="radio" name="frontCampaign" value="Campaign" v-model="front.type" id="frontCampaign">
      <label class="form-check-label" for="frontCampaign">
        Campaign
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="frontAdventure" value="Adventure" v-model="front.type" id="frontAdventure" checked>
      <label class="form-check-label" for="frontAdventure">
        Adventure
      </label>
    </div>
    <div class="input-group mb-2 pe-md-2">
        <span class="input-group-text text-dark" id="name">Name</span>
        <input type="text" class="form-control text-dark" aria-label="Name" aria-describedby="name"
            v-model="front.name">
    </div>
    <div class="editor">
        <div v-if="!isEditing" class="d-flex edit-controls open">
            <VueShowdown :markdown="front.description" class="description" />
            <div class="edit-controls closed d-flex mt-0">
                <button class="btn btn-link d-print-none" type="button" @click="isEditing = true">
                    <img src="@/assets/pencil-solid.svg" alt="edit description"/>
                </button>
            </div>
            <VueSpinnerHourglass v-if="creatingFront" />
        </div>

        <div v-if="isEditing" class="d-flex d-print-none edit-controls open">
            <textarea type="text" class="form-control from-control-sm" ref="description" :rows="20" v-model="front.description"></textarea>

            <div class="edit-controls d-flex">
                <button class="btn btn-link" type="button" @click="isEditing=false">
                    <img src="@/assets/floppy-disk-solid.svg" alt="save description"/>
                </button>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { generateDungeonWorldFront, getFront } from '@/services/frontsService';
import { VueSpinnerHourglass } from 'vue3-spinners';
import { useGlobalStore } from '@/stores/globalStore';
import { FrontType } from '@/enums/frontType';
import { VueShowdown } from 'vue-showdown';

const globalStore = useGlobalStore();
const route = useRoute();
const frontId = ref<any>(route.params.id);
const isEditing = ref(false);

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

onMounted(() => {
  setupFront();
})

async function setupFront() {
    const userId = globalStore.getUserId();

    if (frontId === "new-front") {
        const newFront = {
          type: FrontType.Adventure,
          name: "New Front",
          description: frontTemplate,
          userId: userId,
        }
        return;
    }

    front.value = await getFront(frontId);
} 


const promptApiKey = () => {
  const userApiKey = prompt('Enter your API key:');

  if (userApiKey) {
    apiKey.value = userApiKey;
    localStorage.setItem('dungeonworld_fronts_api_key', userApiKey);
  }
}

async function generateFrontDescription(frontType: String) {
  isEditing.value = false;

  if (apiKey.value == null) {
    promptApiKey();
  }
  else {
    creatingFront.value = true;
    front.value.description = "Generating front, please do not navigate away from this page ... ";

    try {
      const frontMd = await generateDungeonWorldFront(frontType);
      front.value.description = frontMd;
      front.value.name = getFrontNameFromMarkdown(frontMd);
    }
    catch(ex: any) {
      front.value.description = `There was an error generating your front: ${ex}`;
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

</script>

<style scoped lang="scss">
</style>