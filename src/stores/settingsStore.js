import { defineStore } from "pinia";

export const useSettingsStore = defineStore("SettingsStore", {
  state: () => {
    return {
      languageEnglish: true,
      languageGerman: false,
      darkMode: true,
      lightMode: false,
      overlayActive: false,
      contentUpdate: false,
    };
  },

  actions: {
    setDarkMode() {
      this.lightMode = false;
      setTimeout(() => {
        this.darkMode = true;
      }, 162);
      document.documentElement.style.setProperty(
        "--color-primary",
        "var(--c-black)"
      );
      document.documentElement.style.setProperty(
        "--color-secondary",
        "var(--c-white-mute)"
      );
      document.documentElement.style.setProperty(
        "--color-secondary-light",
        "var(--c-white-mute-transparent)"
      );
      document.documentElement.style.setProperty(
        "--color-canvas",
        "var(--c-grey)"
      );
      document.documentElement.style.setProperty(
        "--color-accent",
        "var(--c-blue-light)"
      );
      document.documentElement.style.setProperty(
        "--color-accent-variant-1",
        "var(--c-blue-light-variant-1)"
      );
      document.documentElement.style.setProperty(
        "--color-accent-variant-2",
        "var(--c-blue-light-variant-2)"
      );
      document.documentElement.style.setProperty(
        "--color-accent-variant-3",
        "var(--c-blue-light-variant-3)"
      );
      document.documentElement.style.setProperty(
        "--color-accent-variant-4",
        "var(--c-blue-light-variant-4)"
      );
      document.documentElement.style.setProperty(
        "--color-title-card",
        "var(--c-black-soft)"
      );
      document.documentElement.style.setProperty(
        "--color-blob-1",
        "var(--c-blue-dark)"
      );
      document.documentElement.style.setProperty(
        "--color-blob-2",
        "var(--c-greyish)"
      );
      this.setFavicon("/favicon-dark.ico");

      //Store the current theme in local storage
      localStorage.setItem("theme", "dark");
    },

    setLightMode() {
      this.darkMode = false;
      setTimeout(() => {
        this.lightMode = true;
      }, 162);
      document.documentElement.style.setProperty(
        "--color-primary",
        "var(--c-white)"
      );
      document.documentElement.style.setProperty(
        "--color-secondary",
        "var(--c-black)"
      );
      document.documentElement.style.setProperty(
        "--color-secondary-light",
        "var(--c-black-transparent)"
      );
      document.documentElement.style.setProperty(
        "--color-canvas",
        "var(--c-grey-soft)"
      );
      document.documentElement.style.setProperty(
        "--color-accent",
        "var(--c-red)"
      );
      document.documentElement.style.setProperty(
        "--color-accent-variant-1",
        "var(--c-red-variant-1)"
      );
      document.documentElement.style.setProperty(
        "--color-accent-variant-2",
        "var(--c-red-variant-2)"
      );
      document.documentElement.style.setProperty(
        "--color-accent-variant-3",
        "var(--c-red-variant-3)"
      );
      document.documentElement.style.setProperty(
        "--color-accent-variant-4",
        "var(--c-red-variant-4)"
      );
      document.documentElement.style.setProperty(
        "--color-title-card",
        "var(--c-white-soft)"
      );
      document.documentElement.style.setProperty(
        "--color-blob-1",
        "var(--c-violet-dark)"
      );
      document.documentElement.style.setProperty(
        "--color-blob-2",
        "var(--c-orange-dark)"
      );
      this.setFavicon("/favicon-light.ico");

      //Store the current theme in local storage
      localStorage.setItem("theme", "light");
    },

    setLanguageGerman() {
      this.overlayActive = true;
      setTimeout(() => {
        this.languageEnglish = false;
        this.languageGerman = true;
        this.overlayActive = false;
      }, 600);

      //Store the current language in local storage
      localStorage.setItem("language", "de");
    },

    setLanguageEnglish() {
      this.overlayActive = true;
      setTimeout(() => {
        this.languageGerman = false;
        this.languageEnglish = true;
        this.overlayActive = false;
      }, 600);

      //Store the current language in local storage
      localStorage.setItem("language", "en");
    },

    contentUpdateTrigger() {
      this.contentUpdate = true;
      setTimeout(() => {
        this.contentUpdate = false;
      }, 100);
    },

    setFavicon(img) {
      let link =
        document.querySelector("link[rel*='icon']") ||
        document.createElement("link");
      link.type = "image/x-icon";
      link.rel = "shortcut icon";
      link.href = img;
      document.getElementsByTagName("head")[0].appendChild(link);
    },

    readLocalStorage() {
      if (localStorage.getItem("theme") === "dark") {
        this.setDarkMode();
      } else if (localStorage.getItem("theme") === "light") {
        this.setLightMode();
      }

      if (localStorage.getItem("language") === "de") {
        this.setLanguageGerman();
      } else if (localStorage.getItem("language") === "en") {
        this.setLanguageEnglish();
      }
    },
  },

  getters: {
    screenWidth() {
      return window.innerWidth;
    },

    languageSeletorText() {
      if (this.languageEnglish) {
        return "Auf Deutsch wechseln";
      } else if (this.languageGerman) {
        return "Switch to English";
      }
    },

    themeSelectorText() {
      if (this.languageEnglish) {
        if (this.darkMode) {
          return "Switch to light mode";
        } else if (this.lightMode) {
          return "Switch to dark mode";
        }
      } else if (this.languageGerman) {
        if (this.darkMode) {
          return "Zum hellen Modus wechseln";
        } else if (this.lightMode) {
          return "Zum dunklen Modus wechseln";
        }
      }
    },

    languageIsEnglish() {
      return this.languageEnglish;
    },

    languageIsGerman() {
      return this.languageGerman;
    },
  },
});
