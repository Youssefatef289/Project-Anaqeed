    // Smooth scroll for navigation links
    document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('#navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Navigation smooth scroll
    const allNavLinks = document.querySelectorAll('.nav-link');
    allNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Header scroll effect
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        }
        
        lastScroll = currentScroll;
    });

    // Button click handlers
    const loginBtn = document.querySelector('.btn-outline');
    const contactBtns = document.querySelectorAll('.btn-primary, .btn-hero-primary');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            // Add your login functionality here
            console.log('Login clicked');
        });
    }
    
    contactBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Add your contact functionality here
            console.log('Contact clicked');
        });
    });

    // Hero buttons
    const exploreBtn = document.querySelector('.btn-hero-outline');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            // Scroll to services section or navigate
            const servicesSection = document.querySelector('#services');
            if (servicesSection) {
                servicesSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Accessibility icon click handler
    const accessibilityIcon = document.querySelector('.accessibility-icon');
    if (accessibilityIcon) {
        accessibilityIcon.addEventListener('click', function() {
            // Add accessibility menu toggle or language switcher
            console.log('Accessibility options clicked');
        });
    }

    // Scroll animation for all elements
    const scrollObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const scrollObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, scrollObserverOptions);

    // Special animations for hero elements
    const heroImage = document.querySelector('.hero-image');
    const heroText = document.querySelector('.hero-text');
    
    if (heroImage) {
        heroImage.classList.add('fade-in-left');
        scrollObserver.observe(heroImage);
    }
    
    if (heroText) {
        heroText.classList.add('fade-in-right');
        scrollObserver.observe(heroText);
    }

    // Animate sections headers
    const sectionHeaders = document.querySelectorAll(`
        .services-header,
        .about-title-section,
        .why-choose-header,
        .projects-header,
        .products-header,
        .blog-header,
        .clients-header
    `);
    sectionHeaders.forEach((header, index) => {
        header.classList.add('fade-in-up');
        header.style.transitionDelay = '0s';
        scrollObserver.observe(header);
    });

    // Animate about section elements
    const aboutImageWrapper = document.querySelector('.about-image-wrapper');
    const aboutTextWrapper = document.querySelector('.about-text-wrapper');
    if (aboutImageWrapper) {
        aboutImageWrapper.classList.add('fade-in-left');
        scrollObserver.observe(aboutImageWrapper);
    }
    if (aboutTextWrapper) {
        aboutTextWrapper.classList.add('fade-in-right');
        scrollObserver.observe(aboutTextWrapper);
    }

    // Animate about features
    const aboutFeatureItems = document.querySelectorAll('.about-feature-item');
    aboutFeatureItems.forEach((item, index) => {
        item.classList.add('fade-in-up');
        item.style.transitionDelay = `${index * 0.1}s`;
        scrollObserver.observe(item);
    });

    // Animate about buttons
    const aboutButtons = document.querySelector('.about-buttons');
    if (aboutButtons) {
        aboutButtons.classList.add('fade-in-up');
        aboutButtons.style.transitionDelay = '0.4s';
        scrollObserver.observe(aboutButtons);
    }

    // Animate all service cards with stagger
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.classList.add('fade-in-up');
        card.style.transitionDelay = `${(index % 3) * 0.15}s`;
        scrollObserver.observe(card);
    });

    // Animate services extra cards
    const servicesExtra = document.querySelector('.services-extra');
    if (servicesExtra) {
        const extraCards = servicesExtra.querySelectorAll('.service-card');
        extraCards.forEach((card, index) => {
            card.classList.add('fade-in-up');
            card.style.transitionDelay = `${index * 0.15}s`;
            scrollObserver.observe(card);
        });
    }

    // Animate services more button
    const servicesMoreBtn = document.querySelector('.services-more-btn');
    if (servicesMoreBtn) {
        servicesMoreBtn.classList.add('fade-in-up');
        scrollObserver.observe(servicesMoreBtn);
    }

    // Animate why-choose items individually with stagger
    const whyChooseItems = document.querySelectorAll('.why-choose-item');
    whyChooseItems.forEach((item, index) => {
        item.classList.add('fade-in-up');
        item.style.transitionDelay = `${index * 0.15}s`;
        scrollObserver.observe(item);
    });

    // Animate all product cards with stagger
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.classList.add('fade-in-up');
        card.style.transitionDelay = `${index * 0.2}s`;
        scrollObserver.observe(card);
    });

    // Animate all project cards with stagger
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.classList.add('fade-in-up');
        card.style.transitionDelay = `${(index % 3) * 0.15}s`;
        scrollObserver.observe(card);
    });

    // Animate projects more button
    const projectsMoreBtn = document.querySelector('.projects-more-btn');
    if (projectsMoreBtn) {
        projectsMoreBtn.classList.add('fade-in-up');
        scrollObserver.observe(projectsMoreBtn);
    }

    // Animate all blog cards with stagger
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach((card, index) => {
        card.classList.add('fade-in-up');
        card.style.transitionDelay = `${index * 0.2}s`;
        scrollObserver.observe(card);
    });

    // Animate blog more button
    const blogMoreBtn = document.querySelector('.blog-more-btn');
    if (blogMoreBtn) {
        blogMoreBtn.classList.add('fade-in-up');
        scrollObserver.observe(blogMoreBtn);
    }

    // Animate all client logos with stagger
    const clientLogos = document.querySelectorAll('.client-logo');
    clientLogos.forEach((logo, index) => {
        logo.classList.add('fade-in-up');
        logo.style.transitionDelay = `${index * 0.1}s`;
        scrollObserver.observe(logo);
    });

    // Animate clients pagination
    const clientsPagination = document.querySelector('.clients-pagination');
    if (clientsPagination) {
        clientsPagination.classList.add('fade-in-up');
        scrollObserver.observe(clientsPagination);
    }

    // Animate footer columns
    const footerColumns = document.querySelectorAll('.footer-column');
    footerColumns.forEach((column, index) => {
        column.classList.add('fade-in-up');
        column.style.transitionDelay = `${index * 0.15}s`;
        scrollObserver.observe(column);
    });

    // Animate footer copyright
    const footerCopyright = document.querySelector('.footer-copyright');
    if (footerCopyright) {
        footerCopyright.classList.add('fade-in-up');
        footerCopyright.style.transitionDelay = '0.5s';
        scrollObserver.observe(footerCopyright);
    }

    // Clients pagination
    const paginationDots = document.querySelectorAll('.pagination-dot');
    paginationDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            paginationDots.forEach(d => d.classList.remove('active'));
            this.classList.add('active');
            // Add carousel functionality here if needed
        });
    });

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Update active nav link
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                }
            }
        });
    });

    // Update active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

});
