// ===================================
// SMOOTH SCROLL & NAVIGATION
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Highlight active section in navigation
    const highlightNavigation = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                correspondingLink?.classList.add('active');
            } else {
                correspondingLink?.classList.remove('active');
            }
        });
    };

    // Throttled scroll handler for performance
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                highlightNavigation();
                ticking = false;
            });
            ticking = true;
        }
    });

    // ===================================
    // INTERSECTION OBSERVER FOR PROJECTS
    // ===================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('in-view');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe projects
    const projects = document.querySelectorAll('.project');
    projects.forEach((project, index) => {
        project.style.opacity = '0';
        project.style.transform = 'translateY(30px)';
        project.style.transition = `opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1) ${index * 0.1}s, transform 0.6s cubic-bezier(0.23, 1, 0.32, 1) ${index * 0.1}s`;
        fadeInObserver.observe(project);
    });

    // ===================================
    // PERFORMANCE: REDUCE MOTION
    // ===================================

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (prefersReducedMotion.matches) {
        document.querySelectorAll('.project').forEach(project => {
            project.style.opacity = '1';
            project.style.transform = 'none';
        });
    }

    // ===================================
    // EMAIL LINK ANALYTICS (OPTIONAL)
    // ===================================

    const emailLink = document.querySelector('a[href^="mailto:"]');
    if (emailLink) {
        emailLink.addEventListener('click', () => {
            // Optional: Add analytics tracking here
            console.log('Email link clicked');
        });
    }

    // ===================================
    // PARALLAX EFFECT ON SCROLL
    // ===================================

    if (!prefersReducedMotion.matches) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroContent = document.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
                heroContent.style.opacity = 1 - (scrolled / 500);
            }
        });
    }
});
