import {createRouter, createWebHistory} from 'vue-router'
import Dashboard from "../views/Dashboard.vue";

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !window.user) {
        return {name: 'login', query: {redirect: to.fullPath}}
    }
})

export default router