const translations = {

    fr: {
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_services: "Services",
        nav_products: "Portefeuille",
        nav_contact: "Contact",
        call_to_action: {
            title: "Rejoignez-nous pour transformer votre entreprise !",
            paragraph: "Explorez nos solutions innovantes et durables qui répondent à vos besoins. Ensemble, nous pouvons créer un impact significatif tout en propulsant votre entreprise vers de nouveaux sommets.",
            button: "Découvrez nos services"
          },
          pageTitle: {
            title: "À propos",
            breadcrumbHome: "Accueil",
            breadcrumbCurrent: "À propos"
          },
          about: {
            title: "Votre partenaire en solutions écologiques",
            text: "Chez Pytheas Environnement, nous nous engageons à fournir des services de réfrigération et de climatisation de pointe tout en intégrant des pratiques durables. Notre équipe d'experts travaille avec passion pour garantir des installations efficaces et une maintenance de qualité, afin de répondre à tous vos besoins en matière de confort thermique.",
            item_1: "Solutions de réfrigération personnalisées adaptées à vos besoins.",
            item_2: "Énergies renouvelables intégrées pour une efficacité maximale.",
            item_3: "Service après-vente et maintenance proactifs."
          },
          why_us: {
            expertise_title: "Une expertise reconnue",
            expertise_subtitle: "Des années d'expérience dans le secteur de la réfrigération et des énergies renouvelables.",
            expertise_text: "Notre équipe d'experts est dédiée à la recherche de solutions innovantes pour répondre à vos besoins spécifiques tout en respectant l'environnement.",
            
            technology_title: "Technologie avancée",
            technology_subtitle: "Des systèmes modernes pour une performance optimale.",
            technology_text: "Nous utilisons les dernières technologies pour garantir que nos installations offrent le meilleur rendement énergétique possible.",
            
            service_title: "Un service client exceptionnel",
            service_subtitle: "Nous sommes là pour vous, à chaque étape.",
            service_text: "Nous croyons en la transparence et la communication. Notre équipe est toujours prête à répondre à vos questions et à vous accompagner dans vos projets.",
            
            sustainability_title: "Engagement durable",
            sustainability_subtitle: "Priorité à l'environnement dans toutes nos opérations.",
            sustainability_text: "Nous intégrons des pratiques durables dans nos services pour minimiser notre impact sur la planète et offrir des solutions écoresponsables."
          },
        footer: {
            sitename: "Pytheas Environnement",
            about_text: "Pytheas, votre partenaire pour des solutions de réfrigération, climatisation, et énergies renouvelables fiables. Nous proposons des installations performantes et assurons une maintenance régulière pour garantir sécurité et efficacité énergétique à long terme.",
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
            contact_location: "Tunis, Tunisie",
            contact_email: "contact@pytheas-environnement.com"
          }
    
    },

    en : {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_products: "Products",
        nav_contact: "Contact",
        call_to_action: {
            title: "Join us to transform your business!",
            paragraph: "Explore our innovative and sustainable solutions that meet your needs. Together, we can create a significant impact while taking your business to new heights.",
            button: "Discover our services"
          },
          pageTitle: {
            title: "About",
            breadcrumbHome: "Home",
            breadcrumbCurrent: "About"
          },
          about: {
            title: "Your Partner in Eco-Friendly Solutions",
            text: "At Pytheas Environment, we are committed to providing top-notch refrigeration and air conditioning services while incorporating sustainable practices. Our team of experts works with passion to ensure efficient installations and quality maintenance to meet all your thermal comfort needs.",
            item_1: "Customized refrigeration solutions tailored to your needs.",
            item_2: "Integrated renewable energy for maximum efficiency.",
            item_3: "Proactive after-sales service and maintenance."
          },
          why_us: {
            expertise_title: "Recognized Expertise",
            expertise_subtitle: "Years of experience in refrigeration and renewable energy sectors.",
            expertise_text: "Our team of experts is dedicated to finding innovative solutions to meet your specific needs while respecting the environment.",
            
            technology_title: "Advanced Technology",
            technology_subtitle: "Modern systems for optimal performance.",
            technology_text: "We use the latest technologies to ensure our installations deliver the highest possible energy efficiency.",
            
            service_title: "Exceptional Customer Service",
            service_subtitle: "We are here for you every step of the way.",
            service_text: "We believe in transparency and communication. Our team is always ready to answer your questions and assist with your projects.",
            
            sustainability_title: "Sustainable Commitment",
            sustainability_subtitle: "Prioritizing the environment in all our operations.",
            sustainability_text: "We incorporate sustainable practices in our services to minimize our environmental impact and provide eco-friendly solutions."
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

    //   call to action 
document.getElementById("cta-title").textContent = translations[selectedLanguage].call_to_action.title;
document.getElementById("cta-paragraph").textContent = translations[selectedLanguage].call_to_action.paragraph;
document.getElementById("cta-button").textContent = translations[selectedLanguage].call_to_action.button;

// Page Title Section
document.getElementById("page-title").textContent = translations[selectedLanguage].pageTitle.title;
document.getElementById("breadcrumb-home").textContent = translations[selectedLanguage].pageTitle.breadcrumbHome;
document.getElementById("breadcrumb-current").textContent = translations[selectedLanguage].pageTitle.breadcrumbCurrent;

// About Section
document.getElementById("about-title").textContent = translations[selectedLanguage].about.title;
document.getElementById("about-text").textContent = translations[selectedLanguage].about.text;
document.getElementById("about-item-1").textContent = translations[selectedLanguage].about.item_1;
document.getElementById("about-item-2").textContent = translations[selectedLanguage].about.item_2;
document.getElementById("about-item-3").textContent = translations[selectedLanguage].about.item_3;

// Why Us Section
document.getElementById("expertise-title").textContent = translations[selectedLanguage].why_us.expertise_title;
document.getElementById("expertise-subtitle").textContent = translations[selectedLanguage].why_us.expertise_subtitle;
document.getElementById("expertise-text").textContent = translations[selectedLanguage].why_us.expertise_text;

document.getElementById("technology-title").textContent = translations[selectedLanguage].why_us.technology_title;
document.getElementById("technology-subtitle").textContent = translations[selectedLanguage].why_us.technology_subtitle;
document.getElementById("technology-text").textContent = translations[selectedLanguage].why_us.technology_text;

document.getElementById("service-title").textContent = translations[selectedLanguage].why_us.service_title;
document.getElementById("service-subtitle").textContent = translations[selectedLanguage].why_us.service_subtitle;
document.getElementById("service-text").textContent = translations[selectedLanguage].why_us.service_text;

document.getElementById("sustainability-title").textContent = translations[selectedLanguage].why_us.sustainability_title;
document.getElementById("sustainability-subtitle").textContent = translations[selectedLanguage].why_us.sustainability_subtitle;
document.getElementById("sustainability-text").textContent = translations[selectedLanguage].why_us.sustainability_text;

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