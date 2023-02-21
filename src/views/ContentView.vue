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
            <Navigation/>
            <RouterView v-slot="{ Component }">
                <Transition name="fade" mode="out-in">
                    <Component :is="Component"/>
                </Transition>
            </RouterView>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.content-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 3;

    &__border {
        position: absolute;
        top: 1.5rem;
        left: 1.5rem;
        width: calc(100% - 3rem);
        height: calc(100% - 3rem);
        border: 1px solid var(--secondary-color);
        border-radius: 2px;
        box-sizing: border-box;
        box-shadow: 0 0 20px 5px  var(--secondary-color), 0 0 0 50px var(--primary-color);
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