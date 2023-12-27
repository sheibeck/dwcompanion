<template>
  <h1>Create a Character</h1>

  <div class="professions container-md">
    <div class="card m-1 profession d-flex flex-md-row p-1" v-for="(profession, idx) in professionList" :key="profession">
      <div class="align-self-center">
        <div>
          <img loading="lazy" :src="`/professions/${profession.name.toLowerCase()}.png`" style="min-height: 190px;" class="" :alt="`image of ${profession.name}`">
        </div>
        <div class="d-flex justify-content-center mt-2">
          <button type="button" @click="createCharacter(profession.name)" class="btn btn-secondary">
            <img loading="lazy" src="@/assets/plus-solid.svg" alt="plus icon" class="filter-white" /> Create a {{ profession.name }}
          </button>
        </div>
      </div>
      <div class="card-body">
        <h2 class="card-title">{{ profession.name }}</h2>
        <div class="card-text">
          <VueShowdown :markdown="profession.description" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { getProfessions } from '@/services/lookupTableService';
import { VueShowdown } from 'vue-showdown';
import { onMounted, ref } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';
import { useAuthenticator } from '@aws-amplify/ui-vue';

const router = useRouter();
const professionList = ref();
const globalStore = useGlobalStore();
const auth = useAuthenticator();

const getProfessionList = async () => {
  const list = await getProfessions();
  professionList.value = list;
}

onMounted(async () => {
  const isAuthenticated = await globalStore.isAuthenticated();
  getProfessionList();
})

async function createCharacter(profession: string) {
  await router.push({ name: "character", params: { id: "new-character", profession: profession } });
}

</script>

<style scoped lang="scss">
  .professions {
    .profession {
      font-size: 1.1em;
      background: linear-gradient(to bottom, #FDF8E9, #fff);
    }
  }

 

  @media(min-width: 1024px) {
    .professions {
     
      .profession {
        
      }
    }
  }

</style>