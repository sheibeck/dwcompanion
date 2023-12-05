<template>

  <template v-if="auth.route !== 'authenticated'">
    <div class="authentication justify-content-center vh-100">
      <header>
        <img alt="logo" class="logo" src="@/assets/dwlogo.png" />
      </header>

      <authenticator :login-mechanisms="['email', 'name']" :social-providers="['google']">
      </authenticator>
    </div>
  </template>

  <template v-if="auth.route === 'authenticated'">
    <main>
      <!-- Navigation Bar -->
      <nav class="navbar navbar-expand-lg navbar-dark justify-content-between">
        <a class="navbar-brand" href="#">
          <img alt="logo" class="nav-logo" src="@/assets/dwlogo.png" />
        </a>
        <div class="ml-auto">
          <button class="btn btn-secondary text-light btn-link" @click="auth.signOut">Sign out</button>
        </div> 
      </nav>

      <!-- Page Content -->
      <div class="container-fluid mt-5">
        <CharacterList />
      </div>
    </main>
  </template>
</template>

<script setup lang="ts">
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-vue';
import CharacterList from '@/components/CharacterList.vue';
import { watch } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';
  
const auth = useAuthenticator();
const globalStore = useGlobalStore();

watch(() => auth.user, () => {
  if (auth.route === 'authenticated') {
    globalStore.setUserId(auth.user.userId);
  }
})

</script>

<style scoped lang="scss">
.authentication {
  margin:auto;
  display: grid;
  grid-template-columns: auto;

  header {
    line-height: 1.5;
    max-height: 100vh;
    display: flex;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
    max-width: 300px;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: auto auto;

    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
      max-width: 500px;
    }
  }
}

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