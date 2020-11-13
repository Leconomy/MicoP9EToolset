import { createApp } from 'vue';
import App from './App.vue';
import Hello from './hello';
import './registerServiceWorker';
import router from './router';
import store from './store';

createApp(Hello).use(store).use(router).mount('#app');
