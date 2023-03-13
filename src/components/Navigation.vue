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
        const cursor = document.getElementById('cursor')

        const links = document.getElementsByClassName('navigation__links')[0].children

        for (let link of links) {
            link.addEventListener('mouseover', () => {
                this.handleMouseOver()
            })
            
            link.addEventListener('mouseleave', () => {
                this.handleMouseLeave()
            })

            link.addEventListener('click', () => {
                this.handleMouseClick()
            })
        }
    },

    unmounted() {
        const cursor = document.getElementById('cursor')

        const links = document.getElementsByClassName('navigation__links')[0].children

        for (let i = 0; i < links.length; i++) {
            links[i].removeEventListener('mouseover', () => {
                this.handleMouseOver()
            })

            links[i].removeEventListener('mouseleave', () => {
                this.handleMouseLeave()
            })
        }
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
    top: 2rem;
    left: 1vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    z-index: 5;

    &__links {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;
        padding-bottom: 0;

        a {
            font-size: 1.8vw;
            color: var(--secondary-color-light);
            text-decoration: none;

            &:hover {
                color: var(--accent-color);
            }
        }
    }
}
</style>