<script>
import ViewName from '@/components/ViewName.vue'
import Project from '@/components/Project.vue'
import { useProjectsStore } from '@/stores/projectsStore'

export default {
    components: {
        ViewName,
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
        <ViewName>
            <template #view-name>
                {{ projects.viewName }}
            </template>
        </ViewName>
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
    cursor: default;
}
</style>