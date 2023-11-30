<template>
    <div>
        <!-- Your page content goes here -->
        <h1>Character Info</h1>
        <div>Information about a specific character</div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { generateClient } from 'aws-amplify/api';
import * as queries from '@/graphql/queries';

const { characterId } = defineProps<{
    characterId: string;
}>();

const client = generateClient();
const character = ref<any>(null);

onMounted(async () => {
  character.value = getCharacter();
});

// Fetch a single record by its identifier
const getCharacter = async () => {
    const character = await client.graphql({
        query: queries.getCharacter,
        variables: { id: characterId }
     });

    return character;
}

</script>