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

  mounted() {
    const links = document.getElementsByClassName("contact-external-link");

    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("mouseover", () => {
        this.handleMouseOver();
      });

      links[i].addEventListener("mouseleave", () => {
        this.handleMouseLeave();
      });

      links[i].addEventListener("click", () => {
        this.handleMouseClick();
      });
    }

    const email = document.getElementById("email");

    email.addEventListener("mouseover", () => {
      this.handleMouseOver();
    });

    email.addEventListener("mouseleave", () => {
      this.handleMouseLeave();
    });

    email.addEventListener("click", () => {
      this.handleMouseClick();
    });
  },

  unmounted() {
    const links = document.getElementsByClassName("contact-external-link");

    for (let i = 0; i < links.length; i++) {
      links[i].removeEventListener("mouseover", () => {
        this.handleMouseOver();
      });

      links[i].removeEventListener("mouseleave", () => {
        this.handleMouseLeave();
      });

      links[i].removeEventListener("click", () => {
        this.handleMouseClick();
      });
    }

    const email = document.getElementById("email");

    email.removeEventListener("mouseover", () => {
      this.handleMouseOver();
    });

    email.removeEventListener("mouseleave", () => {
      this.handleMouseLeave();
    });

    email.removeEventListener("click", () => {
      this.handleMouseClick();
    });
  },
};
</script>

<template>
  <div
    class="contact-container height100p flex flex-col justify-content-center align-items-center gap-6 color-secondary"
  >
    <div class="contact-container__section text-center">
      <h1 class="deco-underlined">{{ contact.email }}</h1>
      <a href="mailto:contact@tobiasweinlich.com" id="email">
        <h2 class="color-secondary-light color-accent-hover cursor-none">
          {{ contact.emailAddress }}
        </h2>
      </a>
    </div>

    <div class="contact-container__section text-center">
      <h1 class="deco-underlined">{{ contact.media }}</h1>

      <div
        class="contact-container__section__external grid justify-content-center align-items-center gap-2"
      >
        <div class="contact-container__section__external__github">
          <a
            href="https://github.com/Tobiriz"
            target="_blank"
            class="contact-external-link flex flex-col color-secondary-light color-accent-hover cursor-none"
          >
            <font-awesome-icon icon="fa-brands fa-github" class="font-size-2" />
            <h2 class="external-link__header font-size-1-5">GitHub</h2>
          </a>
        </div>

        <div class="contact-container__section__external__linkedin">
          <a
            href="https://www.linkedin.com/in/tobias-weinlich-34aba0260/"
            target="_blank"
            class="contact-external-link flex flex-col color-secondary-light color-accent-hover cursor-none"
          >
            <font-awesome-icon
              icon="fa-brands fa-linkedin"
              class="font-size-2"
            />
            <h2 class="external-link__header font-size-1-5">LinkedIn</h2>
          </a>
        </div>

        <div class="contact-container__section__external__xing">
          <a
            href="https://www.xing.com/profile/Tobias_Weinlich/cv"
            target="_blank"
            class="contact-external-link flex flex-col color-secondary-light color-accent-hover cursor-none"
          >
            <font-awesome-icon icon="fa-brands fa-xing" class="font-size-2" />
            <h2 class="external-link__header font-size-1-5">Xing</h2>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-container {
  padding: 0 2rem 2rem 0;

  &__section {
    &__external {
      grid-template-columns: repeat(3, 1fr);
    }

    h1 {
      padding-bottom: 1rem;
    }

    h2 {
      padding-bottom: 0.5rem;
    }

    a {
      text-decoration: none;
      gap: 5px;
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
