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
  },
};
</script>

<template>
  <div
    class="image-preview pos-fix top-left width100p height100p flex flex-col justify-content-center align-items-center"
  >
    <div
      class="overlay pos-fix top-left width100p height100p"
      @click="$emit('close')"
    ></div>

    <div
      class="preview-container pos-rel bg-primary flex flex-col justify-content-start align-items-start gap-1 pad-2 border-box"
    >
      <font-awesome-icon
        icon="fa-solid fa-xmark"
        size="2x"
        class="close-icon pos-abs color-secondary-light color-accent-hover"
        @click="$emit('close')"
        @mouseover="handleMouseOver"
        @mouseleave="handleMouseLeave"
      />

      <div
        class="image-container flex flex-row justify-content-center align-items-center"
      >
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
    box-shadow: 0 0 3px 1px var(--canvas-color);

    .close-icon {
      top: 5px;
      right: 5px;
      z-index: 110;
    }

    .image-container {
      height: 80%;

      .cicle-image {
        top: 45%;
        transform: translateY(-50%);
        width: 8rem;
        height: 65%;
        opacity: 0.5;
        transition: opacity 0.3s ease-in-out;

        &:hover {
          opacity: 1;
        }
      }

      .prev-image:hover ~ .image {
        box-shadow: -80px 0 50px -30px var(--accent-color);
      }

      .next-image:hover ~ .image {
        box-shadow: 80px 0 50px -30px var(--accent-color);
      }

      .prev-image {
        left: -0.5rem;
        transform: translateY(-55%);
      }

      .next-image {
        right: -0.5rem;
        transform: translateY(-55%);
      }

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
