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
  <button class="menu-button">
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
  </button>
  <div class="navigation-blur" @click="toggleMenu()"></div>

  <div class="navigation">
    <div class="navigation__links">
      <RouterLink
        tabindex="1"
        :to="{ name: 'about' }"
        @mouseover="handleMouseOver()"
        @mouseleave="handleMouseLeave()"
        @click="handleMouseClick()"
      >
        {{ about.viewName }}
      </RouterLink>
      <RouterLink
        tabindex="2"
        :to="{ name: 'skillset' }"
        @mouseover="handleMouseOver()"
        @mouseleave="handleMouseLeave()"
        @click="handleMouseClick()"
      >
        {{ skillset.viewName }}
      </RouterLink>
      <RouterLink
        tabindex="3"
        :to="{ name: 'projects' }"
        @mouseover="handleMouseOver()"
        @mouseleave="handleMouseLeave()"
        @click="handleMouseClick()"
      >
        {{ projects.viewName }}
      </RouterLink>
      <RouterLink
        tabindex="4"
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
.menu-button {
  all: unset;
  display: none;
  position: fixed;
  top: 1rem;
  left: 1rem;
  border-radius: 50%;
}

.icon {
  padding: 0.5rem;
  color: var(--color-primary);
  background-color: var(--color-accent);
  aspect-ratio: 1/1;
  border-radius: 50%;
  font-size: 1.2rem;
  z-index: 100;
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
  z-index: -1;

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

@media screen and (min-width: 2560px) {
  .navigation {
    padding: 2rem;

    &__links {
      gap: 3rem;
      padding-bottom: 5rem;
      align-items: flex-start;

      a {
        font-size: 3rem;
        letter-spacing: 0.1rem;
      }
    }
  }
}

@media screen and (max-width: 1440px) {
  .navigation {
    padding: 1rem;

    &__links {
      gap: 2rem;
      padding-bottom: 3rem;
      align-items: flex-start;

      a {
        font-size: 1.8rem;
        letter-spacing: 0.1rem;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .navigation {
    padding: 1rem;

    &__links {
      gap: 1.5rem;
      padding-bottom: 3rem;
      align-items: flex-start;

      a {
        font-size: 1.3rem;
        letter-spacing: 0;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .navigation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: none;
    justify-content: flex-start;
    padding: 1rem 2rem;
    z-index: -1;

    &__links {
      padding-top: 4rem;
      gap: 1.5rem;
      padding-bottom: 3rem;
      align-items: flex-start;

      a {
        font-size: 1.3rem;
        letter-spacing: 0.1rem;
      }
    }
  }

  .navigation--active {
    display: flex;
    background-color: var(--color-primary);
    width: 40%;
  }

  .menu-button {
    display: block;
    position: fixed;
    top: 1rem;
    left: 1rem;
    border-radius: 50%;
  }

  .icon {
    padding: 0.3rem;
    font-size: 1.3rem;
  }
}

@media screen and (max-width: 425px) {
  .navigation {
    display: none;
    padding: 0;
    align-items: center;
    justify-content: center;

    &__links {
      padding-top: 0;
      gap: 1.5rem;
      padding-bottom: 4rem;
      align-items: center;

      a {
        font-size: 2rem;
        letter-spacing: 0.1rem;
      }
    }
  }

  .navigation--active {
    display: flex;
    width: 100%;
  }

  .icon {
    padding: 0.5rem;
    font-size: 1.5rem;
  }
}

</style>
