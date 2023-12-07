<template>
  <h1>Create a Character</h1>

  <div class="professions">
    <div class="card m-2" v-for="(profession, idx) in professionList" :key="profession">
      <img :src="`/professions/${profession.name.toLowerCase()}.png`" class="card-img-top" :alt="`image of ${profession.name}`">
      <div class="card-body">
        <h4 class="card-title">{{ profession.name }}</h4>
        <p class="card-text">{{profession.description}}</p>
        <button type="button" @click="createCharacter(profession.name)" class="btn btn-dark">Create a {{ profession.name }}</button>
      </div>
    </div>
  </div>

  <div class="modal" tabindex="-1" id="createCharacterModal" ref="confirmDialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Create a Character</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Are you sure you want to create a new character?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-dark" @click="">Create</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Profession } from '@/enums/profession';
import { onMounted, ref } from 'vue';
import * as bootstrap from 'bootstrap';
import { useGlobalStore } from '@/stores/globalStore';
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
import { getProfessions } from '@/services/lookupTableService';

const globalStore = useGlobalStore();
const router = useRouter();
const confirmDialog = ref<any>(null);
const professionChoice = ref<any>(null);
let createCharacterModal: any;
const professionList = ref();
const isAuthenticated = ref(false);

const getProfessionList = async () => {
  const list = await getProfessions();
  professionList.value = list;
}

getProfessionList();

onMounted(async () => {
  isAuthenticated.value = await globalStore.isAuthenticated();
  if (confirmDialog.value) {
    createCharacterModal = new bootstrap.Modal("#createCharacterModal");

    confirmDialog.value.addEventListener('show.bs.modal', (event: any) => {
      const modalBodyText = confirmDialog.value.querySelector('.modal-body p')

      modalBodyText.textContent = `Are you sure you want to create a ${professionChoice.value}?`;
    });
  }
});

function confirmCreate(profession: Profession) {
  if (isAuthenticated.value) {
    professionChoice.value = profession;
    createCharacterModal.show();
  }
  else {
    toast("You must be logged in to create a character.");
  }
}

function createCharacter(profession: string) {
  router.push({ name: "character", params: { id: "new-character", profession: profession } });
}


</script>

<style scoped lang="scss">
  .professions {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    
    .card-img-top {
      margin: auto;
      max-width: 140px;
    }
  }

 

  @media(min-width: 800px) {
    .professions {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  }

</style>