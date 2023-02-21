<script>
import ViewName from '@/components/ViewName.vue'
import AboutPosition from '@/components/AboutPosition.vue'
import Job from '@/components/Job.vue'
import School from '@/components/School.vue'
import { useAboutStore } from '@/stores/aboutStore'

export default {
    components: {
        ViewName,
        AboutPosition,
        Job,
        School
    },

    setup() {
        const about = useAboutStore()
        return { about }
    },
}
</script>

<template>
    <div>
        <div class="about-container">
            <div class="about-container__about-me">
                <div class="about-container__about-me__title">
                    <h2>{{ about.aboutMeHeading }}</h2>
                </div>
                <div class="about-container__about-me__content">
                    <p>
                        <div class="about-container__about-me__content__image-container">
                            <img src="@/assets/images/tobiasweinlich.jpg" alt="Tobias Weinlich" class="image">
                            <div class="about-container__about-me__content__image-container__image-overlay"></div>
                        </div>
                        {{ about.aboutMeContent }}
                    </p>
                </div>
            </div>

            <div class="about-container__my-work-experience">
                <div class="about-container__my-work-experience__title">
                    <h2>{{ about.myWorkExperienceHeading }}</h2>
                </div>

                <Job v-for="job in about.jobs" :key="job.id" :job="job" />
            </div>

            <div class="about-container__my-education">
                <div class="about-container__my-education__title">
                   <h2>{{ about.myEducationHeading }}</h2>
                </div>
                
                <School v-for="school in about.schools" :key="school.id" :school="school" />
            </div>
        </div>

        <ViewName>
            <template #view-name>
                {{ about.viewName }}
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
            line-height: 2rem;

            &__image-container {
                position: relative;
                float: right;
                margin: 0 0 1rem 1rem;
                
                .image {
                    width: 250px;
                    height: auto;
                }
                
                &__image-overlay {
                    position: absolute;
                    width: 100%;
                    height: 99%;
                    top: 0;
                    left: 0;
                    box-shadow: inset 0 0 6px 8px var(--primary-color);
                }
            }
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