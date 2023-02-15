<script>
import { RouterView } from 'vue-router'
</script>

<template>
    <div>
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
</style>
