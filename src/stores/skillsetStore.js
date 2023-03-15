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
              "I have extensive knowledge of HTML and can use it to create professional, dynamic websites with complex structures and interactions.",
          },
          {
            title: "Cascading Style Sheets",
            content:
              "CSS allows me to customize the look of my web pages and give them a responsive design.",
          },
          {
            title: "JavaScript",
            content:
              "I can use JavaScript to create interactive elements on web pages and program complex functions.",
          },
          {
            title: "Vue.js",
            content:
              "I have experience with the Vue.js framework and can use it to develop modern, scalable web applications.",
          },
          {
            title: "Java",
            content:
              "As a programming language, I am proficient in Java and can use it to develop robust, cross-platform applications.",
          },
          {
            title: "Problem Solving",
            content:
              "I have a knack for identifying problems and developing creative solutions.",
          },
          {
            title: "Technical Understanding",
            content:
              "I have a deep understanding of technical concepts and can quickly learn new technologies.",
          },
          {
            title: "Curiosity",
            content:
              "I am always curious about new technologies and trends and constantly strive to expand my knowledge.",
          },
          {
            title: "Teamwork",
            content:
              "I enjoy working in teams and can quickly adapt to different work styles and personalities.",
          },
          {
            title: "Communication",
            content:
              "I have excellent communication skills and can explain complex technical concepts in a clear and concise manner.",
          },
          {
            title: "Time Management",
            content:
              "I am very good at using my time effectively and prioritizing to complete projects on time.",
          },
          {
            title: "Creativity",
            content:
              "I am very creative and can develop innovative solutions that go beyond the scope of traditional ways of thinking.",
          },
          {
            title: "Customer Service",
            content:
              "I am experienced in customer service and can respond to customer needs in a friendly and effective manner.",
          },
          {
            title: "Languages",
            content:
              "Besides my mother tongue German, I speak fluent English and can therefore successfully communicate with clients and colleagues from different countries and cultures.",
          },
          {
            title: "Empathy",
            content:
              "I have the ability to empathize with others and understand their perspectives and needs in order to communicate and work effectively.",
          },
          {
            title: "Agility",
            content:
              "I am flexible and adaptable and can therefore react quickly to changing requirements and conditions.",
          },
          {
            title: "Analytical Thinking",
            content:
              "I am able to gather, analyze, and interpret complex information to make informed decisions.",
          },
        ],
      },

      de: {
        viewName: "Skills",

        skillset: [
          {
            title: "Hypertext Markup Language",
            content:
              "Ich habe umfangreiche Kenntnisse in HTML und kann damit professionelle, dynamische Webseiten mit komplexen Strukturen und Interaktionen erstellen.",
          },
          {
            title: "Cascading Style Sheets",
            content:
              "Mit CSS kann ich das Aussehen meiner Webseiten anpassen und ihnen ein ansprechendes Design verleihen.",
          },
          {
            title: "JavaScript",
            content:
              "Ich kann mit JavaScript interaktive Elemente auf Webseiten erstellen und komplexe Funktionen programmieren.",
          },
          {
            title: "Vue.js",
            content:
              "Ich habe Erfahrung mit dem Framework Vue.js und kann damit moderne, skalierbare Webanwendungen entwickeln.",
          },
          {
            title: "Java",
            content:
              "Als Programmiersprache beherrsche ich Java und kann damit robuste, plattformübergreifende Anwendungen entwickeln.",
          },
          {
            title: "Problemlösung",
            content:
              "Ich habe ein Talent für die Identifizierung von Problemen und das Entwickeln von kreativen Lösungen.",
          },
          {
            title: "Technisches Verständnis",
            content:
              "Ich habe ein tiefes Verständnis für technische Konzepte und kann mich schnell in neue Technologien einarbeiten.",
          },
          {
            title: "Neugierde",
            content:
              "Ich bin immer neugierig auf neue Technologien und Trends und bemühe mich ständig, mein Wissen zu erweitern.",
          },
          {
            title: "Teamwork",
            content:
              "Ich arbeite gerne in Teams und kann mich schnell an unterschiedliche Arbeitsstile und Persönlichkeiten anpassen.",
          },
          {
            title: "Kommunikation",
            content:
              "Ich verfüge über ausgezeichnete kommunikative Fähigkeiten und kann komplexe technische Konzepte verständlich und präzise erklären.",
          },
          {
            title: "Zeitmanagement",
            content:
              "Ich bin sehr gut darin, meine Zeit effektiv zu nutzen und Prioritäten zu setzen, um Projekte termingerecht abzuschließen.",
          },
          {
            title: "Kreativität",
            content:
              "Ich bin sehr kreativ und kann innovative Lösungen entwickeln, die über den Rahmen traditioneller Denkweisen hinausgehen.",
          },
          {
            title: "Kundenservice",
            content:
              "Ich bin erfahren im Kundenservice und kann freundlich und effektiv auf die Bedürfnisse von Kunden eingehen.",
          },
          {
            title: "Sprachen",
            content:
              "Neben meiner Mutterspruche Deutsch, spreche ich fließend English und kann damit erfolgreich mit Kunden und Kollegen aus verschiedenen Ländern und Kulturen kommunizieren.",
          },
          {
            title: "Empathie",
            content:
              "Ich habe die Fähigkeit, mich in andere hineinzuversetzen und ihre Perspektiven und Bedürfnisse zu verstehen, um effektiv zu kommunizieren und zu arbeiten.",
          },
          {
            title: "Agilität",
            content:
              "Ich bin flexibel und anpassungsfähig und kann damit schnell auf sich ändernde Anforderungen und Bedingungen reagieren.",
          },
          {
            title: "Analytisches Denken",
            content:
              "Ich bin in der Lage, komplexe Informationen zu sammeln, zu analysieren und zu interpretieren, um fundierte Entscheidungen zu treffen.",
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
