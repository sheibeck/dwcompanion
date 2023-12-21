import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports'
import "@aws-amplify/ui-vue/styles.css";
import 'vue3-toastify/dist/index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import { VueShowdownPlugin } from 'vue-showdown';


const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

const oauth = {
  domain: 'dungeon-world-companion-staging.auth.us-east-1.amazoncognito.com',
  scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
  redirectSignIn: 'https://localhost:5173/',
  redirectSignOut: 'https://localhost:5173/',
  responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
};

if (!isLocalhost)
{
  const { NODE_ENV } = process.env;

  if (NODE_ENV === 'development') {
    oauth.redirectSignIn = "https://develop.d22ubsc9vqy9d1.amplifyapp.com/";
    oauth.redirectSignOut = "https://develop.d22ubsc9vqy9d1.amplifyapp.com/";
  }
  else {
    oauth.domain = "dungeon-world-companion-main.auth.us-east-1.amazoncognito.com"
    oauth.redirectSignIn = "https://dungeon-world-companion.com/";
    oauth.redirectSignOut = "https://dungeon-world-companion.com/";
  }
}

// copy the constant config (aws-exports.js) because config is read only.
var configUpdate = awsconfig;
// update the configUpdate constant with the good URLs
configUpdate.oauth = oauth;

// Configure Amplify with configUpdate
Amplify.configure(configUpdate);

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

app.use(createPinia());
app.use(router);

app.mount('#app');
