<template>

  <template v-if="auth.route !== 'authenticated'">
    <div class="authentication justify-content-center">
      <header>
        <img alt="logo" class="img-fluid" src="@/assets/dwlogo.png" />
      </header>

      <authenticator :login-mechanisms="['email']" :social-providers="['google']">
      </authenticator>
    </div>
  </template>
</template>

<script setup lang="ts">
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-vue';
import { useGlobalStore } from '@/stores/globalStore';
import { onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
  
const auth = useAuthenticator();
const globalStore = useGlobalStore();
const router = useRouter();

onMounted(async () => {
  await routeUserToProperPage();
})

watch(() => auth.route, async () => {
  await routeUserToProperPage();
})

async function routeUserToProperPage() {
  const userId = await globalStore.getUserId();
  if (userId !== "guest") {
    await router.push({ name: "home" });
  }
}

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

  img {
    max-height: 500px;
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
</style>