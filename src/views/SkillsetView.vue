<script>
import Skill from '@/components/Skill.vue'
import { useSkillsetStore } from '@/stores/skillsetStore'

export default {
    components: {
        Skill,
    },

    setup() {
        const skillsset = useSkillsetStore()
        return { skillsset }
    },

    data() {
        return {
            activeSkill: null,           
            skillset: [
                {
                    title: 'HTML',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
                },
                {
                    title: 'CSS',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
                },
                {
                    title: 'JavaScript',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
                },
                {
                    title: 'Vue',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
                },
                {
                    title: 'Java',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
                },
                {
                    title: 'Problem Solving',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
                },
                {
                    title: 'Teamwork',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
                },
                {
                    title: 'Communication',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
                },
                {
                    title: 'Leadership',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
                },
                {
                    title: 'Time Management',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
                }
            ]
        }
    },

    methods: {
        toggleSkill (index) {
            console.log(index)
            this.activeSkill = this.activeSkill === index ? null : index
            console.log(this.activeSkill === index)
        }
    },

    computed: {
        skills () {
            return this.skillset.sort((a, b) => a.title.localeCompare(b.title))
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
    gap: 2rem;
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
</style>