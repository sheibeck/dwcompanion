
<template>
  <main>
    <!-- Navigation Bar -->
    <nav v-if="!isLogin" class="navbar navbar-expand-lg navbar-dark justify-content-between">
      <a class="navbar-brand" href="#">
        <img alt="logo" class="nav-logo" src="@/assets/dwlogo.png" />
      </a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/characters">Characters</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
        </ul>
      </div>
      <div class="ml-auto">
        <button class="btn btn-secondary  btn-link" @click="globalStore.signOut()">Sign out</button>
      </div> 
    </nav>

    <div class="container-fluid mt-5">
      <RouterView />
    </div>

  </main>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { useGlobalStore } from './stores/globalStore';
import { computed } from 'vue';
const globalStore = useGlobalStore();
const route = useRoute();

const isLogin = computed(() => route.name === "home");

</script>


<style lang="scss">
  @import "./styles/main.scss";
</style>
