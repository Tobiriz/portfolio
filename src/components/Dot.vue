<script>
export default {
  props: {
    index: {
      type: Number,
      required: true,
    },

    active: {
      type: Number,
      required: true,
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
      this.$emit("select", this.index);
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
    class="dot"
    :class="{ 'dot--active': index === active }"
    @click="handleMouseClick"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
  ></div>
</template>

<style lang="scss" scoped>
.dot {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background-color: var(--color-secondary-light);
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;

  &--active {
    background-color: var(--color-secondary);
  }

  &:hover {
    background-color: var(--color-accent);
  }
}
</style>
