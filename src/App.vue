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

    mounted() {
        const blob = document.getElementById('blob')
        
        document.body.onpointermove = event => {
            const { clientX, clientY } = event

            blob.animate({
                left: `${clientX}px`,
                top: `${clientY}px`
            }, { duration: 3000, fill: "forwards" })
        }
    }
}
</script>

<template>
    <div>
        <div id="blob"></div>
        <div id="blur"></div>

        <Transition name="fade">
            <Overlay v-show="store.overlayActive" />
        </Transition>

        <RouterView v-slot="{ Component, route }">
            <Transition :name="route.meta.transition" mode="out-in">
                <Component :is="Component"/>
            </Transition>
        </RouterView>
    </div>
</template>

<style lang="scss" scoped>
#blur {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
    backdrop-filter: blur(200px);
}

#blob {
    background: linear-gradient(
        to right,
        var(--blob-color-1),
        var(--blob-color-2)
    );
    height: 500px;
    width: 500px;
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    border-radius: 50%;
    animation: rotate 20s infinite;
    z-index: -2;
}

@keyframes rotate {
    from {
        rotate: 0deg;
    }

    50% {
        scale: 1 1.5;
    }

    to {
        rotate: 360deg;
    }
}

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
    transition: all .6s ease-in-out;
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
