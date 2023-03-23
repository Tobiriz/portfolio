<script>
import { useSettingsStore } from '@/stores/settingsStore';

export default {
  props: {
    job: {
      type: Object,
      required: true,
    },
  },

  setup() {
    const settings = useSettingsStore();
    return { settings };
  },

  data() {
    return {
      showDetails: false,
    };
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
      this.showDetails = !this.showDetails;
      const cursor = document.getElementById("cursor");
      cursor.classList.add("cursor--click");
      setTimeout(() => {
        cursor.classList.remove("cursor--click");
      }, 300);
    },
  },

  computed: {
    hideDetailsText() {
      if (this.settings.languageIsEnglish) {
        return 'Hide Details';
      } else {
        return 'Details ausblenden';
      }
    },

    showDetailsText() {
      if (this.settings.languageIsEnglish) {
        return 'Show Details';
      } else {
        return 'Details anzeigen';
      }
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
          <button class="details-button" v-if="showDetails" @click="handleMouseClick" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">{{ hideDetailsText }}</button>
          <button class="details-button" v-else @click="handleMouseClick" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">{{ showDetailsText }}</button>

          <div class="details" v-if="showDetails">
            <p>{{ job.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
button {
  all: unset;
}

.details-button {
  color: var(--color-secondary-light);
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-style: italic;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: var(--color-accent);
  }

  &:focus-visible {
    color: var(--color-accent);
  }
}

.details {
  text-align: center;
}

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

@media screen and (min-width: 2560px) {
  .job {
    max-width: 100%;

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
      letter-spacing: 0.15rem;
    }

    &__company {
      font-size: 2.3rem;
      letter-spacing: 0.15rem;
    }

    &__location {
      font-size: 2rem;
      letter-spacing: 0.15rem;
    }

    &__details {
      font-size: 2rem;
    }
  }

  .details-button {
    font-size: 1.5rem;
    padding: 1rem 1.5rem;
  }
}

@media screen and (max-width: 1440px) {
  .job {
    max-width: 100%;

    &__duration {
      font-size: 1.25rem;
    }

    &__date {
      font-size: 1.5rem;
    }

    &__title {
      font-size: 2.5rem;
    }

    &__company {
      font-size: 1.5rem;
    }

    &__location {
      font-size: 1.25rem;
    }

    &__details {
      font-size: 1.3rem;
    }
  }
  
  .details-button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
}

@media screen and (max-width: 1024px) {
  .job {
    max-width: 100%;

    &__duration {
      font-size: 1rem;
    }

    &__date {
      font-size: 1.2rem;
    }

    &__title {
      font-size: 2rem;
    }

    &__company {
      font-size: 1.2rem;
    }

    &__location {
      font-size: 1rem;
    }

    &__details {
      font-size: 1rem;
    }
  }
   
  .details-button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
}

@media screen and (max-width: 768px) {
  .job {
    max-width: 100%;
    word-break: break-word;

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

    &__company {
      font-size: 1rem;
    }

    &__location {
      font-size: .8rem;
    }

    &__details {
      font-size: .8rem;
    }
  }

   
  .details-button {
    font-size: .8rem;
    padding: 0.2rem .6rem;
  }
}


@media screen and (max-width: 500px) {
  .job div {
    letter-spacing: 0;
  }
}

@media screen and (max-width: 400px) {
  .job {
    &__title {
      font-size: 1.5rem;
    }
  }
}

</style>
