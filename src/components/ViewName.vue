<template>
  <div class="view-name">
    <h2 class="view-name__text">
      <slot name="view-name"></slot>
    </h2>
  </div>
</template>

<style lang="scss" scoped>
.view-name {
  position: absolute;
  left: 2rem;
  bottom: 2rem;
  transform: rotate(-90deg);
  transform-origin: 10%;

  &__text {
    font-size: 4rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: var(--secondary-color);
  }
}
</style>
