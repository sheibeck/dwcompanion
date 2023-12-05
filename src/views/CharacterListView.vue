<template>
    <CharacterList />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';
import { useAuthenticator } from '@aws-amplify/ui-vue';
import CharacterList from '@/components/CharacterList.vue';
  
const globalStore = useGlobalStore();
const auth = useAuthenticator();
const userId = ref<string|null>(null);

onMounted(async () => {
    userId.value = await globalStore.getUserId();
});

</script>

<style scoped lang="scss">
</style>