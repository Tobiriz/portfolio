<script>
import { useProjectsStore } from "@/stores/projectsStore";
import Project from "@/components/Project.vue";

export default {
  components: {
    Project,
  },

  setup() {
    const projects = useProjectsStore();
    return { projects };
  },

  computed: {
    projects() {
      return this.projects.projects;
    },
  },
};
</script>

<template>
  <div class="projects flex flex-col height100p">
    <div
      class="projects-container flex flex-row gap-2 flex-wrap justify-content-between"
    >
      <Project
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  padding: 5rem;
  box-sizing: border-box;
  overflow-y: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
