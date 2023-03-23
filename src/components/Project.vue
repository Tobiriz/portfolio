<script>
import { useSettingsStore } from "../stores/settingsStore";
import ImagePreview from "@/components/ImagePreview.vue";
import NoImage from "@/components/NoImage.vue";

export default {
  components: {
    ImagePreview,
    NoImage,
  },

  setup() {
    const store = useSettingsStore();
    return { store };
  },

  props: {
    project: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      previewActive: false,
    };
  },

  computed: {
    image() {
      return this.project.image;
    },

    images() {
      return this.project.images;
    },

    title() {
      return this.project.title;
    },

    notice() {
      return this.project.notice;
    },

    description() {
      return this.project.description;
    },

    link() {
      return this.project.link;
    },

    linkText() {
      return this.project.linkText;
    },

    previewImagesText() {
      if (this.store.languageIsEnglish) {
        return "Preview images";
      } else if (this.store.languageIsGerman) {
        return "Vorschau-Bilder";
      }
    },
  },

  methods: {
    togglePreview() {
      const screenWidth = document.documentElement.clientWidth;
      if (screenWidth <= 800) {
        return;
      }
      this.previewActive = !this.previewActive;
    },

    handleMouseOver() {
      const cursor = document.getElementById("cursor");
      cursor.classList.add("cursor--active");
    },

    handleMouseOverForPreview() {
      this.activateCursorShadow();
      this.handleMouseOver();
    },

    handleMouseLeave() {
      const cursor = document.getElementById("cursor");
      cursor.classList.remove("cursor--active");
    },

    handleMouseLeaveForPreview() {
      if (!this.previewActive) {
        this.deactivateCursorShadow();
      }
      this.handleMouseLeave();
    },

    handleMouseClick() {
      this.togglePreview();
      const cursor = document.getElementById("cursor");
      cursor.classList.add("cursor--click");
      setTimeout(() => {
        cursor.classList.remove("cursor--click");
      }, 300);
    },

    activateCursorShadow() {
      const cursorShadow = document.getElementById("cursor-shadow");
      cursorShadow.classList.add("cursor-shadow--active");
    },

    deactivateCursorShadow() {
      const cursorShadow = document.getElementById("cursor-shadow");
      cursorShadow.classList.remove("cursor-shadow--active");
    },
  },
};
</script>

<template>
  <div class="project">
    <button
      type="button"
      class="project__image-container"
      v-if="image"
      @keydown.enter="handleMouseClick()"
    >
      <img
        :src="image"
        alt="project image"
        @click="handleMouseClick()"
        @mouseover="handleMouseOverForPreview()"
        @mouseleave="handleMouseLeaveForPreview()"
      />
      <span class="visually-hidden">
        {{ previewImagesText }}
      </span>
    </button>

    <NoImage class="project__no-image" v-else />

    <div class="project__title">
      {{ title }}
    </div>

    <div v-if="notice" class="project__notice">
      {{ notice }}
    </div>

    <div class="project__details">
      <div class="project__details__description">
        {{ description }}
      </div>
      <div v-if="link" class="project__details__link">
        <a
          :href="link"
          target="_blank"
          @click="handleMouseClick()"
          @mouseover="handleMouseOver()"
          @mouseleave="handleMouseLeave()"
        >
          {{ linkText }}
        </a>
      </div>
    </div>

    <ImagePreview
      v-if="previewActive"
      :previewImages="images"
      @close="togglePreview()"
    />
  </div>
</template>

<style lang="scss" scoped>
button {
  all: unset;
}

a {
  all: unset;
  transition: color 0.3s ease-in-out;

  &:hover,
  &:focus-visible {
    color: var(--color-accent);
  }
}

.project {
  justify-self: center;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;
  color: var(--color-secondary);

  &__image-container {
    width: 100%;
    transition: outline-offset 0.2s ease-in-out, outline-width 0.1s ease-in-out;
    outline-offset: 0px;
    outline-width: 0px;
    border-radius: 0.5rem;

    &:hover,
    &:focus {
      outline: 3px solid var(--color-accent);
      outline-offset: 5px;
    }

    img {
      width: 100%;
      height: 100%;
      border: 2px solid var(--color-accent);
      box-shadow: 0 0 2px 1px var(--color-accent);
      box-sizing: border-box;
      border-radius: inherit;
    }
  }

  .no-image {
    align-self: center;
  }

  &__title {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1px;
  }

  &__notice {
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: 0.1rem;
    font-style: italic;
  }

  &__details {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &__description {
      font-size: 1.5rem;
      font-weight: 400;
      letter-spacing: 0.1rem;
    }

    &__link {
      font-size: 1.5rem;
      font-weight: 400;
      color: var(--color-secondary-light);
    }
  }
}

@media screen and (min-width: 2560px) {
  .project {
    padding: 3rem;
    gap: 2rem;

    &__title {
      font-size: 2.8rem;
      letter-spacing: 1px;
    }

    &__notice {
      font-size: 1.5rem;
      letter-spacing: 0.1rem;
    }

    &__details {
      gap: 1rem;

      &__description {
        font-size: 1.8rem;
        letter-spacing: 1px;
      }

      &__link {
        font-size: 1.8rem;
      }
    }
  }
}

@media screen and (max-width: 1440px) {
  .project {
    padding: 1rem;
    gap: 2rem;

    &__title {
      font-size: 2.2rem;
      letter-spacing: 1px;
    }

    &__notice {
      font-size: 1rem;
      letter-spacing: 0.1rem;
    }

    &__details {
      gap: 1rem;

      &__description {
        font-size: 1.2rem;
        letter-spacing: 1px;
      }

      &__link {
        font-size: 1.2rem;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .project {
    padding: 1rem;
    gap: 2rem;

    &__title {
      font-size: 1.8rem;
      letter-spacing: 1px;
    }

    &__notice {
      font-size: 1rem;
      letter-spacing: 0.1rem;
    }

    &__details {
      gap: 1rem;

      &__description {
        font-size: 1.2rem;
        letter-spacing: 1px;
      }

      &__link {
        font-size: 1.2rem;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .project {
    padding: 1rem;
    gap: 2rem;

    &__image-container {
      &:hover,
      &:focus {
        outline: none;
        outline-offset: 5px;
      }
    }

    &__title {
      font-size: 1.8rem;
      letter-spacing: 1px;
    }

    &__notice {
      font-size: 1rem;
      letter-spacing: 0.1rem;
    }

    &__details {
      gap: 1rem;

      &__description {
        font-size: 1.2rem;
        letter-spacing: 1px;
      }

      &__link {
        font-size: 1.2rem;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .project {
    padding: 0;
    gap: 1rem;

    &__title {
      font-size: 1.8rem;
      letter-spacing: 0;
    }

    &__notice {
      font-size: 1rem;
      letter-spacing: 0;
    }

    &__details {
      gap: 1rem;

      &__description {
        font-size: 1.2rem;
        letter-spacing: 0;
      }

      &__link {
        font-size: 1.2rem;
      }
    }
  }
}

@media screen and (max-width: 350px) {
  .project {
    padding: 0;
    gap: 1rem;

    &__title {
      font-size: 1.5rem;
      letter-spacing: 0;
    }

    &__notice {
      font-size: 1rem;
      letter-spacing: 0;
    }

    &__details {
      gap: 1rem;

      &__description {
        font-size: 1rem;
        letter-spacing: 0;
      }

      &__link {
        font-size: 1rem;
      }
    }
  }
}
</style>
