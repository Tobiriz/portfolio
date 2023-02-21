<script>
import { RouterLink } from 'vue-router'
import Settings from '@/components/Settings.vue'
import { useLandingPageStore } from '@/stores/landingPageStore'

export default {
    components: {
        RouterLink,
        Settings
    },

    setup() {
        const landingPage = useLandingPageStore()
        return { landingPage }
    },

    mounted() {
        const settings = document.getElementsByClassName('landing-page-settings')[0]
        const titleCard = document.getElementsByClassName('title-card')[0]
        const titleCardHeight = titleCard.offsetHeight
        const titleCardBottom = titleCard.offsetTop

        settings.style.top = (titleCardBottom + titleCardHeight) + 'px'
    },
}
</script>

<template>
    <div class="body">
        <Settings class="landing-page-settings"></Settings>
        <RouterLink to="/portfolio">
            <div
            class="title-card"
            @mouseenter="showChevron"
            @mouseleave="hideChevron"
            >
            
                <div class="title-card__content">
                    <div class="title-card__content__name">
                        <h1>{{ landingPage.name }}</h1>
                    </div>
                    
                    <div class="title-card__content__occupation">
                        <h2>{{ landingPage.occupation }}</h2>
                    </div>
                </div>
                
                <font-awesome-icon
                    icon="fa-solid fa-chevron-right"
                    size="10x"
                    class="title-card__chevron"
                />
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
    z-index: 3;
}

.landing-page-settings {
    position: absolute;
    z-index: 4;
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
    background-color: var(--title-card-color);
    color: var(--secondary-color);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    position: relative;
    z-index: 3;

    &__content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 1rem;
        box-sizing: border-box;
        z-index: 4;
        
        &__name {
            h1 {
                font-size: 4rem;
            }
        }
        
        &__occupation {
            h2 {
                font-size: 2rem;
            }
        }
    }
    
    &__chevron {
        position: absolute;
        left: 0;
        font-size: 2rem;
        color: var(--secondary-color);
        opacity: 0;
        transition: opacity 0.4s ease, left 0.8s ease;
    }

    &:hover &__chevron {
        opacity: 1;
        left: calc(100% - 5rem);
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        transition: width 0.8s ease;
        background: linear-gradient(
            to right,
            transparent,
            var(--accent-color)
        );
    }

    &:hover:before {
        width: 100%;
    }
}

a {
    cursor: default;
    text-decoration: none;
    color: var(--secondary-color);
}
</style>