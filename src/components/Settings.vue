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

    handleClick(setting) {
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
      <button
        tabindex="5"
        type="button"
        v-if="store.languageEnglish"
        @keydown.enter="handleClick('setLanguageGerman')"
      >
        <p
          class="language-selector"
          @mouseover="handleMouseOver()"
          @mouseleave="handleMouseLeave()"
          @click="handleClick('setLanguageGerman')"
        >
          <font-awesome-icon icon="fa-solid fa-d" />
          <font-awesome-icon icon="fa-solid fa-e" />
          <font-awesome-icon icon="fa-solid fa-u" />
        </p>
        <span class="visually-hidden">
          {{ store.languageSelectorText }}
        </span>
      </button>

      <button
        tabindex="5"
        type="button"
        v-if="store.languageGerman"
        @keydown.enter="handleClick('setLanguageEnglish')"
      >
        <p
          class="language-selector"
          @mouseover="handleMouseOver()"
          @mouseleave="handleMouseLeave()"
          @click="handleClick('setLanguageEnglish')"
        >
          <font-awesome-icon icon="fa-solid fa-e" />
          <font-awesome-icon icon="fa-solid fa-n" />
          <font-awesome-icon icon="fa-solid fa-g" />
        </p>
        <span class="visually-hidden">
          {{ store.languageSelectorText }}
        </span>
      </button>
    </div>

    <div class="options__theme">
      <Transition>
        <button
          tabindex="6"
          type="button"
          v-if="store.lightMode"
          @keydown.enter="handleClick('setDarkMode')"
        >
          <font-awesome-icon
            icon="fa-solid fa-moon"
            class="icon"
            @mouseover="handleMouseOver()"
            @mouseleave="handleMouseLeave()"
            @click="handleClick('setDarkMode')"
          />
          <span class="visually-hidden">
            {{ store.themeSelectorText }}
          </span>
        </button>
      </Transition>

      <Transition>
        <button
          tabindex="6"
          type="button"
          v-if="store.darkMode"
          @keydown.enter="handleClick('setLightMode')"
        >
          <font-awesome-icon
            icon="fa-solid fa-sun"
            class="icon"
            @mouseover="handleMouseOver()"
            @mouseleave="handleMouseLeave()"
            @click="handleClick('setLightMode')"
            v-if="store.darkMode"
          />
          <span class="visually-hidden">
            {{ store.themeSelectorText }}
          </span>
        </button>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
button {
  all: unset;
}

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
