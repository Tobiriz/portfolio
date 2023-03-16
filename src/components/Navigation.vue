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
      this.closeMenu();
    },

    openMenu() {
      const navigation = document.getElementsByClassName("navigation")[0];
      const blur = document.getElementsByClassName("navigation-blur")[0];
      navigation.classList.add("navigation--active");
      blur.classList.add("navigation-blur--active");
      this.navigationActive = true;
    },

    closeMenu() {
      const navigation = document.getElementsByClassName("navigation")[0];
      const blur = document.getElementsByClassName("navigation-blur")[0];
      navigation.classList.remove("navigation--active");
      blur.classList.remove("navigation-blur--active");
      this.navigationActive = false;
    },
  },
};
</script>

<template>
  <font-awesome-icon
    v-if="!this.navigationActive"
    icon="fa-solid fa-bars"
    class="icon"
    @click="openMenu"
    size="2x"
  />
  <font-awesome-icon
    v-else
    icon="fa-solid fa-xmark"
    class="icon"
    @click="closeMenu"
    size="2x"
  />
  <div class="navigation-blur" @click="toggleMenu()"></div>

  <div class="navigation">
    <div class="navigation__links">
      <RouterLink
        :to="{ name: 'about' }"
        @mouseover="handleMouseOver()"
        @mouseleave="handleMouseLeave()"
        @click="handleMouseClick()"
      >
        {{ about.viewName }}
      </RouterLink>
      <RouterLink
        :to="{ name: 'skillset' }"
        @mouseover="handleMouseOver()"
        @mouseleave="handleMouseLeave()"
        @click="handleMouseClick()"
      >
        {{ skillset.viewName }}
      </RouterLink>
      <RouterLink
        :to="{ name: 'projects' }"
        @mouseover="handleMouseOver()"
        @mouseleave="handleMouseLeave()"
        @click="handleMouseClick()"
      >
        {{ projects.viewName }}
      </RouterLink>
      <RouterLink
        :to="{ name: 'contact' }"
        @mouseover="handleMouseOver()"
        @mouseleave="handleMouseLeave()"
        @click="handleMouseClick()"
      >
        {{ contact.viewName }}
      </RouterLink>
    </div>
    <Settings></Settings>
  </div>
</template>

<style lang="scss" scoped>
.icon {
  display: none;
  position: fixed;
  top: 1rem;
  left: 1rem;
  padding: 0.5rem;
  color: var(--color-secondary);
  background-color: var(--color-secondary-light);
  border-radius: 50%;
  aspect-ratio: 1/1;
  z-index: 5;
}

.navigation-blur {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease-in-out;
  z-index: 0;

  &--active {
    display: block;
  }
}

.navigation {
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  z-index: 5;

  &__links {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-bottom: 5rem;
    align-items: flex-start;

    a {
      text-decoration: none;
      font-size: 2rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      cursor: none;
      color: var(--color-secondary-light);

      &:hover {
        color: var(--color-accent);
      }
    }
  }
}

.router-link-exact-active {
  color: var(--color-secondary) !important;
}

@media screen and (max-width: 1500px) {
  .navigation__links {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 1279px) {
  .icon {
    display: block;
  }

  .navigation {
    position: fixed;
    top: 0;
    left: 0;
    width: 20rem;
    height: 100vh;
    padding-top: 4rem;
    padding-left: 3rem;
    background-color: var(--color-primary);
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &--active {
      transform: translateX(0);
    }

    &__links {
      padding-bottom: 0;
      font-size: 2rem;
    }
  }
}

@media screen and (max-width: 500px) {
  .navigation {
    align-items: center;
    width: 100vw;
    padding-top: 5rem;

    &__links {
      text-align: center;
    }
  }
}
</style>
