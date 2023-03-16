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
    <div
      class="skill__title"
      :class="{ isActive: isActive }"
      @mouseover="handleMouseOver()"
      @mouseleave="handleMouseLeave()"
      @click="handleMouseClick()"
    >
      <h3>{{ title }}</h3>
    </div>

    <Transition>
      <div class="skill__content" v-show="isActive">
        <p>{{ content }}</p>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.skill {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  color: var(--color-secondary-light);

  &__title {
    font-size: 4rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: end;

    &:hover {
      color: var(--color-accent);
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

@media screen and (max-width: 1500px) {
  .skill {
    &__title {
      font-size: 3rem;
    }

    &__content {
      font-size: 1.5rem;
    }
  }
}

@media screen and (max-width: 1000px) {
  .skill {
    &__title {
      font-size: 2.5rem;
    }

    &__content {
      font-size: 1.5rem;
    }
  }
}

@media screen and (max-width: 500px) {
  .skill {
    &__title {
      font-size: 1.75rem;
    }

    &__content {
      font-size: 1rem;
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
