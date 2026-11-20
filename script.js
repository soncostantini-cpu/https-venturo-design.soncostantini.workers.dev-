
const translations = {
  it: {
    navHome: "Home",
    navArtworks: "Opere",
    navCustom: "Design su richiesta",
    navAbout: "Chi siamo",
    navContact: "Contatti",
    heroEyebrow: "STUDIO INDIPENDENTE DI TRANSPORTATION DESIGN",
    heroTitle: "Una visione di ciò che verrà.",
    heroDescription: "Esplorare il futuro della mobilità attraverso design, arte e immaginazione.",
    heroButton: "SCOPRI LE OPERE",
    introEyebrow: "LA VISIONE VENTURO",
    introTitle: "Il design è il linguaggio del domani.",
    introText: "Venturo Design è uno studio creativo indipendente che esplora il futuro del trasporto attraverso design, ricerca ed espressione artistica.",
    introLink: "ESPLORA I NOSTRI PROGETTI →",
    artEyebrow: "UNA SELEZIONE DI PROGETTI",
    artTitle: "Opere e illustrazioni",
    artDescription: "Creazioni originali, sketch e interpretazioni visive del mondo dei trasporti.",
    catAuto: "Automotive",
    catMoto: "Motociclette",
    catMarine: "Nautica",
    catIndustrial: "Industriale e altro",
    customEyebrow: "LA TUA IDEA, IL NOSTRO DESIGN",
    customTitle: "Una visione personale merita un'opera unica.",
    customText: "Dalle illustrazioni realistiche di veicoli ai concept originali e immaginari, ogni commissione nasce dalle tue idee.",
    customButton: "RICHIEDI UN'ILLUSTRAZIONE",
    digitalEyebrow: "CREAZIONI DIGITALI",
    digitalTitle: "L'arte oltre la carta.",
    digitalText: "Scopri illustrazioni digitali e progetti visivi selezionati.",
    digitalLink: "CONTATTACI →",
    contactEyebrow: "CONTATTI",
    contactTitle: "Creiamo qualcosa di unico.",
    contactText: "Per informazioni sulle opere, commissioni personalizzate o collaborazioni, contatta Venturo Design.",
    purchaseButton: "RICHIEDI INFORMAZIONI SU UN'OPERA",
    commissionButton: "RICHIEDI UN PROGETTO PERSONALIZZATO",
    footerText: "Transportation Design indipendente",
    footerContact: "Contatti"
  },

  en: {
    navHome: "Home",
    navArtworks: "Artworks",
    navCustom: "Custom Design",
    navAbout: "About",
    navContact: "Contact",
    heroEyebrow: "INDEPENDENT TRANSPORTATION DESIGN",
    heroTitle: "A vision of what is yet to come.",
    heroDescription: "Exploring the future of mobility through design, art and imagination.",
    heroButton: "EXPLORE THE COLLECTION",
    introEyebrow: "THE VENTURO VISION",
    introTitle: "Design is the language of tomorrow.",
    introText: "Venturo Design is an independent creative studio exploring the future of transportation through design, research and artistic expression.",
    introLink: "EXPLORE OUR WORK →",
    artEyebrow: "SELECTED WORKS",
    artTitle: "Artworks & Illustrations",
    artDescription: "Original creations, sketches and visual interpretations of the world of transportation.",
    catAuto: "Automotive",
    catMoto: "Motorcycle",
    catMarine: "Marine",
    catIndustrial: "Industrial & Other",
    customEyebrow: "YOUR IDEA, OUR DESIGN",
    customTitle: "A personal vision deserves a unique artwork.",
    customText: "From realistic vehicle illustrations to original fictional concepts, every commission is developed around your ideas.",
    customButton: "REQUEST A COMMISSION",
    digitalEyebrow: "DIGITAL CREATIONS",
    digitalTitle: "Art beyond the paper.",
    digitalText: "Discover digital illustrations and selected visual projects.",
    digitalLink: "GET IN TOUCH →",
    contactEyebrow: "GET IN TOUCH",
    contactTitle: "Let's create something unique.",
    contactText: "For artwork enquiries, custom commissions or collaborations, get in touch with Venturo Design.",
    purchaseButton: "ENQUIRE ABOUT AN ARTWORK",
    commissionButton: "REQUEST A CUSTOM DESIGN",
    footerText: "Independent Transportation Design",
    footerContact: "Contact"
  },

  de: {
    navHome: "Startseite",
    navArtworks: "Kunstwerke",
    navCustom: "Individuelles Design",
    navAbout: "Über uns",
    navContact: "Kontakt",
    heroEyebrow: "UNABHÄNGIGES TRANSPORTDESIGN",
    heroTitle: "Eine Vision dessen, was kommen wird.",
    heroDescription: "Die Zukunft der Mobilität durch Design, Kunst und Vorstellungskraft erkunden.",
    heroButton: "KOLLEKTION ENTDECKEN",
    introEyebrow: "DIE VENTURO-VISION",
    introText: "Venturo Design ist ein unabhängiges Kreativstudio, das die Zukunft des Transportdesigns durch Gestaltung, Forschung und künstlerischen Ausdruck erkundet.",
    introLink: "UNSERE ARBEITEN ENTDECKEN →",
    introLink: "UNSERE VISION ENTDECKEN →",
    artEyebrow: "AUSGEWÄHLTE ARBEITEN",
    artTitle: "Kunstwerke und Illustrationen",
    artDescription: "Originale Kreationen, Skizzen und visuelle Interpretationen der Transportwelt.",
    catAuto: "Automobil",
    catMoto: "Motorräder",
    catMarine: "Marine",
    catIndustrial: "Industrie und Sonstiges",
    customEyebrow: "DEINE IDEE, UNSER DESIGN",
    customTitle: "Eine persönliche Vision verdient ein einzigartiges Kunstwerk.",
    customText: "Von realistischen Fahrzeugsillustrationen bis hin zu originellen fiktiven Konzepten wird jeder Auftrag individuell entwickelt.",
    customButton: "AUFTRAG ANFRAGEN",
    digitalEyebrow: "DIGITALE KREATIONEN",
    digitalTitle: "Kunst über Papier hinaus.",
    digitalText: "Entdecke digitale Illustrationen und ausgewählte visuelle Projekte.",
    digitalLink: "KONTAKTIERE UNS →",
    contactEyebrow: "KONTAKT",
    contactTitle: "Lass uns etwas Einzigartiges schaffen.",
    contactText: "Für Anfragen zu Kunstwerken, individuellen Aufträgen oder Kooperationen kontaktiere Venturo Design.",
    purchaseButton: "ANFRAGE ZU EINEM KUNSTWERK",
    commissionButton: "INDIVIDUELLES DESIGN ANFRAGEN",
    footerText: "Unabhängiges Transportdesign",
    footerContact: "Kontakt"
  }
};

const languageSelector = document.getElementById("language");

function setLanguage(language) {
  const dictionary = translations[language] || translations.it;

  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;

    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  languageSelector.value = language;
  localStorage.setItem("venturo-language", language);
}

languageSelector.addEventListener("change", event => {
  setLanguage(event.target.value);
});

// Restore selected language
const savedLanguage = localStorage.getItem("venturo-language") || "it";
setLanguage(savedLanguage);

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navigation = document.querySelector(".navigation");

menuToggle.addEventListener("click", () => {
  navigation.classList.toggle("active");
});

document.querySelectorAll(".navigation a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Google Forms links
const FORM_LINKS = {
  purchase: "INSERISCI_QUI_IL_LINK_DEL_MODULO_ACQUISTO",
  commission: "INSERISCI_QUI_IL_LINK_DEL_MODULO_COMMISSIONI"
};

document.querySelectorAll(".form-link").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();

    const type = link.dataset.form;
    const destination = FORM_LINKS[type];

    if (!destination || destination.startsWith("INSERISCI_")) {
      alert("Il modulo Google Forms non è ancora stato collegato.");
      return;
    }

    window.open(destination, "_blank", "noopener,noreferrer");
  });
});
