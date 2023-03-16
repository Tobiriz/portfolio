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
  <div class="image-preview pos-fix top-left width100p height100p grid">
    <div
      class="overlay pos-fix top-left width100p height100p"
      @click="$emit('close')"
    ></div>

    <div
      class="close-preview color-secondary-light pos-rel"
      @click="$emit('close')"
      @mouseover="handleCloseIconMouseOver"
      @mouseleave="handleCloseIconMouseLeave"
    >
      <div class="shadow shadow--close"></div>
      <font-awesome-icon
        icon="fa-solid fa-xmark"
        size="2x"
        class="icon--close pos-abs color-secondary-light"
      />
    </div>

    <div
      class="cicle-image prev-image color-secondary-light pos-rel"
      @click="previousImage"
      @mouseover="handlePrevIconMouseOver"
      @mouseleave="handlePrevIconMouseLeave"
      v-if="imageArrayLength > 1"
    >
      <div class="shadow shadow--prev"></div>
      <font-awesome-icon
        icon="fa-solid fa-chevron-left"
        class="icon--cicle icon--prev pos-abs color-secondary-light"
        size="2x"
      />
    </div>

    <div
      class="preview-container pos-rel bg-primary flex flex-col justify-content-start align-items-center gap-1 pad-1 border-box"
    >
      <div
        class="image-container flex flex-row justify-content-center align-items-center"
      >
        <div class="image width100p height100p">
          <img :src="image" alt="image" />
        </div>
      </div>

      <div
        class="image-description width100p color-secondary flex flex-col gap-0-5 width100p justify-content-center align-items-center"
      >
        <div class="active-image-index flex flex-row gap-2">
          <Dot
            v-for="(dot, index) in imageArrayLength"
            :key="index"
            :index="index"
            :active="activeImage"
            @select="selectImage"
            v-if="imageArrayLength > 1"
          />
        </div>
        <div class="font-size-1-5 weight-7">{{ title }}</div>
        <div class="font-size-1 weight-4">{{ description }}</div>
      </div>
    </div>

    <div
      class="cicle-image next-image color-secondary-light pos-rel"
      @click="nextImage"
      @mouseover="handleNextIconMouseOver"
      @mouseleave="handleNextIconMouseLeave"
      v-if="imageArrayLength > 1"
    >
      <div class="shadow shadow--next"></div>
      <font-awesome-icon
        icon="fa-solid fa-chevron-right"
        class="icon--cicle icon--next pos-abs color-secondary-light"
        size="2x"
      />
    </div>

    <div class="placeholder"></div>
  </div>
</template>

<style lang="scss" scoped>
.image-preview {
  z-index: 100;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr auto 1fr;
  justify-self: center;

  .overlay {
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
  }

  .placeholder {
    grid-column: 2;
    grid-row: 3;
    height: 5rem;
  }

  .close-preview {
    bottom: -50%;
    width: 90%;
    height: clamp(2rem, 70%, 4rem);
    grid-column: 2;
    grid-row: 1;
    place-self: center center;
    z-index: 101;
    transform: translateY(-50%);

    .icon--close {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: color 0.3s ease-in-out;
      z-index: 102;
    }
  }

  .cicle-image {
    width: clamp(2rem, 70%, 5rem);
    height: 90%;
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: color 0.3s ease-in-out;
    z-index: 102;
  }

  .icon--active {
    color: var(--accent-color) !important;
  }

  .shadow {
    width: 100%;
    height: 100%;
    transition: background-color 0.6s ease, box-shadow 0.6s ease;
    opacity: 0.5;
    z-index: 100;

    &--active {
      background-color: var(--canvas-color);
      box-shadow: 0 0 20px 5px var(--canvas-color);
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

  .preview-container {
    max-width: 70vw;
    grid-column: 2;
    grid-row: 2;
    place-self: center center;
    box-shadow: 0 0 3px 1px var(--canvas-color);
    z-index: 101;

    .image-container {
      height: 80%;

      .image {
        border: 1px solid var(--canvas-color);
        box-shadow: 0 0 10px 0 var(--canvas-color);

        img {
          border-radius: 5px;
          height: 100%;
          width: 100%;

          object-fit: contain;
        }
      }

      .image-description {
        justify-self: center;
      }
    }
    .active-image-index {
      padding-bottom: 1rem;
    }
  }
}
</style>
