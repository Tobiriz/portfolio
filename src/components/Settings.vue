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
  <div
    class="options flex flex-row gap-2 justify-content-center align-items-center"
  >
    <div class="options__language text-left">
      <p
        v-show="store.languageEnglish"
        class="language-selector color-secondary-light color-accent-hover font-size-1-5 flex flex-row"
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
        class="language-selector color-secondary-light color-accent-hover font-size-1-5 flex flex-row"
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
          class="icon color-secondary-light color-accent-hover font-size-1-5 pos-rel"
          @mouseover="handleMouseOver()"
          @mouseleave="handleMouseLeave()"
          @click="handleMouseClick('setDarkMode')"
          v-if="store.lightMode"
        />
      </Transition>
      <Transition>
        <font-awesome-icon
          icon="fa-solid fa-sun"
          class="icon color-secondary-light color-accent-hover font-size-1-5 pos-rel"
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
.language-selector {
  gap: 1px;
}
.options {
  align-self: center;
  padding: 2vh 0 5vh 0;

  .div {
    width: 100%;
  }
}

//screen width < 768px
@media screen and (max-width: 768px) {
  .options {
    .icon {
      font-size: 5vw;
    }
    .language-selector {
      font-size: 5vw;
    }
  }
}

@media screen and (max-height: 600px) {
  .options {
    .icon {
      font-size: 5vh;
    }
    .language-selector {
      font-size: 5vh;
    }
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
