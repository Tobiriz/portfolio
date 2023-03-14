<script>
import AboutPosition from '@/components/AboutPosition.vue'
import Job from '@/components/Job.vue'
import School from '@/components/School.vue'
import { useSettingsStore } from '../stores/settingsStore'
import { useAboutStore } from '@/stores/aboutStore'

export default {
    components: {
        AboutPosition,
        Job,
        School
    },

    setup() {
        const settings = useSettingsStore()
        const about = useAboutStore()
        return { settings, about }
    },

    updated() {
        this.settings.contentUpdateTrigger()
    },

    mounted() {
        this.settings.contentUpdateTrigger()
    },

    computed: {
        section1() {
            return this.about.aboutMeContent.section1
        },

        section2() {
            return this.about.aboutMeContent.section2
        },

        section3() {
            return this.about.aboutMeContent.section3
        },
    }
}
</script>

<template>
    <div class="about-container">
        <div class="about-container__about-me">
            <div class="about-container__about-me__title">
                <h2>{{ about.aboutMeHeading }}</h2>
            </div>
            <div class="about-container__about-me__content">
                <div class="about-container__about-me__content__image-container">
                    <img src="@/assets/images/tobiasweinlich.jpg" alt="Tobias Weinlich" class="image">
                    <div class="about-container__about-me__content__image-container__image-overlay"></div>
                </div>
                <div class="about-container__about-me__content__text">
                    <p>
                        {{ section1 }}
                    </p>
                    <p>
                        {{ section2 }}
                    </p>
                    <p>
                        {{ section3 }}
                    </p>
                </div>
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

        <AboutPosition />
    </div>
</template>

<style lang="scss" scoped>
.about-container {
    height: 100%;
    position: absolute;
    display: flex;
    gap: 10rem;
    flex-direction: column;
    padding: 4vw;
    box-sizing: border-box;
    overflow-y: auto;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    &__about-me {
        display: flex;
        flex-direction: column;
        gap: 5vh;

        &__title {
            font-size: 2.2vw;
            font-weight: 600;
            color: var(--secondary-color);
        }

        &__content {
            font-size: 1.3vw;
            font-weight: 400;
            color: var(--secondary-color);
            line-height: 1.7vw;
            text-align: justify;

            &__image-container {
                position: relative;
                float: right;
                margin: 0 0 1rem 1rem;
                
                .image {
                    width: 15vw;
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
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
        
        &__title {
            font-size: 2.2vw;
            font-weight: 600;
            color: var(--secondary-color);
        }
    }
    
    &__my-education {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 2rem;

        &__title {
            font-size: 2.2vw;
            font-weight: 600;
            color: var(--secondary-color);
        }
    }
}

//screen width < 768px
@media screen and (max-width: 768px), screen and (max-height: 600px) {
    .about-container {
        gap: 3rem;
        padding: 4vh 2vw;
        width: 100dvw;
        height: 100dvh;
        overflow-y: auto;
        overflow-x: hidden;

        &__about-me {
            gap: 1rem;

            &__title {
                font-size: 4vw;
                text-align: center;
            }

            &__content {
                display: flex;
                flex-direction: column-reverse;
                justify-content: center;
                align-items: center;
                gap: 1rem;
                
                &__text {
                    font-size: 2.5vw;
                    line-height: 3.5vw;
                    padding: 0 1rem;
                }

                &__image-container {
                    margin: 0 0 1rem 1rem;
                    
                    .image {
                        width: 20vw;
                        height: auto;
                    }
                }
            }
        }
        
        &__my-work-experience {
            &__title {
                font-size: 4vw;
            }
        }
        
        &__my-education {
            &__title {
                font-size: 4vw;
            }
        }
    }
}

@media screen and (max-height: 600px) {
    .about-container {
        gap: 3rem;
        padding: 4vh 2vw;
        width: 100dvw;
        height: 100dvh;
        overflow-y: auto;
        overflow-x: hidden;

        &__about-me {
            gap: 1rem;

            &__title {
                font-size: 8vh;
                text-align: center;
            }

            &__content {
                display: flex;
                flex-direction: column-reverse;
                justify-content: center;
                align-items: center;
                gap: 1rem;
                
                &__text {
                    font-size: 4vh;
                    line-height: 6vh;
                    padding: 0 1rem;
                }

                &__image-container {
                    margin: 0 0 1rem 1rem;
                    
                    .image {
                        width: 20vw;
                        height: auto;
                    }
                }
            }
        }
        
        &__my-work-experience {
            &__title {
                font-size: 4vw;
            }
        }
        
        &__my-education {
            &__title {
                font-size: 4vw;
            }
        }
    }
}
</style>