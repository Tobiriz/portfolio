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
  color: var(--secondary-color);
  padding-bottom: 5vh;
  width: 100%;

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
    text-align: center;
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

  &__school {
    font-size: 1.6vw;
    font-weight: 400;
    letter-spacing: 0.1rem;
  }

  &__location {
    font-size: 1.2vw;
    font-weight: 400;
    letter-spacing: 0.1rem;
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
