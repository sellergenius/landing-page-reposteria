const featuresData = [
    {
        icon: "fa-heart",
        title: "Hecho en casa",
        desc: "Cada pedido se elabora a mano con ingredientes reales y cariño de principio a fin.",
        delay: "0s"
    },
    {
        icon: "fa-map-marker-alt",
        title: "Entrega en tu zona",
        desc: "Repartimos cerca de ti para que recibas tus postres lo más frescos posible.",
        delay: "0.2s"
    },
    {
        icon: "fa-bread-slice",
        title: "Pedidos frescos del día",
        desc: "Preparamos cada lote en la mañana, para que lleguen a tu mesa recién horneados.",
        delay: "0.4s"
    }
];

const menuData = [
    {
        id: "golfeados",
        title: "Golfeados Melosos",
        desc: "Suaves espirales horneados, bañados en papelón y anís, con abundante queso blanco.",
        badge: "Más Vendido",
        imgClass: "golfeados-img"
    },
    {
        id: "rolles",
        title: "Rolles de Canela",
        desc: "Masa esponjosa y canela, coronada con nuestro cremoso frosting especial.",
        badge: null,
        imgClass: "rolles-img"
    },
    {
        id: "porciones",
        title: "Tortas en Porciones",
        desc: "Chocolate, vainilla, red velvet y más. Perfectos para el antojito del día.",
        badge: null,
        imgClass: "slices-img"
    }
];

const renderFeatures = (container) => {
    featuresData.forEach(feature => {
        const featureHTML = `
            <div class="feature-card reveal" style="transition-delay: ${feature.delay};">
                <div class="icon-box"><i class="fas ${feature.icon}"></i></div>
                <h3>${feature.title}</h3>
                <p>${feature.desc}</p>
            </div>
        `;
        container.innerHTML += featureHTML;
    });
};

const renderMenu = (container) => {
    menuData.forEach(item => {
        const badgeHTML = item.badge ? `<div class="badge">${item.badge}</div>` : '';

        const menuHTML = `
            <div class="menu-card reveal">
                <div class="menu-img ${item.imgClass}">
                    ${badgeHTML}
                </div>
                <div class="menu-info">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                </div>
            </div>
        `;
        container.innerHTML += menuHTML;
    });
};

document.addEventListener('DOMContentLoaded', () => {
    // Renderizado dinámico de Features
    const featureContainer = document.getElementById('feature-container');
    if (featureContainer) renderFeatures(featureContainer);

    // Renderizado dinámico de Menú
    const menuContainer = document.getElementById('menu-container');
    if (menuContainer) renderMenu(menuContainer);

    // Lógica del Navbar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });

    // Lógica menú hamburguesa
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Lógica del carrusel Hero
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 3000); // Cambia cada 3 segundos
    }

    // Lógica animaciones al scroll
    const revealOnScroll = () => {
        const reveals = document.querySelectorAll('.reveal');
        const windowHeight = window.innerHeight;
        reveals.forEach(reveal => {
            if (reveal.getBoundingClientRect().top < windowHeight - 100) {
                reveal.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    // Timeout breve para permitir que el DOM renderizado se calcule
    setTimeout(revealOnScroll, 100);
});
