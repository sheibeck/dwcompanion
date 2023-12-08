<template>
    <div v-if="!character">
        Loading ...
    </div>
    <div v-else class="character mt-2">
        <div class="gradient-background"></div>
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

        <div class="d-print-none action-bar d-flex justify-content-end border-top pt-2" v-if="isAuthenticated">
            <a href="/" type="button" class="btn btn-secondary me-2">Close</a>
            <button type="button" class="btn btn-dark" @click="saveCharacter()">Save</button>
        </div>
    </div>

</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Identity from '@/components/CharacterDetail/Identity.vue';
import Look from '@/components/CharacterDetail/Look.vue';
import Combat from '@/components/CharacterDetail/Combat.vue';
import Alignment from '@/components/CharacterDetail/Alignment.vue';
import AbilityScores from '@/components/CharacterDetail/AbilityScores.vue';
import Bonds from '@/components/CharacterDetail/Bonds.vue';
import Moves from '@/components/CharacterDetail/Moves.vue';
import { MoveType } from '@/enums/moveType';
import * as lookupService from '@/services/lookupTableService';
import { ProfessionType } from '@/enums/professionType';
import { toast } from 'vue3-toastify';
import { createNewCharacter, getCharacter } from '@/services/characterService';
import { useGlobalStore } from '@/stores/globalStore';

const { characterId, characterProfession} = defineProps<{
    characterId: string;
    characterProfession: ProfessionType | null;
}>();

const globalStore = useGlobalStore();
const character = ref<any>(null);
const isAuthenticated = ref(false);

onMounted(async () => {
    await setupCharacter();
    isAuthenticated.value = await globalStore.isAuthenticated();
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

        if (!character.value.name || character.value.name.trim().length === 0) {
            toast("You must give your character a name.")
            return;
        }

        const newcharacter = await createNewCharacter(character.value);
        if (newcharacter) {
            toast(`Created character ${character.value.name} the ${character.value.profession.name}.`)
        }
        else {
            toast(`Failed to create character!`);
        }
    }
}

</script>

<style scoped lang="scss">
.character {
    .gradient-background {
        background: linear-gradient(to bottom, lightgray, #fff);
        height: 400px;
        width: 100%;
        position:absolute;
        left: 0;
        margin-top: -5px;
        z-index: -1;
    }

    .page {
        background-color: transparent;
        display: grid;
        grid-template-columns: 1fr;
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
                margin-top: -30px;
                
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
            grid-template-columns: 80px 1fr;
            height: 1012px;

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