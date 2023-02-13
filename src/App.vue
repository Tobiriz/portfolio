<script>
import { RouterView } from 'vue-router'
</script>

<template>
    <div>
        <RouterView v-slot="{ Component, route }">
            <Transition :name="route.meta.transition" mode="out-in">
                <Component :is="Component"/>
            </Transition>
        </RouterView>
    </div>
</template>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
    transition: transform .5s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateY(-100%);
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
