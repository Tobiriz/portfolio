<script>
export default {
  name: "ImagePreview",

  props: {
    previewImages: {
      type: Object,
      required: false,
    },
  },

  data() {
    return {
      activeImage: 0,
      imageArray: [],
      altArray: [],
    };
  },

  mounted() {
    for (let image of this.previewImages) {
      this.imageArray.push(image.image);
      this.altArray.push(image.alt);
    }
  },

  computed: {
    image() {
      return this.imageArray[this.activeImage];
    },

    alt() {
      return this.altArray[this.activeImage];
    },
  },

  methods: {
    nextImage() {
      if (this.activeImage < this.imageArray.length - 1) {
        this.activeImage++;
      } else {
        this.activeImage = 0;
      }
    },

    previousImage() {
      if (this.activeImage > 0) {
        this.activeImage--;
      } else {
        this.activeImage = this.imageArray.length - 1;
      }
    },
  },
};
</script>

<template>
  <div class="image-preview">
    <div class="overlay"></div>
    <div class="image"></div>
    <div class="image-description"></div>
  </div>
</template>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
}
</style>
