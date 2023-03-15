<script>
export default {
  props: {
    school: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div
    class="school flex flex-col justify-content-center align-items-center color-secondary"
  >
    <div class="school__duration font-size-1-25 weight-4 spacing-1">
      {{ school.duration }}
    </div>
    <div class="school__date font-size-1-5 weight-4 spacing-1">
      {{ school.date }}
    </div>
    <div
      class="school__title font-size-2-5 weight-7 spacing-1 text-uppercase color-accent text-center"
    >
      {{ school.title }}
    </div>
    <div class="school__description flex flex-row gap-1 text-center">
      <div>
        <div class="school__school font-size-1-5 weight-4 spacing-1">
          {{ school.school }}
        </div>
        <div class="school__location font-size-1-25 weight-4 spacing-1">
          {{ school.location }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.school {
  padding-bottom: 3rem;

  &__title {
    padding: 0.5rem 0;
  }
}

//screen width < 768px
@media screen and (max-width: 768px) {
  .school {
    padding: 0 1rem;
    padding-bottom: 3vh;

    &__duration {
      font-size: 2vw;
    }

    &__date {
      font-size: 3vw;
    }

    &__title {
      font-size: 4vw;
    }

    &__school {
      font-size: 3vw;
    }

    &__location {
      font-size: 2vw;
    }
  }
}
</style>
