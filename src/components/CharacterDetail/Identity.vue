<template>
    <div id="identity" class="" data-bs-theme="dark">
        <div class="input-group mb-2 pe-md-2">
            <span class="input-group-text text-dark" id="name">Name</span>
            <input type="text" class="form-control text-dark pe-0" aria-label="Name" aria-describedby="name"
                v-model="character.name"> 
                <button class="ps-0 btn btn-link d-print-none" type="button" @click="getName()">
                    <img src="@/assets/dice-solid.svg" alt="random name" height="20" />
                </button>
        </div>
        <div class="input-group mb-2 pe-md-2 d-print-none">
            <span class="input-group-text text-dark" id="profession">Profession</span>
            <input type="text" min="0" class="form-control text-dark pe-0" aria-label="Level"
                aria-describedby="profession" v-model="character.profession.name">
        </div>
        <div class="input-group mb-2 pe-md-2">
            <span class="input-group-text text-dark" id="level">Level</span>
            <input type="number" min="0" class="form-control text-dark pe-0" aria-label="Level"
                aria-describedby="level" v-model="character.level">
        </div>
        <div class="input-group mb-2">
            <span class="input-group-text text-dark" id="xp">XP</span>
            <input type="number" min="0" class="form-control text-dark pe-0" aria-label="XP" aria-describedby="xp"
                v-model="character.xp">
        </div>
    </div>
</template>

<script setup lang="ts">
const { character } = defineProps<{
    character: any;
}>();

function getName() {
    character.name = generateFantasyName();
}

function generateFantasyName(): string {
  // Substantial selection of first names from Dungeon World SRD
  const firstNames = ['Eldon', 'Mirabel', 'Thorn', 'Ariana', 'Cedric', 'Lorien', 'Bran', 'Seraphina', 'Galen', 'Iris', 'Faelan', 'Nyssa', 'Drake', 'Aelwen', 'Orin', 'Maela', 'Caspian', 'Ysara', 'Varis', 'Elora', 'Gavriel', 'Leona', 'Kael', 'Nimue', 'Tyrion', 'Eowyn', 'Jareth', 'Lyra', 'Rowan', 'Sylvanas', 'Solomon', 'Kalil', 'Omen', 'Hiko', 'Agasha', 'Harald', 'Fatia', 'Khalwa', 'Adur', 'Ignis','Yohn', 'Hiko', 'Agasha', 'Elizabeth', 'Harald', 'Fatia', 'Khalwa', 'Adur', 'Ignis', 'Yajna', 'Umlilo'];

  // Surname prefixes and suffixes inspired by Dungeon World SRD and expanded
  const surnamePrefixes = ['Night', 'Iron', 'Swift', 'Shadow', 'Bright', 'Storm', 'Silver', 'Dragon', 'Oak', 'Star', 'Moon', 'Fire', 'Dawn', 'Raven', 'Wind', 'Sea', 'River', 'Green', 'Snow', 'Sun', 'Ash', 'Wolf', 'Cloud', 'Thorn', 'Flame', 'Stone', 'Sky', 'Frost', 'Dusk', 'Gold', 'Sulfur', 'Ember', 'Cinder', 'Char', 'Bitter', 'Barrow', 'Singe', 'Candle', 'Coal', 'Flame'];

  const surnameSuffixes = ['walker', 'hand', 'wind', 'mere', 'blade', 'bringer', 'kin', 'heart', 'shield', 'whisper', 'song', 'flame', 'light', 'wing', 'rider', 'weaver', 'stream', 'wood', 'fall', 'gazer', 'binder', 'seeker', 'thorn', 'ward', 'forge', 'bearer', 'singer', 'dancer', 'breaker', 'smith', 'heart', 'lash', 'claw', 'fiend', 'tallow', 'blaze', 'scale', 'wick', 'fang', 'kin'];

  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const surnamePrefix = surnamePrefixes[Math.floor(Math.random() * surnamePrefixes.length)];
  const surnameSuffix = surnameSuffixes[Math.floor(Math.random() * surnameSuffixes.length)];

  return `${firstName} ${surnamePrefix}${surnameSuffix}`;
}

</script>

<style scoped lang="scss">
    #identity {
        display: flex;
        flex-wrap: wrap;
        .input-group-text {
            background-color: white;
            border-width: 0px;
        }
        .form-control {
            background-color: white;
        }
    }

    @media(min-width: 800px) {
        #identity {
            display: grid;
            grid-template-columns: auto 300px 150px 200px;
        }
    }

    @media print {
        #identity {
            display: grid;
            grid-template-columns: auto 150px 200px;
        }
        .form-control {
            border-width: 0px;
        }
    }
</style>