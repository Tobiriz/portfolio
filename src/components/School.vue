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

@media screen and (min-width: 2560px) {
  .school {
    max-width: 90%;

    &__duration {
      font-size: 2rem;
      letter-spacing: 0.15rem;
    }
    
    &__date {
      font-size: 2.3rem;
      letter-spacing: 0.15rem;
    }
    
    &__title {
      font-size: 3.4rem;
    }
    
    &__school {
      font-size: 2.3rem;
      letter-spacing: 0.15rem;
    }
    
    &__location {
      font-size: 2rem;
      letter-spacing: 0.15rem;
    }
  }
}

@media screen and (max-width: 1440px) {
  .school {
    max-width: 90%;

    &__duration {
      font-size: 1.25rem;
    }
    
    &__date {
      font-size: 1.5rem;
    }
    
    &__title {
      font-size: 2.5rem;
    }
    
    &__school {
      font-size: 1.5rem;
    }
    
    &__location {
      font-size: 1.25rem;
    }
  }
}

@media screen and (max-width: 1024px) {
  .school {
    max-width: 90%;

    &__duration {
      font-size: .8rem;
    }
    
    &__date {
      font-size: 1rem;
    }
    
    &__title {
      font-size: 1.8rem;
      margin: .1rem;
    }
    
    &__school {
      font-size: 1rem;
    }
    
    &__location {
      font-size: .8rem;
    }
  }
}

@media screen and (max-width: 500px) {
  .school div {
    letter-spacing: 0;
  }
}

@media screen and (max-width: 400px) {
  .school {
    &__title {
      font-size: 1.5rem;
    }
  }
}
</style>
