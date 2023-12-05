<template>
    <main>
      <!-- Navigation Bar -->
      <nav class="navbar navbar-expand-lg navbar-dark justify-content-between">
        <a class="navbar-brand" href="#">
          <img alt="logo" class="nav-logo" src="@/assets/dwlogo.png" />
        </a>
        <div class="ml-auto">
          <button class="btn btn-secondary text-light btn-link" @click="signOut">Sign out</button>
        </div> 
      </nav>

      <!-- Page Content -->
      <div class="container-fluid mt-5">
        <CharacterList />
      </div>
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';
import { useAuthenticator } from '@aws-amplify/ui-vue';
import CharacterList from '@/components/CharacterList.vue';
  
const globalStore = useGlobalStore();
const auth = useAuthenticator();
const userId = ref<string|null>(null);

onMounted(async () => {
    userId.value = await globalStore.getUserId();
});

function signOut() {
  globalStore.signOut();
}

</script>

<style scoped lang="scss">

main {
  .nav-logo {
    height: 150px;
    margin-top: 30px;
  }

  nav {
    background-color: #181818;
    max-height: 100px;
  }
}
</style>