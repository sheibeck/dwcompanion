<template>
    <div>
        <CharacterList v-if="!isViewingCharacter" />
        <CharacterInfo  v-else :characterId="characterId" />
    </div>
</template>

<script setup lang="ts">
    import { computed, ref } from 'vue';
    import CharacterList from '@/components/CharacterList.vue';
    import CharacterInfo from '@/components/CharacterInfo.vue';

    const characterId = ref("");
    const isViewingCharacter = computed(() => characterId.value.length > 0);
</script>