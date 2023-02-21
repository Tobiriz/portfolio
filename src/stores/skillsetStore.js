import { defineStore } from 'pinia'
import { useSettingsStore } from './settingsStore'

export const useSkillsetStore = defineStore('SkillsetStore', {
    state: () => {
        return {
            settings: useSettingsStore(),

            en: {
                viewName: 'Skills',
            },

            de: {
                viewName: 'Fähigkeiten',
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
    }
})