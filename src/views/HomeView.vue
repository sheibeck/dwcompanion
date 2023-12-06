<template>
  <h1>Create a Character</h1>

  <div class="professions">
    <div class="card m-2" v-for="(profession, idx) in profList" :key="profession">
      <div class="card-body">
        <h5 class="card-title">{{ profession }}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/" class="btn btn-primary">Create a {{ profession }}</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Profession } from '@/enums/profession';
import { computed, ref } from 'vue';

const profList: any = computed(() => {
  const profList = [];
  for (const prof in Profession) {
    if (prof !== Profession.ANY.toString().toUpperCase()) {
      profList.push(prof);
    }
  }
  return profList;
});

</script>

<style scoped lang="scss">
  .professions {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  @media(min-width: 800px) {
    .professions {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  }

</style>