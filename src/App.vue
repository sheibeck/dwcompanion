
<template>
  <main>
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary d-print-none" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img loading="lazy" alt="logo" class="nav-logo img-fluid" src="@/assets/dwlogo.png" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbartoggle" aria-controls="navbartoggle" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse bg-body-tertiary p-2" id="navbartoggle">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/">
                <img src="@/assets/house-solid.svg" alt="home icon" class="filter-light" /> Home
              </a>
            </li>
            <li class="nav-item dropdown" v-if="isUserLoggedIn">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="@/assets/user-solid.svg" alt="my stuff icon" class="filter-light" /> My Stuff
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/characters">
                    <img src="@/assets/users-solid.svg" alt="characters icon" class="filter-light" /> Characters
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/fronts">
                    <img src="@/assets/book-open-solid.svg" alt="fronts icon" class="filter-light" /> Fronts
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/steadings">
                    <img src="@/assets/tree-city-solid.svg" alt="steadings icon" class="filter-light" /> Steadings
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="@/assets/toolbox-solid.svg" alt="tool icon" class="filter-light" /> Tools
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" target="_blank" href="https://dungeon-world.com/downloads/Dungeon_World_Play_Sheets.pdf">
                    <img src="@/assets/file-pdf-solid.svg" alt="play sheets icon" class="filter-light" /> Play Sheets
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" target="_blank" href="https://www.dungeonworldsrd.com/">
                    <img src="@/assets/folder-open-solid.svg" alt="srd icon" class="filter-light" /> SRD
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" target="_blank" href="https://watabou.github.io/">
                    <img src="@/assets/map-solid.svg" alt="map icon" class="filter-light" /> Map Making
                  </a>
                </li>
                <li>
                  <button class="dropdown-item" @click="copyCurrentUrlToClipboard()">
                    <img src="@/assets/share-nodes-solid.svg" alt="share icon" class="filter-light" /> Share
                  </button>
                </li>
              </ul>
            </li>
           
            <li class="nav-item">
              <a class="nav-link" target="_blank" href="https://github.com/sheibeck/dwcompanion/wiki/Dungeon-World-Companion">
                <img src="@/assets/bug-solid.svg" alt="characters icon" class="filter-light" /> Support
              </a>
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

  .filter-white{
    filter: invert(50%) saturate(100%) hue-rotate(86deg) brightness(125%) contrast(100%);
  }

  @media print {
    .content {
        margin-top: 5px !important;
    }
  }
</style>
