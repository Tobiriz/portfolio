import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Router from './router'

import './assets/main.scss'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faChevronRight, faArrowUpRightFromSquare, faSun, faMoon)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)
const pinia = createPinia()

app.use(Router)
app.use(pinia)

app.mount('#app')
