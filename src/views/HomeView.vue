<template>

  <template v-if="auth.route !== 'authenticated'">
    <div class="authentication">
      <header>
        <img alt="logo" class="logo" src="@/assets/dwlogo.png" />
      </header>

      <authenticator :login-mechanisms="['email', 'name']" :social-providers="['google']">
      </authenticator>
    </div>
  </template>

  <template v-if="auth.route === 'authenticated'">
    <div class="content">
      <!-- Navigation Bar -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img alt="logo" class="nav-logo" src="@/assets/dwlogo.png" />
          </a>
          <button class="btn btn-secondary" @click="auth.signOut">Sign out</button>
        </div>
      </nav>

      <!-- Page Content -->
      <div class="container-fluid mt-3">
        <!-- Your page content goes here -->
        <h1>Welcome to Your Website</h1>
        <p>This is a simple dark-themed Bootstrap template.</p>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
  import { Authenticator, useAuthenticator } from '@aws-amplify/ui-vue';
  const auth = useAuthenticator();
</script>

<style scoped lang="scss">
.authentication {
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

.content {
  .nav-logo {
    height: 100px;
  }
}

</style>