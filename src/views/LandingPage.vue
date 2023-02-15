<script>
import { RouterLink } from 'vue-router'

export default {
    components: {
        RouterLink
    },

    methods: {
        showChevron() {
            const chevron = document.querySelector('.chevron')
            chevron.style.opacity = 1
        },
        
        hideChevron() {
            const chevron = document.querySelector('.chevron')
            chevron.style.opacity = 0
        }
    },

    mounted() {
        const chevron = document.querySelector('.chevron')
        const titleCard = document.querySelector('.title-card')
        const titleCardTop = titleCard.getBoundingClientRect().top
        chevron.style.top = `${titleCardTop - 50}px`
    }
}
</script>

<template>
    <div class="body">
        <font-awesome-icon
            icon="fa-solid fa-chevron-up"
            shake
            class="chevron"
        />

        <RouterLink to="/portfolio">
            <div
                class="title-card"
                @mouseenter="showChevron"
                @mouseleave="hideChevron"
            >
            
                <div class="title-card__name">
                    <h1>Tobias Weinlich</h1>
                </div>

                <div class="title-card__content">
                    <h2>Frontend Developer</h2>
                </div>

            </div>
        </RouterLink>
    </div>
</template>

<style lang="scss" scoped>
.body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: var(--primary-color);
}

.chevron {
    position: absolute;
    font-size: 2rem;
    color: var(--secondary-color);
    transition: all 0.5s ease;
    opacity: 0;
    --fa-animation-delay: 2s;
    --fa-animation-timing: ease-in-out;
    --fa-animation-duration: 4s;
}

.title-card {
    box-sizing: border-box;
    width: 100vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: #333;
    color: var(--secondary-color);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    position: relative;

    &__name {
        h1 {
            font-size: 4rem;
        }
    }

    &__content {
        h2 {
            font-size: 2rem;
        }
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background: linear-gradient(
            to right,
            transparent,
            var(--accent-color)
        );
    }

    &:hover:before {
        transition: width 0.8s ease;
        width: 100%;
    }
}

a {
    cursor: default;
    text-decoration: none;
    color: var(--secondary-color);
}
</style>