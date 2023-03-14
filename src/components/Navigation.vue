<script>
import { RouterLink } from "vue-router";
import { useSettingsStore } from "@/stores/settingsStore";
import { useAboutStore } from "@/stores/aboutStore";
import { useContactStore } from "@/stores/contactStore";
import { useSkillsetStore } from "@/stores/skillsetStore";
import { useProjectsStore } from "@/stores/projectsStore";
import Settings from "@/components/Settings.vue";

export default {
  components: {
    RouterLink,
    Settings,
  },

  setup() {
    const settings = useSettingsStore();
    const about = useAboutStore();
    const contact = useContactStore();
    const skillset = useSkillsetStore();
    const projects = useProjectsStore();
    return { settings, about, contact, skillset, projects };
  },

  data() {
    return {
      navigationActive: false,
    };
  },

  methods: {
    handleMouseOver() {
      const cursor = document.getElementById("cursor");
      cursor.classList.add("cursor--active");
    },

    handleMouseLeave() {
      const cursor = document.getElementById("cursor");
      cursor.classList.remove("cursor--active");
    },

    handleMouseClick() {
      const cursor = document.getElementById("cursor");
      cursor.classList.add("cursor--click");
      setTimeout(() => {
        cursor.classList.remove("cursor--click");
      }, 300);
    },

    toggleMenu() {
      const navigation = document.getElementsByClassName("navigation")[0];
      const blur = document.getElementsByClassName("navigation-blur")[0];
      navigation.classList.toggle("navigation--active");
      blur.classList.toggle("navigation-blur--active");
      this.navigationActive = !this.navigationActive;
    },
  },

  mounted() {
    const cursor = document.getElementById("cursor");

    const links =
      document.getElementsByClassName("navigation__links")[0].children;

    for (let link of links) {
      link.addEventListener("mouseover", () => {
        this.handleMouseOver();
      });

      link.addEventListener("mouseleave", () => {
        this.handleMouseLeave();
      });

      link.addEventListener("click", () => {
        this.handleMouseClick();
      });
    }

    const navigationButton =
      document.getElementsByClassName("navigation__links")[0].children;
    for (let button of navigationButton) {
      button.addEventListener("click", () => {
        this.toggleMenu();
      });
    }
  },

  unmounted() {
    const cursor = document.getElementById("cursor");

    const links =
      document.getElementsByClassName("navigation__links")[0].children;

    for (let i = 0; i < links.length; i++) {
      links[i].removeEventListener("mouseover", () => {
        this.handleMouseOver();
      });

      links[i].removeEventListener("mouseleave", () => {
        this.handleMouseLeave();
      });

      links[i].removeEventListener("click", () => {
        this.handleMouseClick();
      });
    }

    const navigationButton =
      document.getElementsByClassName("navigation__links")[0].children;
    for (let button of navigationButton) {
      button.removeEventListener("click", () => {
        this.toggleMenu();
      });
    }
  },
};
</script>

<template>
  <font-awesome-icon
    v-if="!this.navigationActive"
    icon="fa-solid fa-bars"
    class="icon"
    @click="toggleMenu"
    size="2x"
  />
  <font-awesome-icon
    v-else
    icon="fa-solid fa-xmark"
    class="icon"
    @click="toggleMenu"
    size="2x"
  />
  <div class="navigation-blur" @click="toggleMenu()"></div>

  <div class="navigation">
    <div class="navigation__links">
      <RouterLink :to="{ name: 'about' }">
        {{ about.viewName }}
      </RouterLink>
      <RouterLink :to="{ name: 'skillset' }">
        {{ skillset.viewName }}
      </RouterLink>
      <RouterLink :to="{ name: 'projects' }">
        {{ projects.viewName }}
      </RouterLink>
      <RouterLink :to="{ name: 'contact' }">
        {{ contact.viewName }}
      </RouterLink>
    </div>
    <Settings></Settings>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  position: fixed;
  top: 2vh;
  left: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  z-index: 5;

  &__links {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 5vh 2vw;
    padding-bottom: 0;

    a {
      font-size: 1.8vw;
      color: var(--secondary-color-light);
      text-decoration: none;

      &:hover {
        color: var(--accent-color);
      }
    }
  }
}

.icon {
  display: none;
  position: fixed;
  top: 1rem;
  left: 1rem;
  color: var(--secondary-color);
  z-index: 6;
}

//screen width < 768px
@media screen and (max-height: 600px), screen and (max-width: 768px) {
  .icon {
    display: block;
  }
  .navigation {
    transform: translateX(-100%);
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    border: 2px solid var(--secondary-color-light);
    background-color: var(--primary-color);
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2rem;
    z-index: 5;
    transition: all 0.3s ease-in-out;

    &__links {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 10vh 2vw;

      a {
        font-size: 5vw;
        color: var(--secondary-color-light);
        text-decoration: none;

        &:hover {
          color: var(--accent-color);
        }
      }
    }

    &--active {
      transform: translateX(0);
      display: flex;
    }
  }

  .navigation-blur {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--secondary-color-light);
    backdrop-filter: blur(2px);
    z-index: 5;

    &--active {
      display: block;
    }
  }
}

@media screen and (max-height: 600px) {
  .navigation {
    &__links {
      padding: 5vh 2vw;
      padding-bottom: 0;
      gap: 1rem;

      a {
        font-size: 5vh;
      }
    }
  }
}
</style>
