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
                <div id="identity" class="container-fluid">
                    <div class="input-group mb-3 pe-md-2">
                        <span class="input-group-text" id="name">Name</span>
                        <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="name"
                            v-model="character.name">
                    </div>
                    <div class="input-group mb-3 pe-md-2">
                        <span class="input-group-text" id="level">Level</span>
                        <input type="text" class="form-control" placeholder="Level" aria-label="Level"
                            aria-describedby="level" v-model="character.level">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="xp">XP</span>
                        <input type="text" class="form-control" placeholder="XP" aria-label="XP" aria-describedby="xp"
                            v-model="character.xp">
                    </div>
                </div>
                <div id="combat">
                    <!-- look -->
                    <div class="container-fluid mb-3 look">
                        <div class="bg-dark text-light fs-5 p-1 mb-1">Look</div>
                        <div v-for="look in character.look" :index="look.id">
                            <div class="input-group input-group-sm">
                                <span class="input-group-text fs-5" id="basic-addon3">{{ look.name }}</span>
                                <input type="text" class="form-control" aria-describedby="basic-addon3 basic-addon4"
                                    v-model="look.v1ue">
                            </div>
                            <div class="form-text text-end" id="basic-addon4">{{ look.description }}</div>
                        </div>
                    </div>
                    <!-- combat -->
                    <div class="container-fluid  mb-3">
                        <div class="input-group mb-1">
                            <span class="input-group-text w-75 fs-5" id="level">Armor</span>
                            <input type="text" class="form-control fs-5 text-center" v-model="character.armor">
                        </div>

                        <div class="input-group">
                            <span class="input-group-text w-50 fs-5" id="level">Hit Points</span>
                            <input type="text" class="form-control fs-5 text-center" aria-describedby="hitpoint-description"
                                v-model="character.hitPointsMax">
                            <input type="text" class="form-control fs-5 text-center" aria-describedby="hitpoint-description"
                                v-model="character.hitPointsCurrent">
                        </div>
                        <div class="form-text text-end mb-1" id="hitpoint-description">Max (8 + Constitution) / Current</div>

                        <div class="input-group">
                            <span class="input-group-text w-75 fs-5" id="level">Damage</span>
                            <input type="text" class="form-control fs-5 text-center">
                        </div>
                    </div>
                    <!-- alignment -->
                    <div class="container-fluid alignment">
                        <div class="bg-dark text-light fs-5 p-1">Alignment</div>
                        <div v-for="alignment in character.alignment" :key="alignment.id" class="input-group input-group-lg">
                            <div class="input-group-text">
                                <input class="form-check-input mt-0" type="checkbox" v-model="alignment.selected"
                                    :aria-label="`Alignment checkbox for ${alignment.name}`">
                            </div>
                            <div class="form-text p-1">
                                <div class="fs-5 " id="basic-addon4">{{ alignment.name }}</div>
                                <div class="form-text" id="basic-addon4">{{ alignment.description }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="ability-scores">
                    <!-- ability scores -->
                    <div id="abilities">
                        <!-- score -->
                        <div v-for="ability in character.abilityScores" class="container-fluid mb-3">
                            <div class="border border-dark fs-5 p-1">{{ ability.name }}</div>
                            <div class="input-group input-group-lg bg-dark text-light">
                                <span class="attr-label text-dark" id="level">{{ ability.shortName }}</span>
                                <input type="text" class="form-control fs-4 text-center attr-circle">
                                <div class="d-flex justify-content-end d-flex   flex-fill" id="level">
                                    <span class="form-check debility">
                                        <input class="" type="checkbox" v-model="ability.debility"
                                            :id="`${ability.name}-debility`">
                                        <label class="" :for="`${ability.name}-debility`">
                                            {{ ability.debility }} ({{ ability.debilityPenalty }})
                                        </label>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- bonds -->
                    <div class="container-fluid mb-3">
                        <div class="bg-dark text-light fs-5 p-1">Bonds</div>
                        <div>
                            <div class="input-group input-group-sm">
                                <input type="text" class="form-control" id="basic-url" value=""
                                    aria-describedby="bond-description-1">
                            </div>
                            <div class="form-text" id="bond-description-1">____ is puny and foolish, but amusing to me.
                            </div>
                        </div>
                    </div>
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

<style lang="scss">
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

    #identity {
        display: flex;
        flex-wrap: wrap;
    }

    @media(min-width: 800px) {
        #identity {
            display: grid;
            grid-template-columns: auto 150px 200px;
        }
    }

    #combat {
        display: flex;
        flex-wrap: wrap;

        .look {
            div, input {
                margin: 0px !important;
                padding: 0px !important;
            }
            .input-group {
                flex-wrap: nowrap;

                .input-group-text {
                    background-color: unset;
                    border: unset;
                }

                input {
                    border: unset;
                    border-bottom: 1px solid black;
                }
            }
        }

        .alignment {
            div {
                margin: 0px;
            }
            .input-group {
                flex-wrap: nowrap;

                .input-group-text {
                    background-color: unset;
                    border: unset;
                }
            }
        }
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

        #abilities {
            display: grid;
            grid-template-columns: 50% 50%;

            .attr-circle {
                border-radius: 25px;
                width: 60px;
                max-width: 60px;
                min-width: 60px;
            }

            .attr-label {
                background-color: transparent;
                position: absolute;
                font-size: 12px;
                z-index: 1;
                font-weight: 700;
                text-align: center;
                width: 60px;
                max-width: 60px;
                min-width: 60px;
            }
        }
    }

    @media(min-width: 800px) {
        #ability-scores {
            display: grid;
            grid-template-columns: 1fr 33%;

            #abilities {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
            }
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
    .alignment div,
    .look div {
        margin: 0px !important;
        padding: 0px !important;
        font-size: .9em;

        .fs-5 {
            font-size: 1.25em !important;
        }
    }
}

</style>