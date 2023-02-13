<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'

export default {
    components: {
        Header,
        RouterLink,
        RouterView
    }
}
</script>

<template>
    <div>
        <Header/>
        <RouterView v-slot="{ Component }">
            <Transition name="fade" mode="out-in">
                <Component :is="Component"/>
            </Transition>
        </RouterView>
    </div>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {  
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {  
    opacity: 0;
}
</style>