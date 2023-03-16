<script>
import { useSettingsStore } from "../stores/settingsStore";
import { useAboutStore } from "@/stores/aboutStore";
import Job from "@/components/Job.vue";
import School from "@/components/School.vue";

export default {
  components: {
    Job,
    School,
  },

  setup() {
    const settings = useSettingsStore();
    const about = useAboutStore();
    return { settings, about };
  },

  updated() {
    this.settings.contentUpdateTrigger();
  },

  mounted() {
    this.settings.contentUpdateTrigger();
  },

  computed: {
    section1() {
      return this.about.aboutMeContent.section1;
    },

    section2() {
      return this.about.aboutMeContent.section2;
    },

    section3() {
      return this.about.aboutMeContent.section3;
    },
  },
};
</script>

<template>
  <div class="about-container">
    <div class="about-container__about-me">
      <div class="about-container__about-me__title">
        <h2>{{ about.aboutMeHeading }}</h2>
      </div>
      <div class="about-container__about-me__content">
        <div class="about-container__about-me__content__image-container">
          <img
            src="@/assets/images/tobiasweinlich.jpg"
            alt="Tobias Weinlich"
            class="image"
          />
          <div
            class="about-container__about-me__content__image-container__image-overlay"
          ></div>
        </div>
        <div class="about-container__about-me__content__text">
          <p>
            {{ section1 }}
          </p>
          <p>
            {{ section2 }}
          </p>
          <p>
            {{ section3 }}
          </p>
        </div>
      </div>
    </div>

    <div class="about-container__my-work-experience">
      <div class="about-container__my-work-experience__title">
        <h2>{{ about.myWorkExperienceHeading }}</h2>
      </div>

      <div class="about-container__my-work-experience__jobs">
        <Job v-for="job in about.jobs" :key="job.id" :job="job" />
      </div>
    </div>

    <div class="about-container__my-education">
      <div class="about-container__my-education__title">
        <h2>{{ about.myEducationHeading }}</h2>
      </div>

      <div class="about-container__my-education__schools">
        <School
          v-for="school in about.schools"
          :key="school.id"
          :school="school"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  font-weight: 600;
  color: var(--secondary-color);
}

.about-container {
  display: flex;
  flex-direction: column;
  gap: 10rem;
  padding: 3rem 2rem;
  padding-bottom: 10rem;
  box-sizing: border-box;
  color: var(--color-secondary);

  /*
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
  */

  &__about-me {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    &__title {
      font-size: 3rem;
      font-weight: 700;
    }

    &__content {
      font-weight: 400;
      text-align: justify;

      &__image-container {
        position: relative;
        margin: 0 0 1rem 1rem;
        float: right;
        z-index: -1;

        .image {
          width: 15vw;
          height: auto;
          z-index: -1;
        }

        &__image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          box-shadow: inset 0 0 6px 8px var(--primary-color);
        }
      }

      &__text {
        font-size: 1.5rem;
        line-height: 1.5;
      }
    }
  }

  &__my-work-experience {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    &__title {
      font-size: 3rem;
      font-weight: 700;
    }

    &__jobs {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6rem;
    }
  }

  &__my-education {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    &__title {
      font-size: 3rem;
      font-weight: 700;
    }

    &__schools {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6rem;
    }
  }
}

@media screen and (max-width: 1536px) {
  .about-container {
    gap: 7rem;

    &__about-me {
      &__title {
        font-size: 2.25rem;
      }

      &__content__text {
        font-size: 1.25rem;
      }
    }

    &__my-work-experience {
      &__title {
        font-size: 2.25rem;
      }

      &__jobs {
        gap: 2rem;
      }
    }

    &__my-education {
      &__title {
        font-size: 2.25rem;
      }

      &__schools {
        gap: 2rem;
      }
    }
  }
}

@media screen and (max-width: 1366px) {
  .about-container {
    gap: 7rem;

    &__content {
      flex-direction: column;
    }

    &__about-me {
      &__title {
        font-size: 2rem;
      }

      &__content__text {
        font-size: 1.25rem;
        line-height: 1.6rem;
      }
    }

    &__my-work-experience {
      gap: 3rem;

      &__title {
        font-size: 2rem;
      }

      &__jobs {
        gap: 2rem;
      }
    }

    &__my-education {
      gap: 3rem;

      &__title {
        font-size: 2rem;
      }

      &__schools {
        gap: 2rem;
      }
    }
  }
}

@media screen and (max-width: 1279px) {
  .about-container {
    gap: 7rem;

    &__about-me {
      align-items: center;

      &__content {
        &__title {
          font-size: 1.75rem;
        }

        &__text {
          font-size: 1.1rem;
          line-height: 1.4rem;
        }
      }
    }

    &__my-work-experience {
      gap: 3rem;

      &__title {
        font-size: 1.75rem;
        text-align: center;
      }

      &__jobs {
        gap: 4rem;
      }
    }

    &__my-education {
      gap: 3rem;

      &__title {
        font-size: 1.75rem;
        text-align: center;
      }

      &__schools {
        gap: 4rem;
      }
    }
  }
}

@media screen and (max-width: 1023px) {
  .about-container__about-me__content {
    flex-direction: column;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 1rem;

    &__image-container {
      float: none;

      .image {
        width: clamp(100px, 30vw, 200px);
        height: auto;
      }
    }
  }
}
</style>
