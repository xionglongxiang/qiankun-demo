import './assets/main.css'

import { createApp } from 'vue'

import { createPinia } from 'pinia'
import { registerMicroApps, setDefaultMountApp, start } from 'qiankun'

import App from './App.vue'
import router, { MICRO_CONF } from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#main-app')

registerMicroApps(MICRO_CONF, {})
setDefaultMountApp('/vue3')
start()
