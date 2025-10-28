// Scripts personalizados para el navbar del Teatro Jujuy

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.modern-link');
    
    // Efecto de scroll en el navbar
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Event listener para el scroll
    window.addEventListener('scroll', handleScroll);
    
    // Cerrar navbar móvil al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
    
    // Efecto de hover mejorado para los enlaces
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Animación de entrada para los elementos del navbar
    function animateNavbarElements() {
        const elements = document.querySelectorAll('.modern-link, .btn-modern, .brand-logo');
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.6s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    // Ejecutar animación después de un pequeño delay
    setTimeout(animateNavbarElements, 200);
    
    // Efecto de partículas sutiles en el navbar (opcional)
    function createFloatingParticles() {
        const navbar = document.querySelector('.navbar');
        const particleCount = 3;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: rgba(255, 215, 0, 0.3);
                border-radius: 50%;
                pointer-events: none;
                z-index: -1;
                animation: float 6s ease-in-out infinite;
                animation-delay: ${i * 2}s;
            `;
            
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            navbar.appendChild(particle);
        }
    }
    
    // Agregar CSS para la animación de partículas
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
            50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }
    `;
    document.head.appendChild(style);
    
    // Crear partículas flotantes
    createFloatingParticles();
    
    // Efecto de typing para el texto del logo (opcional)
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Aplicar efecto de typing al logo si se desea
    const brandText = document.querySelector('.brand-text');
    if (brandText) {
        const originalText = brandText.textContent;
        // Descomentar la siguiente línea para activar el efecto de typing
        // typeWriter(brandText, originalText, 150);
    }
    
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Indicador de página activa
    function setActivePage() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
                link.style.background = 'var(--gradient-primary)';
                link.style.color = 'white';
            }
        });
    }
    
    setActivePage();
    
    // Efecto de resplandor en el logo al hacer hover
    const logoImg = document.querySelector('.logo-img');
    if (logoImg) {
        logoImg.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.6)';
        });
        
        logoImg.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 2px 10px rgba(139, 69, 19, 0.2)';
        });
    }
    
    // Prevenir el comportamiento por defecto del botón hamburguesa si es necesario
    navbarToggler.addEventListener('click', function(e) {
        // El comportamiento por defecto de Bootstrap ya maneja el toggle
        // Aquí se pueden agregar efectos adicionales si es necesario
    });
    
    // Efecto de ondas en los botones (ripple effect)
    function createRippleEffect(element) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    // Agregar efecto ripple a los botones
    const buttons = document.querySelectorAll('.btn-modern, .modern-link');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            createRippleEffect(this);
        });
    });
    
    // Agregar CSS para el efecto ripple
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
});

// Función para cambiar el tema (opcional - para futuras implementaciones)
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Cargar tema guardado
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});
