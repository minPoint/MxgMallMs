import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import STable from '@surely-vue/table';
// eslint-disable-next-line import/no-unresolved

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import 'element-plus/dist/index.css'

import axios from "axios";
import ServiceCenter from "./base/utils/ServiceCenter";
import BaseUtils from "./base/utils/BaseUtils";

let app = createApp(App);

// app.config.globalProperties.$axios = axios;
app.config.globalProperties.$serviceCenter = ServiceCenter;
app.config.globalProperties.$baseUtils = BaseUtils;

app.use(store);
app.use(router);
// app.use(STable);
app.use(ElementPlus, {
    locale: zhCn,
});

app.mount('#app')
