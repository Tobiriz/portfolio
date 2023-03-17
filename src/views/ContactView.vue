<script>
import { useContactStore } from "@/stores/contactStore";

export default {
  setup() {
    const contact = useContactStore();
    return { contact };
  },

  methods: {
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
  <div class="contact-container">
    <div class="contact-container__section">
      <h1 class="contact-container__section__header">{{ contact.email }}</h1>
      <a
        href="mailto:contact@tobiasweinlich.com"
        id="email"
        @mouseover="handleMouseOver()"
        @mouseleave="handleMouseLeave()"
        @click="handleMouseClick()"
      >
        {{ contact.emailAddress }}
      </a>
    </div>

    <div class="contact-container__section">
      <h1 class="contact-container__section__header">{{ contact.media }}</h1>

      <div class="contact-container__section__external">
        <div class="contact-container__section__external__github">
          <a
            href="https://github.com/Tobiriz"
            target="_blank"
            class="contact-container__section__external__link"
            @mouseover="handleMouseOver()"
            @mouseleave="handleMouseLeave()"
            @click="handleMouseClick()"
          >
            <font-awesome-icon icon="fa-brands fa-github" class="icon" />
            <h2 class="external-link__header">GitHub</h2>
          </a>
        </div>

        <div class="contact-container__section__external__linkedin">
          <a
            href="https://www.linkedin.com/in/tobias-weinlich-34aba0260/"
            target="_blank"
            class="contact-container__section__external__link"
            @mouseover="handleMouseOver()"
            @mouseleave="handleMouseLeave()"
            @click="handleMouseClick()"
          >
            <font-awesome-icon icon="fa-brands fa-linkedin" class="icon" />
            <h2 class="external-link__header">LinkedIn</h2>
          </a>
        </div>

        <div class="contact-container__section__external__xing">
          <a
            href="https://www.xing.com/profile/Tobias_Weinlich/cv"
            target="_blank"
            class="contact-container__section__external__link"
            @mouseover="handleMouseOver()"
            @mouseleave="handleMouseLeave()"
            @click="handleMouseClick()"
          >
            <font-awesome-icon icon="fa-brands fa-xing" class="icon" />
            <h2 class="external-link__header">Xing</h2>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-container {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  color: var(--color-secondary);

  &__section {
    text-align: center;

    &__header {
      text-decoration: underline;
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    #email {
      font-size: 2rem;
      font-weight: 700;
      text-decoration: none;
      color: var(--color-secondary-light);
      cursor: none;

      &:hover {
        color: var(--color-accent);
      }
    }

    &__external {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-content: center;
      align-items: center;
      gap: 2rem;

      &__link {
        display: flex;
        flex-direction: column;
        color: var(--color-secondary-light);
        text-decoration: none;
        font-size: 2rem;
        cursor: none;

        &:hover {
          color: var(--color-accent);
        }

        .icon {
          font-size: 2rem;
        }

        .external-link__header {
          font-size: 1.5rem;
        }
      }
    }
  }
}

//screen width < 768px
@media screen and (max-height: 600px), screen and (max-width: 768px) {
  .contact-container {
    padding: 0;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 4vw;
  }
}

@media screen and (max-height: 600px) {
  .contact-container {
    padding: 0;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3vh;
    gap: 2rem;
  }
}
</style>
