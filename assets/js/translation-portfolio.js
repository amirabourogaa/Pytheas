const translations = {

    fr: {
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_services: "Services",
        nav_products: "Produits",
        nav_contact: "Contact",
       
        pageTitle: {
          title: "Portefeuille",
          breadcrumbHome: "Accueil",
          breadcrumbCurrent: "Portefeuille"
        },
        filters: {
          all: "TOUT",
          products: "Produits",
          achievements: "Réalisations"
        },
        portfolioItems: {
          item1: "Installation et maintenance de groupes de production d'eau glacée pour la climatisation des turbines de production électrique à la STEG, Kasserine, Tunisie.",
          item2: "Installation de centrales froid positif et négatif pour des grandes surfaces commerciales comme MG et Monoprix en Tunisie.",
          item3: "Installation de chambres froides à température positive et négative à Dakar et Saint-Louis, Sénégal.",
          item4: {
            title: "Installations de chambres frigorifiques",
            description: "Nos équipes sont formées pour gérer tous types d'installations de climatiseurs et de chambres frigorifiques, que ce soit pour des particuliers ou des professionnels. Cela inclut l'installation de pompes à chaleur, de centrales de traitement d’air et de groupes d’eau glacée."
          },
          item5: {
            title: "Contrat de maintenance préventive et curative",
            description: "Nous assurons la performance et la durabilité des systèmes de climatisation et de réfrigération grâce à notre expertise technique."
          },
          item6: {
            title: "Contrat de maintenance préventive et curative",
            description: "Nous assurons la performance et la durabilité des systèmes de climatisation et de réfrigération grâce à notre expertise technique."
          },
          item7: { title: "Entrepôts et chambres froides", description: "De la conception à la réalisation, notre équipe propose des solutions personnalisées pour le choix et l'implantation des équipements frigorifiques, en posant des réseaux de gaines de ventilation rectangulaires et circulaires." },
          item8: { title: "Entrepôts et chambres froides", description: "De la conception à la réalisation, notre équipe propose des solutions personnalisées pour le choix et l'implantation des équipements frigorifiques, en posant des réseaux de gaines de ventilation rectangulaires et circulaires." },
          item9: { description: "La fourniture et la pose de réseaux de gaines de ventilation rectangulaires et circulaires." }
        
        },
        footer: {
            sitename: "Pytheas Environnement",
            about_text: "Pytheas, votre partenaire pour des solutions de réfrigération, climatisation, et énergies renouvelables fiables. Nous proposons des installations performantes et assurons une maintenance régulière pour garantir sécurité et efficacité énergétique à long terme.",
            pages_title: "Nos pages",
            pages: ["Accueil", "A propos", "Services", "Produits", "Contact"],
            services_title: "Nos Services",
            services: [
              "Réfrigération Industrielle",
              "Énergie Photovoltaïque",
              "Ventilation et Chauffage",
              "Contrôles de Sécurité",
              "Maintenance Continue"
            ],
            contact_title: "Contact",
            contact_location: "Tunis, Tunisie",
            contact_phone: "+216 29 706 959",
            contact_email: "contact@pytheas-environnement.com"
          }
    
    },

    en : {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_products: "Products",
        nav_contact: "Contact",
     
        pageTitle: {
          title: "Portfolio",
          breadcrumbHome: "Home",
          breadcrumbCurrent: "Portfolio"
        },

        filters: {
          all: "All",
          products: "Products",
          achievements: "Achievements"
        },
        portfolioItems: {
          item1: "Installation and maintenance of chilled water production units for air conditioning of electricity production turbines at STEG, Kasserine, Tunisia.",
          item2: "Installation of positive and negative cold centers for large retail stores like MG and Monoprix in Tunisia.",
          item3: "Installation of positive and negative temperature cold rooms in Dakar and Saint-Louis, Senegal.",
          item4: {
            title: "Cold Room Installations",
            description: "Our teams are trained to handle all types of air conditioner and cold room installations for both residential and professional clients, including heat pumps, air treatment centers, and chilled water units."
          },
          item5: {
            title: "Preventive and Corrective Maintenance Contract",
            description: "We ensure the performance and durability of air conditioning and refrigeration systems through our technical expertise."
          },
          item6: {
            title: "Preventive and Corrective Maintenance Contract",
            description: "We ensure the performance and durability of air conditioning and refrigeration systems through our technical expertise."
          },
          item7: { title: "Warehouses and Cold Rooms", description: "From design to implementation, our team offers customized solutions for selecting and installing refrigeration equipment, including rectangular and circular ventilation duct networks." },
          item8: { title: "Warehouses and Cold Rooms", description: "From design to implementation, our team offers customized solutions for selecting and installing refrigeration equipment, including rectangular and circular ventilation duct networks." },
          item9: { description: "Supply and installation of rectangular and circular ventilation duct networks." }
     
        },
        footer: {
            sitename: "Pytheas Environment",
            about_text: "Pytheas, your partner for reliable refrigeration, air conditioning, and renewable energy solutions. We provide efficient installations and regular maintenance to ensure long-term safety and energy efficiency.",
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
            contact_phone: "+216 29 706 959",
            contact_email: "contact@pytheas-environment.com"
          }
    }
}

function translateContent() {
    const selectedLanguage = document.getElementById("languageSelector").value;
      // Traduire chaque élément du menu de navigation
      document.getElementById("nav-home").textContent = translations[selectedLanguage].nav_home;
      document.getElementById("nav-about").textContent = translations[selectedLanguage].nav_about;
      document.getElementById("nav-services").textContent = translations[selectedLanguage].nav_services;
      document.getElementById("nav-products").textContent = translations[selectedLanguage].nav_products;
      document.getElementById("nav-contact").textContent = translations[selectedLanguage].nav_contact;
// page title 
      document.getElementById("page-title").textContent = translations[selectedLanguage].pageTitle.title;
      document.getElementById("breadcrumb-home").textContent = translations[selectedLanguage].pageTitle.breadcrumbHome;
      document.getElementById("breadcrumb-current").textContent = translations[selectedLanguage].pageTitle.breadcrumbCurrent;

 // Traduction des filtres du portfolio
 document.getElementById("filter-all").textContent = translations[selectedLanguage].filters.all;
 document.getElementById("filter-prod").textContent = translations[selectedLanguage].filters.products;
 document.getElementById("filter-rea").textContent = translations[selectedLanguage].filters.achievements;

//  portfolio items 
const items = translations[selectedLanguage].portfolioItems;

  document.getElementById('portfolio-item-1-description').innerText = items.item1;
  document.getElementById('portfolio-item-2-description').innerText = items.item2;
  document.getElementById('portfolio-item-3-description').innerText = items.item3;
  document.getElementById('portfolio-item-4-title').innerText = items.item4.title;
  document.getElementById('portfolio-item-4-description').innerText = items.item4.description;
  document.getElementById('portfolio-item-5-title').innerText = items.item5.title;
  document.getElementById('portfolio-item-5-description').innerText = items.item5.description;
  document.getElementById('portfolio-item-6-title').innerText = items.item6.title;
  document.getElementById('portfolio-item-6-description').innerText = items.item6.description;
  document.getElementById('portfolio-item-7-title').innerText = items.item7.title;
  document.getElementById('portfolio-item-7-description').innerText = items.item7.description;
  document.getElementById('portfolio-item-8-title').innerText = items.item8.title;
  document.getElementById('portfolio-item-8-description').innerText = items.item8.description;
  document.getElementById('portfolio-item-9-description').innerText = items.item9.description;

  
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
document.getElementById("contact-phone").textContent = translations[selectedLanguage].footer.contact_phone;
document.getElementById("contact-email").textContent = translations[selectedLanguage].footer.contact_email;

}

// Appel de la fonction pour définir la langue par défaut lors du chargement de la page
window.onload = translateContent;