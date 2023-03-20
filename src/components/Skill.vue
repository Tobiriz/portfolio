<script>
export default {
  props: {
    title: {
      type: String,
      default: "Skill Title",
    },
    content: {
      type: String,
      default: "Skill Content",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    handleMouseOver() {
      const cursor = document.getElementById("cursor");
      cursor.classList.add("cursor--active");
    },

    handleMouseLeave() {
      const cursor = document.getElementById("cursor");
      cursor.classList.remove("cursor--active");
    },

    handleMouseClick() {
      this.$emit("toggle");
      const cursor = document.getElementById("cursor");
      cursor.classList.add("cursor--click");
      setTimeout(() => {
        cursor.classList.remove("cursor--click");
      }, 300);
    },
  },
};
</script>

<template>
  <div class="skill">
    <button
      type="button"
      class="skill__title"
      :class="{ active: isActive }"
      @mouseover="handleMouseOver()"
      @mouseleave="handleMouseLeave()"
      @click="handleMouseClick()"
    >
      <h3>{{ title }}</h3>
    </button>

    <Transition>
      <div class="skill__content" v-show="isActive">
        <p>{{ content }}</p>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.active {
  color: var(--color-secondary) !important;
}
.skill {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  color: var(--color-secondary-light);
  width: 90%;

  &__title {
    all: unset;
    font-size: 3.5rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: end;
    padding-bottom: 0.5rem;

    &:hover {
      color: var(--color-accent) !important;
    }

    &:focus-visible {
      color: var(--color-secondary);
    }
  }

  &__content {
    font-size: 1.75rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: end;
    color: var(--color-secondary);
  }
}

@media screen and (min-width: 2560px) {
  .skill {
    width: 90%;

    &__title {
      font-size: 4rem;
      letter-spacing: 1px;
      padding-bottom: 0.5rem;
    }

    &__content {
      font-size: 2rem;
      line-height: 1.5;
    }
  }
}

@media screen and (max-width: 1440px) {
  .skill {
    width: 95%;

    &__title {
      font-size: 2.3rem;
      letter-spacing: 1px;
      padding-bottom: 0.5rem;
    }

    &__content {
      font-size: 1.2rem;
      line-height: 1.5;
    }
  }
}

@media screen and (max-width: 1024px) {
  .skill {
    width: 95%;

    &__title {
      font-size: 1.8rem;
      letter-spacing: 1px;
      padding-bottom: 0.5rem;
    }

    &__content {
      font-size: 1rem;
      line-height: 1.3;
    }
  }
}

@media screen and (max-width: 768px) {
  .skill {
    width: 100%;

    &__title {
      font-size: 1.8rem;
      letter-spacing: 0;
      padding-bottom: 0.5rem;
    }

    &__content {
      font-size: 1rem;
      line-height: 1.3;
    }
  }
}

@media screen and (max-width: 500px) {
  .skill {
    width: 100%;
    align-items: center;

    &__title {
      text-align: center;
      font-size: 1.3rem;
      padding-bottom: 0.5rem;
    }

    &__content {
      text-align: justify;
      font-size: 1rem;
      line-height: 1.3;
    }
  }
}

@media screen and (max-width: 350px) {
  .skill {
    width: 100%;
    align-items: center;

    &__title {
      text-align: center;
      font-size: 1.1rem;
      padding-bottom: 0.5rem;
    }

    &__content {
      text-align: justify;
      font-size: 1rem;
      line-height: 1.3;
    }
  }
}


.isActive {
  color: var(--secondary-color);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
  transform: translateX(0%);
}
</style>
