import { defineStore } from "pinia";
import { useSettingsStore } from "./settingsStore";

export const useProjectsStore = defineStore("ProjectsStore", {
  state: () => {
    return {
      settings: useSettingsStore(),

      en: {
        viewName: "Projects",
        projects: [
          {
            id: 1,
            title: "Dungeons & Dragons Diary",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
            image: "/src/assets/images/dnd-diary-preview-english-overview.png",
            images: {
              overview: {
                image:
                  "/src/assets/images/dnd-diary-preview-english-overview.png",
                alt: "Overview",
              },
              sessions: {
                image:
                  "/src/assets/images/dnd-diary-preview-english-sessions.png",
                alt: "Sessions",
              },
              persons: {
                image:
                  "/src/assets/images/dnd-diary-preview-english-persons.png",
                alt: "Persons",
              },
              locations: {
                image:
                  "/src/assets/images/dnd-diary-preview-english-locations.png",
                alt: "Locations",
              },
              notes: {
                image: "/src/assets/images/dnd-diary-preview-english-notes.png",
                alt: "Notes",
              },
            },
            link: "https://www.google.com",
            linkText: "Link to Project 1",
          },
          {
            id: 2,
            title: "'Digimory' - A digital memory app",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
            image: null,
            link: "https://www.google.com",
            linkText: "Link to Project 2",
          },
          {
            id: 3,
            title: "Addressbook",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
            image: "/src/assets/images/addressbook-preview.png",
            link: "https://www.google.com",
            linkText: "Link to Project 2",
          },
        ],
      },

      de: {
        viewName: "Projekte",
        projects: [
          {
            id: 1,
            title: "Dungeons & Dragons Tagebuch",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
            image: "/src/assets/images/dnd-diary-preview-german-overview.png",
            images: {
              overview: {
                image:
                  "/src/assets/images/dnd-diary-preview-german-overview.png",
                alt: "Übersicht",
              },
              sessions: {
                image:
                  "/src/assets/images/dnd-diary-preview-german-sessions.png",
                alt: "Spieltage",
              },
              persons: {
                image:
                  "/src/assets/images/dnd-diary-preview-german-persons.png",
                alt: "Personen",
              },
              locations: {
                image:
                  "/src/assets/images/dnd-diary-preview-german-locations.png",
                alt: "Orte",
              },
              notes: {
                image: "/src/assets/images/dnd-diary-preview-german-notes.png",
                alt: "Notizen",
              },
            },
            link: "https://www.google.de",
            linkText: "Link zum Projekt",
          },
          {
            id: 2,
            title: "'Digimory' - Eine digitale Erinnerungsapp",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
            image: null,
            link: "https://www.google.com",
            linkText: "Link to Project 2",
          },
          {
            id: 3,
            title: "Adressbuch",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
            image: "/src/assets/images/addressbook-preview.png",
            link: "https://www.google.de",
            linkText: "Link zum Projekt",
          },
        ],
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
    projects() {
      if (this.settings.languageEnglish) {
        return this.en.projects;
      } else if (this.settings.languageGerman) {
        return this.de.projects;
      }
    },
  },
});
