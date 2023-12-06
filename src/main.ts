import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports'
import "@aws-amplify/ui-vue/styles.css";
import 'vue3-toastify/dist/index.css';
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import { VueShowdownPlugin } from 'vue-showdown';

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
