<script setup>
import { useSettingsStore } from '@/stores/settingsStore'
const store = useSettingsStore()
</script>

<template>
    <div class="options">
        <div>
            <p v-show="store.languageEnglish" @click="store.setLanguageGerman()" class="language-selector">DE</p>
            <p v-show="store.languageGerman" @click="store.setLanguageEnglish()" class="language-selector">EN</p>
        </div>
        <div>
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