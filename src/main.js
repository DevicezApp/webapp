import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import './scss/styles.scss'
import Dashboard from "./Dashboard.vue";
import Login from "./Login.vue";

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(), routes
})

const app = createApp({})
app.use(router)
app.mount('#app')