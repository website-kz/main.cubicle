// Smooth scroll functionality for BEGIN button
document.addEventListener('DOMContentLoaded', function() {
    const beginBtn = document.getElementById('beginBtn');
    const productsSection = document.getElementById('products');
    
    beginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Add a subtle animation to the button
        beginBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            beginBtn.style.transform = '';
        }, 150);
        
        // Smooth scroll to products section
        productsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
    
    // Add hover effects for interactive elements
    const websiteButtons = document.querySelectorAll('.website-button');
    websiteButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(0,0,0,0.1)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';
            
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (rect.width - size) / 2 + 'px';
            ripple.style.top = (rect.height - size) / 2 + 'px';
            
            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add parallax effect to the cube logo
    const cubeLogo = document.querySelector('.cube-logo');
    let ticking = false;
    
    function updateCubeRotation() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (cubeLogo) {
            cubeLogo.style.transform = `translateY(${rate * 0.1}px) rotate(${rate * 0.02}deg)`;
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateCubeRotation);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
    
    // Add contact item click handlers
    const emailContact = document.querySelector('.contact-item:nth-child(1)');
    const phoneContact = document.querySelector('.contact-item:nth-child(2)');
    
    if (emailContact) {
        emailContact.addEventListener('click', function() {
            window.open('mailto:cubicletm@hotmail.com', '_blank');
        });
        emailContact.style.cursor = 'pointer';
    }
    
    if (phoneContact) {
        phoneContact.addEventListener('click', function() {
            window.open('https://wa.me/14753551439', '_blank');
        });
        phoneContact.style.cursor = 'pointer';
    }
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .contact-item:hover {
        cursor: pointer;
    }
    
    .website-button {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Add smooth scrolling for all anchor links
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

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
