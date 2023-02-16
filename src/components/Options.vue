<script>
export default {
    data() {
        return {
            lightModeActive: false,
            darkModeActive: true,
            germanActive: false,
            englishActive: true
        }
    },

    methods: {
        setDarkMode() {
            this.lightModeActive = false
            setTimeout(() => {this.darkModeActive = true}, 150)
            document.documentElement.style.setProperty('--primary-color', '#191919')
            document.documentElement.style.setProperty('--secondary-color', '#ccc')
            document.documentElement.style.setProperty('--secondary-color-light', '#cccccc88')
        },

        setLightMode() {
            this.darkModeActive = false
            setTimeout(() => {this.lightModeActive = true}, 150)
            document.documentElement.style.setProperty('--primary-color', '#eee')
            document.documentElement.style.setProperty('--secondary-color', '#191919')
            document.documentElement.style.setProperty('--secondary-color-light', '#191919aa')
        },
        setToGerman() {
            this.englishActive = false
            setTimeout(() => {this.germanActive = true}, 170)
        },
        setToEnglish() {
            this.germanActive = false
            setTimeout(() => {this.englishActive = true}, 170)
        }
    },

    mounted() {
        if (window.location.hash === "#de") {
            this.germanActive = true
            this.englishActive = false
        } else if (window.location.hash === "#en") {
            this.englishActive = true
            this.germanActive = false
        }
    }
}
</script>

<template>
    <div class="options">
        <div>
            <Transition>
                <p v-show="englishActive" @click="setToGerman" class="language-selector">DE</p>
            </Transition>
            <Transition>
                <p v-show="germanActive" @click="setToEnglish" class="language-selector">EN</p>
            </Transition>
        </div>
        <div>
            <Transition>
                <font-awesome-icon icon="fa-solid fa-moon" class="icon" @click="setDarkMode" v-show="lightModeActive" />
            </Transition>
            <Transition>
                <font-awesome-icon icon="fa-solid fa-sun" class="icon" @click="setLightMode" v-show="darkModeActive" />
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
    padding: 2rem;

    .div {
        width: 100%;
    }

    .icon {
        color: var(--secondary-color-light);
        cursor: default;

        &:hover {
            color: var(--accent-color);
        }
    }
    .language-selector {
        color: var(--secondary-color-light);
        cursor: default;
    
        &:hover {
            color: var(--accent-color);
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