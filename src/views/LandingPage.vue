<script>
import { RouterLink } from "vue-router";
import Settings from "@/components/Settings.vue";
import { useLandingPageStore } from "@/stores/landingPageStore";

export default {
  components: {
    RouterLink,
    Settings,
  },

  setup() {
    const landingPage = useLandingPageStore();
    return { landingPage };
  },

  data() {
    return {
      firstName: null,
      lastName: null,
      firstNameText: null,
      lastNameText: null,
      letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      interval: null,
      endEffect: false,
    };
  },

  mounted() {
    // this.firstName = document.getElementById("first-name");
    // this.lastName = document.getElementById("last-name");

    // this.firstNameText = document
    //   .getElementById("first-name")
    //   .innerText.split("");
    // this.lastNameText = document
    //   .getElementById("last-name")
    //   .innerText.split("");
  },

  unmounted() {
    this.handleMouseLeave();
  },

  methods: {
    startHackerEffect() {
      this.interval = setInterval(() => {
        this.firstName.innerText = this.firstName.innerText
          .split("")
          .map(
            (letter) =>
              this.letters[Math.floor(Math.random() * this.letters.length)]
          )
          .join("");

        this.lastName.innerText = this.lastName.innerText
          .split("")
          .map(
            (letter) =>
              this.letters[Math.floor(Math.random() * this.letters.length)]
          )
          .join("");
      }, 20);
    },

    stopHackerEffect() {
      clearInterval(this.interval);
    },

    endHackerEffect() {
      if (this.endEffect) {
        this.$router.push("/portfolio");
        return;
      }

      this.stopHackerEffect();
      this.endEffect = true;

      const nameLength = this.firstNameText.length + this.lastNameText.length;
      let iterations = 0;
      let count = 0;

      this.interval = setInterval(() => {
        this.firstName.innerText = this.firstName.innerText
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return this.firstNameText[index];
            }
            return this.letters[
              Math.floor(Math.random() * this.letters.length)
            ];
          })
          .join("");

        if (iterations >= this.firstNameText.length) {
          this.lastName.innerText = this.lastName.innerText
            .split("")
            .map((letter, index) => {
              if (index < iterations - this.firstNameText.length) {
                return this.lastNameText[index];
              }
              return this.letters[
                Math.floor(Math.random() * this.letters.length)
              ];
            })
            .join("");
        } else {
          this.lastName.innerText = this.lastName.innerText
            .split("")
            .map(
              (letter) =>
                this.letters[Math.floor(Math.random() * this.letters.length)]
            )
            .join("");
        }

        if (iterations >= nameLength) {
          clearInterval(this.interval);
          setTimeout(() => {
            this.$router.push("/portfolio");
          }, 500);
        }

        count++;
        if (count === 10) {
          count = 0;
          iterations++;
        }
      }, 10);

      const occupation = document.getElementsByClassName(
        "title-card__content__occupation"
      )[0];
    },

    handleMouseOver() {
      // if (!this.endEffect) {
      //   this.startHackerEffect();
      // }
      const cursor = document.getElementById("cursor");
      cursor.classList.add("cursor--active");
    },

    handleMouseLeave() {
      // if (!this.endEffect) {
      //   this.stopHackerEffect();
      // }
      const cursor = document.getElementById("cursor");
      cursor.classList.remove("cursor--active");
    },

    handleClick() {
      // this.endHackerEffect();
      this.$router.push("/portfolio");
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
  <div class="landing-page">
    <div
      id="routerLink"
      @mouseover="handleMouseOver"
      @mouseleave="handleMouseLeave"
      @click="handleClick"
    >
      <div
        class="title-card"
        @mouseenter="showChevron"
        @mouseleave="hideChevron"
      >
        <div class="title-card__content">
          <div class="title-card__content__name">
            <a @keydown.enter="handleClick()" href="#">
              <h1>Tobias Weinlich</h1>
            </a>
          </div>

          <div class="title-card__content__occupation">
            <h2 id="title-card-occupation">{{ landingPage.occupation }}</h2>
          </div>
        </div>

        <font-awesome-icon
          icon="fa-solid fa-chevron-right"
          class="title-card__chevron"
        />
      </div>
    </div>

    <Settings class="landing-page-settings"></Settings>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Martian+Mono&display=swap");

#first-name,
#last-name {
  font-family: "Martian Mono", monospace;
}

a {
  text-decoration: none;
  color: var(--color-secondary);
  cursor: none;

  &:focus-visible {
    outline: 2px solid var(--color-accent);
  }
}

.landing-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 3;

  .click-notice {
    width: 60vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 0.5rem;
    color: var(--color-secondary-light);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
}

.landing-page-settings {
  font-size: 1.25rem;
  z-index: 4;
}

.title-card {
  position: relative;
  height: 30vh;
  width: 100vw;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: var(--color-secondary);
  background: var(--color-title-card);
  box-sizing: border-box;
  z-index: 3;

  &__content {
    height: 100%;
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    box-sizing: border-box;
    z-index: 4;

    &__name {
      font-size: 3rem;
      font-weight: 700;
      letter-spacing: 1rem;
      text-transform: uppercase;
      text-align: center;
    }

    &__occupation {
      font-size: 1.5rem;
      font-weight: 400;
      letter-spacing: 0.5rem;
      text-align: center;
    }
  }

  &__chevron {
    position: absolute;
    left: 0;
    font-size: 3rem;
    color: var(--color-secondary);
    opacity: 0;
    transition: opacity 0.4s ease, left 0.8s ease;
  }

  &:hover &__chevron {
    opacity: 1;
    left: calc(100% - 5rem);
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    transition: width 0.8s ease;
    background: linear-gradient(to right, transparent, var(--color-accent));
  }

  &:hover:before {
    width: 100%;
  }
}

@media only screen and (min-width: 2560px) {
  .title-card {
    height: 23rem;

    &__content {
      &__name {
          font-size: 5rem;
      }

      &__occupation {
          font-size: 2.6rem;
      }
    }
  }
}

@media only screen and (max-width: 1440px) {
  .title-card {
    height: 18rem;

    &__content {
      &__name {
          font-size: 2.5rem;
          letter-spacing: .8rem;
      }

      &__occupation {
          font-size: 1.6rem;
          letter-spacing: .4rem;
      }
    }
  }
}

@media only screen and (max-width: 1024px) {
  .title-card {
    height: 14rem;

    &__content {
      &__name {
          font-size: 1.8rem;
          letter-spacing: .6rem;
      }

      &__occupation {
          font-size: 1.2rem;
          letter-spacing: .3rem;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .title-card {
    height: 15rem;

    &__content {
      &__name {
          font-size: 1.8rem;
          letter-spacing: .4rem;
      }

      &__occupation {
          font-size: 1.2rem;
          letter-spacing: .2rem;
      }
    }
  }
}

@media only screen and (max-width: 500px) {
  .title-card {
    height: 18rem;
    
    &__content {
      gap: 2rem;

      &__name {
          font-size: 1.5rem;
          line-height: 3.5rem;
          letter-spacing: .2rem;
      }

      &__occupation {
          font-size: 1.1rem;
          letter-spacing: .1rem;
      }
    }
  }
}

@media only screen and (max-width: 350px) {
  .title-card {
    height: 18rem;
    
    &__content {
      gap: 2rem;

      &__name {
          font-size: 1.4rem;
          line-height: 3rem;
          letter-spacing: 0;
      }

      &__occupation {
          font-size: 1rem;
          letter-spacing: 0;
      }
    }
  }
}
</style>
