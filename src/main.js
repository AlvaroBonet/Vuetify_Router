import { createApp } from 'vue'
import App from './App.vue'
import vuetify from '../vuetifyIndex/vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from './components/Router.js'

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
