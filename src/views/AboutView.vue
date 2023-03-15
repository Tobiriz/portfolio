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
  <div class="about-container flex flex-col height100p gap-10">
    <div class="about-container__about-me flex flex-col gap-3">
      <div class="about-container__about-me__title font-size-3">
        <h2>{{ about.aboutMeHeading }}</h2>
      </div>
      <div class="about-container__about-me__content color-secondary">
        <div
          class="about-container__about-me__content__image-container pos-rel"
        >
          <img
            src="@/assets/images/tobiasweinlich.jpg"
            alt="Tobias Weinlich"
            class="image"
          />
          <div
            class="about-container__about-me__content__image-container__image-overlay pos-abs width100p top-left"
          ></div>
        </div>
        <div
          class="about-container__about-me__content__text font-size-1-5 line-height-1-5"
        >
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

    <div
      class="about-container__my-work-experience flex flex-col align-items-center gap-5"
    >
      <div class="about-container__my-work-experience__title font-size-3">
        <h2>{{ about.myWorkExperienceHeading }}</h2>
      </div>

      <div
        class="about-container__my-work-experience__jobs flex flex-col gap-5"
      >
        <Job v-for="job in about.jobs" :key="job.id" :job="job" />
      </div>
    </div>

    <div
      class="about-container__my-education flex flex-col align-items-center gap-5"
    >
      <div class="about-container__my-education__title font-size-3">
        <h2>{{ about.myEducationHeading }}</h2>
      </div>

      <div class="about-container__my-education__schools flex flex-col gap-5">
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
  padding: 5vh 4vw;
  box-sizing: border-box;
  overflow-y: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &__about-me__content {
    font-weight: 400;
    text-align: justify;

    &__image-container {
      float: right;
      margin: 0 0 1rem 1rem;

      .image {
        width: 15vw;
        height: auto;
      }

      &__image-overlay {
        height: 99%;
        box-shadow: inset 0 0 6px 8px var(--primary-color);
      }
    }
  }
}

//screen width < 768px
@media screen and (max-width: 768px), screen and (max-height: 600px) {
  .about-container {
    gap: 3rem;
    padding: 4vh 2vw;
    width: 100dvw;
    height: 100dvh;
    overflow-y: auto;
    overflow-x: hidden;

    &__about-me {
      gap: 1rem;

      &__title {
        font-size: 4vw;
        text-align: center;
      }

      &__content {
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        &__text {
          font-size: 2.5vw;
          line-height: 3.5vw;
          padding: 0 1rem;
        }

        &__image-container {
          margin: 0 0 1rem 1rem;

          .image {
            width: 20vw;
            height: auto;
          }
        }
      }
    }

    &__my-work-experience {
      &__title {
        font-size: 4vw;
      }
    }

    &__my-education {
      &__title {
        font-size: 4vw;
      }
    }
  }
}

@media screen and (max-height: 600px) {
  .about-container {
    gap: 3rem;
    padding: 4vh 2vw;
    width: 100dvw;
    height: 100dvh;
    overflow-y: auto;
    overflow-x: hidden;

    &__about-me {
      gap: 1rem;

      &__title {
        font-size: 8vh;
        text-align: center;
      }

      &__content {
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        &__text {
          font-size: 4vh;
          line-height: 6vh;
          padding: 0 1rem;
        }

        &__image-container {
          margin: 0 0 1rem 1rem;

          .image {
            width: 20vw;
            height: auto;
          }
        }
      }
    }

    &__my-work-experience {
      &__title {
        font-size: 4vw;
      }
    }

    &__my-education {
      &__title {
        font-size: 4vw;
      }
    }
  }
}
</style>
