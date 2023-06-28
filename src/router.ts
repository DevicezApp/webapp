import {createRouter, createWebHistory} from 'vue-router'
import Dashboard from "./views/Dashboard.vue"
import Devices from "./views/Devices.vue"
import Groups from "./views/Groups.vue"
import Users from "./views/Users.vue"
import Device from "./views/Device.vue"

const routes = [
    {
        path: '/',
        component: () => import('./views/Dashboard.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/devices',
        component: () => import('./views/Devices.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/device/:id',
        component: () => import('./views/Device.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/groups',
        component: () => import('./views/Groups.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/users',
        component: () => import('./views/Users.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: () => import('./views/Login.vue'),
        meta: {
            hideNavbar: true
        }
    },
    {
        path: '/register',
        component: () => import('./views/Register.vue'),
        meta: {
            hideNavbar: true
        }
    },
    {
        path: '/confirm',
        component: () => import('./views/Register.vue'),
        meta: {
            hideNavbar: true,
            confirm: true
        }
    },
    {
        path: '/error',
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