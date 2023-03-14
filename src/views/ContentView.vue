<script>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from '@/components/Navigation.vue'

export default {
    components: {
        Navigation,
        RouterLink,
        RouterView
    }
}
</script>

<template>
    <div class="content-container">
        <div class="content-container__border">
            <div class="content-container__content">
                <section class="content-container__content__navigation">
                    <Navigation />
                </section>

                <section>
                    <div class="content-container__content__line"></div>
                </section>

                <section class="content-container__content__view">
                    <RouterView v-slot="{ Component }">
                        <Transition name="fade" mode="out-in">
                            <Component :is="Component"/>
                        </Transition>
                    </RouterView>
                </section>
                    
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.content-container {
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: hidden;
    z-index: 3;

    &__border {
        position: absolute;
        top: 1rem;
        left: 1rem;
        width: calc(100% - 2rem);
        height: calc(100% - 2rem);
        border: 1px solid var(--canvas-color);
        border-radius: 2px;
        box-sizing: border-box;
        box-shadow: 0 0 20px 5px  var(--secondary-color), 0 0 0 50px var(--primary-color);
    }

    &__content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;

        &__navigation {
            width: 15vw;
        }

        &__line {
            width: 1px;
            height: 100%;
            background-color: var(--canvas-color);
        }

        &__view {
            width: 85vw;
        }
    }
}

//screen width < 768px
@media screen and (max-width: 768px), screen and (max-height: 600px) {
    .content-container {
        overflow-y: hidden;
        overflow-x: hidden;

        &__border {
            top: 0;
            left: 0;
            width: 100dvw;
            height: 100dvh;
            border: none;
        }

        &__content {
            flex-direction: column;

            &__line {
                display: none;
            }

            &__view {
                width: 100%;
            }
        }
    }
}

.fade-enter-active,
.fade-leave-active {  
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {  
    opacity: 0;
}
</style>