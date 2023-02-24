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
            document.documentElement.style.setProperty('--accent-color', '#3A98B9')
            document.documentElement.style.setProperty('--title-card-color', '#333')
            document.documentElement.style.setProperty('--blob-color-1', '#95BDFF55')
            document.documentElement.style.setProperty('--blob-color-2', '#DFFFD855')
        },
        
        setLightMode() {
            this.darkMode = false
            setTimeout(() => {this.lightMode = true}, 150)
            document.documentElement.style.setProperty('--primary-color', '#eee')
            document.documentElement.style.setProperty('--secondary-color', '#191919')
            document.documentElement.style.setProperty('--secondary-color-light', '#191919aa')
            document.documentElement.style.setProperty('--canvas-color', '#999')
            document.documentElement.style.setProperty('--accent-color', '#C74B50')
            document.documentElement.style.setProperty('--title-card-color', '#bbb')
            document.documentElement.style.setProperty('--blob-color-1', '#712B7555')
            document.documentElement.style.setProperty('--blob-color-2', '#D49B5455')
        },

        setLanguageGerman() {
            this.overlayActive = true
            setTimeout(() => {
                this.languageEnglish = false
                this.languageGerman = true
                this.overlayActive = false
            }, 600)
        },

        setLanguageEnglish() {
            this.overlayActive = true
            setTimeout(() => {
                this.languageGerman = false
                this.languageEnglish = true
                this.overlayActive = false
            }, 600)
        }
    },
})