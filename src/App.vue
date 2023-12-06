
<template>
  <main>
    <!-- Navigation Bar -->
    <nav v-if="!isLogin" class="d-print-none navbar navbar-expand-lg navbar-dark justify-content-between">
      <a class="navbar-brand" href="#">
        <img alt="logo" class="nav-logo" src="@/assets/dwlogo.png" />
      </a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item p-2">
            <a class="nav-link" href="/home">Home</a>
          </li>
          <li class="nav-item p-2">
            <a class="nav-link" href="/characters">Characters</a>
          </li>
          <li class="nav-item p-2">
            <a class="nav-link" href="/about">About</a>
          </li>
        </ul>
      </div>
      <div class="ml-auto">
        <button v-if="globalStore.userId" class="btn btn-secondary text-light btn-link" @click="globalStore.signOut()">Sign out</button>
        <a v-else class="btn btn-secondary text-light" href="/login">Sign in</a>
      </div>
    </nav>

    <div class="container-fluid mt-5 content">
      <RouterView />
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { useGlobalStore } from './stores/globalStore';
import { computed, ref } from 'vue';

const globalStore = useGlobalStore();
const route = useRoute();
const isLogin = computed(() => route.name === "login");

</script>


<style lang="scss">
  @import "./styles/main.scss";

  @media print {
      .content {
          margin-top: 5px !important;
      }
  }
</style>
