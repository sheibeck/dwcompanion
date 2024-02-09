import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports'
import "@aws-amplify/ui-vue/styles.css";
import 'vue3-toastify/dist/index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@vueform/multiselect/themes/default.css';
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import { VueShowdownPlugin } from 'vue-showdown';

awsconfig.oauth.redirectSignIn = `${window.location.origin}/`;
awsconfig.oauth.redirectSignOut = `${window.location.origin}/`;

Amplify.configure(awsconfig);

const app = createApp(App);

app.use(VueShowdownPlugin, {
    // set default flavor of showdown
    flavor: 'github',
    // set default options of showdown (will override the flavor options)
    options: {
      emoji: false,
    },
  });

app.use(Vue3Toastify, {
    autoClose: 3000,
  } as ToastContainerOptions);

app.use(createPinia())
app.use(router)

app.mount('#app')
