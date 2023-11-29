<template>
  <authenticator :login-mechanisms="['email', 'name']" :social-providers="['google']">
  </authenticator>
  <template v-if="auth.route === 'authenticated'">
    <button @click="auth.signOut">Sign out</button>
  </template>
</template>

<script setup lang="ts">
  import { Authenticator, useAuthenticator } from '@aws-amplify/ui-vue';
  const auth = useAuthenticator();
</script>
