<template>
  <h1>Create a Character</h1>

  <div class="professions">
    <div class="card m-2 profession" v-for="(profession, idx) in professionList" :key="profession">
      <div class="">
        <div>
          <img :src="`/professions/${profession.name.toLowerCase()}.png`" class="img-fluid" :alt="`image of ${profession.name}`">
        </div>
        <div class="d-flex justify-content-center mt-2">
          <button type="button" @click="createCharacter(profession.name)" class="btn btn-dark">Create a {{ profession.name }}</button>
        </div>
      </div>
      <div class="card-body">
        <h4 class="card-title">{{ profession.name }}</h4>
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

const router = useRouter();
const professionList = ref();
const globalStore = useGlobalStore();

const getProfessionList = async () => {
  const list = await getProfessions();
  professionList.value = list;
}

onMounted(async () => {
  const isAuthenticated = await globalStore.isAuthenticated();
  if (!isAuthenticated) {
    await router.push({name: "login"});
  }
  else {
    getProfessionList();
  }
})


async function createCharacter(profession: string) {
  await router.push({ name: "character", params: { id: "new-character", profession: profession } });
}

</script>

<style scoped lang="scss">


  .professions {
    display: grid;
    grid-template-columns: 1fr;

    .profession {
      display: grid;
      grid-template-columns: auto 1fr;

      font-size: 1.1em;
    }
  }

 

  @media(min-width: 1024px) {
    .professions {
      grid-template-columns: repeat(2, 1fr);
      .profession {
        
      }
    }
  }

</style>