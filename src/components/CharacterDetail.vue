<template>
    <div v-if="!character">
        Loading ...
    </div>
    <div v-else class="character mt-2">
        <div class="d-print-none d-flex justify-content-center" v-if="isGuest"> 
            <span class="text-danger">
                You must <a href="/login">sign in</a> to save characters. While not logged in, data you enter will be lost if you navigate away from this page.
            </span>
        </div>
        <div class="gradient-background"></div>
        <div class="page page1" v-if="pageNumber == 1 || isPrinting">
            <div class="sheet-label">
                <div class="banner-top">
                    <img loading="lazy" src="@/assets/page-banner-top.png" alt="page banner top" />
                </div>
                <div class="banner-middle">
                    <div class="rotated-text">
                        The {{ character.profession.name }}
                    </div>
                </div>
                <div class="banner-bottom">
                    <img loading="lazy" src="@/assets/page-banner-bottom.png" alt="page banner bottom" />
                    <img loading="lazy" class="banner-bottom-fill" src="@/assets/page-banner-bottom-fill.png" alt="page banner bottom fill" />
                </div>
            </div>
            <div class="sheet-details">
                <Identity :character="character" />
                <div id="combat" class="flex-fill">
                    <Look :character="character" />
                    <Combat :character="character" />
                    <Alignment :character="character" />
                </div>
                <div id="ability-scores">
                    <div>
                        <AbilityScores :character="character" />
                        <Moves :character="character" :moveType="MoveType.STARTING_MOVES" />
                    </div>
                    <div>
                        <Bonds :character="character" />
                        <Races :character="character" />
                        <Moves :character="character" v-if="hasOverflowMoves" :moveType="MoveType.STARTING_MOVES" :isOverflow=true />
                    </div>
                </div>
            </div>
        </div>
        <div class="page page2" v-if="pageNumber == 2 || isPrinting">
            <div class="sheet-label">
                <div class="banner-top">
                    <img loading="lazy" src="@/assets/page-banner-top.png" alt="page banner top" />
                </div>
                <div class="banner-middle">
                    <div class="rotated-text">
                        The {{ character.profession.name }}
                    </div>
                </div>
                <div class="banner-bottom">
                    <img loading="lazy" src="@/assets/page-banner-bottom.png" alt="page banner bottom" />
                    <img loading="lazy" class="banner-bottom-fill" src="@/assets/page-banner-bottom-fill.png" alt="page banner bottom fill" />
                </div>
            </div>
            <div class="sheet-gear">
               <div id="coin-gear">
                    <div class="coin">
                        <div class="bg-dark text-light fs-5 ps-1 mb-1 d-flex justify-content-between">
                            <span>Coin</span> 
                            <input type="number" min="0" class="pe-0 form-control form-control text-center coin-value align-self-end" 
                                v-model="character.coing" />
                        </div>
                    </div>
                    <div class="">
                        <Gear :character="character" />
                    </div>
                </div>
                <div id="advanced-moves" class="ms-2">
                    <div>
                        <Moves :character="character" :moveType="MoveType.TWO_TO_TEN" />
                    </div>
                    <div>
                        <Moves :character="character" :moveType="MoveType.SIX_TO_TEN" />
                    </div>
                </div>
            </div>
        </div>

        <div class="d-print-none action-bar d-flex justify-content-end border-top p-1 mt-5">
            <a href="/characters" type="button" class="btn btn-danger me-2">Close</a>
            <button type="button" class="btn btn-secondary me-2" @click="nextPage()"> View {{ pageLabel }}</button>
            <button type="button" class="btn btn-secondary me-2" @click="printCharacter()">Print</button>
            <button v-if="isOwner" type="button" class="btn btn-dark" @click="saveCharacter()">Save</button>
        </div>
    </div>

</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import Identity from '@/components/CharacterDetail/Identity.vue';
import Look from '@/components/CharacterDetail/Look.vue';
import Combat from '@/components/CharacterDetail/Combat.vue';
import Alignment from '@/components/CharacterDetail/Alignment.vue';
import AbilityScores from '@/components/CharacterDetail/AbilityScores.vue';
import Bonds from '@/components/CharacterDetail/Bonds.vue';
import Moves from '@/components/CharacterDetail/Moves.vue';
import Races from '@/components/CharacterDetail/Races.vue';
import Gear from '@/components/CharacterDetail/Gear.vue';
import { MoveType } from '@/enums/moveType';
import * as lookupService from '@/services/lookupTableService';
import { ProfessionType } from '@/enums/professionType';
import { toast } from 'vue3-toastify';
import { createNewCharacter, getCharacter, updateCharacter } from '@/services/characterService';
import { useGlobalStore } from '@/stores/globalStore';
import { useRouter } from 'vue-router'

const { characterId, characterProfession} = defineProps<{
    characterId: string;
    characterProfession: ProfessionType | undefined | null;
}>();

const globalStore = useGlobalStore();
const router = useRouter();
const character = ref<any>();
const isAuthenticated = ref(false);
const pageNumber = ref(1);
const isPrinting = ref(false);
const userId = ref<null|String>(null);
const hasOverflowMoves = computed(() => character.value.startingMoves?.filter( (m: any) => m.isOverflow == true).length > 0);

const isOwner = computed(()=> {  
    return userId.value !== null && (character.value?.userId === userId.value || characterId == "new-character");
});

const isGuest = computed(()=> {
  return userId.value == null;
});

window.onafterprint = function(){
   console.log("Printing completed...");
   isPrinting.value = false;
}

function setPrintOn() {
    isPrinting.value = true;
}
function setPrintOff() {
    isPrinting.value = false;
}

onMounted(async () => {
    isAuthenticated.value = await globalStore.isAuthenticated();
    userId.value = await globalStore.getUserId();
    await setupCharacter();
    window.addEventListener('beforeprint', setPrintOn);
    window.addEventListener('afterprint', setPrintOff);
});

onBeforeUnmount(() => {
    window.addEventListener('beforeprint', setPrintOn);
    window.addEventListener('afterprint', setPrintOff);
})


const pageLabel = computed(() => pageNumber.value == 1 ? "Gear" : "Details");
function nextPage() {
    if (pageNumber.value == 1) {
        pageNumber.value = 2;
    }
    else {
        pageNumber.value = 1;
    }

    window.scrollTo(0, 0);
}

async function setupCharacter() {
    if (characterId === "new-character" && characterProfession) {
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
    const authenticated = await globalStore.isAuthenticated();
    if (authenticated && !character.value.id) {
        character.value.userId = userId.value;

        if (!character.value.name || character.value.name.trim().length === 0) {
            toast("You must give your character a name.")
            return;
        }

        const newcharacterId = await createNewCharacter(character.value);
        if (newcharacterId) {
            toast(`Created character ${character.value.name} the ${character.value.profession.name}.`)

            setTimeout(async () => {
                await router.push({ name: "character", params: { id: newcharacterId, profession: null }, replace: true });
            }, 2000);
            
        }
        else {
            toast(`Failed to create character!`);
        }
    }

    else {
        await update();
    }
}

async function update() {
    const updatedCharacter = await updateCharacter(character.value);

    if (updatedCharacter) {
        toast(`Character saved.`);
    }
    else {
        toast('There was a problem saving character!');
    }
}

function printCharacter() {
    isPrinting.value = true;

    setTimeout(async () => {
        window.print();
    }, 1000);
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

        #coin-gear {
            .coin {
                .coin-value {
                    width: 80px;
                    max-height: 30px;
                }
            }
        }
    }

    @media(min-width: 800px) {
        .page {
            grid-template-columns: 80px 1fr;
            height: 1012px;
            page-break-after: always;

            .sheet-label {
                display: grid;
            }

            .sheet-gear {
                display: grid;
                grid-template-columns: 30% 1fr;
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
    .character {
        margin: 0px !important;
        padding: 0px !important;
        margin-left: -5px !important;

        .page {
            padding-top: 10px;
            &.page2 {
                padding-top: 20px;
            }
        }
        
    }
}

</style>