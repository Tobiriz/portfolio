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
                    date: 'September 2021 - October 2022',
                    duration: '1 year 2 months',
                    title: 'Working Student in Sales',
                    company: 'LIDL Vertriebs-GmbH & Co. KG',
                    location: 'Braunschweig, Germany',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
                },
                {
                    id: 2,
                    date: 'July 2015 - September 2018',
                    duration: '3 years 3 months',
                    title: 'Service Technician',
                    company: 'TELCAT Multicom GmbH',
                    location: 'Peine, Germany',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
                },
                {
                    id: 3,
                    date: 'September 2012 - July 2015',
                    duration: '2 years 11 months',
                    title: 'Electronics Technician Trainee',
                    company: 'R.PAPE GmbH',
                    location: 'Braunschweig, Germany',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
                }
            ],
            schools: [
                {
                    id: 1,
                    date: 'March 2022 - Present',
                    duration: '',
                    title: 'Electrical Engineering and\nInformation Technology',
                    school: 'Ostfalia University of Applied Sciences',
                    location: 'Wolfenbüttel, Germany'
                },
                {
                    id: 2,
                    date: 'October 2019 - February 2022',
                    duration: '2 years 5 months',
                    title: 'Mechanical Engineering',
                    school: 'Technical University of Braunshweig',
                    location: 'Braunshweig, Germany'
                },
                {
                    id: 3,
                    date: 'October 2018 - September 2019',
                    duration: '1 year',
                    title: 'Physics',
                    school: 'Technical University of Braunshweig',
                    location: 'Braunshweig, Germany'
                },
                {
                    id: 4,
                    date: 'September 2012 - July 2015',
                    duration: '2 years 11 months',
                    title: 'Electronics Technician Trainee',
                    school: 'BBS-ME Otto-Brenner-Schule\nVocational School for Metal Technology and Electrical Engineering',
                    location: 'Hannover, Germany'
                },
                {
                    id: 5,
                    date: 'August 2011 - August 2012',
                    duration: '1 year',
                    title: 'High School',
                    school: 'BBS3 Otto-Bennemann-Schule\nVocational School for Business and Administration',
                    location: 'Braunschweig, Germany'
                },
                {
                    id: 6,
                    date: 'July 2011',
                    title: 'Secondary School',
                    school: 'Realschule Maschstraße',
                    location: 'Braunschweig, Germany'
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
            color: #ccc;
        }

        &__content {
            font-size: 1.5rem;
            font-weight: 400;
            color: #ddd;
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
            color: #ccc;
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
            color: #ccc;
        }
    }
}
</style>