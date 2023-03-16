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
            images: [
              {
                src: "/src/assets/images/dnd-diary-preview-english-overview.png",
                alt: {
                  title: "Overview",
                  description: "Overview of the app",
                },
              },
              {
                src: "/src/assets/images/dnd-diary-preview-english-sessions.png",
                alt: {
                  title: "Sessions",
                  description: "Overview of all sessions",
                },
              },
              {
                src: "/src/assets/images/dnd-diary-preview-english-persons.png",
                alt: {
                  title: "Persons",
                  description: "Overview of all persons",
                },
              },
              {
                src: "/src/assets/images/dnd-diary-preview-english-locations.png",
                alt: {
                  title: "Locations",
                  description: "Overview of all locations",
                },
              },
              {
                src: "/src/assets/images/dnd-diary-preview-english-notes.png",
                alt: {
                  title: "Notes",
                  description: "Overview of all notes",
                },
              },
            ],
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
            images: [
              {
                src: "/src/assets/images/addressbook-preview.png",
                alt: {
                  title: "Overview",
                  description: "Overview of the app",
                },
              },
            ],
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
            images: [
              {
                src: "/src/assets/images/dnd-diary-preview-german-overview.png",
                alt: {
                  title: "Übersicht",
                  description: "Übersicht der App",
                },
              },
              {
                src: "/src/assets/images/dnd-diary-preview-german-sessions.png",
                alt: {
                  title: "Sitzungen",
                  description: "Übersicht aller Sitzungen",
                },
              },
              {
                src: "/src/assets/images/dnd-diary-preview-german-persons.png",
                alt: {
                  title: "Personen",
                  description: "Übersicht aller Personen",
                },
              },
              {
                src: "/src/assets/images/dnd-diary-preview-german-locations.png",
                alt: {
                  title: "Orte",
                  description: "Übersicht aller Orte",
                },
              },
              {
                src: "/src/assets/images/dnd-diary-preview-german-notes.png",
                alt: {
                  title: "Notizen",
                  description: "Übersicht aller Notizen",
                },
              },
            ],
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
            images: [
              {
                src: "/src/assets/images/addressbook-preview.png",
                alt: {
                  title: "Übersicht",
                  description: "Übersicht der App",
                },
              },
            ],
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
