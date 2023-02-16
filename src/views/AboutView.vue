<script>
import ViewName from '@/components/ViewName.vue'
import AboutPosition from '@/components/AboutPosition.vue'
import Job from '@/components/Job.vue'
import School from '@/components/School.vue'
import { useSettingsStore } from '@/stores/settingsStore'

export default {
    components: {
        ViewName,
        AboutPosition,
        Job,
        School
    },

    setup() {
        const store = useSettingsStore()
        return { store }
    },
}
</script>

<template>
    <div>
        <div class="about-container">
            <div class="about-container__about-me">
                <div class="about-container__about-me__title">
                    <h2>{{ store.aboutMeHeading }}</h2>
                </div>
                <div class="about-container__about-me__content">
                    <p>{{ store.aboutMeContent }}</p>
                </div>
            </div>

            <div class="about-container__my-work-experience">
                <div class="about-container__my-work-experience__title">
                    <h2>{{ store.myWorkExperienceHeading }}</h2>
                </div>

                <Job v-for="job in store.jobs" :key="job.id" :job="job" />
            </div>

            <div class="about-container__my-education">
                <div class="about-container__my-education__title">
                   <h2>{{ store.myEducationHeading }}</h2>
                </div>
                
                <School v-for="school in store.schools" :key="school.id" :school="school" />
            </div>
        </div>

        <ViewName>
            <template #view-name>
                {{ store.aboutViewName }}
            </template>
        </ViewName>

        <AboutPosition />
    </div>
</template>

<style lang="scss" scoped>
.about-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    gap: 6rem;
    flex-direction: column;
    align-items: flex-end;
    padding: 2rem 4rem 2rem 2rem;
    box-sizing: border-box;
    overflow-y: auto;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    &__about-me {
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        &__title {
            font-size: 2rem;
            font-weight: 600;
            color: var(--secondary-color);
        }

        &__content {
            font-size: 1.3rem;
            font-weight: 400;
            color: var(--secondary-color);
            line-height: 1.6rem;
        }
    }
    
    &__my-work-experience {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 2rem;

        &__title {
            font-size: 2rem;
            font-weight: 600;
            color: var(--secondary-color);
        }
    }

    &__my-education {
        width: 80%;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        &__title {
            font-size: 2rem;
            font-weight: 600;
            color: var(--secondary-color);
        }
    }
}
</style>