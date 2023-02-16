<script>
import { RouterLink } from 'vue-router'
import Settings from '@/components/Settings.vue'

export default {
    components: {
        RouterLink,
        Settings
    },
}
</script>

<template>
    <div class="navigation">
        <div class="navigation__links">
            <RouterLink :to="{ name: 'about' }">About</RouterLink>
            <RouterLink :to="{ name: 'skillset' }">Skillset</RouterLink>
            <RouterLink :to="{ name: 'projects' }">Projects</RouterLink>
            <RouterLink :to="{ name: 'contact'}">Contact</RouterLink>
        </div>
        <Settings></Settings>
    </div>
</template>

<style lang="scss" scoped>
.navigation {
    position: fixed;
    top: calc(2rem + 2px);
    left: calc(2rem + 2px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    z-index: 5;
    
    &__title {
        h1 {
            margin: 0;
        }
    }

    &__links {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;
        padding-bottom: 0;

        a {
            font-size: 2rem;
            color: var(--secondary-color-light);
            text-decoration: none;
            cursor: default;

            &:hover {
                color: var(--accent-color);
            }
        }
    }
}
</style>