import { defineStore } from "pinia";
import { useSettingsStore } from "./settingsStore";

export const useLandingPageStore = defineStore("LandingPageStore", {
  state: () => {
    return {
      settings: useSettingsStore(),

      en: {
        name: "Tobias Weinlich",
        occupation: "Junior Software Developer",
      },

      de: {
        name: "Tobias Weinlich",
        occupation: "Junior Software Developer",
      },
    };
  },

  getters: {
    name() {
      if (this.settings.languageEnglish) {
        return this.en.name;
      } else if (this.settings.languageGerman) {
        return this.de.name;
      }
    },
    occupation() {
      if (this.settings.languageEnglish) {
        return this.en.occupation;
      } else if (this.settings.languageGerman) {
        return this.de.occupation;
      }
    },
  },
});
