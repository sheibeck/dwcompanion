
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
            <li v-if="isUserLoggedIn" class="nav-item">
              <a class="nav-link" href="/fronts">Fronts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" target="_blank" href="https://github.com/sheibeck/dwcompanion/wiki/Dungeon-World-Companion">Support</a>
            </li>
            <li class="nav-item">
              <button class="nav-link" @click="copyCurrentUrlToClipboard()">
                <img src="@/assets/share-nodes-solid.svg" alt="share" class="filter-light" />
              </button>
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
import { RouterView } from 'vue-router'
import { useGlobalStore } from './stores/globalStore';
import { computed, onMounted } from 'vue';
import { toast } from 'vue3-toastify';

const globalStore = useGlobalStore();

onMounted(async () => {
  await globalStore.getUserId();
})

const isUserLoggedIn = computed( () => {
  const userId = globalStore.currentUser;
  return userId !== null;
})

function copyCurrentUrlToClipboard(): void {
  // Get the current URL
  const currentUrl = window.location.href;

  // Use the Clipboard API to copy the URL
  navigator.clipboard.writeText(currentUrl)
      .then(() => {
          console.log('Current URL copied to clipboard successfully.');
      })
      .catch(err => {
          console.error('Failed to copy the URL to clipboard: ', err);
      });

  toast("Url copied");
}

</script>


<style lang="scss">
  @import "./styles/main.scss";

  nav {
    #navbartoggle {
      z-index: 2;
    }
  }

  .filter-light{
    filter: invert(50%) saturate(100%) hue-rotate(86deg) brightness(100%) contrast(100%);
  }

  @media print {
    .content {
        margin-top: 5px !important;
    }
  }
</style>
