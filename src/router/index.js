import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import ContentView from '../views/ContentView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: LandingPage,
    },
    {
      path: '/portfolio',
      name: 'content',
      component: ContentView,
      children: [
        {
          path: '',
          name: 'about',
          component: AboutView,
        },
        {
          path: 'contact',
          name: 'contact',
          component: ContactView,
        }
      ]
    }
  ]
})

router.beforeEach((to, from) => {
  //No Anmiation when entering LadingPage
  if (to.name === 'landingPage') {
    to.meta.transition = 'no-transition'
  }
  //Slide transition when leaving LandingPage
  else if (from.name === 'landingPage') {
    to.meta.transition = 'slide'
  }
})

export default router
