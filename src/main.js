import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import Router from "./router";

import "./assets/base.scss";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faXing,
} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faChevronRight,
  faChevronDown,
  faArrowUpRightFromSquare,
  faSun,
  faMoon,
  faBars,
  faXmark,
  faGithub,
  faLinkedin,
  faXing
);

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);
const pinia = createPinia();

app.use(Router);
app.use(pinia);

app.mount("#app");
