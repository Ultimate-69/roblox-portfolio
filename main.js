// Page Loading Animation
document.addEventListener('DOMContentLoaded', function() {
    // Remove loading animation code
    
    // Add interactive text animations
    addTextAnimations();
    
    // Add particle background effect
    createParticleBackground();
});

// Text animation for intro paragraphs
function addTextAnimations() {
    const introParagraphs = document.querySelectorAll('.intro p');
    
    if (introParagraphs.length > 0) {
        introParagraphs.forEach((p, index) => {
            p.style.opacity = '0';
            p.style.transform = 'translateY(20px)';
            p.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                p.style.opacity = '1';
                p.style.transform = 'translateY(0)';
            }, 300 + (index * 300));
        });
    }
    
    // Add gold text effect to specific elements
    const headings = document.querySelectorAll('h1, h2');
    headings.forEach(heading => {
        if (heading.textContent.includes('Ultimate')) {
            const text = heading.innerHTML;
            const modifiedText = text.replace('Ultimate', '<span class="gold-text">Ultimate</span>');
            heading.innerHTML = modifiedText;
        }
    });
}

// Create particle background
function createParticleBackground() {
    // Only create if not already exists
    if (document.querySelector('.particles-js')) return;
    
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-js';
    particlesContainer.style.position = 'fixed';
    particlesContainer.style.top = '0';
    particlesContainer.style.left = '0';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.zIndex = '-2';
    particlesContainer.style.pointerEvents = 'none';
    
    document.body.appendChild(particlesContainer);
    
    // Create and animate particles
    for (let i = 0; i < 30; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    
    // Random size between 2-5px
    const size = Math.random() * 3 + 2;
    
    // Position randomly
    const xPos = Math.random() * 100;
    const yPos = Math.random() * 100;
    
    // Random animation duration between 20-40s
    const duration = Math.random() * 20 + 20;
    
    // Style the particle
    particle.style.position = 'absolute';
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = 'rgba(212, 175, 55, 0.2)';
    particle.style.borderRadius = '50%';
    particle.style.top = `${yPos}%`;
    particle.style.left = `${xPos}%`;
    
    // Add animation
    particle.style.animation = `float ${duration}s ease-in-out infinite`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    
    container.appendChild(particle);
}

// Add hover effects to list items
document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('li');
    
    listItems.forEach(item => {
        item.classList.add('interactive-element');
    });
    
    // Add CTA button to home page if it exists
    const homeIntro = document.querySelector('.intro');
    if (homeIntro) {
        const ctaButton = document.createElement('a');
        ctaButton.href = 'contact.html';
        ctaButton.className = 'cta-btn';
        ctaButton.textContent = 'Hire Me';
        
        homeIntro.appendChild(ctaButton);
    }
});

/*// Project card hover effect (for projects.js)
function setupProjectCards() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const cardGlow = document.createElement('div');
            cardGlow.className = 'card-glow';
            cardGlow.style.position = 'absolute';
            cardGlow.style.inset = '0';
            cardGlow.style.boxShadow = 'inset 0 0 20px rgba(212, 175, 55, 0.5)';
            cardGlow.style.borderRadius = '8px';
            cardGlow.style.opacity = '0';
            cardGlow.style.transition = 'opacity 0.3s ease';
            
            card.appendChild(cardGlow);
            
            setTimeout(() => {
                cardGlow.style.opacity = '1';
            }, 10);
        });
        
        card.addEventListener('mouseleave', () => {
            const cardGlow = card.querySelector('.card-glow');
            if (cardGlow) {
                cardGlow.style.opacity = '0';
                setTimeout(() => {
                    cardGlow.remove();
                }, 300);
            }
        });
    });
}

// Execute card setup for project pages
if (document.querySelector('.cards')) {
    document.addEventListener('DOMContentLoaded', setupProjectCards);
}*/

// Additional JavaScript for project and review cards
document.addEventListener('DOMContentLoaded', function() {
    // Setup projects if they exist
    setupProjects();
    
    // Setup reviews if they exist
    setupReviews();
});

function setupProjects() {
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.card');
    
    if (projectCards.length > 0) {
        projectCards.forEach(card => {
            // Add shimmer effect on hover
            card.addEventListener('mouseenter', function() {
                // Create shimmer element
                const shimmer = document.createElement('div');
                shimmer.className = 'card-shimmer';
                shimmer.style.position = 'absolute';
                shimmer.style.top = '0';
                shimmer.style.left = '-100%';
                shimmer.style.width = '50%';
                shimmer.style.height = '100%';
                shimmer.style.background = 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)';
                shimmer.style.transform = 'skewX(-25deg)';
                shimmer.style.zIndex = '1';
                shimmer.style.transition = 'left 0.7s ease-in-out';
                
                card.style.position = 'relative';
                card.style.overflow = 'hidden';
                card.appendChild(shimmer);
                
                // Animate shimmer
                setTimeout(() => {
                    shimmer.style.left = '200%';
                }, 10);
                
                // Remove shimmer after animation
                setTimeout(() => {
                    shimmer.remove();
                }, 700);
            });
        });
    }
}

function setupReviews() {
    // Add zoom effect to review images
    const reviews = document.querySelectorAll('.review');
    
    if (reviews.length > 0) {
        reviews.forEach(review => {
            // Add click feedback
            review.addEventListener('click', function() {
                review.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    review.style.transform = 'translateY(-5px)';
                }, 150);
            });
            
            // Add loading animation for images
            const img = review.querySelector('.review-img');
            if (img) {
                // Apply initial blur
                img.style.filter = 'blur(5px)';
                img.style.opacity = '0.7';
                
                // Clear blur when loaded
                img.onload = function() {
                    //img.style.transition = 'filter 0.5s ease, opacity 0.5s ease';
                    img.style.filter = 'blur(0)';
                    img.style.opacity = '1';
                };
                
                // If already loaded, clear blur immediately
                if (img.complete) {
                    img.style.filter = 'blur(0)';
                    img.style.opacity = '1';
                }
            }
        });
    }
}

// Optional: Add a view more/less button if there are many projects or reviews
function addViewMoreButton() {
    const projectsContainer = document.querySelector('.cards');
    const reviewsContainer = document.querySelector('.reviews');
    
    // For projects
    if (projectsContainer && projectsContainer.children.length > 6) {
        const projectCards = projectsContainer.querySelectorAll('.ref');
        
        // Hide projects beyond the first 6
        for (let i = 6; i < projectCards.length; i++) {
            projectCards[i].style.display = 'none';
        }
        
        // Create view more button
        const viewMoreBtn = document.createElement('button');
        viewMoreBtn.className = 'cta-btn view-more';
        viewMoreBtn.textContent = 'View More Projects';
        viewMoreBtn.style.margin = '2rem auto 0';
        viewMoreBtn.style.display = 'block';
        
        projectsContainer.parentNode.appendChild(viewMoreBtn);
        
        // Toggle view more/less
        let expanded = false;
        viewMoreBtn.addEventListener('click', function() {
            if (!expanded) {
                // Show all projects
                projectCards.forEach(card => {
                    card.style.display = 'block';
                });
                viewMoreBtn.textContent = 'View Less';
                expanded = true;
            } else {
                // Hide projects beyond the first 6
                for (let i = 6; i < projectCards.length; i++) {
                    projectCards[i].style.display = 'none';
                }
                viewMoreBtn.textContent = 'View More Projects';
                expanded = false;
                
                // Scroll back to top of projects
                const projectsTop = document.querySelector('.projects-title');
                if (projectsTop) {
                    projectsTop.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
    
    // For reviews - similar logic
    if (reviewsContainer && reviewsContainer.children.length > 6) {
        const reviewItems = reviewsContainer.querySelectorAll('a');
        
        // Hide reviews beyond the first 6
        for (let i = 6; i < reviewItems.length; i++) {
            reviewItems[i].style.display = 'none';
        }
        
        // Create view more button
        const viewMoreBtn = document.createElement('button');
        viewMoreBtn.className = 'cta-btn view-more';
        viewMoreBtn.textContent = 'View More Reviews';
        viewMoreBtn.style.margin = '2rem auto 0';
        viewMoreBtn.style.display = 'block';
        
        reviewsContainer.parentNode.appendChild(viewMoreBtn);
        
        // Toggle view more/less
        let expanded = false;
        viewMoreBtn.addEventListener('click', function() {
            if (!expanded) {
                // Show all reviews
                reviewItems.forEach(item => {
                    item.style.display = 'block';
                });
                viewMoreBtn.textContent = 'View Less';
                expanded = true;
            } else {
                // Hide reviews beyond the first 6
                for (let i = 6; i < reviewItems.length; i++) {
                    reviewItems[i].style.display = 'none';
                }
                viewMoreBtn.textContent = 'View More Reviews';
                expanded = false;
                
                // Scroll back to top of reviews
                const reviewsTop = document.querySelector('.reviews-title');
                if (reviewsTop) {
                    reviewsTop.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
}

// Call this function after the content is loaded
window.addEventListener('load', addViewMoreButton);