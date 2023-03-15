<script>
export default {
  props: {
    job: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div
    class="job flex flex-col justify-content-center align-items-center flex-nowrap color-secondary"
  >
    <div class="job__duration font-size-1-25 weight-4 spacing-1">
      {{ job.duration }}
    </div>
    <div class="job__date font-size-1-5 weight-4 spacing-1">
      {{ job.date }}
    </div>
    <div
      class="job__title font-size-2-5 weight-7 spacing-1 text-uppercase color-accent text-center"
    >
      {{ job.title }}
    </div>

    <div class="job__description flex flex-row gap-1 text-center">
      <div>
        <div class="job__company font-size-1-5 weight-4 spacing-1">
          {{ job.company }}
        </div>
        <div class="job__location font-size-1-25 weight-4 spacing-1">
          {{ job.location }}
        </div>
        <div class="job__details font-size-1-25 weight-4">
          {{ job.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.job {
  padding-bottom: 3rem;

  &__title {
    padding: 0.5rem 0;
  }

  &__details {
    padding: 1rem 0;
  }
}

//screen width < 768px
@media screen and (max-width: 48rem) {
  .job {
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

    &__company {
      font-size: 3vw;
    }

    &__location {
      font-size: 2vw;
    }

    &__description {
      font-size: 2.5vw;
    }
  }
}
</style>
