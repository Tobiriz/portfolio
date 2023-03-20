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
  <div class="school">
    <div class="school__duration">
      {{ school.duration }}
    </div>
    <div class="school__date">
      {{ school.date }}
    </div>
    <div class="school__title">
      {{ school.title }}
    </div>

    <div class="school__description">
      <div>
        <div class="school__school">
          {{ school.school }}
        </div>
        <div class="school__location">
          {{ school.location }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.school {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--color-secondary);

  &__duration {
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.1rem;
  }

  &__date {
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.1rem;
  }

  &__title {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: var(--color-accent);
  }

  &__description {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  &__school {
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.1rem;
  }

  &__location {
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.1rem;
  }
}

@media screen and (max-width: 1366px) {
  .school {
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

    &__school {
      font-size: 1.25rem;
    }

    &__location {
      font-size: 1rem;
    }
  }
}

@media screen and (max-width: 412px) {
  .school {
    &__duration {
      font-size: 0.75rem;
    }

    &__date {
      font-size: 1rem;
    }

    &__title {
      font-size: 1.5rem;
    }

    &__school {
      font-size: 1rem;
    }

    &__location {
      font-size: 0.75rem;
    }
  }
}
</style>
