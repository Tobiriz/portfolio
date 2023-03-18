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
          {
            title: "Critical Thinking",
            content:
              "I can think critically and look at problems from different perspectives.",
          },
          {
            title: "Design",
            content:
              "I have a good eye for design and can create appealing, user-friendly interfaces.",
          },
          {
            title: "Project Management",
            content:
              "I have experience with project management and can plan and organize projects efficiently.",
          },
          {
            title: "Collaboration with AI",
            content:
              "I have experience working with AI tools and technologies to make data-driven decisions and solve complex problems more effectively.",
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
              "Ich bin sehr geschickt darin, Probleme zu identifizieren und kreative Lösungen zu entwickeln. "
              + "Ich arbeite jedoch auch daran, meine Fähigkeiten zur Datenaufnahme, Ursachenanalyse und Implementierung von Lösungen zu verbessern. "
              + "Problemlösung ist ein iterativer Prozess, und ich bin bereit, mich anzupassen und flexibel zu sein, um die bestmögliche Lösung zu finden.",
          },
          {
            title: "Technisches Verständnis",
            content:
              "Mein technisches Verständnis zeichnet sich durch meine Fähigkeit aus, technische Probleme zu identifizieren, "
              +"zu analysieren und kreative Lösungen zu entwickeln. Ich besitze Fähigkeiten im kritischen Denken und Problemlösung, "
              + "die es mir ermöglichen, Daten zu sammeln und Ursachenanalysen durchzuführen, um die bestmögliche Lösung zu finden.",
          },
          {
            title: "Neugierde",
            content:
              "Meine Neugierde ist eine wertvolle Eigenschaft, die mich antreibt, die Welt um mich herum zu erkunden und zu verstehen. "
              +"Ich stelle gerne Fragen und sammle Wissen, und probiere auch gerne neue Dinge aus, um mich weiterzuentwickeln. "
              + "Durch meine Neugierde konnte ich meine Fähigkeiten verbessern und meine Perspektive in vielen Bereichen des Lebens erweitern.",
          },
          {
            title: "Teamwork",
            content:
              "Ich kann effektiv mit anderen zusammenarbeiten, um gemeinsame Ziele zu erreichen. Ich kommuniziere klar und kooperiere gut mit anderen, "
              + "um sicherzustellen, dass wir aufeinander abgestimmt arbeiten. Ich bin auch bereit, Feedback zu geben und anzunehmen sowie Konflikte konstruktiv zu lösen. "
              + "Durch mein effektives Teamwork können wir unsere vielfältigen Perspektiven und Fähigkeiten kombinieren, um die bestmöglichen Ergebnisse zu erzielen.",
          },
          {
            title: "Kommunikation",
            content:
              "Ich verfüge über ausgezeichnete kommunikative Fähigkeiten und kann meine Gedanken und Ideen klar und präzise vermitteln. "
              + "Ich höre anderen aktiv zu und kann komplexe Konzepte in einfache, leicht verständliche Sprache übersetzen, "
              + "um sicherzustellen, dass alle Beteiligten auf derselben Seite sind.",
          },
          {
            title: "Zeitmanagement",
            content:
              "Ich plane meine Arbeit im Voraus und nutze meine Zeit effizient, um sicherzustellen, "
              + "dass ich meine Aufgaben rechtzeitig und qualitativ hochwertig erledige. Durch meine Fähigkeiten im Zeitmanagement kann "
              + "ich produktiv bleiben und meine Ziele erfolgreich erreichen.",
          },
          {
            title: "Kreativität",
            content:
              "Ich bin sehr kreativ und kann innovative Lösungen entwickeln, die über den Rahmen traditioneller Denkweisen hinausgehen.",
          },
          {
            title: "Kundenservice",
            content:
              "Ich bin kreativ und habe ein Talent dafür, innovative Lösungen zu finden und neue Ideen zu generieren. "
              + "Meine Neugier und Offenheit für neue Erfahrungen fördern meine Kreativität und ermöglichen es mir, "
              + "Grenzen zu überschreiten. Ich nutze meine Fähigkeiten in verschiedenen Bereichen und verbessere meine Fähigkeiten durch meine Kreativität.",
          },
          {
            title: "Sprachen",
            content:
              "Neben meiner Mutterspruche Deutsch, spreche ich fließend English und kann damit erfolgreich mit Kunden und Kollegen aus verschiedenen Ländern und Kulturen kommunizieren.",
          },
          {
            title: "Empathie",
            content:
              "Ich bin empathisch und einfühlsam und kann mich gut in die Gefühle und Bedürfnisse anderer hineinversetzen. "
              + "Ich höre aktiv zu und bemühe mich, die Perspektive anderer zu verstehen, um eine erfolgreiche Zusammenarbeit zu fördern. "
              + "Durch meine Fähigkeiten in Empathie kann ich gute Beziehungen aufbauen und ein positives Arbeitsumfeld schaffen.",
          },
          {
            title: "Agilität",
            content:
              "Ich bin agil und kann mich schnell an veränderte Umstände und Anforderungen anpassen. "
              + "Ich arbeite gut unter Druck und kann auch in stressigen Situationen meine Leistung aufrechterhalten. "
              + "Durch meine Fähigkeiten in Agilität kann ich flexibel bleiben und erfolgreich in einem sich schnell verändernden Arbeitsumfeld arbeiten.",
          },
          {
            title: "Analytisches Denken",
            content:
              "Ich verfüge über ausgezeichnete Fähigkeiten im analytischen Denken und kann komplexe Probleme systematisch und logisch angehen. "
              + "Ich bin in der Lage, Daten zu analysieren und Muster zu erkennen, um fundierte Entscheidungen zu treffen und effektive Lösungen zu finden. "
              + "Durch meine Fähigkeiten im analytischen Denken kann ich erfolgreich in verschiedenen Bereichen arbeiten und komplexe Herausforderungen meistern.",
          },
          {
            title: "Kritisches Denken",
            content:
              "Ich bin in der Lage, kritisches Denken anzuwenden, um komplexe Probleme zu analysieren und fundierte Entscheidungen zu treffen. "
              + "Ich hinterfrage Annahmen und suche nach verschiedenen Perspektiven, um eine umfassende Sichtweise zu erhalten und mögliche Risiken zu minimieren. "
              + "Meine Fähigkeiten im kritischen Denken ermöglichen es mir, Herausforderungen effektiv zu bewältigen und innovative Lösungen zu finden.",
          },
          {
            title: "Design",
            content:
              "Ich habe ein gutes Auge für Design und kann ansprechende, benutzerfreundliche Oberflächen erstellen.",
          },
          {
            title: "Projektmanagement",
            content:
              "Ich habe Erfahrung mit Projektmanagement und kann Projekte effizient planen und organisieren.",
          },
          {
            title: "Zusammenarbeit mit KI",
            content:
              "Ich habe Erfahrung in der Arbeit mit KI-Tools und -Technologien, um datengesteuerte Entscheidungen zu treffen und komplexe Probleme effektiver zu lösen.",
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
