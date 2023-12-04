import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports'
import "@aws-amplify/ui-vue/styles.css";
import { DataStore } from 'aws-amplify/datastore';
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
app.use(createPinia())
app.use(router)

app.mount('#app')
