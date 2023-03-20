<script>
import Skill from "@/components/Skill.vue";
import { useSkillsetStore } from "@/stores/skillsetStore";
import { useSettingsStore } from "@/stores/settingsStore";

export default {
  components: {
    Skill,
  },

  setup() {
    const skillset = useSkillsetStore();
    const settings = useSettingsStore();
    return { skillset, settings };
  },

  data() {
    return {
      activeSkill: null,
    };
  },

  watch: {
    overlayActive() {
      this.activeSkill = null;
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 300);
    },
  },

  methods: {
    toggleSkill(index) {
      let skillHeightBefore = 0;
      let contentHeightBefore = 0;
      if (this.activeSkill !== null) {
        skillHeightBefore =
          document.getElementsByClassName("skill")[this.activeSkill]
            .clientHeight;
        contentHeightBefore =
          document.getElementsByClassName("skill__content")[this.activeSkill]
            .clientHeight;
      }

      this.activeSkill = this.activeSkill === index ? null : index;

      if (this.activeSkill === null) {
        return;
      }

      const vh = document.documentElement.clientHeight;
      const top = window.pageYOffset || document.documentElement.scrollTop;
      const bottom = top + vh;

      setTimeout(() => {
        const skill = document.getElementsByClassName("skill")[index];
        const skillHeight = skill.clientHeight;

        if (skillHeight > vh) return;

        if (skill.offsetTop - 20 < top) {
          window.scrollTo({
            top: skill.offsetTop - 60,
            behavior: "smooth",
          });
          return;
        }

        if (
          skillHeightBefore === 0 &&
          skill.offsetTop + skillHeight + 20 > bottom
        ) {
          window.scrollTo({
            top: skill.offsetTop + skillHeight - vh + 60,
            behavior: "smooth",
          });
          return;
        }

        if (
          skillHeightBefore !== 0 &&
          skill.offsetTop + skillHeight - contentHeightBefore + 20 > bottom
        ) {
          window.scrollTo({
            top: skill.offsetTop - contentHeightBefore + skillHeight - vh + 60,
            behavior: "smooth",
          });
        }
      }, 10);
    },
  },

  computed: {
    skills() {
      return this.skillset.skillset.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    },

    overlayActive() {
      return this.settings.overlayIsActive;
    },
  },
};
</script>

<template>
  <div class="skillset">
    <div class="skillsets" v-for="(skill, index) in skills" :key="index">
      <Skill
        :title="skill.title"
        :content="skill.content"
        :is-active="this.activeSkill === index"
        @toggle="toggleSkill(index)"
      />
      <div class="line" v-if="index !== skills.length - 1"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skillset {
  padding: 2rem 0;
}

.skillsets {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 3rem;
  box-sizing: border-box;
  overflow-x: hidden;
}

.line {
  border-top: 1px solid var(--color-secondary-light);
  width: clamp(50px, 15%, 300px);
}

@media screen and (min-width: 2560px) {
  .skillset {
    padding: 2rem 0;
  }

  .skillsets {
    padding: 2rem;
    gap: 4rem;
  }
}

@media screen and (max-width: 1440px) {
  .skillset {
    padding: 2rem 0;
  }

  .skillsets {
    padding: 1rem 1rem;
    gap: 1.5rem;
  }
}

@media screen and (max-width: 1024px) {
  .skillset {
    padding: 2rem 0;
  }

  .skillsets {
    padding: 1rem 0.5rem;
    gap: 1.5rem;
  }
}

@media screen and (max-width: 768px) {
  .skillset {
    padding: 4rem 0;
  }

  .skillsets {
    padding: 1rem 0.5rem;
    gap: 1.5rem;
  }
}

@media screen and (max-width: 500px) {
  .skillset {
    padding: 4rem 0;
  }

  .skillsets {
    align-items: center;
    padding: .8rem 0.5rem;
    gap: 1rem;
  }
}

</style>
