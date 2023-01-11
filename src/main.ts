import { createApp } from 'vue';
import { VueQueryPlugin } from "vue-query";
import mitt from 'mitt';
import App from './App.vue';
import router from './router/index';

const emitter = mitt();

import './index.css';
import 'animate.css';

const app = createApp(App);

app.provide('emitter', emitter);
app.config.globalProperties.emitter = emitter;

app.use(router);
app.use(VueQueryPlugin);
app.mount('#app');
