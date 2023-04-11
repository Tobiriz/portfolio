import { defineStore } from "pinia";
import { useSettingsStore } from "./settingsStore";

export const useAboutStore = defineStore("AboutStore", {
  state: () => ({
    settings: useSettingsStore(),
    en: {
      viewName: "About",
      aboutMeHeading: "Tobias Weinlich",
      myWorkExperienceHeading: "My Work Experience",
      myEducationHeading: "My Education",
      aboutMeContent: {
        section1:
          "As a passionate electronics engineer with versatile studies in physics, mechanical engineering and electrical and information technology, I bring a wide range of skills to the table. My enthusiasm for technical innovation led me to software development, where I gained knowledge in HTML, CSS, JavaScript, Vue.js and Java. With strong analytical thinking and experience in time and project management, I am always ready to take on new challenges.",
        section2:
          "If you have any questions about me or my career, please do not hesitate to contact me. You can find contact information on the corresponding page.",
        section3:
          "",
      },
      jobs: [
        {
          id: 1,
          date: "September 2021 - October 2022",
          duration: "1 year 2 months",
          title: "Working Student in Sales",
          company: "LIDL Vertriebs-GmbH & Co. KG",
          location: "Braunschweig, Germany",
          description:
            "As a working student, I worked in retail during my studies, mainly performing cashiering duties. In this position, I developed my skills in dealing with customers and learned how to work effectively in a fast-paced retail environment. In addition, I helped keep the store neat and organized when sorting merchandise.",
        },
        {
          id: 2,
          date: "July 2015 - September 2018",
          duration: "3 years 3 months",
          title: "Service Technician",
          company: "TELCAT Multicom GmbH",
          location: "Peine, Germany",
          description:
            "In my role as a service technician in the field of security and communications technology, I worked for a subsidiary of Salzgitter AG. During this time, I served a wide range of customers, from private households to large corporations. My duties included the installation, commissioning, maintenance and repair of security systems such as intrusion detection systems, fire alarm systems and video surveillance systems. This position allowed me to improve my technical skills and understanding of complex technical systems. In addition, I developed my communication skills by interacting with customers to understand their needs and provide solutions.",
        },
        {
          id: 3,
          date: "September 2012 - July 2015",
          duration: "2 years 11 months",
          title: "Electronics Technician Trainee",
          company: "R.PAPE GmbH",
          location: "Braunschweig, Germany",
          description:
            "I successfully completed a 3.5-year apprenticeship as an electronics technician for information and telecommunications technology, even six months ahead of schedule. During this training, I acquired comprehensive knowledge in the areas of telecommunications, IT networks and electronics and successfully applied these skills in numerous projects. During my training, I also learned how to work effectively in a team and improve my problem-solving skills. These experiences have given me a solid foundation for my career in the electronics industry.",
        },
      ],
      schools: [
        {
          id: 1,
          date: "March 2022 - Present",
          duration: "",
          title: "Electrical Engineering and\nInformation Technology",
          school: "Ostfalia University of Applied Sciences",
          location: "Wolfenbüttel, Germany",
        },
        {
          id: 2,
          date: "October 2018 - February 2022",
          duration: "3 years 5 months",
          title: "Physics / Mechanical Engineering",
          school: "Technical University of Braunshweig",
          location: "Braunschweig, Germany",
        },
        {
          id: 4,
          date: "September 2012 - July 2015",
          duration: "2 years 11 months",
          title: "Electronics Technician Trainee",
          school:
            "BBS-ME Otto-Brenner-Schule\nVocational School for Metal Technology and Electrical Engineering",
          location: "Hannover, Germany",
        },
        {
          id: 5,
          date: "August 2011 - August 2012",
          duration: "1 year",
          title: "Vocational school",
          school:
            "BBS3 Otto-Bennemann-Schule\nVocational School for Business and Administration",
          location: "Braunschweig, Germany",
        },
        {
          id: 6,
          date: "July 2011",
          title: "Extended Secondary Certificate I",
          school: "Realschule Maschstraße",
          location: "Braunschweig, Germany",
        },
      ],
    },

    de: {
      viewName: "Über mich",
      aboutMeHeading: "Tobias Weinlich",
      myWorkExperienceHeading: "Meine Berufserfahrung",
      myEducationHeading: "Meine Ausbildung",
      aboutMeContent: {
        section1:
          "Als passionierter Elektroniker mit einem vielseitigen Studium in Physik, Maschinenbau und Elektro- und Informationstechnik bringe ich eine breite Palette an Fähigkeiten mit. Meine Begeisterung für technische Innovationen führte mich zur Softwareentwicklung, wo ich Kenntnisse in HTML, CSS, JavaScript, Vue.js und Java erlangte. Mit starkem analytischem Denken und Erfahrung im Zeit- und Projektmanagement bin ich stets bereit, mich neuen Herausforderungen zu stellen.",
        section2:
          "Bei Fragen zu meiner Person oder meinem Werdegang stehe ich Ihnen gerne zur Verfügung. Kontaktinformationen finden Sie auf der entsprechenden Seite.",
        section3:
          "",
      },
      jobs: [
        {
          id: 1,
          date: "September 2021 - Oktober 2022",
          duration: "1 Jahr 2 Monate",
          title: "Werkstudent im Vertrieb",
          company: "LIDL Vertriebs-GmbH & Co. KG",
          location: "Braunschweig, Deutschland",
          description:
            "Als Werkstudent habe ich während meines Studiums im Einzelhandel gearbeitet, wo ich hauptsächlich Kassiertätigkeiten nachkam. In dieser Position habe ich meine Fähigkeiten im Umgang mit Kunden weiterentwickelt und gelernt, wie man effektiv in einem schnelllebigen Einzelhandelsumfeld arbeitet. Darüber hinaus habe ich beim einsortieren der Ware dazu beigetragen, dass das Geschäft ordentlich und übersichtlich bleibt.",
        },
        {
          id: 2,
          date: "Juli 2015 - September 2018",
          duration: "3 Jahre 3 Monate",
          title: "Servicetechniker",
          company: "TELCAT Multicom GmbH",
          location: "Peine, Deutschland",
          description:
            "In meiner Rolle als Servicetechniker im Bereich der Sicherheits- und Nachrichtentechnik habe ich bei einer Tochtergesellschaft der Salzgitter AG gearbeitet. Während dieser Zeit habe ich ein breites Spektrum an Kunden betreut, von privaten Haushalten bis hin zu großen Konzernen. Zu meinen Aufgaben gehörte die Installation, Inbetriebnahme, Wartung und Reparatur von Sicherheitssystemen wie Einbruchmeldeanlagen, Brandmeldeanlagen und Videoüberwachungssystemen. In dieser Position konnte ich meine technischen Fähigkeiten und mein Verständnis für komplexe technische Systeme verbessern. Darüber hinaus habe ich meine Kommunikationsfähigkeiten weiterentwickelt, indem ich mit Kunden interagiert habe, um ihre Bedürfnisse zu verstehen und Lösungen anzubieten.",
        },
        {
          id: 3,
          date: "September 2012 - Juli 2015",
          duration: "2 Jahre 11 Monate",
          title: "Auszubildenender Elektroniker",
          company: "R.PAPE GmbH",
          location: "Braunschweig, Deutschland",
          description:
            "Ich habe eine 3,5-jährige Ausbildung zum Elektroniker für Informations- und Telekommunikationstechnik erfolgreich abgeschlossen, und das sogar ein halbes Jahr früher als geplant. In dieser Ausbildung habe ich umfassende Kenntnisse in den Bereichen Telekommunikation, IT-Netzwerke und Elektronik erworben und diese Fähigkeiten in zahlreichen Projekten erfolgreich angewendet. Während meiner Ausbildung habe ich auch gelernt, effektiv in einem Team zu arbeiten und meine Fähigkeit zur Problemlösung zu verbessern. Diese Erfahrungen haben mir eine solide Grundlage für meine Karriere in der Elektronikbranche gegeben.",
        },
      ],
      schools: [
        {
          id: 1,
          date: "März 2022 - Heute",
          duration: "",
          title: "Elektro- und Informationstechnik",
          school: "Ostfalia Hochschule für angewandte Wissenschaften",
          location: "Wolfenbüttel, Deutschland",
        },
        {
          id: 2,
          date: "Oktober 2018 - Februar 2022",
          duration: "3 Jahre 5 Monate",
          title: "Physik / Maschinenbau",
          school: "Technische Universität Braunschweig",
          location: "Braunshweig, Deutschland",
        },
        {
          id: 4,
          date: "September 2012 - Juli 2015",
          duration: "2 Jahre 11 Monate",
          title: "Auszubildender Elektroniker",
          school:
            "BBS-ME Otto-Brenner-Schule\nBerufsbildende Schule für Metalltechnik und Elektrotechnik",
          location: "Hannover, Deutschland",
        },
        {
          id: 5,
          date: "August 2011 - August 2012",
          duration: "1 Jahr",
          title: "Berufsbildende Schule",
          school:
            "BBS3 Otto-Bennemann-Schule\nBerufsbildende Schule für Wirtschaft und Verwaltung",
          location: "Braunschweig, Deutschland",
        },
        {
          id: 6,
          date: "Juli 2011",
          title: "Erweiterter Sekundarabschluss I",
          school: "Realschule Maschstraße",
          location: "Braunschweig, Deutschland",
        },
      ],
    },
  }),

  getters: {
    viewName() {
      if (this.settings.languageEnglish) {
        return this.en.viewName;
      } else if (this.settings.languageGerman) {
        return this.de.viewName;
      }
    },
    aboutMeHeading() {
      if (this.settings.languageEnglish) {
        return this.en.aboutMeHeading;
      } else if (this.settings.languageGerman) {
        return this.de.aboutMeHeading;
      }
    },
    myWorkExperienceHeading() {
      if (this.settings.languageEnglish) {
        return this.en.myWorkExperienceHeading;
      } else if (this.settings.languageGerman) {
        return this.de.myWorkExperienceHeading;
      }
    },
    myEducationHeading() {
      if (this.settings.languageEnglish) {
        return this.en.myEducationHeading;
      } else if (this.settings.languageGerman) {
        return this.de.myEducationHeading;
      }
    },
    aboutMeContent() {
      if (this.settings.languageEnglish) {
        return this.en.aboutMeContent;
      } else if (this.settings.languageGerman) {
        return this.de.aboutMeContent;
      }
    },
    jobs() {
      if (this.settings.languageEnglish) {
        return this.en.jobs;
      } else if (this.settings.languageGerman) {
        return this.de.jobs;
      }
    },
    schools() {
      if (this.settings.languageEnglish) {
        return this.en.schools;
      } else if (this.settings.languageGerman) {
        return this.de.schools;
      }
    },
  },
});
