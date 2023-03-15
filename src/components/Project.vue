<script>
import ImagePreview from "@/components/ImagePreview.vue";

export default {
  components: {
    ImagePreview,
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

    description() {
      return this.project.description;
    },

    link() {
      return this.project.link;
    },
  },

  methods: {
    togglePreview() {
      this.previewActive = !this.previewActive;
    },

    handleMouseOver() {
      const cursor = document.getElementById("cursor");
      cursor.classList.add("cursor--active");
    },

    handleMouseLeave() {
      const cursor = document.getElementById("cursor");
      cursor.classList.remove("cursor--active");
    },

    handleMouseClick() {
      this.togglePreview();
      const cursor = document.getElementById("cursor");
      cursor.classList.add("cursor--click");
      setTimeout(() => {
        cursor.classList.remove("cursor--click");
      }, 300);
    },
  },
};
</script>

<template>
  <div
    class="project flex flex-col gap-2 justify-content-start align-items-start color-secondary"
  >
    <div class="project__image-container" v-if="image">
      <img
        :src="image"
        alt="project image"
        class=""
        @click="handleMouseClick()"
        @mouseover="handleMouseOver()"
        @mouseleave="handleMouseLeave()"
      />
    </div>

    <div class="project__title font-size-2 weight-7 spacing-1">
      {{ title }}
    </div>

    <div class="project__details flex flex-col">
      <div class="project__details__description font-size-1 weight-4 spacing-1">
        {{ description }}
      </div>
      <div class="project__details__link font-size-1 weight-4">
        {{ link }}
      </div>
    </div>

    <ImagePreview v-if="previewActive" :previewImages="images" />
  </div>
</template>

<style lang="scss" scoped>
.project {
  padding: 3rem;
  flex: 1 1 40%;
  max-width: 40%;

  &__image-container {
    width: 100%;
    border-radius: 1px;
    outline: 2px solid var(--accent-color);
    outline-offset: 5px;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  &details {
    padding-top: 1rem;
  }
}
</style>
