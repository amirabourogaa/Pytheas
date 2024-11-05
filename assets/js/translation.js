const translations = {
    fr: {
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_services: "Services",
        nav_products: "Produits",
        nav_contact: "Contact",
        hero_section: {
            title: "Expertise en Énergie  depuis 2004",
            paragraph:
                `
             Créée en 2004 à Marseille ( France), la société PYTHEAS Engineering a pour métiers l'énergie.
                Sa filiale dans l'environnement, est spécialisée dans le froid industriel et les énergies renouvelables ( chambres froides, panneaux solaires)
            `,
            btn: "Commencer"
        },
        why_us_section: {
            element1: {
                title: "PYTHEAS Environnement, un leader en froid industriel et énergies renouvelables",
                subtitle: "20 ans après la création de PYTHEAS Engineering, le groupe poursuit son expansion.",
                paragraph: `Domiciliée en Tunisie, PYTHEAS Environnement se spécialise dans le froid industriel et les solutions d'énergie renouvelable, en collaboration avec des fabricants de matériel français de haute performance et garantie. Que vous soyez professionnel ou particulier, nos produits répondent à vos besoins, de la chambre froide au climatiseur domestique en passant par les panneaux photovoltaïques.`,
            },
            element2: {
                title: "Produits de qualité pour répondre à tous vos besoins",
                subtitle: "Des solutions adaptées aux professionnels comme aux particuliers.",
                paragraph: `Nous offrons une gamme variée de produits: chambres froides,
                      climatisation, et installations de panneaux photovoltaïques. 
                      PYTHEAS Environnement vous accompagne dans vos choix
                      avec l’expertise d’un groupe international, garantissant performance et durabilité.`,
            },
            element3: {
                title: "Un accompagnement par des spécialistes expérimentés",
                subtitle: "Faites confiance à nos experts pour des solutions optimales et durables.",
                paragraph: `Nos spécialistes sont disponibles pour vous guider dans les meilleurs choix techniques et
                      économiques, en tenant compte de vos exigences. Avec PYTHEAS Environnement, vous bénéficiez de
                      l’expérience et de la rigueur d’un groupe de renommée internationale.`,
            },

        }
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_products: "Products",
        nav_contact: "Contact",
        hero_section: {
            title: "Energy Expertise Since 2004",
            paragraph: `
                Founded in 2004 in Marseille (France), PYTHEAS Engineering specializes in energy solutions.
                Its environmental subsidiary focuses on industrial cooling and renewable energy, offering products
                such as cold storage systems and solar panels.
            `,
            btn: "Get Started"
        },
        
        why_us_section: {
            element1: {
                title: "PYTHEAS Environment, a Leader in Industrial Cooling and Renewable Energy",
                subtitle: "20 years after the founding of PYTHEAS Engineering, the group continues its expansion.",
                paragraph: `Based in Tunisia, PYTHEAS Environment specializes in industrial cooling and renewable energy solutions,
                            working in collaboration with French manufacturers known for high-performance and reliable equipment.
                            Whether you are a professional or an individual, our products meet your needs, from cold storage rooms
                            to home air conditioning and photovoltaic panels.`,
            },
            element2: {
                title: "Quality Products to Meet All Your Needs",
                subtitle: "Solutions tailored for professionals and individuals alike.",
                paragraph: `We offer a diverse range of products: cold storage rooms, apartment air conditioning, and photovoltaic
                            panel installations. PYTHEAS Environment supports your choices with the expertise of an international group,
                            ensuring performance and durability.`,
            },
            element3: {
                title: "Guidance from Experienced Specialists",
                subtitle: "Trust our experts for optimal and lasting solutions.",
                paragraph: `Our specialists are available to guide you in making the best technical and economic choices, tailored to your
                            requirements. With PYTHEAS Environment, you benefit from the experience and rigor of a globally recognized group.`,
            }

        }
    },


};

function translateContent() {
    const selectedLanguage = document.getElementById("languageSelector").value;

    // Traduire chaque élément du menu de navigation
    document.getElementById("nav-home").textContent = translations[selectedLanguage].nav_home;
    document.getElementById("nav-about").textContent = translations[selectedLanguage].nav_about;
    document.getElementById("nav-services").textContent = translations[selectedLanguage].nav_services;
    document.getElementById("nav-products").textContent = translations[selectedLanguage].nav_products;
    document.getElementById("nav-contact").textContent = translations[selectedLanguage].nav_contact;

    // hero section home 
    document.getElementById("hero-title").textContent = translations[selectedLanguage].hero_section.title;
    document.getElementById("hero-paragraph").textContent = translations[selectedLanguage].hero_section.paragraph;
    document.getElementById("hero-btn").textContent = translations[selectedLanguage].hero_section.btn;
    // why us section
    // element1:
    document.getElementById("why-elem1-title").textContent = translations[selectedLanguage].why_us_section.element1.title;
    document.getElementById("why-elem1-subtitle").textContent = translations[selectedLanguage].why_us_section.element1.subtitle;
    document.getElementById("why-elem1-paragraph").textContent = translations[selectedLanguage].why_us_section.element1.paragraph;

    // element2:
    document.getElementById("why-elem2-title").textContent = translations[selectedLanguage].why_us_section.element2.title;
    document.getElementById("why-elem2-subtitle").textContent = translations[selectedLanguage].why_us_section.element2.subtitle;
    document.getElementById("why-elem2-paragraph").textContent = translations[selectedLanguage].why_us_section.element2.paragraph;
    // element3:
    document.getElementById("why-elem3-title").textContent = translations[selectedLanguage].why_us_section.element3.title;
    document.getElementById("why-elem3-subtitle").textContent = translations[selectedLanguage].why_us_section.element3.subtitle;
    document.getElementById("why-elem3-paragraph").textContent = translations[selectedLanguage].why_us_section.element3.paragraph;

}

// Appel de la fonction pour définir la langue par défaut lors du chargement de la page
window.onload = translateContent;
