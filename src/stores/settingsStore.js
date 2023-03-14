import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('SettingsStore', {
    state: () => {
        return {
            languageEnglish: true,
            languageGerman: false,
            darkMode: true,
            lightMode: false,
            overlayActive: false,
            contentUpdate: false,
        }
    },

    actions: {
        setDarkMode() {
            this.lightMode = false
            setTimeout(() => {this.darkMode = true}, 150)
            document.documentElement.style.setProperty('--primary-color', 'var(--c-black)')
            document.documentElement.style.setProperty('--secondary-color', 'var(--c-white-mute)')
            document.documentElement.style.setProperty('--secondary-color-light', 'var(--c-white-mute-transparent)')
            document.documentElement.style.setProperty('--canvas-color', 'var(--c-grey)')
            document.documentElement.style.setProperty('--accent-color', 'var(--c-blue-light)')
            document.documentElement.style.setProperty('--title-card-color', 'var(--c-black-soft)')
            document.documentElement.style.setProperty('--blob-color-1', 'var(--c-blue-dark)')
            document.documentElement.style.setProperty('--blob-color-2', 'var(--c-greyish)')
            this.setFavicon('./public/favicon-dark.ico')

            //Store the current theme in local storage
            localStorage.setItem('theme', 'dark')
        },
        
        setLightMode() {
            this.darkMode = false
            setTimeout(() => {this.lightMode = true}, 150)
            document.documentElement.style.setProperty('--primary-color', 'var(--c-white)')
            document.documentElement.style.setProperty('--secondary-color', 'var(--c-black)')
            document.documentElement.style.setProperty('--secondary-color-light', 'var(--c-black-transparent)')
            document.documentElement.style.setProperty('--canvas-color', 'var(--c-grey-soft)')
            document.documentElement.style.setProperty('--accent-color', 'var(--c-red)')
            document.documentElement.style.setProperty('--title-card-color', 'var(--c-white-soft)')
            document.documentElement.style.setProperty('--blob-color-1', 'var(--c-violet-dark)')
            document.documentElement.style.setProperty('--blob-color-2', 'var(--c-orange-dark)')
            this.setFavicon('./public/favicon-light.ico')

            //Store the current theme in local storage
            localStorage.setItem('theme', 'light')
        },

        setLanguageGerman() {
            this.overlayActive = true
            setTimeout(() => {
                this.languageEnglish = false
                this.languageGerman = true
                this.overlayActive = false
            }, 600)

            //Store the current language in local storage
            localStorage.setItem('language', 'de')
        },

        setLanguageEnglish() {
            this.overlayActive = true
            setTimeout(() => {
                this.languageGerman = false
                this.languageEnglish = true
                this.overlayActive = false
            }, 600)

            //Store the current language in local storage
            localStorage.setItem('language', 'en')
        },

        contentUpdateTrigger() {
            this.contentUpdate = true
            setTimeout(() => {this.contentUpdate = false}, 100)
        },

        setFavicon(img) {
            let link = document.querySelector("link[rel*='icon']") || document.createElement('link')
            link.type = 'image/x-icon'
            link.rel = 'shortcut icon'
            link.href = img
            document.getElementsByTagName('head')[0].appendChild(link)
        },

        readLocalStorage() {
            if (localStorage.getItem('theme') === 'dark') {
                this.setDarkMode()
            } else if (localStorage.getItem('theme') === 'light') {
                this.setLightMode()
            }

            if (localStorage.getItem('language') === 'de') {
                this.setLanguageGerman()
            } else if (localStorage.getItem('language') === 'en') {
                this.setLanguageEnglish()
            }
        }
    },

    getters: {
        screenWidth() {
            return window.innerWidth
        }
    }
})