import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import HomeVue from './views/Home.vue'
import AboutVue from './views/About.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: HomeVue},
        {path: '/about', name: 'About', component: AboutVue}
    ]
})

createApp(App)
    .use(router)
    .mount('#app')
