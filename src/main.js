import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import STable from '@surely-vue/table';
// eslint-disable-next-line import/no-unresolved

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import axios from "axios";

let app = createApp(App);

app.config.globalProperties.$axios = axios;

app.use(store);
app.use(router);
// app.use(STable);
app.use(ElementPlus);

app.mount('#app')
