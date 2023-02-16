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
    background-color: var(--primary-color);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &__border {
        background: rgba($color: #000, $alpha: 0);
        position: absolute;
        top: 2rem;
        left: 2rem;
        width: calc(100% - 4rem);
        height: calc(100% - 4rem);
        border: 1px solid #aaa;
        border-radius: 2px;
        box-sizing: border-box;
        box-shadow: 0 0 20px 5px  var(--secondary-color);
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