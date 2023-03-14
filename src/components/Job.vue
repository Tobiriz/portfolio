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
  <div class="job">
    <div class="job__duration">
      {{ job.duration }}
    </div>
    <div class="job__date">
      {{ job.date }}
    </div>
    <div class="job__title">
      {{ job.title }}
    </div>

    <div class="job__description">
      <div>
        <div class="job__company">
          {{ job.company }}
        </div>
        <div class="job__location">
          {{ job.location }}
        </div>
        <div class="job__description">
          {{ job.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.job {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  color: var(--secondary-color);
  padding-bottom: 3vh;

  &__duration {
    font-size: 1.2vw;
    font-weight: 400;
    letter-spacing: 0.1rem;
  }

  &__date {
    font-size: 1.6vw;
    font-weight: 400;
    letter-spacing: 0.1rem;
  }

  &__title {
    font-size: 2.5vw;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: var(--accent-color);
    padding: 0.5rem 0;
  }

  &__description {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    text-align: center;
  }

  &__company {
    font-size: 1.6vw;
    font-weight: 400;
    letter-spacing: 0.1rem;
  }

  &__location {
    font-size: 1.2vw;
    font-weight: 400;
    letter-spacing: 0.1rem;
    padding-bottom: 1rem;
  }

  &__description {
    font-size: 1.2vw;
    font-weight: 400;
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
