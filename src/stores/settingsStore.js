import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('SettingsStore', {
    state: () => {
        return {
            languageEnglish: true,
            languageGerman: false,
            darkMode: true,
            lightMode: false,

            en: {
                aboutMeHeading: 'About Me',
            },
            de: {
                aboutMeHeading: 'Über Mich',
            },
        }
    },

    actions: {
        setDarkMode() {
            this.lightMode = false
            setTimeout(() => {this.darkMode = true}, 150)
            document.documentElement.style.setProperty('--primary-color', '#191919')
            document.documentElement.style.setProperty('--secondary-color', '#ccc')
            document.documentElement.style.setProperty('--secondary-color-light', '#cccccc88')
        },

        setLightMode() {
            this.darkMode = false
            setTimeout(() => {this.lightMode = true}, 150)
            document.documentElement.style.setProperty('--primary-color', '#eee')
            document.documentElement.style.setProperty('--secondary-color', '#191919')
            document.documentElement.style.setProperty('--secondary-color-light', '#191919aa')
        },
        setLanguageGerman() {
            this.languageEnglish = false
            setTimeout(() => {this.languageGerman = true}, 170)
        },
        setLanguageEnglish() {
            this.languageGerman = false
            setTimeout(() => {this.languageEnglish = true}, 170)
        }
    },
})