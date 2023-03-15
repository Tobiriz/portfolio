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
  <div
    class="skill flex flex-col justify-content-center align-items-end color-secondary-light"
  >
    <div
      class="skill__title color-accent-hover font-size-4 weight-7 text-uppercase spacing-1 text-end"
      :class="{ isActive: isActive }"
      @mouseover="handleMouseOver()"
      @mouseleave="handleMouseLeave()"
      @click="handleMouseClick()"
    >
      <h3>{{ title }}</h3>
    </div>

    <Transition>
      <div
        class="skill__content text-end color-secondary font-size-1-75 weight-4 line-height-1-5"
        v-show="isActive"
      >
        <p>{{ content }}</p>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
//screen width < 768px
@media screen and (max-width: 768px) {
  .skill {
    &__title {
      h3 {
        font-size: 8vw;
      }
    }

    &__content {
      p {
        font-size: 3.5vw;
      }
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
