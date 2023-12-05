<template>
    <div v-if="!character">
        Loading ...
    </div>
   <div v-else id="app" class="container mt-3">
    <div id="identity" class="container-fluid">
      <div class="input-group mb-3 pe-md-2">
        <span class="input-group-text" id="name">Name</span>
        <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="name" v-model="character.name">
      </div>
      <div class="input-group mb-3 pe-md-2">
        <span class="input-group-text" id="level">Level</span>
        <input type="text" class="form-control" placeholder="Level" aria-label="Level" aria-describedby="level" v-model="character.level">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="xp">XP</span>
        <input type="text" class="form-control" placeholder="XP" aria-label="XP" aria-describedby="xp" v-model="character.xp">
      </div>
    </div>
    <div id="combat">
      <!-- look -->
      <div class="container-fluid mb-3">
        <div class="bg-dark text-light fs-3 p-1">Look</div>
        <div v-for="look in character.look" :index="look.id">
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3">{{look.name}}</span>
            <input type="text" class="form-control" aria-describedby="basic-addon3 basic-addon4" v-model="look.value">
          </div>
          <div class="form-text" id="basic-addon4">{{look.description}}</div>
        </div>
      </div>
      <!-- combat -->
      <div class="container-fluid  mb-3">
        <div class="input-group">
          <span class="input-group-text bg-dark text-light w-75 fs-4" id="level">Armor</span>
          <input type="text" class="form-control fs-3 text-center"  v-model="character.armor">
        </div>
        <div class="input-group">
          <span class="input-group-text bg-dark text-light w-50 fs-4" id="level">Hit Points</span>
          <input type="text" class="form-control fs-4 text-center" aria-describedby="hitpoint-description" v-model="character.hitPointsMax">
          <input type="text" class="form-control fs-4 text-center" aria-describedby="hitpoint-description" v-model="character.hitPointsCurrent">
        </div>
        <div class="form-text text-end" id="hitpoint-description">Max (8 + Constitution) / Current</div>
        <div class="input-group">
          <span class="input-group-text bg-dark text-light w-75 fs-4" id="level">Damage</span>
          <input type="text" class="form-control fs-4 text-center">
        </div>
      </div>
      <!-- alignment -->
      <div class="container-fluid mb-3">
        <div class="bg-dark text-light fs-3 p-1">Alignment</div>
        <div v-for="alignment in character.alignment" :key="alignment.id" class="input-group mb-1">
          <div class="input-group-text">
            <input class="form-check-input mt-0" type="checkbox" v-model="alignment.selected" :aria-label="`Alignment checkbox for ${alignment.name}`">
          </div>
          <div class="form-text p-1">
            <div class="fs-4" id="basic-addon4">{{ alignment.name }}</div>
            <div class="form-text text-end" id="basic-addon4">{{ alignment.description }}</div>
          </div>
        </div>
      </div>
    </div>
    
    <div id="ability-scores">
      <!-- ability scores -->
       <div id="abilities">
        <!-- score -->
        <div v-for="ability in character.abilityScores" class="container-fluid mb-3">
          <div class="border border-dark fs-3 p-1">{{ability.name}}</div>
          <div class="input-group input-group-lg bg-dark">
            <span class="attr-label" id="level">{{ability.shortName}}</span>
            <input type="text" class="form-control fs-3 text-center attr-circle">
            <div class="d-flex justify-content-end d-flex bg-dark text-light flex-fill" id="level">
               <span class="form-check debility">
                <input class="" type="checkbox" v-model="ability.debility" :id="`${ability.name}-debility`">
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
        <div class="bg-dark text-light fs-3 p-1">Bonds</div>
        <div>
          <div class="input-group input-group-sm">
            <input type="text" class="form-control" id="basic-url" value="" aria-describedby="bond-description-1">
          </div>
          <div class="form-text" id="bond-description-1">____ is puny and foolish, but amusing to me.</div>
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
  #app {    
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
    }
    @media(min-width: 800px) {
      #combat {
        display: grid;
        grid-template-columns: auto auto auto;
      }
    }
    
    #ability-scores {
      display: flex;
      flex-wrap: wrap;
      
      #abilities {
        display: grid;
        grid-template-columns: auto auto auto;
        
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
        
        .debility {
         
        }
      }
    }
    
    @media(min-width: 800px) {
      #ability-scores {
        display: grid;
        grid-template-columns: auto 25%;
        
        #abilities {
          display: grid;
          grid-template-columns: auto auto auto;
        }
      }
    }
  }
 
</style>