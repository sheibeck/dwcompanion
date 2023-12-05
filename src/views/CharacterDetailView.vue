<template>
  <Character :character-id="characterId" />
</template>

<script setup lang="ts">
import Character from '@/components/CharacterDetail.vue';
import { useGlobalStore } from '@/stores/globalStore';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const globalStore = useGlobalStore();
const route = useRoute();
const characterId = ref<any>(route.params.id);

onMounted(async () => {
  await globalStore.getUserId();
});

</script>

<style scoped lang="scss">
</style>