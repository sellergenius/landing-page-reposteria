const featuresData = [
    {
        icon: "fa-heart",
        title: "Hecho en Casa",
        desc: "Cada postre es preparado a mano, con amor y atención a los detalles diariamente.",
        delay: "0s"
    },
    {
        icon: "fa-leaf",
        title: "Ingredientes Frescos",
        desc: "Seleccionamos la mejor materia prima para garantizar un sabor inigualable.",
        delay: "0.2s"
    },
    {
        icon: "fa-gift",
        title: "Para Toda Ocasión",
        desc: "Desde un antojo de tarde hasta la torta de tu celebración soñada.",
        delay: "0.4s"
    }
];

const menuData = [
    {
        id: "golfeados",
        title: "Golfeados Melosos",
        desc: "Suaves espirales horneados, bañados en papelón y anís, con abundante queso blanco.",
        price: "Desde $3",
        badge: "Más Vendido",
        imgClass: "golfeados-img"
    },
    {
        id: "rolles",
        title: "Rolles de Canela",
        desc: "Masa esponjosa y canela, coronada con nuestro cremoso frosting especial.",
        price: "Desde $3.5",
        badge: null,
        imgClass: "rolles-img"
    },
    {
        id: "porciones",
        title: "Tortas en Porciones",
        desc: "Chocolate, vainilla, red velvet y más. Perfectos para el antojito del día.",
        price: "Desde $4",
        badge: null,
        imgClass: "slices-img"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Renderizado dinámico de Features
    const featureContainer = document.getElementById('feature-container');
    if (featureContainer) {
        featuresData.forEach(feature => {
            const featureHTML = `
                <div class="feature-card reveal" style="transition-delay: ${feature.delay};">
                    <div class="icon-box"><i class="fas ${feature.icon}"></i></div>
                    <h3>${feature.title}</h3>
                    <p>${feature.desc}</p>
                </div>
            `;
            featureContainer.innerHTML += featureHTML;
        });
    }

    // Renderizado dinámico de Menú
    const menuContainer = document.getElementById('menu-container');
    if (menuContainer) {
        menuData.forEach(item => {
            const badgeHTML = item.badge ? `<div class="badge">${item.badge}</div>` : '';
            const priceHTML = item.price ? `<span class="price" style="display:block; margin-top:1rem; font-weight:bold; color:var(--primary);">${item.price}</span>` : '';

            const menuHTML = `
                <div class="menu-card reveal">
                    <div class="menu-img ${item.imgClass}">
                        ${badgeHTML}
                    </div>
                    <div class="menu-info">
                        <h3>${item.title}</h3>
                        <p>${item.desc}</p>
                        ${priceHTML}
                    </div>
                </div>
            `;
            menuContainer.innerHTML += menuHTML;
        });
    }

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
