<script>
import { useSettingsStore } from "@/stores/settingsStore";

export default {
  setup() {
    const store = useSettingsStore();
    return { store };
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

    handleMouseClick(setting) {
      if (setting === "setLanguageEnglish") {
        this.store.setLanguageEnglish();
      } else if (setting === "setLanguageGerman") {
        this.store.setLanguageGerman();
      } else if (setting === "setLightMode") {
        this.store.setLightMode();
      } else if (setting === "setDarkMode") {
        this.store.setDarkMode();
      }

      const cursor = document.getElementById("cursor");
      cursor.classList.add("cursor--click");
      setTimeout(() => {
        cursor.classList.remove("cursor--click");
      }, 300);
    },
  },
};
</script>

<template>
  <div class="options">
    <div class="options__language">
      <p
        v-show="store.languageEnglish"
        class="language-selector"
        @mouseover="handleMouseOver()"
        @mouseleave="handleMouseLeave()"
        @click="handleMouseClick('setLanguageGerman')"
      >
        <font-awesome-icon icon="fa-solid fa-d" />
        <font-awesome-icon icon="fa-solid fa-e" />
        <font-awesome-icon icon="fa-solid fa-u" />
      </p>
      <p
        v-show="store.languageGerman"
        class="language-selector"
        @mouseover="handleMouseOver()"
        @mouseleave="handleMouseLeave()"
        @click="handleMouseClick('setLanguageEnglish')"
      >
        <font-awesome-icon icon="fa-solid fa-e" />
        <font-awesome-icon icon="fa-solid fa-n" />
        <font-awesome-icon icon="fa-solid fa-g" />
      </p>
    </div>
    <div class="options__theme">
      <Transition>
        <font-awesome-icon
          icon="fa-solid fa-moon"
          class="icon"
          @mouseover="handleMouseOver()"
          @mouseleave="handleMouseLeave()"
          @click="handleMouseClick('setDarkMode')"
          v-if="store.lightMode"
        />
      </Transition>
      <Transition>
        <font-awesome-icon
          icon="fa-solid fa-sun"
          class="icon"
          @mouseover="handleMouseOver()"
          @mouseleave="handleMouseLeave()"
          @click="handleMouseClick('setLightMode')"
          v-if="store.darkMode"
        />
      </Transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.options {
  display: flex;
  flex-direction: row;
  gap: 2rem;

  .options__language {
    text-align: start;

    .language-selector {
      display: flex;
      flex-direction: row;
      gap: 2px;
      color: var(--color-secondary-light);
      font-size: 1.5rem;

      &:hover {
        color: var(--color-accent);
      }
    }
  }

  .options__theme {
    .icon {
      position: relative;
      color: var(--color-secondary-light);
      font-size: 1.5rem;

      &:hover {
        color: var(--color-accent);
      }
    }
  }
}

//screen width < 768px
@media screen and (max-width: 1279px) {
  .options {
    align-self: flex-start;
    padding-left: 2rem;
    .icon {
      font-size: 2rem;
    }
    .language-selector {
      font-size: 2rem;
    }
  }
}

@media screen and (max-width: 500px) {
  .options {
    align-self: center;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.15s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
