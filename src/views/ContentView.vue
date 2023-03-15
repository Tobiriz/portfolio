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
  <div class="content-container pos-abs height100vh width100vw overflow-hidden">
    <div
      class="content-container__content pos-abs flex flex-row border-standard"
    >
      <section class="content-container__content__navigation height100p">
        <Navigation />
      </section>

      <section>
        <div
          class="content-container__content__line height100p bg-canvas"
        ></div>
      </section>

      <section class="content-container__content__view height100p">
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
    top: 1rem;
    left: 1rem;
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    border-radius: 2px;
    box-sizing: border-box;
    box-shadow: 0 0 20px 5px var(--secondary-color),
      0 0 0 50px var(--primary-color);

    &__navigation {
      width: 15vw;
    }

    &__line {
      width: 1px;
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
