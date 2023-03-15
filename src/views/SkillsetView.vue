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
  <div
    class="skillsets height100p pos-abs top right flex flex-col align-items-end gap-2-5"
  >
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
  box-sizing: border-box;
  overflow-y: auto;
  width: 80%;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

//screen width < 768px
@media only screen and (max-width: 768px) {
  .skillsets {
    padding: 5vh 1vw 5vh 4vw;
    width: 100dvw;
    box-sizing: border-box;
    gap: 5vw;
  }
}
</style>
