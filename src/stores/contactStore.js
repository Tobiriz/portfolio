import { defineStore } from "pinia";
import { useSettingsStore } from "./settingsStore";

export const useContactStore = defineStore("ContactStore", {
  state: () => {
    return {
      settings: useSettingsStore(),

      en: {
        viewName: "Contact",
        email: "Email",
        emailAddress: "contact@tobiasweinlich.com",
        media: "Media",
      },

      de: {
        viewName: "Kontakt",
        email: "E-Mail",
        emailAddress: "kontakt@tobiasweinlich.com",
        media: "Medien",
      },
    };
  },

  getters: {
    viewName() {
      if (this.settings.languageEnglish) {
        return this.en.viewName;
      } else if (this.settings.languageGerman) {
        return this.de.viewName;
      }
    },
    email() {
      if (this.settings.languageEnglish) {
        return this.en.email;
      } else if (this.settings.languageGerman) {
        return this.de.email;
      }
    },
    emailAddress() {
      if (this.settings.languageEnglish) {
        return this.en.emailAddress;
      } else if (this.settings.languageGerman) {
        return this.de.emailAddress;
      }
    },
    media() {
      if (this.settings.languageEnglish) {
        return this.en.media;
      } else if (this.settings.languageGerman) {
        return this.de.media;
      }
    },
  },
});
