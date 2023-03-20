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
              "I have extensive knowledge in HTML, the basic markup language for web pages. Through self-study and experience in web development, I have continuously improved my skills in HTML. I am capable of creating and maintaining complex HTML structures to develop attractive and user-friendly websites.",
          },
          {
            title: "Cascading Style Sheets and Design",
            content:
              "I have a good eye for design and can implement complex layouts using HTML and CSS. During my time as a service technician, I also assisted in the installation of security systems and developed a sense of aesthetics and design. I enjoy using these skills to create visually appealing and intuitive websites and user interfaces.",
          },
          {
            title: "JavaScript",
            content:
              "JavaScript is one of my core competencies as I have worked with it in several projects. Through my academic background, I have a deep understanding of mathematical concepts and algorithms that are relevant for working with JavaScript.",
          },
          {
            title: "Vue.js",
            content:
              "I have extensive experience in Vue.js, one of the leading JavaScript frameworks for web application development. My broad technical understanding and analytical skills enable me to understand the complex architecture of Vue.js and work with it effectively",
          },
          {
            title: "Java",
            content:
              "I have extensive experience in developing Java applications. I am able to write complex algorithms and have knowledge in working with frameworks such as Spring. My deep understanding of object-oriented programming and ability to diagnose and fix errors quickly enable me to write high-quality and reliable code.",
          },
          {
            title: "Teamwork",
            content:
              "I am a dedicated team player and have gained a lot of experience working in teams throughout my career. As a service technician for security technology, I was often part of project teams that worked together to realize complex projects. These experiences have strengthened my collaboration skills and made me a valuable team member.",
          },
          {
            title: "Version control with Git",
            content:
              "I have extensive knowledge in version control with Git, an important technology for collaboration in software development projects. My project management skills help me to work effectively with Git and ensure that all project stakeholders are up-to-date.",
          },
          {
            title: "Time management",
            content:
              "I am an experienced project manager and have extensive skills in time management. Through my work as a service technician for security technology, I have learned to effectively handle limited resources and tight schedules, which benefits me in my work as a software developer.",
          },
          {
            title: "Project management",
            content:
              "As an electronics technician for information and telecommunications technology and former service technician in the field of security technology, I have gained experience in project management. I am able to define goals, set priorities, and effectively utilize resources. I can motivate and coordinate project teams while keeping the end goal in mind. I also understand the importance of identifying and assessing risks and opportunities to ensure successful project implementation.",
          },
          {
            title: "Technical Understanding and Abstraction Capability",
            content:
              "Due to my education as an Electronics Technician for Information and Telecommunication Technology and my studies in Mechanical Engineering, Electrical Engineering, and Computer Science, I possess a profound technical understanding and abstraction capability. I am capable of comprehending complex technical situations and translating them into easily understandable language. I also have the ability to recognize abstract concepts and connections and apply them to practical applications.",
          },
          {
            title: "Analytical Thinking and Problem-Solving",
            content:
              "As an Electronics Technician and former Service Technician, I have learned to think analytically and solve problems systematically. I can break down complex problems into smaller parts, enabling me to find solutions more quickly and effectively. My ability to recognize patterns and draw logical conclusions aids me in diagnosing and solving technical problems. Additionally, when it comes to developing and implementing software solutions, I am able to take a systematic approach.",
          },
          {
            title: "Critical and Logical Thinking",
            content:
              "Through my education and studies, I have learned to think critically and logically. I can analyze complex situations and connections and draw conclusions from them. Additionally, when it comes to evaluating information and data, I can approach it critically to avoid making mistakes. My ability to understand complex situations and recognize connections also aids me in solving technical problems and developing software solutions.",
          },
          {
            title: "Mathematics",
            content:
              "Through my studies in Physics, Mechanical Engineering, and Electrical Engineering, I have acquired a solid understanding of mathematics. In school, I already enjoyed Mathematics and Computer Science and was able to demonstrate my analytical abilities in solving mathematical problems. These skills are also beneficial to me when it comes to programming and solving technical challenges.",
          },
        ],
      },

      de: {
        viewName: "Skills",

        skillset: [
          {
            title: "Hypertext Markup Language",
            content:
              "Ich habe umfangreiche Kenntnisse in HTML, der grundlegenden Auszeichnungssprache für Webseiten. Durch mein Selbststudium und meine Erfahrungen in der Entwicklung von Webseiten konnte ich meine Fähigkeiten in HTML stetig verbessern. Ich bin in der Lage, komplexe HTML-Strukturen zu erstellen und zu pflegen, um attraktive und benutzerfreundliche Webseiten zu entwickeln.",
          },
          {
            title: "Cascading Style Sheets und Design",
            content:
              "Ich habe ein gutes Auge für Design und kann komplexe Layouts mit HTML und CSS umsetzen. Während meiner Zeit als Servicetechniker habe ich auch an der Installation von Sicherheitssystemen mitgearbeitet und dabei ein Gespür für Ästhetik und Design entwickelt. Diese Fähigkeiten setze ich auch gerne ein, um Webseiten und Benutzeroberflächen ansprechend und intuitiv zu gestalten.",
          },
          {
            title: "JavaScript",
            content:
              "JavaScript ist eine meiner Kernkompetenzen, da ich bereits in mehreren Projekten damit gearbeitet habe. Durch meine akademische Laufbahn verfüge ich über ein tiefes Verständnis für mathematische Konzepte und Algorithmen, die für die Arbeit mit JavaScript relevant sind.",
          },
          {
            title: "Vue.js",
            content:
              "Ich habe umfangreiche Erfahrung in Vue.js, einem der führenden JavaScript-Frameworks für die Entwicklung von Webanwendungen. Mein breites technisches Verständnis und meine analytischen Fähigkeiten helfen mir dabei, die komplexe Architektur von Vue.js zu verstehen und effektiv damit zu arbeiten.",
          },
          {
            title: "Java",
            content:
              "Ich habe umfangreiche Erfahrung in der Entwicklung von Java-Anwendungen. Ich bin in der Lage, komplexe Algorithmen zu schreiben und habe Kenntnisse in der Arbeit mit Frameworks wie Spring. Mein tiefes Verständnis der objektorientierten Programmierung und die Fähigkeit, Fehler schnell zu diagnostizieren und zu beheben, ermöglichen es mir, qualitativ hochwertigen und zuverlässigen Code zu schreiben.",
          },
          {
            title: "Teamwork",
            content:
              "Ich bin ein engagierter Teamplayer und habe im Laufe meiner Karriere viele Erfahrungen im Team gesammelt. Als Servicetechniker für Sicherheitstechnik war ich oft Teil von Projektteams, die zusammenarbeiteten, um komplexe Projekte zu realisieren. Diese Erfahrungen haben meine Fähigkeiten im Bereich der Zusammenarbeit gestärkt und mich zu einem wertvollen Teammitglied gemacht.",
          },
          {
            title: "Versionskontrolle mit Git",
            content:
              "Ich verfüge über umfangreiche Kenntnisse in der Versionskontrolle mit Git, einer wichtigen Technologie für die Zusammenarbeit in Softwareentwicklungsprojekten. Meine Fähigkeiten im Bereich des Projektmanagements helfen mir dabei, effektiv mit Git zu arbeiten und sicherzustellen, dass alle Projektbeteiligten auf dem neuesten Stand sind.",
          },
          {
            title: "Zeitmanagement",
            content:
              "Ich bin ein erfahrener Projektmanager und verfüge über umfangreiche Fähigkeiten im Bereich des Zeitmanagements. Durch meine Arbeit als Servicetechniker für Sicherheitstechnik habe ich gelernt, effektiv mit begrenzten Ressourcen und engen Zeitplänen umzugehen, was mir in meiner Arbeit als Softwareentwickler zugutekommt.",
          },
          {
            title: "Projektmanagement",
            content:
              "Als Elektroniker für Informations- und Telekommunikationstechnik und ehemaliger Servicetechniker im Bereich der Sicherheitstechnik habe ich bereits Erfahrungen im Projektmanagement gesammelt. Ich bin in der Lage, Ziele zu definieren, Prioritäten zu setzen und Ressourcen effektiv zu nutzen. Ich kann Projektteams motivieren und koordinieren und habe dabei stets das Ziel im Blick. Ich weiß auch, wie wichtig es ist, Risiken und Chancen zu identifizieren und zu bewerten, um so die erfolgreiche Umsetzung von Projekten zu gewährleisten.",
          },
          {
            title: "Technisches Verständnis und Abstraktionsvermögen",
            content:
              "Aufgrund meiner Ausbildung als Elektroniker für Informations- und Telekommunikationstechnik sowie meines Studiums in Maschinenbau, Elektrotechnik und Informatik verfüge ich über ein ausgeprägtes technisches Verständnis und Abstraktionsvermögen. Ich bin in der Lage, komplexe technische Sachverhalte zu verstehen und in eine leicht verständliche Sprache zu übersetzen. Ich habe auch die Fähigkeit, abstrakte Konzepte und Zusammenhänge zu erkennen und diese in praktische Anwendungen umzusetzen.",
          },
          {
            title: "Analytisches Denken und Problemlösung",
            content:
              "Als Elektroniker und ehemaliger Servicetechniker habe ich gelernt, analytisch zu denken und Probleme systematisch zu lösen. Ich kann komplexe Probleme in ihre Einzelteile zerlegen und so schneller und effektiver Lösungen finden. Meine Fähigkeit, Zusammenhänge zu erkennen und logische Schlüsse zu ziehen, hilft mir bei der Diagnose und Lösung technischer Probleme. Auch bei der Entwicklung und Implementierung von Softwarelösungen bin ich in der Lage, ein systematisches Vorgehen zu wählen.",
          },
          {
            title: "Kritisches und logisches Denken",
            content:
              "Durch meine Ausbildung und Studium habe ich gelernt, kritisch und logisch zu denken. Ich kann komplexe Sachverhalte und Zusammenhänge analysieren und daraus Schlüsse ziehen. Auch bei der Beurteilung von Informationen und Daten kann ich eine kritische Herangehensweise wählen, um Fehlentscheidungen zu vermeiden. Meine Fähigkeit, komplexe Sachverhalte zu durchdringen und Zusammenhänge zu erkennen, hilft mir auch bei der Lösung von technischen Problemen und der Entwicklung von Softwarelösungen.",
          },
          {
            title: "Mathematik",
            content:
              "Durch mein Studium der Physik, Maschinenbau und Elektrotechnik habe ich ein fundiertes mathematisches Verständnis erlangt. In der Schule hatte ich bereits viel Spaß an Mathematik und Informatik und konnte meine analytischen Fähigkeiten bei der Lösung von mathematischen Problemen unter Beweis stellen. Diese Fähigkeiten kommen mir auch bei der Programmierung und der Lösung technischer Herausforderungen zugute.",
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
