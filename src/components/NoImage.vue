<script>
import { useSettingsStore } from "../stores/settingsStore";

export default {
  setup() {
    const store = useSettingsStore();
    return { store };
  },

  computed: {
    noImageText() {
      if (this.store.languageIsEnglish) {
        return "No image available";
      } else if (this.store.languageIsGerman) {
        return "Kein Bild vorhanden";
      }
    },
  },
};
</script>

<template>
  <div class="no-image">
    <font-awesome-icon icon="fa-solid fa-image" class="icon" />
    <p class="text">{{ noImageText }}</p>
  </div>
</template>

<style lang="scss" scoped>
.no-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 1.5rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  color: var(--color-secondary);
  box-shadow: 0 0 3px 1px var(--color-border);

  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .text {
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.1rem;
  }
}

@media screen and (min-width: 2560px) {
  .no-image {
    padding: 2rem 1.5rem;
    .icon {
      font-size: 4rem;
    }

    .text {
      font-size: 2rem;
    }
  }
}

@media screen and (max-width: 1440px) {
  .no-image {
    padding: 1.5rem 1rem;
    .icon {
      font-size: 2.6rem;
    }

    .text {
      font-size: 1.3rem;
    }
  }
}

@media screen and (max-width: 1024px) {
  .no-image {
    padding: 1.5rem 1rem;
    .icon {
      font-size: 2.4rem;
    }

    .text {
      font-size: 1.2rem;
    }
  }
}

@media screen and (max-width: 1024px) {
  .no-image {
    padding: 1.5rem 1rem;
    .icon {
      font-size: 2.4rem;
    }

    .text {
      font-size: 1.2rem;
    }
  }
}
</style>
