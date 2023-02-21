import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('SettingsStore', {
    state: () => {
        return {
            languageEnglish: true,
            languageGerman: false,
            darkMode: true,
            lightMode: false,
            overlayActive: false,
        }
    },

    actions: {
        setDarkMode() {
            this.lightMode = false
            setTimeout(() => {this.darkMode = true}, 150)
            document.documentElement.style.setProperty('--primary-color', '#191919')
            document.documentElement.style.setProperty('--secondary-color', '#ccc')
            document.documentElement.style.setProperty('--secondary-color-light', '#cccccc88')
            document.documentElement.style.setProperty('--canvas-color', '#666')
            document.documentElement.style.setProperty('--title-card-color', '#333')
        },
        
        setLightMode() {
            this.darkMode = false
            setTimeout(() => {this.lightMode = true}, 150)
            document.documentElement.style.setProperty('--primary-color', '#eee')
            document.documentElement.style.setProperty('--secondary-color', '#191919')
            document.documentElement.style.setProperty('--secondary-color-light', '#191919aa')
            document.documentElement.style.setProperty('--canvas-color', '#999')
            document.documentElement.style.setProperty('--title-card-color', '#bbb')
        },

        setLanguageGerman() {
            this.overlayActive = true
            setTimeout(() => {this.languageEnglish = false}, 500)
            setTimeout(() => {this.languageGerman = true}, 600)
            setTimeout(() => {this.overlayActive = false}, 800)
        },

        setLanguageEnglish() {
            this.overlayActive = true
            setTimeout(() => {this.languageGerman = false}, 500)
            setTimeout(() => {this.languageEnglish = true}, 600)
            setTimeout(() => {this.overlayActive = false}, 800)
        }
    },
})