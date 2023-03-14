import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/views/LandingPage.vue";
import ContentView from "@/views/ContentView.vue";
import AboutView from "@/views/AboutView.vue";
import SkillsetView from "@/views/SkillsetView.vue";
import ProejctsView from "@/views/ProjectsView.vue";
import ContactView from "@/views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landingPage",
      component: LandingPage,
    },
    {
      path: "/portfolio",
      name: "content",
      component: ContentView,
      children: [
        {
          path: "",
          name: "about",
          component: AboutView,
        },
        {
          path: "skillset",
          name: "skillset",
          component: SkillsetView,
        },
        {
          path: "projects",
          name: "projects",
          component: ProejctsView,
        },
        {
          path: "contact",
          name: "contact",
          component: ContactView,
        },
      ],
    },
  ],
});

router.beforeEach((to, from) => {
  //No Anmiation when entering LadingPage
  if (to.name === "landingPage") {
    to.meta.transition = "no-transition";
  }
  //Slide transition when leaving LandingPage
  else if (from.name === "landingPage") {
    to.meta.transition = "slide-left";
  }
});

export default router;
