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
        <div class="job__details">
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
  color: var(--color-secondary);
  text-align: center;

  &__duration {
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: 1px;
  }

  &__date {
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 1px;
  }

  &__title {
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--color-accent);
    margin: 0.5rem;
  }

  &__description {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    text-align: center;
  }

  &__company {
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 1px;
  }

  &__location {
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: 1px;
  }

  &__details {
    margin-top: 1rem;
    font-size: 1.25rem;
    font-weight: 400;
  }
}

@media screen and (max-width: 1366px) {
  .job {
    max-width: 90%;

    &__duration {
      font-size: 1rem;
    }

    &__date {
      font-size: 1.25rem;
    }

    &__title {
      font-size: 2rem;
    }

    &__company {
      font-size: 1.25rem;
    }

    &__location {
      font-size: 1rem;
    }

    &__details {
      font-size: 1.25rem;
    }
  }
}

@media screen and (max-width: 412px) {
  .job {
    &__duration {
      font-size: 0.75rem;
    }

    &__date {
      font-size: 1rem;
    }

    &__title {
      font-size: 1.5rem;
    }

    &__company {
      font-size: 1rem;
    }

    &__location {
      font-size: 0.75rem;
    }

    &__details {
      font-size: 1rem;
    }
  }
}
</style>
