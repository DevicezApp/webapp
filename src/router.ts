import {createRouter, createWebHistory} from 'vue-router'
import Dashboard from "./views/Dashboard.vue"
import Devices from "./views/Devices.vue"
import Groups from "./views/Groups.vue"
import Users from "./views/Users.vue"

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
        path: '/devices',
        name: 'devices',
        component: Devices,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/groups',
        name: 'groups',
        component: Groups,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/users',
        name: 'users',
        component: Users,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./views/Login.vue'),
        meta: {
            hideNavbar: true
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('./views/Register.vue'),
        meta: {
            hideNavbar: true
        }
    },
    {
        path: '/error',
        name: 'error',
        component: () => import('./views/Error.vue'),
        meta: {
            hideNavbar: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !localStorage.getItem('token')) {
        return {name: 'login', query: {redirect: to.fullPath}}
    }
})

export default router