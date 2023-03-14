<script>
import { useSettingsStore } from '@/stores/settingsStore'

export default {
    setup() {
        const store = useSettingsStore()
        return { store }
    },

    methods: {
        handleMouseOver() {
            const cursor = document.getElementById('cursor')
            cursor.classList.add('cursor--active')
        },

        handleMouseLeave() {
            const cursor = document.getElementById('cursor')
            cursor.classList.remove('cursor--active')
        },

        handleMouseClick() {
            const cursor = document.getElementById('cursor')
            cursor.classList.add('cursor--click')
            setTimeout(() => {
                cursor.classList.remove('cursor--click')
            }, 300)
        },
    },

    mounted() {
        const languageSelector = document.getElementsByClassName('language-selector')
        const icons = document.getElementsByClassName('icon')

        //combine languageSelextor and icons into one array
        const elements = [...languageSelector, ...icons]

        for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener('mouseover', () => {
                this.handleMouseOver()
            })

            elements[i].addEventListener('mouseleave', () => {
                this.handleMouseLeave()
            })

            elements[i].addEventListener('click', () => {
                this.handleMouseClick()
            })
        }
       
    },

    unmounted() {
        const languageSelector = document.getElementsByClassName('language-selector')
        const icons = document.getElementsByClassName('icon')

        //combine languageSelextor and icons into one array
        const elements = [...languageSelector, ...icons]

        for (let i = 0; i < elements.length; i++) {
            elements[i].removeEventListener('mouseover', () => {
                this.handleMouseOver()
            })

            elements[i].removeEventListener('mouseleave', () => {
                this.handleMouseLeave()
            })

            elements[i].removeEventListener('click', () => {
                this.handleMouseClick()
            })
        }
    }
}
</script>

<template>
    <div class="options">
        <div class="options__language">
            <p v-show="store.languageEnglish" @click="store.setLanguageGerman()" class="language-selector">DE</p>
            <p v-show="store.languageGerman" @click="store.setLanguageEnglish()" class="language-selector">EN</p>
        </div>
        <div class="options__theme">
            <Transition>
                <font-awesome-icon icon="fa-solid fa-moon" class="icon" @click="store.setDarkMode()" v-show="store.lightMode" />
            </Transition>
            <Transition>
                <font-awesome-icon icon="fa-solid fa-sun" class="icon" @click="store.setLightMode()" v-show="store.darkMode" />
            </Transition>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.options {
    align-self: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 2rem;
    padding: 5vh 2vw;

    &__language {
        text-align: end;
    }

    &__theme {
        text-align: start;
    }

    .div {
        width: 100%;
    }

    .icon {
        color: var(--secondary-color-light);
        font-size: 1.5vw;
        vertical-align: middle;
        
        &:hover {
            color: var(--accent-color);
        }
    }
    .language-selector {
        color: var(--secondary-color-light);
        font-size: 1.5vw;
        vertical-align: baseline;
    
        &:hover {
            color: var(--accent-color);
        }
    }
}

//screen width < 768px
@media screen and (max-width: 768px) {
    .options {

        .icon {
            font-size: 5vw;
        }
        .language-selector {
            font-size: 5vw;
        }
    }
}

@media screen and (max-height: 600px) {
    .options {

        .icon {
            font-size: 5vh;
        }
        .language-selector {
            font-size: 5vh;
        }
    }
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.15s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>