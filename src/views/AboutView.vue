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
.about-container {
  display: flex;
  flex-direction: column;
  gap: 10rem;
  padding: 3rem 2rem;
  padding-bottom: 10rem;
  box-sizing: border-box;
  color: var(--color-secondary);

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
          box-shadow: inset 0 0 6px 8px var(--color-primary);
        }
      }

      &__text {
        font-size: 1.5rem;
        line-height: 1.5;

        p {
          margin-bottom: 1rem;
        }
      }
    }
  }

  &__my-work-experience {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    &__title {
      text-align: center;
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
      text-align: center;
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

@media screen and (min-width: 2560px) {
  .about-container {
    gap: 15rem;
    padding: 3rem 2rem;
    padding-bottom: 10rem;

    &__about-me {
      gap: 4rem;

      &__title {
        font-size: 4.5rem;
      }

      &__content {
        &__image-container {
          position: relative;
          margin: 0 0 1rem 1rem;
          float: right;

          .image {
            width: 15vw;
          }
        }

        &__text {
          font-size: 1.9rem;
          line-height: 1.4;

          p {
            margin-bottom: 1rem;
          }
        }
      }
    }

    &__my-work-experience {
      gap: 6rem;

      &__title {
        font-size: 4.5rem;
        font-weight: 700;
      }

      &__jobs {
        gap: 8rem;
      }
    }

    &__my-education {
      gap: 6rem;

      &__title {
        font-size: 4.5rem;
        font-weight: 700;
      }

      &__schools {
        gap: 8rem;
      }
    }
  }
}

@media screen and (max-width: 1440px) {
  .about-container {
    gap: 6rem;
    padding: 2rem 1rem;
    padding-bottom: 10rem;

    &__about-me {
      gap: 3rem;

      &__title {
        font-size: 2.6rem;
      }

      &__content {
        &__image-container {
          position: relative;
          margin: 0 0 1rem 1rem;
          float: right;

          .image {
            width: 15vw;
          }
        }

        &__text {
          font-size: 1.2rem;
          line-height: 1.3;

          p {
            margin-bottom: 1rem;
          }
        }
      }
    }

    &__my-work-experience {
      gap: 4rem;

      &__title {
        font-size: 2.6rem;
      }

      &__jobs {
        gap: 4rem;
      }
    }

    &__my-education {
      gap: 4rem;

      &__title {
        font-size: 2.6rem;
      }

      &__schools {
        gap: 4rem;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .about-container {
    gap: 6rem;
    padding: 2rem 1rem;
    padding-bottom: 6rem;

    &__about-me {
      gap: 2rem;

      &__title {
        font-size: 2.2rem;
      }

      &__content {
        &__image-container {
          position: relative;
          margin: 0 0 0 1rem;
          float: right;

          .image {
            width: 18vw;
          }
        }

        &__text {
          font-size: 1.1rem;
          line-height: 1.2;

          p {
            margin-bottom: 0.7rem;
          }
        }
      }
    }

    &__my-work-experience {
      gap: 2rem;

      &__title {
        font-size: 2.2rem;
      }

      &__jobs {
        gap: 4rem;
      }
    }

    &__my-education {
      gap: 2rem;

      &__title {
        font-size: 2.2rem;
      }

      &__schools {
        gap: 4rem;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .about-container {
    gap: 5rem;
    padding: 3rem 1rem;
    padding-bottom: 4rem;

    &__about-me {
      gap: 1rem;

      &__title {
        font-size: 2rem;
      }

      &__content {
        &__image-container {
          position: relative;
          margin: 0 0 0 1rem;
          float: right;

          .image {
            width: 18vw;
          }
        }

        &__text {
          font-size: 1rem;
          line-height: 1.3;

          p {
            margin-bottom: 0.7rem;
          }
        }
      }
    }

    &__my-work-experience {
      gap: 2rem;

      &__title {
        font-size: 2rem;
      }

      &__jobs {
        gap: 3rem;
      }
    }

    &__my-education {
      gap: 2rem;

      &__title {
        font-size: 2rem;
      }

      &__schools {
        gap: 3rem;
      }
    }
  }
}

@media screen and (max-width: 425px) {
  .about-container {
    gap: 5rem;
    padding: 3rem 0.5rem;
    padding-bottom: 4rem;

    &__about-me {
      gap: 1rem;
      align-items: center;

      &__title {
        text-align: center;
        font-size: 1.6rem;
      }

      &__content {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        gap: 1rem;

        &__image-container {
          position: relative;
          margin: 0;
          float: none;

          .image {
            width: 40vw;
          }
        }

        &__text {
          font-size: 1rem;
          line-height: 1.3;

          p {
            margin-bottom: 0.7rem;
          }
        }
      }
    }

    &__my-work-experience {
      gap: 1rem;

      &__title {
        font-size: 1.6rem;
      }

      &__jobs {
        gap: 3rem;
      }
    }

    &__my-education {
      gap: 1rem;

      &__title {
        font-size: 1.6rem;
      }

      &__schools {
        gap: 3rem;
      }
    }
  }
}
</style>
