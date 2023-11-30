<template>
    <div>
        <!-- Your page content goes here -->
        <h1>Characters</h1>

        <div v-if="hasCharacters">
            <p>A List of Characters</p>
        </div>
        <div v-else>
            <button type="button" class="btn btn-secondary" @click="createCharacter()">Create a Character</button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, onMounted, ref } from 'vue';
    import { generateClient } from 'aws-amplify/api';
    import * as queries from '@/graphql/queries';

    const client = generateClient();
    const characterList = ref<any>(null);
    const hasCharacters = computed(() => characterList.value?.length > 0);

    onMounted(async () => {
        characterList.value = getCharacterList();
    });

    // Fetch a single record by its identifier
    const getCharacterList = async () => {
        const result = await client.graphql({
            query: queries.listCharacters,
            variables: {
                filter: {
                    userId: {
                        eq: '1'
                    }
                }
            }
        });
        return result;
    }

    const createCharacter = () => {
        alert("create a character!");
    }
</script>