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
      min-height: 90vh;
      padding: 5rem;
      box-sizing: border-box;
    }
  }
}

@media screen and (min-width: 2560px) {
  .content-container {
    &__content {
      &__view {
        padding: 6rem;
      }
    }
  }
}

@media screen and (max-width: 1440px) {
  .content-container {
    &__content {
      &__view {
        padding: 3rem;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .content-container {
    &__content {
      &__view {
        padding: 1rem;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .content-container {
    &__content {
      &__navigation {
        width: 0;
      }

      &__view {
        padding: 1rem;
        margin-left: 0;
      }
    }
  }
}

@media screen and (max-width: 425px) {
  .content-container {
    &__content {
      &__view {
        padding: 0.5rem;
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
