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
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-auto-rows: minmax(300px, auto);
  grid-gap: 2rem;
  column-gap: 2rem;
  justify-items: center;
  align-items: start;
}

@media screen and (min-width: 2560px) {
  .projects {
    padding: 5rem;
  }

  .projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(700px, 1fr));
    grid-auto-rows: minmax(300px, auto);
    grid-gap: 5rem;
    justify-items: start;
    align-items: center;
  }
}

@media screen and (max-width: 1440px) {
  .projects {
    padding: 3rem;
  }

  .projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    grid-auto-rows: minmax(300px, auto);
    grid-gap: 10rem;
    justify-items: start;
    align-items: center;
  }
}

@media screen and (max-width: 768px) {
  .projects {
    padding: 4rem 1rem;
  }

  .projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    grid-auto-rows: minmax(300px, auto);
    grid-gap: 8rem;
    justify-items: start;
    align-items: center;
  }
}

@media screen and (max-width: 500px) {
  .projects {
    padding: 4rem 1rem;
  }

  .projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: minmax(150px, auto);
    grid-gap: 8rem;
    justify-items: start;
    align-items: center;
  }
}

@media screen and (max-width: 350px) {
  .projects {
    padding: 4rem 0.5rem;
  }

  .projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 4rem;
    column-gap: 0;
    justify-items: start;
    align-items: center;
  }
}
</style>
