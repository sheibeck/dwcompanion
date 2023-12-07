<template>
    <div v-if="!character">
        Loading ...
    </div>
    <div v-else class="character container-fluid mt-3">
        <div class="page">
            <div class="sheet-label">
                <div class="banner-top">
                    <img src="@/assets/page-banner-top.png" alt="page banner top" />
                </div>
                <div class="banner-middle">
                    <div class="rotated-text">
                        The {{ character.profession.name }}
                    </div>
                </div>
                <div class="banner-bottom">
                    <img src="@/assets/page-banner-bottom.png" alt="page banner bottom" />
                    <img class="banner-bottom-fill" src="@/assets/page-banner-bottom-fill.png" alt="page banner bottom fill" />
                </div>
            </div>
            <div class="sheet-details">
                <Identity :character="character" />
                <div id="combat">
                    <Look :character="character" />
                    <Combat :character="character" />
                    <Alignment :character="character" />
                </div>
                <div id="ability-scores">
                    <div>
                        <AbilityScores :character="character" />
                        <Moves :character="character" :moveType="MoveType.STARTING_MOVES" />
                    </div>
                    <Bonds :character="character" />
                </div>
            </div>
        </div>

        <div class="d-print-none action-bar">
            <button type="button" @click="saveCharacter()">Save</button>
        </div>
    </div>

</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { generateClient } from 'aws-amplify/api';
import * as queries from '@/graphql/queries';
import { jsonCharacter } from '@/services/characterService';
import Identity from '@/components/CharacterDetail/Identity.vue';
import Look from '@/components/CharacterDetail/Look.vue';
import Combat from '@/components/CharacterDetail/Combat.vue';
import Alignment from '@/components/CharacterDetail/Alignment.vue';
import AbilityScores from '@/components/CharacterDetail/AbilityScores.vue';
import Bonds from '@/components/CharacterDetail/Bonds.vue';
import Moves from '@/components/CharacterDetail/Moves.vue';
import { MoveType } from '@/enums/moveType';
import * as lookupService from '@/services/lookupTableService';
import { Profession } from '@/enums/profession';
import { toast } from 'vue3-toastify';
import { createNewCharacter } from '@/services/characterService';
import { useGlobalStore } from '@/stores/globalStore';

const { characterId, characterProfession} = defineProps<{
    characterId: string;
    characterProfession: Profession | null;
}>();

const globalStore = useGlobalStore();
const client = generateClient();
const character = ref<any>(null);

onMounted(async () => {
    await setupCharacter();
});

async function setupCharacter() {
    if (characterId === "new-character" && characterProfession !== null) {
        await getNewCharacter();
        return;
    }

    character.value = await getCharacter(characterId);
}

async function getNewCharacter() {
    if (characterProfession) {
        const profLookupResult = await lookupService.getProfessionByName(characterProfession);
      
        if (profLookupResult[0]) {
            character.value = {
                "profession": profLookupResult[0],
            };
        }
        else {
            toast(`Could not find profession ${characterProfession}`);
        }
    }
}

async function saveCharacter() {
    if (!character.value.id) {
        const userId = await globalStore.getUserId();
        character.value.userId = userId;
        character.value.name = "Bob";
        createNewCharacter(character.value)
    }
}

// Fetch a single record by its identifier
const getCharacter = async (id: string) => {
    const { data, errors } = await client.graphql({
        query: queries.getCharacter,
        variables: { id: id }
    });

    const character = data.getCharacter;
    return jsonCharacter(character);
}
</script>

<style scoped lang="scss">
.character {
    .page {
        display: grid;
        grid-template-columns: auto;
        height: 1012px;
        break-inside: avoid;

       

        .sheet-label {
            display: none;
            grid-template-rows: auto 600px 1fr;
            font-weight: 700;
            font-family: 'Cinzel Decorative', serif;
            height: 100%;

            .banner-middle {
                .rotated-text {
                    width: 600px;
                    transform: translate(-43%, 270%) rotate(-90deg);
                    font-size: 60px;
                    text-align: center;
                }
            }

            .banner-bottom {
                height: 100%;
                width: 70px;
                margin-top: -35px;
                
                img {
                    margin: 0px;
                }

                &-fill {
                    height: 100%;
                    width: 79px;
                }
            }
        }
    }

    @media(min-width: 800px) {
        .page {
            display: grid;
            grid-template-columns: 80px 1fr;

            .sheet-label {
                display: grid;
            }
        }  
    }

    #combat {
        display: flex;
        flex-wrap: wrap;
    }

    @media(min-width: 800px) {
        #combat {
            display: grid;
            grid-template-columns: auto auto 33%;
        }
    }

    #ability-scores {
        display: flex;
        flex-wrap: wrap;
    }

    @media(min-width: 800px) {
        #ability-scores {
            display: grid;
            grid-template-columns: 1fr 33%;
            align-items: start;
        }
    }
}

@media print {
    .container-fluid {
        margin-top: 5px !important;
    }
    .character {
        margin: 0px !important;
        padding: 0px !important;
    }
}

</style>