<template>
  <Character :character-id="characterId" />
</template>

<script setup lang="ts">
import Character from '@/components/CharacterDetail.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const characterId = ref<any>(route.params.id);

</script>

<style scoped lang="scss">
</style>