<script>
import { RouterView } from 'vue-router'
import { useSettingsStore } from '@/stores/settingsStore'
import Overlay from '@/components/Overlay.vue'

export default {
    components: {
        RouterView,
        Overlay
    },

    setup() {
        const store = useSettingsStore()
        return { store }
    },
}
</script>

<template>
    <div>
        <Transition name="fade">
            <Overlay v-show="store.overlayActive" />
        </Transition>

        <RouterView v-slot="{ Component, route }">
            <Transition :name="route.meta.transition" mode="in-out">
                <Component :is="Component"/>
            </Transition>
        </RouterView>
    </div>
</template>

<style lang="scss" scoped>
.slide-left-enter-active,
.slide-left-leave-active {
    transition: all 1s ease-in-out;
}

.slide-left-enter-from {
    transform: translateX(100%);
}

.slide-left-enter-to {
    transform: translateX(0);
}

.slide-left-leave-from {
    transform: translateX(0);
}

.slide-left-leave-to {
    transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
    transition: all .5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    background: var(--primary-color);
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    background: var(--primary-color);
    opacity: 1;
}
</style>
