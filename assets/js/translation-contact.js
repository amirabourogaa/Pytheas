const translations = {

    fr: {
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_services: "Services",
        nav_products: "Portefeuille",
        nav_contact: "Contact",
       
        pageTitle: "Contact",
        breadcrumbs: {
          home: "Accueil",
          contact: "Contact"
        },
        contactInfo: {
          addressTitle: "Adresse",
          address: "Tunisie, France",
          phoneTitle: "Appelez-nous",
         
          emailTitle: "Email:",
          email: "contact@pytheas-environnement.com"
        },
        contactForm: {
          namePlaceholder: "Votre nom",
          emailPlaceholder: "Votre email",
          subjectPlaceholder: "Sujet",
          messagePlaceholder: "Message",
          submitButton: "Envoyer",
          loadingText: "Chargement",
        },
        footer: {
            sitename: "Pytheas Environnement",
            about_text: "Pytheas Environnement, votre partenaire pour des solutions de réfrigération, climatisation, et énergies renouvelables fiables. Nous proposons des installations performantes et assurons une maintenance régulière pour garantir sécurité et efficacité énergétique à long terme.",
            pages_title: "Nos pages",
            pages: ["Accueil", "A propos", "Services", "Portefeuille", "Contact"],
            services_title: "Nos Services",
            services: [
              "Réfrigération Industrielle",
              "Énergie Photovoltaïque",
              "Ventilation et Chauffage",
              "Contrôles de Sécurité",
              "Maintenance Continue"
            ],
            contact_title: "Contact",
            contact_location: "Tunisie, France",
            contact_email: "contact@pytheas-environnement.com"
          }
    
    },

    en : {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_products: "Products",
        nav_contact: "Contact",
        pageTitle: "Contact",
        breadcrumbs: {
          home: "Home",
          contact: "Contact"
        },
        contactInfo: {
          addressTitle: "Address",
          address: "Tunis, Tunisia",
          phoneTitle: "Call us",
        
          emailTitle: "Email:",
          email: "contact@pytheas-environnement.com"
        },
        contactForm: {
          namePlaceholder: "Your Name",
          emailPlaceholder: "Your Email",
          subjectPlaceholder: "Subject",
          messagePlaceholder: "Message",
          submitButton: "Send",
          loadingText: "Loading",
        },
        footer: {
            sitename: "Pytheas Environment",
            about_text: "Pytheas Environment, your partner for reliable refrigeration, air conditioning, and renewable energy solutions. We provide efficient installations and regular maintenance to ensure long-term safety and energy efficiency.",
            pages_title: "Our Pages",
            pages: ["Home", "About", "Services", "Products", "Contact"],
            services_title: "Our Services",
            services: [
              "Industrial Refrigeration",
              "Photovoltaic Energy",
              "Ventilation and Heating",
              "Safety Controls",
              "Continuous Maintenance"
            ],
            contact_title: "Contact",
            contact_location: "Tunis, Tunisia",
            contact_email: "contact@pytheas-environment.com"
          }
    }
}

function translateContent(lang) {
    const selectedLanguage = lang;
      // Traduire chaque élément du menu de navigation
      document.getElementById("nav-home").textContent = translations[selectedLanguage].nav_home;
      document.getElementById("nav-about").textContent = translations[selectedLanguage].nav_about;
      document.getElementById("nav-services").textContent = translations[selectedLanguage].nav_services;
      document.getElementById("nav-products").textContent = translations[selectedLanguage].nav_products;
      document.getElementById("nav-contact").textContent = translations[selectedLanguage].nav_contact;

      const pageTitle = translations[selectedLanguage].pageTitle;
      const breadcrumbs = translations[selectedLanguage].breadcrumbs;
      document.getElementById('contact-page-title').innerText = pageTitle;
      document.getElementById('breadcrumb-home').innerText = breadcrumbs.home;
      document.getElementById('breadcrumb-contact').innerText = breadcrumbs.contact;

      // Traductions des informations de contact
      const contactInfo = translations[selectedLanguage].contactInfo;
 document.getElementById('contact-address-title').innerText = contactInfo.addressTitle;
 document.getElementById('contact-address').innerText = contactInfo.address;
 document.getElementById('contact-phone-title').innerText = contactInfo.phoneTitle;
 document.getElementById('contact-email-title').innerText = contactInfo.emailTitle;
 document.getElementById('contact-email').innerText = contactInfo.email;
 
 // Traductions de formulaire de contact
 const formLabels = translations[selectedLanguage].contactForm;

 document.getElementById('contact-name').setAttribute('placeholder', formLabels.namePlaceholder);
 document.getElementById('contact-email').setAttribute('placeholder', formLabels.emailPlaceholder);
 document.getElementById('contact-subject').setAttribute('placeholder', formLabels.subjectPlaceholder);
 document.getElementById('contact-message').setAttribute('placeholder', formLabels.messagePlaceholder);
 document.getElementById('contact-submit-btn').innerText = formLabels.submitButton;
 document.getElementById('loading-text').innerText = formLabels.loadingText;

      // Pied de page
document.getElementById("sitename").textContent = translations[selectedLanguage].footer.sitename;
document.getElementById("about-text").textContent = translations[selectedLanguage].footer.about_text;

document.getElementById("pages-title").textContent = translations[selectedLanguage].footer.pages_title;
translations[selectedLanguage].footer.pages.forEach((text, index) => {
  document.getElementById(`page-${["home", "about", "services", "products", "contact"][index]}`).textContent = text;
});

document.getElementById("services-title").textContent = translations[selectedLanguage].footer.services_title;
translations[selectedLanguage].footer.services.forEach((text, index) => {
  document.getElementById(`service-${index + 1}`).textContent = text;
});

document.getElementById("contact-title").textContent = translations[selectedLanguage].footer.contact_title;
document.getElementById("contact-location").textContent = translations[selectedLanguage].footer.contact_location;
document.getElementById("contact-email").textContent = translations[selectedLanguage].footer.contact_email;

}

// Appel de la fonction pour définir la langue par défaut lors du chargement de la page
window.onload = translateContent;