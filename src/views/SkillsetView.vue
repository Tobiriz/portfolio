<script>
import Skill from '@/components/Skill.vue'
import { useSkillsetStore } from '@/stores/skillsetStore'

export default {
    components: {
        Skill,
    },

    setup() {
        const skillset = useSkillsetStore()
        return { skillset }
    },

    data() {
        return {
            activeSkill: null,           
        }
    },

    methods: {
        toggleSkill (index) {
            this.activeSkill = this.activeSkill === index ? null : index
        }
    },

    computed: {
        skills () {
            return this.skillset.skillset.sort((a, b) => a.title.localeCompare(b.title))
        }
    }
}
</script>

<template>
    <div>
        <div class="skillsets">
            <Skill v-for="(skill, index) in skills" :key="index" :title="skill.title" :content="skill.content" :is-active="this.activeSkill === index" @toggle="toggleSkill(index)" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.skillsets {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    gap: 3vh;
    flex-direction: column;
    align-items: flex-end;
    padding: 2rem;
    box-sizing: border-box;
    overflow-y: auto;

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