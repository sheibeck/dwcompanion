
<template>
  <main>
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary d-print-none" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img alt="logo" class="nav-logo img-fluid" src="@/assets/dwlogo.png" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbartoggle" aria-controls="navbartoggle" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse bg-body-tertiary m-0" id="navbartoggle">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li v-if="isUserLoggedIn" class="nav-item">
              <a class="nav-link" href="/characters">Characters</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">About</a>
            </li>
          </ul>
          <div class="d-flex">
            <button v-if="isUserLoggedIn" class="btn btn-secondary text-light btn-link" @click="globalStore.signOffUser()">Sign out</button>
            <a v-else class="btn btn-secondary text-light" href="/login">Sign in</a>
          </div>
        </div>
      </div>
    </nav>

    <div class="container-fluid mt-lg-5 content">
      <RouterView />
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { useGlobalStore } from './stores/globalStore';
import { computed, onMounted } from 'vue';

const globalStore = useGlobalStore();
const route = useRoute();
const isLogin = computed(() => route.name === "login");

onMounted(() => {
  globalStore.getUserId();
})

const isUserLoggedIn = computed( () => {
  const userId = globalStore.currentUser;
  return userId !== null;
})

</script>


<style lang="scss">
  @import "./styles/main.scss";

  nav {
    #navbartoggle {
      z-index: 2;
    }
  }

  @media print {
    .content {
        margin-top: 5px !important;
    }
  }
</style>
