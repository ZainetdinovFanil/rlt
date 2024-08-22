import { createApp } from 'vue'
import App from './App.vue'
import pinia from './store';
import './styles/global.scss';

createApp(App).use(pinia).mount('#app')
