// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved dark mode preference
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const darkModeEnabled = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', darkModeEnabled);
    
    // Add a smooth transition effect
    darkModeToggle.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        darkModeToggle.style.transform = 'rotate(0deg)';
    }, 300);
});

// Language Toggle (only if element exists)
const languageToggle = document.getElementById('languageToggle');
const langText = document.querySelector('.lang-text');
let currentLang = localStorage.getItem('language') || 'id'; // Default to Indonesian

if (langText) {
    // Set initial language
    langText.textContent = currentLang === 'id' ? 'ID' : 'EN';
    translatePage(currentLang);
}

if (languageToggle && langText) {
    languageToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'id' : 'en';
        langText.textContent = currentLang === 'en' ? 'EN' : 'ID';
        localStorage.setItem('language', currentLang);
        
        // Add animation
        languageToggle.style.transform = 'scale(0.9)';
        setTimeout(() => {
            languageToggle.style.transform = 'scale(1)';
        }, 200);
        
        // Translate content
        translatePage(currentLang);
    });
}

// Translation function
function translatePage(lang) {
    // Update document title
    if (lang === 'id') {
        document.title = 'Koneva - Tingkatkan Kehadiran Digital Anda';
    } else {
        document.title = 'Koneva - Elevate Your Digital Presence';
    }
    
    // Get all elements with data-lang attribute
    const elementsToTranslate = document.querySelectorAll('[data-lang]');
    
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            // Check if element is an input or textarea (for placeholders)
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                // For regular elements, update innerHTML to preserve <span> tags
                element.innerHTML = translations[lang][key];
            }
        }
    });
    
    // Handle placeholders with data-lang-placeholder attribute
    const placeholderElements = document.querySelectorAll('[data-lang-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-lang-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
}

// Services Tabs
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        
        // Remove active class from all buttons and panels
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));
        
        // Add active class to clicked button and corresponding panel
        button.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// Smooth scrolling for all links
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

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Testimonials Slider (only if testimonials exist)
const testimonialCards = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

if (testimonialCards.length > 0 && dots.length > 0) {
    function showSlide(index) {
        testimonialCards.forEach(card => card.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonialCards[index].classList.add('active');
        dots[index].classList.add('active');
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto-rotate testimonials
    setInterval(() => {
        currentSlide = (currentSlide + 1) % testimonialCards.length;
        showSlide(currentSlide);
    }, 5000);
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate service cards (disabled per request - animations handled in CSS now)
// removed automatic JS animation for service cards to keep layout static

// Animate portfolio items (only if present)
const portfolioItems = document.querySelectorAll('.portfolio-item');
if (portfolioItems.length > 0) {
    portfolioItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
}

// Animate feature items
const featureItems = document.querySelectorAll('.feature-item');
featureItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
});

// Contact Form Handling
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    
    // Show success message (you can customize this)
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    contactForm.reset();
    
    // Here you would typically send the data to a server
    // Example using fetch:
    /*
    fetch('/api/contact', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Message sent successfully!');
        contactForm.reset();
    })
    .catch(error => {
        alert('There was an error sending your message. Please try again.');
    });
    */
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroVisual && scrolled < 1000) {
        heroVisual.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// Counter animation for stats in mockup
const mockupStats = document.querySelectorAll('.mockup-stat .stat-info h4');
const mockupSection = document.querySelector('.hero-mockup');

const animateCounter = (element) => {
    const text = element.textContent;
    const hasPercent = text.includes('%');
    const hasPlus = text.includes('+');
    const target = parseInt(text);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            let displayValue = Math.floor(current);
            if (hasPercent) displayValue += '%';
            if (hasPlus) displayValue += '+';
            element.textContent = displayValue;
            requestAnimationFrame(updateCounter);
        } else {
            let displayValue = target;
            if (hasPercent) displayValue += '%';
            if (hasPlus) displayValue += '+';
            element.textContent = displayValue;
        }
    };
    
    updateCounter();
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            mockupStats.forEach(stat => animateCounter(stat));
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (mockupSection) {
    statsObserver.observe(mockupSection);
}

// Animate milestones on scroll
const milestones = document.querySelectorAll('.milestone');
milestones.forEach((milestone, index) => {
    milestone.style.opacity = '0';
    milestone.style.transform = 'translateX(-30px)';
    milestone.style.transition = `all 0.6s ease ${index * 0.15}s`;
    observer.observe(milestone);
});

// Animate value cards
const valueCards = document.querySelectorAll('.value-card');
valueCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'scale(0.9)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Remove service button code since buttons are removed

// CTA buttons
const ctaButtons = document.querySelectorAll('.cta-btn, .btn-primary');
ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (!button.closest('form')) {
            e.preventDefault();
            document.querySelector('#contact').scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to navigation items on scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Testimonial Slider
let slideIndex = 1;

// Make functions global
window.moveSlide = function(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

window.goToSlide = function(n) {
    slideIndex = n;
    showSlide(slideIndex);
}

showSlide(slideIndex);

function showSlide(n) {
    const slides = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0) return; // Guard clause
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    if (dots.length > 0) {
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        if (dots[slideIndex - 1]) dots[slideIndex - 1].classList.add('active');
    }
    
    if (slides[slideIndex - 1]) slides[slideIndex - 1].classList.add('active');
}

// Auto play testimonial slider
setInterval(() => {
    moveSlide(1);
}, 5000);

// Social links hover effect
const socialLinks = document.querySelectorAll('.social-links a');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) rotate(360deg)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0deg)';
    });
});



// Interactive Services
// Interactive Services - Robust Implementation
function toggleService(btn) {
    const details = btn.nextElementSibling;
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    
    // Toggle current
    btn.setAttribute('aria-expanded', !isExpanded);
    
    // Update button visual
    const icon = btn.querySelector('i');
    const text = btn.querySelector('span');
    
    if (!isExpanded) {
        // Expanding
        btn.classList.add('active');
        if(icon) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        }
        if(text) text.textContent = 'Tutup';
        
        details.hidden = false;
        details.style.display = 'block';
        
        // Small timeout to allow display transform to happen
        requestAnimationFrame(() => {
            details.classList.add('active');
            details.style.opacity = '1';
            details.style.transform = 'translateY(0)';
        });
    } else {
        // Collapsing
        btn.classList.remove('active');
        if(icon) {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
        if(text) text.textContent = 'Lihat Paket';
        
        details.classList.remove('active');
        details.style.opacity = '0';
        details.style.transform = 'translateY(-20px)';
        
        // Wait for animation to finish before hiding
        setTimeout(() => {
            details.hidden = true;
            details.style.display = 'none';
        }, 300);
    }
}

// Attach event listeners when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Client Logo Loop Logic
    const logoTrack = document.querySelector('.logo-track');
    if (logoTrack) {
        const logos = Array.from(logoTrack.children);
        // Only loop if more than 5 logos
        if (logos.length > 5) {
            // Clone logos for seamless loop
            logos.forEach(logo => {
                const clone = logo.cloneNode(true);
                logoTrack.appendChild(clone);
            });
            logoTrack.classList.add('animate');
        }
    }

    const toggleServiceBtns = document.querySelectorAll('.toggle-service-btn');

    toggleServiceBtns.forEach(btn => {
        // Remove old listeners to be safe (though cloning is better, consistent logic is enough)
        btn.onclick = (e) => {
            e.preventDefault();
            toggleService(btn);
        };
    });

    // WhatsApp Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Use FormData for reliable value retrieval
            const formData = new FormData(this);
            const name = formData.get('name') || '';
            const phone = formData.get('phone') || '';
            const company = formData.get('company') || '';
            const message = formData.get('message') || '';
            // Construct readable message
            // Note: encodeURIComponent handles special chars properly
            let waText = `Halo Koneva, saya ingin berkonsultasi.\n\n`;
            waText += `*Nama:* ${name}\n`;
            waText += `*No. HP:* ${phone}\n`;
            waText += `*Perusahaan:* ${company}\n`;
            waText += `*Pesan:* ${message}`;
            
            // Encode the full message for URL
            const encodedText = encodeURIComponent(waText);
            
            // WhatsApp API URL
            const waUrl = `https://wa.me/6285166194191?text=${encodedText}`;
            
            // Open in new tab
            window.open(waUrl, '_blank');
            
            // Optional: Reset form
            this.reset();
        });
    }
});

