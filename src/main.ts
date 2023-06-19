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

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .use(axios, {
        baseUrl: 'https://api.devicez.de',
    })
    .mount('#app')