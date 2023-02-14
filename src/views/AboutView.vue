<script>
import ViewName from '@/components/ViewName.vue'
import AboutPosition from '@/components/AboutPosition.vue'
import Job from '@/components/Job.vue'
import School from '@/components/School.vue'

export default {
    components: {
        ViewName,
        AboutPosition,
        Job,
        School
    },

    data() {
        return {
            jobs: [
                {
                    id: 1,
                    title: 'Frontend Developer',
                    company: 'Company 1',
                    date: '2021 - Present',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
                },
                {
                    id: 2,
                    title: 'Frontend Developer',
                    company: 'Company 2',
                    date: '2020 - 2021',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
                },
                {
                    id: 3,
                    title: 'Frontend Developer',
                    company: 'Company 3',
                    date: '2019 - 2020',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
                }
            ],
            schools: [
                {
                    id: 1,
                    title: 'School 1',
                    date: '2015 - 2019',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
                },
                {
                    id: 2,
                    title: 'School 2',
                    date: '2012 - 2015',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
                },
                {
                    id: 3,
                    title: 'School 3',
                    date: '2008 - 2012',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
                }
            ]
        }
    }
}
</script>

<template>
    <div>
        <div class="about-container">
            <div class="about-container__about-me">
                <div class="about-container__about-me__title">
                    <h2>About Me</h2>
                </div>
                <div class="about-container__about-me__content">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   
                    <br/>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   
                    <br/>
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                </div>
            </div>

            <div class="about-container__my-work-experience">
                <div class="about-container__my-work-experience__title">
                    <h2>My Work Experience</h2>
                </div>

                <Job v-for="job in jobs" :key="job.id" :job="job" />
            </div>

            <div class="about-container__my-education">
                <div class="about-container__my-education__title">
                   <h2>My Education</h2>
                </div>
                
                <School v-for="school in schools" :key="school.id" :school="school" />
            </div>
        </div>

        <ViewName>
            <template #view-name>
                About
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
    padding: 2rem;
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
            color: #fff;
        }

        &__content {
            font-size: 1.5rem;
            font-weight: 400;
            color: #fff;
        }
    }
    
    &__my-work-experience {
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 2rem;

        &__title {
            font-size: 2rem;
            font-weight: 600;
            color: #fff;
        }

        &__content {
            font-size: 1.5rem;
            font-weight: 400;
            color: #fff;
        }
    }

    &__my-education {
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        &__title {
            font-size: 2rem;
            font-weight: 600;
            color: #fff;
        }

        &__content {
            font-size: 1.5rem;
            font-weight: 400;
            color: #fff;
        }
    }
}
</style>