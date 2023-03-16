<script>
import Skill from "@/components/Skill.vue";
import { useSkillsetStore } from "@/stores/skillsetStore";

export default {
  components: {
    Skill,
  },

  setup() {
    const skillset = useSkillsetStore();
    return { skillset };
  },

  data() {
    return {
      activeSkill: null,
    };
  },

  methods: {
    toggleSkill(index) {
      this.activeSkill = this.activeSkill === index ? null : index;
    },
  },

  computed: {
    skills() {
      return this.skillset.skillset.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    },
  },
};
</script>

<template>
  <div class="skillsets">
    <Skill
      v-for="(skill, index) in skills"
      :key="index"
      :title="skill.title"
      :content="skill.content"
      :is-active="this.activeSkill === index"
      @toggle="toggleSkill(index)"
    />
  </div>
</template>

<style lang="scss" scoped>
.skillsets {
  padding: 2rem;
  padding-bottom: 10rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2.5rem;
  box-sizing: border-box;
  overflow-y: auto;
}

@media screen and (max-width: 1279px) {
  .skillsets {
    gap: 2rem;
  }
}

@media screen and (max-width: 700px) {
  .skillsets {
    padding-left: 1rem;
  }
}

@media screen and (max-width: 600px) {
  .skillsets {
    padding: 1rem;
  }
}
</style>
