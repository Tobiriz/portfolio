<script>
import Project from '@/components/Project.vue'
import { useProjectsStore } from '@/stores/projectsStore'

export default {
    components: {
        Project
    },

    setup() {
        const projects = useProjectsStore()
        return { projects }
    },
}
</script>

<template>
    <div>
        <div class="projects-container">
            <Project v-for="project in projects.projects" :key="project.id" :project="project" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.projects-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;
    padding-bottom: 3rem;
    color: var(--secondary-color);
}
</style>