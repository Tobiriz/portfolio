import { defineStore } from 'pinia'
import { useSettingsStore } from './settingsStore'

export const useAboutStore = defineStore('AboutStore', {
    state: () => ({
        settings: useSettingsStore(),
        en: {
            viewName: 'About',
            canvas: {
                me: 'Me',
                experience: 'Experience',
                education: 'Education',
            },
            aboutMeHeading: 'About Me',
            myWorkExperienceHeading: 'My Work Experience',
            myEducationHeading: 'My Education',
            aboutMeContent: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt "
                + "ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "
                + "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, "
                + "consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
                + "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum "
                + "dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et "
                + "dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, "
                + "no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse "
                + "molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit "
                + "praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, "
                + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud "
                + "exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse",
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
                },
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
                    title: 'Vocational school',
                    school: 'BBS3 Otto-Bennemann-Schule\nVocational School for Business and Administration',
                    location: 'Braunschweig, Germany'
                },
                {
                    id: 6,
                    date: 'July 2011',
                    title: 'Extended Secondary Certificate I',
                    school: 'Realschule Maschstraße',
                    location: 'Braunschweig, Germany'
                }
            ]
        },

        de: {
            viewName: 'Über',
            canvas: {
                me: 'Mich',
                experience: 'Erfahrung',
                education: 'Ausbildung',
            },
            aboutMeHeading: 'Über Mich',
            myWorkExperienceHeading: 'Meine Berufserfahrung',
            myEducationHeading: 'Meine Ausbildung',
            aboutMeContent: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt "
                + "ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "
                + "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, "
                + "consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
                + "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum "
                + "dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et "
                + "dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, "
                + "no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse "
                + "molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit "
                + "praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, "
                + "sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud "
                + "exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse",
            jobs: [
                {
                    id: 1,
                    date: 'September 2021 - Oktober 2022',
                    duration: '1 Jahr 2 Monate',
                    title: 'Werkstudent im Vertrieb',
                    company: 'LIDL Vertriebs-GmbH & Co. KG',
                    location: 'Braunschweig, Deutschland',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
                },
                {
                    id: 2,
                    date: 'Juli 2015 - September 2018',
                    duration: '3 Jahre 3 Monate',
                    title: 'Servicetechniker',
                    company: 'TELCAT Multicom GmbH',
                    location: 'Peine, Deutschland',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
                },
                {
                    id: 3,
                    date: 'September 2012 - Juli 2015',
                    duration: '2 Jahre 11 Monate',
                    title: 'Auszubildenender Elektroniker',
                    company: 'R.PAPE GmbH',
                    location: 'Braunschweig, Deutschland',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
                },
            ],
            schools: [
                {
                    id: 1,
                    date: 'März 2022 - Heute',
                    duration: '',
                    title: 'Elektro- und Informationstechnik',
                    school: 'Ostfalia Hochschule für angewandte Wissenschaften',
                    location: 'Wolfenbüttel, Deutschland'
                },
                {
                    id: 2,
                    date: 'Oktober 2019 - Februar 2022',
                    duration: '2 Jahre 5 Monate',
                    title: 'Maschinenbau',
                    school: 'Technische Universität Braunschweig',
                    location: 'Braunshweig, Deutschland'
                },
                {
                    id: 3,
                    date: 'Oktober 2018 - September 2019',
                    duration: '1 Jahr',
                    title: 'Physik',
                    school: 'Technische Universität Braunschweig',
                    location: 'Braunshweig, Deutschland'
                },
                {
                    id: 4,
                    date: 'September 2012 - Juli 2015',
                    duration: '2 Jahre 11 Monate',
                    title: 'Auszubildender Elektroniker',
                    school: 'BBS-ME Otto-Brenner-Schule\nBerufsbildende Schule für Metalltechnik und Elektrotechnik',
                    location: 'Hannover, Deutschland'
                },
                {
                    id: 5,
                    date: 'August 2011 - August 2012',
                    duration: '1 Jahr',
                    title: 'Berufsbildende Schule',
                    school: 'BBS3 Otto-Bennemann-Schule\nBerufsbildende Schule für Wirtschaft und Verwaltung',
                    location: 'Braunschweig, Deutschland'
                },
                {
                    id: 6,
                    date: 'Juli 2011',
                    title: 'Erweiterter Sekundarabschluss I',
                    school: 'Realschule Maschstraße',
                    location: 'Braunschweig, Deutschland'
                }
            ]
        }
    }),

    getters: {
        viewName() {
            if (this.settings.languageEnglish) {
                return this.en.viewName
            } else if (this.settings.languageGerman) {
                return this.de.viewName
            }
        },
        canvasMe() {
            if (this.settings.languageEnglish) {
                return this.en.canvas.me
            } else if (this.settings.languageGerman) {
                return this.de.canvas.me
            }
        },
        canvasExperience() {
            if (this.settings.languageEnglish) {
                return this.en.canvas.experience
            } else if (this.settings.languageGerman) {
                return this.de.canvas.experience
            }
        },
        canvasEducation() {
            if (this.settings.languageEnglish) {
                return this.en.canvas.education
            } else if (this.settings.languageGerman) {
                return this.de.canvas.education
            }
        },
        aboutMeHeading() {
            if (this.settings.languageEnglish) {
                return this.en.aboutMeHeading
            } else if (this.settings.languageGerman) {
                return this.de.aboutMeHeading
            }
        },
        myWorkExperienceHeading() {
            if (this.settings.languageEnglish) {
                return this.en.myWorkExperienceHeading
            } else if (this.settings.languageGerman) {
                return this.de.myWorkExperienceHeading
            }
        },
        myEducationHeading() {
            if (this.settings.languageEnglish) {
                return this.en.myEducationHeading
            } else if (this.settings.languageGerman) {
                return this.de.myEducationHeading
            }
        },
        aboutMeContent() {
            if (this.settings.languageEnglish) {
                return this.en.aboutMeContent
            } else if (this.settings.languageGerman) {
                return this.de.aboutMeContent
            }
        },
        jobs() {
            if (this.settings.languageEnglish) {
                return this.en.jobs
            } else if (this.settings.languageGerman) {
                return this.de.jobs
            }
        },
        schools() {
            if (this.settings.languageEnglish) {
                return this.en.schools
            } else if (this.settings.languageGerman) {
                return this.de.schools
            }
        },
    }
})