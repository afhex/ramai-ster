// Navegación suave - activar enlace activo
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Actualizar enlace activo al hacer scroll
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Suavidad en los clics de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Botón CTA
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            document.getElementById('flujo').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Efecto de aparición al hacer scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos de workflow
    document.querySelectorAll('.workflow-step').forEach(step => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(20px)';
        step.style.transition = 'all 0.6s ease-out';
        observer.observe(step);
    });

    // Observar tarjetas de herramientas
    document.querySelectorAll('.tool-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
        observer.observe(card);
    });

    // Información en consola (para verificación del desarrollador)
    console.log('%c🚀 Ramai-ster - Flujo de Trabajo Colaborativo', 
        'font-size: 18px; color: #2563eb; font-weight: bold;');
    console.log('%c✅ Página cargada correctamente', 
        'font-size: 14px; color: #10b981;');
    console.log('%cFluj flujo de trabajo:',
        'font-size: 12px; color: #666;');
    console.log('1. Fork → 2. Clone → 3. Branch → 4. Commit → 5. Push → 6. Pull Request → 7. Review → 8. Merge → 9. Update');
});

// Efecto hover mejorado en tarjetas de workflow
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.workflow-step').forEach(step => {
        step.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        });

        step.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
});

// Animación al cargar página
window.addEventListener('load', function() {
    const hero = document.querySelector('.hero');
    hero.style.opacity = '1';
});
