<template>
    <div>
        <!-- Your page content goes here -->
        <h1>Characters</h1>

        <div v-if="hasCharacters">
            <div v-for="character in characterList">
                {{ character.Character.name }} {{ character.Profession.name }}
            </div>
        </div>

        <button type="button" class="btn btn-secondary" @click="createCharacter()">Create a Character</button>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { generateClient } from 'aws-amplify/api';
import * as queries from '@/graphql/queries';
import * as mutations from '@/graphql/mutations';
import { Character } from '@/models';
import { useGlobalStore } from '@/stores/globalStore';

const globalStore = useGlobalStore();

const client = generateClient();
const characterList = ref<any>([]);
const hasCharacters = computed(() => characterList.value?.length > 0);

onMounted(async () => {
    await getCharacterList();
});

// Fetch a single record by its identifier
const getCharacterList = async () => {
    const result = await client.graphql({
        query: queries.listCharacters,
        variables: {
            filter: {
                userId: {
                    eq: globalStore.getUserId
                }
            }
        }
    });
    
    const characters = result.data.listCharacters.items;

    const charWithProfessions: any = [];
    
    characters.forEach(async (character) => {
        const cpId = character.id;
        const charProfession = await client.graphql({
            query: queries.getCharacterProfession,
            variables: {
                id: character.characterCharacterProfessionId ?? ""
            }
        });

        const item = charProfession.data.getCharacterProfession
        characterList.value.push(item);

    });

}


const createCharacter = async () => {
    const character = new Character({
        userId: globalStore.getUserId,
        name: 'Fred Fredricks'
    });
    
    const characterDetails = {
        userId: globalStore.getUserId,
        name: 'Fred Fredricks',
        characterClassId: "e12JxbH91D3wdroqc5Nsei"
    };

    const newCharacter = await client.graphql({
        query: mutations.createCharacter,
        variables: { input: characterDetails }
    });
}
</script>