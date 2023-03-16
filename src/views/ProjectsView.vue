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
  <div class="projects">
    <div class="projects-container">
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
  min-height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5rem;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-auto-rows: minmax(300px, auto);
  grid-gap: 2rem;
  column-gap: 2rem;
  justify-items: start;
  align-items: center;
}
</style>
