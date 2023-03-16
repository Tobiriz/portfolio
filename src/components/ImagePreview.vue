<script>
export default {
  name: "ImagePreview",

  props: {
    previewImages: {
      type: Array,
      required: false,
    },
  },

  data() {
    return {
      activeImage: 0,
      imageArray: [],
      titleArray: [],
      descriptionArray: [],
    };
  },

  mounted() {
    this.activateCursorShadow();

    for (let image of this.previewImages) {
      this.imageArray.push(image.src);
      this.titleArray.push(image.alt.title);
      this.descriptionArray.push(image.alt.description);
    }
  },

    beforeUnmount() {
        this.handleMouseLeave();
        this.deactivateCursorShadow();
    },

  computed: {
    image() {
      return this.imageArray[this.activeImage];
    },

    title() {
      return this.titleArray[this.activeImage];
    },

    description() {
      return this.descriptionArray[this.activeImage];
    },

    imageArrayLength() {
      return this.imageArray.length;
    },
  },

  methods: {
    activateCursorShadow() {
      const cursorShadow = document.getElementById("cursor-shadow");
      cursorShadow.classList.add("cursor-shadow--active");
    },

    deactivateCursorShadow() {
      const cursorShadow = document.getElementById("cursor-shadow");
      cursorShadow.classList.remove("cursor-shadow--active");
    },

    nextImage() {
      this.handleMouseClick();
      if (this.activeImage < this.imageArray.length - 1) {
        this.activeImage++;
      } else {
        this.activeImage = 0;
      }
    },

    previousImage() {
      this.handleMouseClick();
      if (this.activeImage > 0) {
        this.activeImage--;
      } else {
        this.activeImage = this.imageArray.length - 1;
      }
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
  <div class="image-preview pos-fix top-left width100p height100p flex flex-col justify-content-center align-items-center">
    <div class="overlay pos-fix top-left width100p height100p" @click="$emit('close')"></div>

    <div class="preview-container pos-rel bg-primary flex flex-col justify-content-start align-items-start gap-1 pad-1 border-box">
      <font-awesome-icon
        icon="fa-solid fa-xmark"
        size="2x"
        class="close-icon pos-abs color-secondary-light color-accent-hover"
        @click="$emit('close')"
        @mouseover="handleMouseOver"
        @mouseleave="handleMouseLeave"
      />

      <div class="image-container flex flex-row justify-content-center align-items-center">
        <div
          class="cicle-image prev-image pos-abs flex flex-row justify-content-start align-items-center color-secondary"
          @click="previousImage"
          @mouseover="handleMouseOver"
          @mouseleave="handleMouseLeave"
          v-if="imageArrayLength > 1"
        >
          <font-awesome-icon
            icon="fa-solid fa-chevron-left"
            class="icon icon-prev pad-1"
            size="2x"
          />
        </div>

        <div
          class="cicle-image next-image pos-abs flex flex-row justify-content-end align-items-center color-secondary"
          @click="nextImage"
          @mouseover="handleMouseOver"
          @mouseleave="handleMouseLeave"
          v-if="imageArrayLength > 1"
        >
          <font-awesome-icon
            icon="fa-solid fa-chevron-right"
            class="icon icon-next pad-1"
            size="2x"
          />
        </div>

        <div class="image width100p height100p">
          <img :src="image" alt="image" />
        </div>
      </div>

      <div
        class="image-description width100p color-secondary-light flex flex-col gap-0-5 width100p justify-content-center align-items-center"
      >
        <div class="font-size-1-5 weight-7">{{ title }}</div>
        <div class="wight-4">{{ description }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image-preview {
  z-index: 100;

  .overlay {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .preview-container {
    height: 90%;

    .close-icon {
      top: 0.5rem;
      right: 0.5rem;
    }

    .image-container {
      height: 90%;

      .cicle-image {
        top: 45%;
        transform: translateY(-50%);
        width: 8rem;
        height: 70%;
        opacity: 0.5;
        transition: opacity 0.3s ease-in-out;

        &:hover {
          opacity: 1;
        }
      }

      .prev-image:hover ~ .image {
        box-shadow: -50px 0 50px -10px var(--accent-color);
      }

      .next-image:hover ~ .image {
        box-shadow: 50px 0 50px -10px var(--accent-color);
      }

      .prev-image {
        left: -1rem;
      }

      .next-image {
        right: -1rem;
      }

      .image {
        img {
          border: 1px solid var(--canvas-color);
          box-shadow: 0 0 10px 0 var(--canvas-color);
          border-radius: 5px;
          width: 100%;
          height: 100%;

          object-fit: contain;
        }
      }

      .image-description {
        justify-self: center;
        height: 10%;
      }
    }
  }
}
</style>
