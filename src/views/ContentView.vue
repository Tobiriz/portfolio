<script>
import { RouterLink, RouterView } from "vue-router";
import Navigation from "@/components/Navigation.vue";

export default {
  components: {
    Navigation,
    RouterLink,
    RouterView,
  },
};
</script>

<template>
  <div class="content-container">
    <div class="content-container__content">
      <section class="content-container__content__navigation">
        <Navigation />
      </section>

      <section class="content-container__content__view">
        <RouterView v-slot="{ Component }">
          <Transition name="fade" mode="out-in">
            <Component :is="Component" />
          </Transition>
        </RouterView>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-container {
  z-index: 1;

  &__content {
    position: relative;
    display: flex;
    flex-direction: row;

    &__navigation {
      position: fixed;
      width: 15vw;
      height: 100%;
      z-index: 1;
    }

    &__view {
      position: relative;
      margin-left: 15vw;
      width: 100%;
      min-height: 100vh;
      padding: 5rem;
      box-sizing: border-box;
    }
  }
}

//screen width < 768px
@media screen and (max-width: 1279px) {
  .content-container {
    &__content {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      &__navigation {
        width: 0%;
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
