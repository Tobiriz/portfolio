<script>
import Skill from '@/components/Skill.vue'

export default {
    components: {
        Skill
    },

    data() {
        return {
            activeSkill: null,

            skills: [
                {
                    name: 'HTML',
                    level: 90,
                    icon: 'fa-solid fa-code'
                },
                {
                    name: 'CSS',
                    level: 80,
                    icon: 'fa-solid fa-code'
                },
                {
                    name: 'JavaScript',
                    level: 70,
                    icon: 'fa-solid fa-code'
                },
                {
                    name: 'Vue',
                    level: 60,
                    icon: 'fa-solid fa-code'
                },
                {
                    name: 'React',
                    level: 50,
                    icon: 'fa-solid fa-code'
                },
                {
                    name: 'Node',
                    level: 40,
                    icon: 'fa-solid fa-code'
                },
                {
                    name: 'MongoDB',
                    level: 30,
                    icon: 'fa-solid fa-code'
                },
                {
                    name: 'Git',
                    level: 20,
                    icon: 'fa-solid fa-code'
                },
                {
                    name: 'Python',
                    level: 10,
                    icon: 'fa-solid fa-code'
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
    }
}
</script>

<template>
    <div class="skillsets">
        <Skill v-for="(skill, index) in skills" :key="index" :title="skill.title" :content="skill.content" :is-active="this.activeSkill === index" @toggle="toggleSkill(index)" />

    </div>
</template>

<style lang="scss" scoped>
.skillsets {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    color: #fff;
}
</style>