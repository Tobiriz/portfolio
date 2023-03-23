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
            notice: "This project is currently in development!",
            description:
              "Record your adventures and characters in an interactive diary with the Dungeons and Dragons webapp, programmed with Vue.js!",
            image: "/src/assets/images/dnd-diary-preview-english-overview.png",
            images: [
              {
                src: "/src/assets/images/dnd-diary-preview-english-overview.png",
                alt: {
                  title: "Overview",
                  description:
                    "An overview page that shows the name of the campaign, a short description, the dungeon master and the teammates. Keep track of your adventures!",
                },
              },
              {
                src: "/src/assets/images/dnd-diary-preview-english-sessions.png",
                alt: {
                  title: "Sessions",
                  description:
                    "A page where you can manage all the sessions of your campaign. Record the date and a short description to preserve your memories.",
                },
              },
              {
                src: "/src/assets/images/dnd-diary-preview-english-persons.png",
                alt: {
                  title: "Persons",
                  description:
                    "An area where you can record the names and descriptions of people in the world that your characters meet. Never lose track of important NPCs!",
                },
              },
              {
                src: "/src/assets/images/dnd-diary-preview-english-locations.png",
                alt: {
                  title: "Locations",
                  description:
                    "A page where you can record places in the world that your characters visit or explore. Add names and descriptions to keep track of them.",
                },
              },
              {
                src: "/src/assets/images/dnd-diary-preview-english-notes.png",
                alt: {
                  title: "Notes",
                  description:
                    "Here you can write down notes about your adventures and characters. Write down ideas, memories or thoughts so you don't forget anything!",
                },
              },
            ],
            link: "https://github.com/Tobiriz/DnD-Diary",
            linkText: "Link to the GitHub Repository",
          },
          {
            id: 2,
            title: "'Digimory' - A digital organization platform",
            notice: "This project is currently in planning!",
            description:
              "You've probably been there: you have so many things in your head that you need to get done or organize that you quickly lose track of them. Notes, recipes, addresses, rentals, and to-do lists - everything seems to be scattered in different folders, apps, or even on post-its. What if there was a single platform where you could store, manage, search and sort everything in one place? That's the goal of Digimory!",
            image: null,
            link: null,
            linkText: null,
          },
          {
            id: 3,
            title: "Addressbook",
            description:
              "This is a Java application that allows to manage people with their names, addresses, birthdays and contact options. The application provides a simple and intuitive interface that allows the user to quickly and effectively add, edit and delete people.",
            image: "/src/assets/images/addressbook-preview.png",
            images: [
              {
                src: "/src/assets/images/addressbook-preview.png",
                alt: {
                  title: "Overview",
                  description: "",
                },
              },
            ],
            link: "https://github.com/Tobiriz/AddressRegister",
            linkText: "Link to the GitHub Repository",
          },
        ],
      },

      de: {
        viewName: "Projekte",
        projects: [
          {
            id: 1,
            title: "Dungeons & Dragons Tagebuch",
            notice: "Dieses Projekt befindet sich in der Entwicklung!",
            description:
              "Halte deine Abenteuer und Charaktere in einem interaktiven Tagebuch fest - mit der Dungeons and Dragons Webapp, programmiert mit Vue.js!",
            image: "/src/assets/images/dnd-diary-preview-german-overview.png",
            images: [
              {
                src: "/src/assets/images/dnd-diary-preview-german-overview.png",
                alt: {
                  title: "Übersicht",
                  description:
                    "Eine Übersichtsseite, die den Namen der Kampagne, eine kurze Beschreibung, den Dungeonmaster und die Mitspieler anzeigt. Behalte den Überblick über deine Abenteuer!",
                },
              },
              {
                src: "/src/assets/images/dnd-diary-preview-german-sessions.png",
                alt: {
                  title: "Sitzungen",
                  description:
                    "Eine Seite, auf der du alle Sitzungen deiner Kampagne verwalten kannst. Erfasse das Datum und eine kurze Beschreibung, um deine Erinnerungen zu bewahren.",
                },
              },
              {
                src: "/src/assets/images/dnd-diary-preview-german-persons.png",
                alt: {
                  title: "Personen",
                  description:
                    "Ein Bereich, in welchem du die Namen und die Beschreibung von Personen in der Welt erfassen kannst, die deine Charaktere treffen. Verliere nie den Überblick über wichtige NPCs!",
                },
              },
              {
                src: "/src/assets/images/dnd-diary-preview-german-locations.png",
                alt: {
                  title: "Orte",
                  description:
                    "Eine Seite, auf der du Orte in der Welt erfassen kannst, die deine Charaktere besuchen oder erkunden. Füge Namen und Beschreibungen hinzu, um den Überblick zu behalten.",
                },
              },
              {
                src: "/src/assets/images/dnd-diary-preview-german-notes.png",
                alt: {
                  title: "Notizen",
                  description:
                    "Hier kannst du Notizen zu deinen Abenteuern und Charakteren aufschreiben. Schreibe Ideen, Erinnerungen oder Gedanken auf, um nichts zu vergessen!",
                },
              },
            ],
            link: "https://github.com/Tobiriz/DnD-Diary",
            linkText: "Link zum GitHub Repository",
          },
          {
            id: 2,
            title: "'Digimory' - Eine digitale Organisations-Plattform",
            notice: "Dieses Projekt befindet sich in der Planung!",
            description:
              "Du kennst das sicher: man hat so viele Dinge im Kopf, die man erledigen oder organisieren muss, dass man schnell den Überblick verliert. Notizen, Rezepte, Adressen, Verleihungen und To-Do-Listen - alles scheint in verschiedenen Ordnern, Apps oder sogar auf Post-its verstreut zu sein. Wie wäre es, wenn es eine einzige Plattform gäbe, auf der du alles an einem Ort speichern, verwalten, durchsuchen und sortieren kannst? Das ist das Ziel von Digimory!",
            image: null,
            link: null,
            linkText: null,
          },
          {
            id: 3,
            title: "Adressbuch",
            notice: null,
            description:
              "Dies ist eine Java-Anwendung, die es ermöglicht, Personen mit ihren Namen, Adressen, Geburtstagen und Kontaktmöglichkeiten zu verwalten. Die Anwendung bietet eine einfache und intuitive Benutzeroberfläche, die es dem Benutzer ermöglicht, schnell und effektiv Personen hinzuzufügen, zu bearbeiten und zu löschen.",
            image: "/src/assets/images/addressbook-preview.png",
            images: [
              {
                src: "/src/assets/images/addressbook-preview.png",
                alt: {
                  title: "Übersicht",
                  description: "",
                },
              },
            ],
            link: "https://github.com/Tobiriz/AddressRegister",
            linkText: "Link zum GitHub Repository",
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
