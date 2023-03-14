<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="project">
    <div class="project__title">
      {{ project.title }}
    </div>
    <div class="project__description">
      <div><div class="line"></div></div>
      <div>
        <div class="project__description__content">
          {{ project.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--secondary-color);
  padding-bottom: 3rem;

  &__title {
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.1rem;
    white-space: pre;
  }

  &__description {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-top: 1rem;

    &__content {
      font-size: 1rem;
      font-weight: 400;
      letter-spacing: 0.1rem;
      white-space: pre;
    }
  }
}
</style>
