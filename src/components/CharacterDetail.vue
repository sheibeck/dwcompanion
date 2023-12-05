<template>
    <div v-if="!character">
        Loading ...
    </div>
    <div v-else class="character container-fluid mt-3">
        <div class="page">
            <div class="sheet-label">
                <div class="banner-top">
                    <img src="../assets/page-banner-top.png" alt="page banner top" />
                </div>
                <div class="banner-middle">
                    <div class="rotated-text">
                        The Bard
                    </div>
                </div>
                <div class="banner-bottom">
                    <img src="../assets/page-banner-bottom.png" alt="page banner bottom" />
                    <img class="banner-bottom-fill" src="../assets/page-banner-bottom-fill.png" alt="page banner bottom fill" />
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
                    <AbilityScores :character="character" />
                    <Bonds :character="character" />
                </div>
            </div>
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

const { characterId } = defineProps<{
    characterId: string;
}>();

const client = generateClient();
const character = ref<any>(null);

onMounted(async () => {
    character.value = await getCharacter(characterId);
});

// Fetch a single record by its identifier
const getCharacter = async (id: string) => {
    const result = await client.graphql({
        query: queries.getCharacter,
        variables: { id: id }
    });

    const character = result.data.getCharacter;
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
                    transform: translate(-43%, 300%) rotate(-90deg);
                    font-size: 60px;
                    text-align: center;
                }
            }

            .banner-bottom {
                height: 100%;
                width: 70px;
                
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