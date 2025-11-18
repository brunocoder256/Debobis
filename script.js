function sendmail(){
    let parms = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        phone : document.getElementById('phone').value,
        subject : document.getElementById('subject').value,
        message : document.getElementById('message').value,
    }

    emailjs.send("service_2f3ps2e" , "template_2rilelu", parms).then(alert("Email has been send"))
}
// Interactive functionality for services section
function handleCardAction(type) {
    const card = event.target.closest('.service-card');

    // Add a pulse effect
    card.style.transform = 'scale(0.98)';
    setTimeout(() => {
        card.style.transform = 'translateY(-10px)';
    }, 150);

    // Show feedback message
    showNotification(`Exploring ${type} features...`);
}

function handleCtaClick() {
    const button = event.target;

    // Add click animation
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'translateY(-3px)';
    }, 150);

    // Navigate to contact page
    window.location.href = 'contact.html';
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(79, 70, 229, 0.9);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
        backdrop-filter: blur(10px);
    `;

    // Add slide animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease-out reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}



// Image Slider Functionality
class ImageSlider {
    constructor() {
        this.sliderWrapper = document.querySelector('.slider-wrapper');
        this.slides = document.querySelectorAll('.slider-slide');
        this.prevBtn = document.querySelector('.slider-prev');
        this.nextBtn = document.querySelector('.slider-next');
        this.dots = document.querySelectorAll('.slider-dot');
        this.currentIndex = 0;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 5000; // 5 seconds

        this.init();
    }

    init() {
        if (!this.sliderWrapper || this.slides.length === 0) return;

        // Create dots dynamically
        const dotsContainer = document.querySelector('.slider-dots');
        if (dotsContainer) {
            for (let i = 0; i < this.slides.length; i++) {
                const dot = document.createElement('div');
                dot.classList.add('slider-dot');
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => this.goToSlide(i));
                dotsContainer.appendChild(dot);
            }
        }

        // Update dots reference
        this.dots = document.querySelectorAll('.slider-dot');

        // Set first slide as active
        this.slides[0].classList.add('active');

        // Add event listeners
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }

        // Start auto-play
        this.startAutoPlay();

        // Pause auto-play on hover
        const sliderContainer = document.querySelector('.slider-container');
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', () => this.stopAutoPlay());
            sliderContainer.addEventListener('mouseleave', () => this.startAutoPlay());
        }
    }

    updateSlides() {
        // Update slide positions
        this.sliderWrapper.style.transform = `translateX(-${this.currentIndex * 100}%)`;

        // Update active slide
        this.slides.forEach((slide, index) => {
            if (index === this.currentIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        // Update dots
        this.dots.forEach((dot, index) => {
            if (index === this.currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.updateSlides();
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.updateSlides();
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.updateSlides();
    }

    startAutoPlay() {
        this.stopAutoPlay(); // Clear any existing interval
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoPlayDelay);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// Smooth fade-in effect for page navigation
document.addEventListener('DOMContentLoaded', function() {
    // Video title rotation
    const videoTitles = [
        "Welcome to DEBOBI's Enterprises",
        "Get a device that suits you",
        "Have your device repaired"
    ];

    let currentTitleIndex = 0;
    const videoTitleElement = document.querySelector('.video-title');

    function rotateVideoTitle() {
        if (videoTitleElement) {
            videoTitleElement.style.opacity = '0';
            setTimeout(() => {
                currentTitleIndex = (currentTitleIndex + 1) % videoTitles.length;
                videoTitleElement.textContent = videoTitles[currentTitleIndex];
                videoTitleElement.style.opacity = '1';
            }, 500);
        }
    }

    // Start rotating titles every 5 seconds
    setInterval(rotateVideoTitle, 5000);
    // Add fade-in animation to the body
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // Add smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            } else if (href.endsWith('.html')) {
                e.preventDefault();
                // Fade out before navigation
                document.body.style.opacity = '0';
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });

    // Add some interactive hover effects
    const cards = document.querySelectorAll('.service-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });



// Initialize image slider
    new ImageSlider();

// Initialize lightbox
    initLightbox();

    // Initialize product search
    initProductSearch();
});

function initProductSearch() {
    const searchInput = document.getElementById('product-search');
    if (!searchInput) return; // Only run on pages with search input

    // Check if on products page
    const isProductsPage = window.location.pathname.includes('products.html');

    // If there's a search query in URL, set it
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    if (searchQuery) {
        searchInput.value = searchQuery;
    }

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();

        if (isProductsPage) {
            // Filter products on products page
            const products = document.querySelectorAll('.product');
            let visibleCount = 0;

            products.forEach(product => {
                const productName = product.querySelector('h3').textContent.toLowerCase();
                const productDesc = product.querySelector('p').textContent.toLowerCase();
                const isVisible = productName.includes(searchTerm) || productDesc.includes(searchTerm);

                product.style.display = isVisible ? 'block' : 'none';
                if (isVisible) visibleCount++;
            });

            // Show message if no products found
            let noResultsMsg = document.getElementById('no-results-msg');
            if (searchTerm && visibleCount === 0) {
                if (!noResultsMsg) {
                    noResultsMsg = document.createElement('div');
                    noResultsMsg.id = 'no-results-msg';
                    noResultsMsg.textContent = 'No products found matching your search.';
                    noResultsMsg.style.cssText = `
                        text-align: center;
                        padding: 2rem;
                        color: #666;
                        font-size: 1.1em;
                    `;
                    const productsSection = document.querySelector('.products');
                    if (productsSection) {
                        productsSection.appendChild(noResultsMsg);
                    }
                }
            } else if (noResultsMsg) {
                noResultsMsg.remove();
            }
        } else {
            // On other pages, redirect to products page with search term
            if (searchTerm) {
                window.location.href = `products.html?search=${encodeURIComponent(searchTerm)}`;
            }
        }
    });

    // Trigger search if there's a query on products page
    if (isProductsPage && searchQuery) {
        searchInput.dispatchEvent(new Event('input'));
    }
}

// Lightbox functionality
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const zoomInBtn = document.querySelector('.lightbox-zoom-in');
    const zoomOutBtn = document.querySelector('.lightbox-zoom-out');
    const zoomResetBtn = document.querySelector('.lightbox-zoom-reset');

    let currentZoom = 1;
    let isDragging = false;
    let startX, startY, initialX, initialY;
    let currentX = 0, currentY = 0;

    // Add click event to all images that should open in lightbox
    const allImages = document.querySelectorAll('.slider-slide img, .product img');
    allImages.forEach(img => {
        img.addEventListener('click', function() {
            lightboxImg.src = this.src;
            lightboxImg.alt = this.alt;
            resetZoom();
            lightbox.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    // Zoom controls
    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            zoomIn();
        });
    }

    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            zoomOut();
        });
    }

    if (zoomResetBtn) {
        zoomResetBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            resetZoom();
        });
    }

    // Zoom functions
    function zoomIn() {
        currentZoom = Math.min(currentZoom * 1.2, 5); // Max zoom 5x
        updateZoom();
    }

    function zoomOut() {
        currentZoom = Math.max(currentZoom / 1.2, 0.5); // Min zoom 0.5x
        updateZoom();
    }

    function resetZoom() {
        currentZoom = 1;
        currentX = 0;
        currentY = 0;
        updateZoom();
    }

    function updateZoom() {
        lightboxImg.style.transform = `scale(${currentZoom}) translate(${currentX}px, ${currentY}px)`;
    }

    // Touch zoom for mobile
    let initialDistance = 0;
    let initialZoom = 1;

    lightboxImg.addEventListener('touchstart', function(e) {
        if (e.touches.length === 2) {
            e.preventDefault();
            initialDistance = getDistance(e.touches[0], e.touches[1]);
            initialZoom = currentZoom;
        } else if (e.touches.length === 1) {
            isDragging = true;
            startX = e.touches[0].clientX - currentX;
            startY = e.touches[0].clientY - currentY;
        }
    });

    lightboxImg.addEventListener('touchmove', function(e) {
        if (e.touches.length === 2) {
            e.preventDefault();
            const distance = getDistance(e.touches[0], e.touches[1]);
            const scale = distance / initialDistance;
            currentZoom = Math.min(Math.max(initialZoom * scale, 0.5), 5);
            updateZoom();
        } else if (e.touches.length === 1 && isDragging) {
            currentX = e.touches[0].clientX - startX;
            currentY = e.touches[0].clientY - startY;
            updateZoom();
        }
    });

    lightboxImg.addEventListener('touchend', function(e) {
        if (e.touches.length < 1) {
            isDragging = false;
        }
    });

    function getDistance(touch1, touch2) {
        const dx = touch1.clientX - touch2.clientX;
        const dy = touch1.clientY - touch2.clientY;
        return Math.sqrt(dx * dx + dy * dy);
    }

    // Mouse drag for desktop
    lightboxImg.addEventListener('mousedown', function(e) {
        e.preventDefault();
        isDragging = true;
        startX = e.clientX - currentX;
        startY = e.clientY - currentY;
        lightboxImg.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            currentX = e.clientX - startX;
            currentY = e.clientY - startY;
            updateZoom();
        }
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
        if (lightboxImg.style.cursor === 'grabbing') {
            lightboxImg.style.cursor = 'grab';
        }
    });

    // Mouse wheel zoom
    lightbox.addEventListener('wheel', function(e) {
        e.preventDefault();
        if (e.deltaY < 0) {
            zoomIn();
        } else {
            zoomOut();
        }
    });

    // Close lightbox when clicking close button
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close lightbox on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('show')) {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightbox.classList.remove('show');
        document.body.style.overflow = 'auto'; // Restore scrolling
        resetZoom();
    }
}

function viewProduct(id) {
    window.location.href = `product.html?id=${id}`;
}
