import { defineStore } from 'pinia'
import { useSettingsStore } from './settingsStore'

export const useProjectsStore = defineStore('ProjectsStore', {
    state: () => {
        return {
            settings: useSettingsStore(),

            en: {
                viewName: 'Projects',
                projects: [
                    {
                        id: 1,
                        title: 'Project 1',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
                        image: 'https://picsum.photos/200/300',
                        link: 'https://www.google.com',
                        linkText: 'Link to Project 1',
                    },
                    {
                        id: 2,
                        title: 'Project 2',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
                        image: 'https://picsum.photos/200/300',
                        link: 'https://www.google.com',
                        linkText: 'Link to Project 2',
                    },
                ],
            },

            de: {
                viewName: 'Projekte',
                projects: [
                    {
                        id: 1,
                        title: 'Projekt 1',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
                        image: 'https://picsum.photos/200/300',
                        link: 'https://www.google.de',
                        linkText: 'Link zum Projekt'
                    },
                    {
                        id: 2,
                        title: 'Projekt 2',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
                        image: 'https://picsum.photos/200/300',
                        link: 'https://www.google.de',
                        linkText: 'Link zum Projekt'
                    },
                ],
            }
        }
    },

    getters: {
        viewName() {
            if (this.settings.languageEnglish) {
                return this.en.viewName
            } else if (this.settings.languageGerman) {
                return this.de.viewName
            }
        },
        projects() {
            if (this.settings.languageEnglish) {
                return this.en.projects
            } else if (this.settings.languageGerman) {
                return this.de.projects
            }
        },
    }
})