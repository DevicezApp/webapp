import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {fas} from "@fortawesome/free-solid-svg-icons";

library.add(fas)

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import axios from "./axios";

// @ts-ignore
const url = import.meta.env.VITE_API_URL;
console.log(url);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .use(axios, {
        baseUrl: url,
    })
    .mount('#app')