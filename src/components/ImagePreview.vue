<script>
import Dot from "@/components/Dot.vue";

export default {
  name: "ImagePreview",

  components: {
    Dot,
  },

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

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        this.nextImage();
      } else if (e.key === "ArrowLeft") {
        this.previousImage();
      }
    });
  },

  beforeUnmount() {
    this.handleMouseLeave();
    this.deactivateCursorShadow();

    document.removeEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        this.nextImage();
      } else if (e.key === "ArrowLeft") {
        this.previousImage();
      }
    });
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
    selectImage(index) {
      this.activeImage = index;
    },

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

    handleCloseIconMouseOver() {
      this.handleMouseOver();
      const closeIcon = document.querySelector(".icon--close");
      const closeShadow = document.querySelector(".shadow--close");
      closeIcon.classList.add("icon--active");
      closeShadow.classList.add("shadow--active");
    },

    handleCloseIconMouseLeave() {
      this.handleMouseLeave();
      const closeIcon = document.querySelector(".icon--close");
      const closeShadow = document.querySelector(".shadow--close");
      closeIcon.classList.remove("icon--active");
      closeShadow.classList.remove("shadow--active");
    },

    handlePrevIconMouseOver() {
      this.handleMouseOver();
      const prevIcon = document.querySelector(".icon--prev");
      const prevShadow = document.querySelector(".shadow--prev");
      prevIcon.classList.add("icon--active");
      prevShadow.classList.add("shadow--active");
    },

    handlePrevIconMouseLeave() {
      this.handleMouseLeave();
      const prevIcon = document.querySelector(".icon--prev");
      const prevShadow = document.querySelector(".shadow--prev");
      prevIcon.classList.remove("icon--active");
      prevShadow.classList.remove("shadow--active");
    },

    handleNextIconMouseOver() {
      this.handleMouseOver();
      const nextIcon = document.querySelector(".icon--next");
      const nextShadow = document.querySelector(".shadow--next");
      nextIcon.classList.add("icon--active");
      nextShadow.classList.add("shadow--active");
    },

    handleNextIconMouseLeave() {
      this.handleMouseLeave();
      const nextIcon = document.querySelector(".icon--next");
      const nextShadow = document.querySelector(".shadow--next");
      nextIcon.classList.remove("icon--active");
      nextShadow.classList.remove("shadow--active");
    },
  },
};
</script>

<template>
  <div class="image-preview">
    <div class="overlay" @click="$emit('close')"></div>

    <div
      class="close-preview"
      @click="$emit('close')"
      @mouseover="handleCloseIconMouseOver"
      @mouseleave="handleCloseIconMouseLeave"
    >
      <div class="shadow shadow--close"></div>
      <font-awesome-icon
        icon="fa-solid fa-xmark"
        size="2x"
        class="icon--close"
      />
    </div>

    <div
      class="cicle-image prev-image"
      @click="previousImage"
      @mouseover="handlePrevIconMouseOver"
      @mouseleave="handlePrevIconMouseLeave"
      v-if="imageArrayLength > 1"
    >
      <div class="shadow shadow--prev"></div>
      <font-awesome-icon
        icon="fa-solid fa-chevron-left"
        class="icon--cicle icon--prev"
        size="2x"
      />
    </div>

    <div class="preview-container">
      <div class="image-container">
        <img :src="image" alt="image" />
      </div>

      <div class="image-description">
        <div class="active-image-index">
          <Dot
            v-for="(dot, index) in imageArrayLength"
            :key="index"
            :index="index"
            :active="activeImage"
            @select="selectImage"
            v-if="imageArrayLength > 1"
          />
        </div>
        <div class="image-title">{{ title }}</div>
        <div class="image-text">{{ description }}</div>
      </div>
    </div>

    <div
      class="cicle-image next-image"
      @click="nextImage"
      @mouseover="handleNextIconMouseOver"
      @mouseleave="handleNextIconMouseLeave"
      v-if="imageArrayLength > 1"
    >
      <div class="shadow shadow--next"></div>
      <font-awesome-icon
        icon="fa-solid fa-chevron-right"
        class="icon--cicle icon--next"
        size="2x"
      />
    </div>

    <div class="placeholder"></div>
  </div>
</template>

<style lang="scss" scoped>
.image-preview {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr auto 1fr;
  justify-self: center;
  z-index: 100;

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
  }

  .close-preview {
    position: relative;
    bottom: -50%;
    width: 90%;
    height: clamp(2rem, 70%, 4rem);
    color: var(--color-secondary-light);
    transform: translateY(-50%);
    grid-column: 2;
    grid-row: 1;
    place-self: center center;
    z-index: 101;

    .icon--close {
      position: absolute;
      top: 50%;
      left: 50%;
      color: var(--color-secondary-light);
      transform: translate(-50%, -50%);
      transition: color 0.3s ease-in-out;
      z-index: 102;
    }
  }

  .shadow {
    width: 100%;
    height: 100%;
    transition: background-color 0.6s ease, box-shadow 0.6s ease;
    opacity: 0.5;
    z-index: 100;

    &--active {
      background-color: var(--color-secondary-light);
      box-shadow: 0 0 20px 10px var(--color-secondary-light);
    }

    &--prev {
      border-radius: 50% 0 0 50%;
    }

    &--next {
      border-radius: 0 50% 50% 0;
    }

    &--close {
      border-radius: 50% 50% 0 0;
    }
  }

  .cicle-image {
    position: relative;
    width: clamp(2rem, 70%, 5rem);
    height: 90%;
    color: var(--color-secondary-light);
  }

  .prev-image {
    right: -50%;
    grid-column: 1;
    grid-row: 2;
    place-self: center center;
    z-index: 101;
    transform: translateX(-50%);
  }

  .next-image {
    left: -50%;
    grid-column: 3;
    grid-row: 2;
    place-self: center center;
    z-index: 101;
    transform: translateX(50%);
  }

  .icon--cicle {
    position: absolute;
    top: 50%;
    left: 50%;
    color: var(--color-secondary-light);
    transform: translate(-50%, -50%);
    transition: color 0.3s ease-in-out;
    z-index: 102;
  }

  .icon--active {
    color: var(--color-accent) !important;
  }

  .preview-container {
    position: relative;
    max-width: 70vw;
    padding: 1rem;
    background-color: var(--color-primary);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    grid-column: 2;
    grid-row: 2;
    place-self: center center;

    box-sizing: border-box;
    box-shadow: 0 0 10px 5px var(--color-border);
    border-radius: 0.5rem;
    z-index: 101;

    .image-container {
      height: 80%;
      width: 100%;
      border-radius: inherit;
        
      img {
        height: 100%;
        width: 100%;
        border-radius: inherit;
        border: 1px solid var(--color-accent);
        box-shadow: 0 0 2px 1px var(--color-accent);
      }
    }

    .image-description {
      width: 100%;
      color: var(--color-secondary);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      justify-self: center;

      .active-image-index {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        padding-bottom: 1rem;
      }

      .image-title {
        font-size: 1.5rem;
        font-weight: 700;
      }

      .image-text {
        font-size: 1rem;
        font-weight: 400;
      }
    }

    .placeholder {
      grid-column: 2;
      grid-row: 3;
      height: 5rem;
    }
  }
}
</style>
