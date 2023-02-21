<script>
import { RouterLink } from 'vue-router'
import { useNavigationStore } from '@/stores/navigationStore'
import Settings from '@/components/Settings.vue'

export default {
    components: {
        RouterLink,
        Settings
    },
    
    setup() {
        const navigation = useNavigationStore()
        return { navigation }
    }
}
</script>

<template>
    <div class="navigation">
        <div class="navigation__links">
            <RouterLink :to="{ name: 'about' }">
                {{ navigation.about }}
            </RouterLink>
            <RouterLink :to="{ name: 'skillset' }">
                {{ navigation.skillset }}
            </RouterLink>
            <RouterLink :to="{ name: 'projects' }">
                {{ navigation.projects }}
            </RouterLink>
            <RouterLink :to="{ name: 'contact'}">
                {{ navigation.contact }}
            </RouterLink>
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