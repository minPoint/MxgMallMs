import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import 'element-plus/dist/index.css'

import mitt from "mitt";

import ServiceCenter from "./base/utils/ServiceCenter";
import BaseUtils from "./base/utils/BaseUtils";

let app = createApp(App);

// app.config.globalProperties.$axios = axios;
app.config.globalProperties.$serviceCenter = ServiceCenter;
app.config.globalProperties.$baseUtils = BaseUtils;
app.config.globalProperties.$bus = mitt();

app.use(store);
app.use(router);
// app.use(STable);
app.use(ElementPlus, {
    locale: zhCn,
});

app.mount('#app')
