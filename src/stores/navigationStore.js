import { defineStore } from 'pinia'
import { useSettingsStore } from './settingsStore'

export const useNavigationStore = defineStore('NavigationStore', {
    state: () => {
        return {
            settings: useSettingsStore(),

            en: {
                about: 'About',
                skillset: 'Skillset',
                projects: 'Projects',
                contact: 'Contact',
            },

            de: {
                about: 'Info',
                skillset: 'Skills',
                projects: 'Projekte',
                contact: 'Kontakt',
            }
        }
    },

    getters: {
        about() {
            if (this.settings.languageEnglish) {
                return this.en.about
            } else if (this.settings.languageGerman) {
                return this.de.about
            }
        },
        skillset() {
            if (this.settings.languageEnglish) {
                return this.en.skillset
            } else if (this.settings.languageGerman) {
                return this.de.skillset
            }
        },
        projects() {
            if (this.settings.languageEnglish) {
                return this.en.projects
            } else if (this.settings.languageGerman) {
                return this.de.projects
            }
        },
        contact() {
            if (this.settings.languageEnglish) {
                return this.en.contact
            } else if (this.settings.languageGerman) {
                return this.de.contact
            }
        },
    }
})