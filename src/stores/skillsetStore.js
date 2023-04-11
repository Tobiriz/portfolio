import { defineStore } from "pinia";
import { useSettingsStore } from "./settingsStore";

export const useSkillsetStore = defineStore("SkillsetStore", {
  state: () => {
    return {
      settings: useSettingsStore(),

      en: {
        viewName: "Skills",

        skillset: [
          {
            title: "Hypertext Markup Language",
            content:
              "Ich habe meine HTML-Fähigkeiten durch Selbststudium und praktische Erfahrung in der Webentwicklung verbessert und kann komplexe Strukturen erstellen und pflegen, um attraktive und benutzerfreundliche Websites zu entwickeln.",
          },
          {
            title: "Cascading Style Sheets and Design",
            content:
              "During my time as a service technician, I worked on the installation of security systems and developed a flair for aesthetics and design. I also like to use these skills to make websites and user interfaces appealing and intuitive.",
          },
          {
            title: "JavaScript and Vue.js",
            content:
              "My academic education has provided me with extensive knowledge in mathematical concepts and algorithms that enable me to tackle complex web development challenges. Together with my practical experience in JavaScript and Vue.js, I am able to develop innovative and effective solutions that meet clients' requirements.",
          },
          {
            title: "Java",
            content:
              "In Java development, I have a solid understanding of developing object-oriented applications. I have acquired these skills through both my computer science studies and intensive self-study.",
          },
          {
            title: "Teamwork",
            content:
              "As a former service engineer, I gained valuable experience in collaboration and teamwork by working in a dynamic and multidisciplinary environment. This experience has taught me how important effective teamwork is for the success of a project.",
          },
          {
            title: "Project and Time management",
            content:
              "While working as a service technician, I gained valuable experience in project and time management. I am able to effectively plan and organize projects to ensure they are completed on time.",
          },
          {
            title: "Technical Understanding and Abstraction Capability",
            content:
              "Through my training as an electronics technician and my academic career, I was able to acquire a profound technical understanding and a high level of abstraction. These skills have helped me to understand complex technical contexts and to develop precise solutions to technical challenges.",
          },
          {
            title: "Analytical Thinking and Problem-Solving",
            content:
              "In my professional and academic career, I have acquired strong analytical thinking and problem-solving skills. As an experienced electronics technician and service technician in the security industry, I have been able to demonstrate my skills and respond quickly to challenges to find efficient solutions.",
          },
          {
            title: "Critical and Logical Thinking",
            content:
              "My diverse background has allowed me to hone my critical and logical thinking skills. I am able to analyze complex problems and develop creative solutions by carefully gathering data and logically building on it.",
          },
          {
            title: "Mathematics",
            content:
              "In my studies with different mathematical profiles, I was able to broaden and deepen my understanding and skills in mathematics. I am able to analyze complex mathematical problems and develop solutions at a high level.",
          },
        ],
      },

      de: {
        viewName: "Skills",

        skillset: [
          {
            title: "Hypertext Markup Language",
            content:
              "Ich habe meine HTML-Fähigkeiten durch Selbststudium und praktische Erfahrung in der Webentwicklung verbessert und kann komplexe Strukturen erstellen und pflegen, um attraktive und benutzerfreundliche Websites zu entwickeln.",
          },
          {
            title: "Cascading Style Sheets und Design",
            content:
            "Während meiner Zeit als Servicetechniker habe ich an der Installation von Sicherheitssystemen mitgearbeitet und dabei ein Gespür für Ästhetik und Design entwickelt. Diese Fähigkeiten setze ich auch gerne ein, um Webseiten und Benutzeroberflächen ansprechend und intuitiv zu gestalten.",
          },
          {
            title: "JavaScript und Vue.js",
            content:
            "Meine akademische Ausbildung hat mir umfassende Kenntnisse in mathematischen Konzepten und Algorithmen vermittelt, die es mir ermöglichen, komplexe Herausforderungen im Bereich der Webentwicklung zu meistern. Zusammen mit meiner praktischen Erfahrung in JavaScript und Vue.js bin ich in der Lage, innovative und effektive Lösungen zu entwickeln, die den Anforderungen der Kunden entsprechen.",
          },
          {
            title: "Java",
            content:
              "In der Java-Entwicklung verfüge ich über ein solides Verständis für die Entwicklung von objektorientierten Anwendungen. Diese Fähigkeiten habe ich sowohl durch mein Informtikstudium als auch durch intensives Selbststudium erworben.",
          },
          {
            title: "Teamwork",
            content:
              "Als ehemaliger Servicetechniker habe ich durch die Arbeit in einem dynamischen und multidisziplinären Umfeld wertvolle Erfahrungen in Zusammenarbeit und Teamwork gesammelt. Diese Erfahrung hat mich gelehrt, wie wichtig effektive Teamarbeit für den Erfolg eines Projekts ist.",
          },
          {
            title: "Projekt- und Zeitmanagement",
            content:
              "Während meiner Arbeit als Servicetechniker konnte ich wertvolle Erfahrungen im Projekt- und Zeitmanagement sammeln. Ich bin in der Lage, Projekte effektiv zu planen und zu organisieren, um sicherzustellen, dass sie termingerecht abgeschlossen werden können.",
          },
          {
            title: "Technisches Verständnis und Abstraktionsvermögen",
            content:
              "Durch meine Ausbildung als Elektroniker und meine akademische Laufbahn konnte ich ein tiefgreifendes technisches Verständnis und ein hohes Abstraktionsvermögen erwerben. Diese Fähigkeiten haben mir geholfen, komplexe technische Zusammenhänge zu verstehen und präzise Lösungen für technische Herausforderungen zu entwickeln.",
          },
          {
            title: "Analytisches Denken und Problemlösung",
            content:
              "In meiner beruflichen und akademischen Laufbahn habe ich ein stark ausgeprägtes analytisches Denkvermögen und die Fähigkeit zur Problemlösung erworben. Als erfahrener Elektroniker und Servicetechniker in der Sicherheitsbranche konnte ich meine Fähigkeiten unter Beweis stellen und schnell auf Herausforderungen reagieren, um effiziente Lösungen zu finden.",
          },
          {
            title: "Kritisches und logisches Denken",
            content:
              "Durch meinen vielseitigen Werdegang konnte ich meine Fähigkeiten im kritischen und logischen Denken schärfen. Ich bin in der Lage, komplexe Probleme zu analysieren und kreative Lösungen zu entwickeln, indem ich sorgfältig Daten sammle und logisch darauf aufbaue.",
          },
          {
            title: "Mathematik",
            content:
              "In meinen Studien mit unterschiedlichen mathematischen Profilen konnte ich mein Verständnis und meine Fähigkeiten in Mathematik erweitern und vertiefen. Ich bin in der Lage, komplexe mathematische Probleme zu analysieren und Lösungen auf hohem Niveau zu entwickeln.",
          },
        ],
      },
    };
  },

  getters: {
    viewName() {
      if (this.settings.languageEnglish) {
        return this.en.viewName;
      } else if (this.settings.languageGerman) {
        return this.de.viewName;
      }
    },

    skillset() {
      if (this.settings.languageEnglish) {
        return this.en.skillset;
      } else if (this.settings.languageGerman) {
        return this.de.skillset;
      }
    },
  },
});
