const translations = {

    fr: {
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_services: "Services",
        nav_products: "Portefeuille",
        nav_contact: "Contact",
        page: {
            title: "Services",
            breadcrumb: {
              home: "Accueil",
              current: "Services"
            },
            services: {
              title: "Nos Services",
              description: "Vente, maintenance et services pour vos besoins en réfrigération et énergies renouvelables."
            },
            service1: {
              title: "Réfrigération Industrielle",
              description: "Vente et maintenance de matériels de réfrigération incluant chambres froides, réfrigérateurs et climatiseurs. Des solutions pour répondre aux besoins des professionnels et des particuliers."
            },
            service2: {
              title: "Énergie Photovoltaïque",
              description: "Fourniture et installation de panneaux solaires pour une énergie renouvelable et durable. Offrant des solutions adaptées aux particuliers et aux entreprises."
            },
            service3: {
              title: "Ventilation et Chauffage",
              description: "Solutions de ventilation et de chauffage performantes, incluant des systèmes de pompe à chaleur pour garantir le confort thermique de vos installations."
            },
            service4: {
              title: "Contrôles de Sécurité",
              description: "Réalisation de contrôles annuels de sécurité et d’efficacité énergétique pour garantir le bon fonctionnement de vos installations."
            },
            service5: {
              title: "Maintenance Continue",
              description: "Une présence continue pour assurer une maintenance optimale de vos équipements, garantissant leur performance et leur durabilité."
            }
          },
        serviceCards: {
            title1: "Installations de chambres frigorifiques",
            text1: "Nos équipes sont formées pour gérer tous types d'installations de climatiseurs et de chambres frigorifiques, que ce soit pour des particuliers ou des professionnels. Cela inclut l'installation de pompes à chaleur, de centrales de traitement d’air et de groupes d’eau glacée.",
            title2: "Énergies Renouvelables et Photovoltaïque",
            text2: "Nous offrons des solutions de panneaux solaires et systèmes photovoltaïques, permettant une source d'énergie propre et durable pour les bâtiments résidentiels et commerciaux.",
            title3: "Ventilation et Chauffage",
            text3: "Nos systèmes de ventilation et de chauffage à haute efficacité assurent un confort thermique optimal, incluant des pompes à chaleur pour des économies d'énergie.",
            title4: "Maintenance et Contrôle de Sécurité",
            text4: "Nous assurons des contrôles de sécurité annuels et une maintenance régulière pour garantir une performance optimale et durable de vos équipements."
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
        page: {
            title: "Services",
            breadcrumb: {
              home: "Home",
              current: "Services"
            },
            services: {
              title: "Our Services",
              description: "Sales, maintenance, and services for your refrigeration and renewable energy needs."
            },
            service1: {
              title: "Industrial Refrigeration",
              description: "Sales and maintenance of refrigeration equipment, including cold rooms, refrigerators, and air conditioners. Solutions to meet the needs of both professionals and individuals."
            },
            service2: {
              title: "Photovoltaic Energy",
              description: "Supply and installation of solar panels for renewable and sustainable energy. Offering solutions tailored to individuals and businesses."
            },
            service3: {
              title: "Ventilation and Heating",
              description: "Efficient ventilation and heating solutions, including heat pump systems to ensure the thermal comfort of your installations."
            },
            service4: {
              title: "Safety Checks",
              description: "Annual safety and energy efficiency checks to ensure the optimal functioning of your installations."
            },
            service5: {
              title: "Continuous Maintenance",
              description: "A continuous presence to ensure the optimal maintenance of your equipment, guaranteeing its performance and durability."
            }
          },
        serviceCards: {
            title1: "Cold Room Installations",
            text1: "Our teams are trained to handle all types of air conditioner and cold room installations, whether for individuals or professionals. This includes installing heat pumps, air handling units, and chilled water units.",
            title2: "Renewable Energy and Photovoltaics",
            text2: "We offer solar panel and photovoltaic system solutions, providing a clean and sustainable energy source for residential and commercial buildings.",
            title3: "Ventilation and Heating",
            text3: "Our high-efficiency ventilation and heating systems ensure optimal thermal comfort, including heat pumps for energy savings.",
            title4: "Maintenance and Safety Control",
            text4: "We provide annual safety checks and regular maintenance to ensure optimal and long-lasting performance of your equipment."
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

        // Changer les titres de page
  document.getElementById("page-title").textContent = translations[selectedLanguage].page.title;
  document.getElementById("breadcrumb-home").textContent = translations[selectedLanguage].page.breadcrumb.home;
  document.getElementById("breadcrumb-current").textContent = translations[selectedLanguage].page.breadcrumb.current;
  
  // Changer les titres et descriptions des services
  document.getElementById("services-title").textContent = translations[selectedLanguage].page.services.title;
  document.getElementById("services-description").textContent = translations[selectedLanguage].page.services.description;

  document.getElementById("service1-title").textContent = translations[selectedLanguage].page.service1.title;
  document.getElementById("service1-description").textContent = translations[selectedLanguage].page.service1.description;

  document.getElementById("service2-title").textContent = translations[selectedLanguage].page.service2.title;
  document.getElementById("service2-description").textContent = translations[selectedLanguage].page.service2.description;

  document.getElementById("service3-title").textContent = translations[selectedLanguage].page.service3.title;
  document.getElementById("service3-description").textContent = translations[selectedLanguage].page.service3.description;

  document.getElementById("service4-title").textContent = translations[selectedLanguage].page.service4.title;
  document.getElementById("service4-description").textContent = translations[selectedLanguage].page.service4.description;

  document.getElementById("service5-title").textContent = translations[selectedLanguage].page.service5.title;
  document.getElementById("service5-description").textContent = translations[selectedLanguage].page.service5.description;

// Service Cards Section
document.getElementById("service-card-title-1").textContent = translations[selectedLanguage].serviceCards.title1;
document.getElementById("service-card-text-1").textContent = translations[selectedLanguage].serviceCards.text1;

document.getElementById("service-card-title-2").textContent = translations[selectedLanguage].serviceCards.title2;
document.getElementById("service-card-text-2").textContent = translations[selectedLanguage].serviceCards.text2;

document.getElementById("service-card-title-3").textContent = translations[selectedLanguage].serviceCards.title3;
document.getElementById("service-card-text-3").textContent = translations[selectedLanguage].serviceCards.text3;

document.getElementById("service-card-title-4").textContent = translations[selectedLanguage].serviceCards.title4;
document.getElementById("service-card-text-4").textContent = translations[selectedLanguage].serviceCards.text4;



      // Pied de page
document.getElementById("sitename").textContent = translations[selectedLanguage].footer.sitename;
document.getElementById("about-text").textContent = translations[selectedLanguage].footer.about_text;

document.getElementById("pages-title").textContent = translations[selectedLanguage].footer.pages_title;
translations[selectedLanguage].footer.pages.forEach((text, index) => {
  document.getElementById(`page-${["home", "about", "services", "products", "contact"][index]}`).textContent = text;
});

document.getElementById("services-title-footer").textContent = translations[selectedLanguage].footer.services_title;
translations[selectedLanguage].footer.services.forEach((text, index) => {
  document.getElementById(`service-${index + 1}`).textContent = text;
});

document.getElementById("contact-title").textContent = translations[selectedLanguage].footer.contact_title;
document.getElementById("contact-location").textContent = translations[selectedLanguage].footer.contact_location;
document.getElementById("contact-email").textContent = translations[selectedLanguage].footer.contact_email;

}

// Appel de la fonction pour définir la langue par défaut lors du chargement de la page
window.onload = translateContent;