<template>
  <h1>Create a Character</h1>

  <div class="professions">
    <div class="card m-2" v-for="(profession, idx) in professionList" :key="profession">
      <img :src="`/professions/${profession.name.toLowerCase()}.png`" class="card-img-top" :alt="`image of ${profession.name}`">
      <div class="card-body">
        <h4 class="card-title">{{ profession.name }}</h4>
        <p class="card-text">{{profession.description}}</p>
        <button type="button" @click="confirmCreate(profession.name)" class="btn btn-dark">Create a {{ profession.name }}</button>
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
        <button type="button" class="btn btn-dark" @click="createCharacter()">Create</button>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { Profession } from '@/enums/profession';
import { onMounted, ref } from 'vue';
import * as bootstrap from 'bootstrap';
import { createNewCharacter } from '@/services/characterService';
import { useGlobalStore } from '@/stores/globalStore';
import { useRouter } from 'vue-router';
import * as notify from 'vue3-toastify';
import { getProfessions } from '@/services/lookupTableService';

const globalStore = useGlobalStore();
const router = useRouter();
const confirmDialog = ref<any>(null);
const professionChoice = ref<any>(null);
let createCharacterModal: any;
const professionList = ref();
const isAuthenticated = ref(false);

const getProfessionList = async () => {
  if (isAuthenticated.value) {
    const list = await getProfessions();
    professionList.value = list;
  }
  else {
    const profs: { name: string, description: string }[] = Object.values(Profession).map((value) => {
      return {
        name: value.toString(),
        description: "",
      };
    }).filter( p => p.name !== "Any");
    professionList.value = profs;
  }
};
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
    notify.toast("You must be logged in to create a character.");
  }
}

async function createCharacter() {
  const userId = globalStore.currentUser;

  if (isAuthenticated.value && userId && professionChoice.value) {
    const character:any = await createNewCharacter(userId, professionChoice.value);

    if (character != null) {
      notify.toast("Character created.");

      professionChoice.value = null;
      
      router.push({ name: "character", params: { id: character.id } });
    }
    else {
      notify.toast("Failed to created character!");
    }
  }
  else {
    notify.toast("You must be logged in to create a character.");
  }

  createCharacterModal.hide();
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