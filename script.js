/* ---------------------------
   script.js — Cleaned & Fixed
   Replace your current file with this
   --------------------------- */

/* ---------- Utility / Shared ---------- */
function showNotification(message) {
    // Avoid creating duplicate style tags
    if (!document.getElementById('notification-keyframes')) {
        const style = document.createElement('style');
        style.id = 'notification-keyframes';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(79, 70, 229, 0.95);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        backdrop-filter: blur(6px);
        font-weight: 600;
    `;
    document.body.appendChild(notification);

    // Remove after 3s with slide out
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.35s ease-in';
        setTimeout(() => {
            if (notification.parentNode) notification.parentNode.removeChild(notification);
        }, 350);
    }, 3000);
}

/* ---------- Email Sending ---------- */
function sendmail() {
    const parms = {
        name: document.getElementById('name')?.value || '',
        email: document.getElementById('email')?.value || '',
        phone: document.getElementById('phone')?.value || '',
        subject: document.getElementById('subject')?.value || '',
        message: document.getElementById('message')?.value || ''
    };

    // Ensure emailjs is loaded
    if (typeof emailjs === 'undefined') {
        showNotification('Email service not available.');
        return;
    }

    emailjs.send("service_2f3ps2e", "template_2rilelu", parms)
        .then(() => {
            alert("Email has been sent");
        })
        .catch(err => {
            console.error('EmailJS error:', err);
            alert("Failed to send email. Try again later.");
        });
}

/* ---------- Interactive Actions ---------- */
// provide event param explicitly where needed
function handleCardAction(event, type) {
    const card = event?.target?.closest('.service-card');
    if (!card) return;

    // subtle pulse + float effect
    card.style.transform = 'scale(0.98)';
    setTimeout(() => card.style.transform = 'translateY(-10px)', 150);

    showNotification(`Exploring ${type} features...`);
}

function handleCtaClick(event) {
    const button = event?.target;
    if (!button) return;

    button.style.transform = 'scale(0.95)';
    setTimeout(() => button.style.transform = 'translateY(-3px)', 150);

    // Navigate to contact page
    window.location.href = 'contact.html';
}

/* ---------- Image Slider Class ---------- */
class ImageSlider {
    constructor() {
        this.sliderWrapper = document.querySelector('.slider-wrapper');
        this.slides = document.querySelectorAll('.slider-slide');
        this.prevBtn = document.querySelector('.slider-prev');
        this.nextBtn = document.querySelector('.slider-next');
        this.dotsContainer = document.querySelector('.slider-dots');
        this.currentIndex = 0;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 5000;
        this.init();
    }

    init() {
        if (!this.sliderWrapper || this.slides.length === 0) return;
        // Create dots dynamically (avoid duplicates)
        if (this.dotsContainer && this.dotsContainer.children.length === 0) {
            for (let i = 0; i < this.slides.length; i++) {
                const dot = document.createElement('div');
                dot.classList.add('slider-dot');
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => this.goToSlide(i));
                this.dotsContainer.appendChild(dot);
            }
        }
        // Update slides
        this.updateSlides();

        // Event listeners
        this.prevBtn?.addEventListener('click', () => this.prevSlide());
        this.nextBtn?.addEventListener('click', () => this.nextSlide());

        // Auto-play + pause on hover
        this.startAutoPlay();
        const sliderContainer = document.querySelector('.slider-container');
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', () => this.stopAutoPlay());
            sliderContainer.addEventListener('mouseleave', () => this.startAutoPlay());
        }
    }

    updateSlides() {
        this.sliderWrapper.style.transform = `translateX(-${this.currentIndex * 100}%)`;
        this.slides.forEach((slide, i) => slide.classList.toggle('active', i === this.currentIndex));
        const dots = document.querySelectorAll('.slider-dot');
        dots.forEach((d, i) => d.classList.toggle('active', i === this.currentIndex));
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.updateSlides();
    }
    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.updateSlides();
    }
    goToSlide(i) {
        this.currentIndex = i;
        this.updateSlides();
    }
    startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => this.nextSlide(), this.autoPlayDelay);
    }
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

/* ---------- Lightbox ---------- */
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const zoomInBtn = document.querySelector('.lightbox-zoom-in');
    const zoomOutBtn = document.querySelector('.lightbox-zoom-out');
    const zoomResetBtn = document.querySelector('.lightbox-zoom-reset');

    if (!lightbox || !lightboxImg) return;

    let currentZoom = 1;
    let isDragging = false;
    let startX = 0, startY = 0, currentX = 0, currentY = 0;

    // Delegated click for product & slider images
    document.addEventListener('click', (ev) => {
        const el = ev.target;
        // open lightbox only when clicking product images or slider images
        if (el.matches('.product img, .slider-slide img')) {
            lightboxImg.src = el.src;
            lightboxImg.alt = el.alt || '';
            resetZoom();
            lightbox.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    });

    function updateZoomTransform() {
        lightboxImg.style.transform = `scale(${currentZoom}) translate(${currentX}px, ${currentY}px)`;
    }
    function zoomIn() { currentZoom = Math.min(currentZoom * 1.2, 5); updateZoomTransform(); }
    function zoomOut() { currentZoom = Math.max(currentZoom / 1.2, 0.5); updateZoomTransform(); }
    function resetZoom() { currentZoom = 1; currentX = 0; currentY = 0; updateZoomTransform(); }

    zoomInBtn?.addEventListener('click', (e) => { e.stopPropagation(); zoomIn(); });
    zoomOutBtn?.addEventListener('click', (e) => { e.stopPropagation(); zoomOut(); });
    zoomResetBtn?.addEventListener('click', (e) => { e.stopPropagation(); resetZoom(); });

    // Dragging (desktop)
    lightboxImg.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX - currentX;
        startY = e.clientY - currentY;
        lightboxImg.style.cursor = 'grabbing';
        e.preventDefault();
    });
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        currentX = e.clientX - startX;
        currentY = e.clientY - startY;
        updateZoomTransform();
    });
    document.addEventListener('mouseup', () => {
        isDragging = false;
        lightboxImg.style.cursor = 'grab';
    });

    // Touch events for mobile (pan & pinch simplified)
    lightboxImg.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            isDragging = true;
            startX = e.touches[0].clientX - currentX;
            startY = e.touches[0].clientY - currentY;
        }
    }, { passive: false });
    lightboxImg.addEventListener('touchmove', (e) => {
        if (e.touches.length === 1 && isDragging) {
            currentX = e.touches[0].clientX - startX;
            currentY = e.touches[0].clientY - startY;
            updateZoomTransform();
        }
    }, { passive: false });
    lightboxImg.addEventListener('touchend', () => { isDragging = false; });

    // Close handlers
    closeBtn?.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

    // wheel zoom
    lightbox.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (e.deltaY < 0) zoomIn(); else zoomOut();
    }, { passive: false });

    function closeLightbox() {
        lightbox.classList.remove('show');
        document.body.style.overflow = 'auto';
        resetZoom();
    }
}

/* ---------- Product Search (already pretty good) ---------- */
function initProductSearch() {
    const searchInput = document.getElementById('product-search');
    if (!searchInput) return;

    const isProductsPage = window.location.pathname.includes('products.html');
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    if (searchQuery) searchInput.value = searchQuery;

    searchInput.addEventListener('input', function () {
        const term = this.value.toLowerCase().trim();
        if (isProductsPage) {
            const productsNode = document.querySelectorAll('.product');
            let visibleCount = 0;
            productsNode.forEach(product => {
                const name = product.querySelector('h3')?.textContent.toLowerCase() || '';
                const desc = product.querySelector('p')?.textContent.toLowerCase() || '';
                const isVisible = name.includes(term) || desc.includes(term);
                product.style.display = isVisible ? 'block' : 'none';
                if (isVisible) visibleCount++;
            });

            let noResultsMsg = document.getElementById('no-results-msg');
            if (term && visibleCount === 0) {
                if (!noResultsMsg) {
                    noResultsMsg = document.createElement('div');
                    noResultsMsg.id = 'no-results-msg';
                    noResultsMsg.textContent = 'No products found matching your search.';
                    noResultsMsg.style.cssText = `text-align:center;padding:2rem;color:#666;font-size:1.1em;`;
                    const productsSection = document.querySelector('.products');
                    productsSection && productsSection.appendChild(noResultsMsg);
                }
            } else if (noResultsMsg) {
                noResultsMsg.remove();
            }
        } else {
            if (term) window.location.href = `products.html?search=${encodeURIComponent(term)}`;
        }
    });

    if (isProductsPage && searchQuery) {
        searchInput.dispatchEvent(new Event('input'));
    }
}

/* ---------- Intersection Observers (animations + lazy load) ---------- */
function initObservers() {
    // Animation observer
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('animate');
        });
    }, observerOptions);
    document.querySelectorAll('[data-animation]').forEach(el => observer.observe(el));

    // Lazy load images that use data-src
    const imageObserver = new IntersectionObserver((entries, imgObs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                }
                imgObs.unobserve(img);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

/* ---------- Full-page network canvas (keeps your existing implementation) ---------- */
(function initNetworkCanvas() {
    const canvas = document.getElementById('networkCanvasBackground');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    function resizeCanvas(){ canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resizeCanvas();

    const nodes = [];
    const numNodes = 50;
    for (let i = 0; i < numNodes; i++) {
        nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.7,
            vy: (Math.random() - 0.5) * 0.7
        });
    }

    function draw(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        for (let i=0;i<nodes.length;i++){
            for (let j=i+1;j<nodes.length;j++){
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < 250){
                    ctx.strokeStyle = `rgba(0, 200, 255, ${0.7 - dist/300})`;
                    ctx.lineWidth = 1.2;
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.stroke();
                }
            }
        }
        nodes.forEach(n => {
            ctx.fillStyle = 'rgba(0, 255, 200, 0.9)';
            ctx.beginPath();
            ctx.arc(n.x, n.y, 3.5, 0, Math.PI*2);
            ctx.fill();
            n.x += n.vx; n.y += n.vy;
            if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
            if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
        });
        requestAnimationFrame(draw);
    }
    draw();
    window.addEventListener('resize', resizeCanvas);
})();

/* ---------- Product Filtering (fixed placement) ---------- */
function initProductFiltering() {
    const filterButtons = document.querySelectorAll(".filter-buttons button");
    const products = Array.from(document.querySelectorAll(".product"));

    if (!filterButtons.length || !products.length) return;

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // active state
            document.querySelector(".filter-buttons .active")?.classList.remove("active");
            btn.classList.add("active");

            const filter = btn.getAttribute("data-filter");

            products.forEach(product => {
                const category = product.getAttribute("data-category") || 'others';
                if (filter === "all" || filter === category) {
                    // use class to allow CSS animations if desired
                    product.style.display = 'block';
                    product.classList.add('visible');
                } else {
                    product.style.display = 'none';
                    product.classList.remove('visible');
                }
            });
        });
    });
}

/* ---------- Page init (single place) ---------- */
document.addEventListener('DOMContentLoaded', function () {
    // Fade-in of body (keeps your effect)
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.45s ease-in-out';
    setTimeout(() => document.body.style.opacity = '1', 80);

    // Video title rotation (guarded)
    const videoTitles = [
        "Welcome to DEBOBI's Enterprises",
        "Get a device that suits you",
        "Have your device repaired"
    ];
    let currentTitleIndex = 0;
    const videoTitleElement = document.querySelector('.video-title');
    if (videoTitleElement) {
        videoTitleElement.textContent = videoTitles[currentTitleIndex];
        setInterval(() => {
            currentTitleIndex = (currentTitleIndex + 1) % videoTitles.length;
            videoTitleElement.style.opacity = '0';
            setTimeout(() => {
                videoTitleElement.textContent = videoTitles[currentTitleIndex];
                videoTitleElement.style.opacity = '1';
            }, 450);
        }, 5000);
    }

    // Smooth navigation fade for .html links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href) return;
            if (!href.startsWith('#') && href.endsWith('.html')) {
                e.preventDefault();
                document.body.style.opacity = '0';
                setTimeout(() => { window.location.href = href; }, 300);
            }
        });
    });

    // Hover effects for service cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Initialize components
    try { new ImageSlider(); } catch (e) { console.warn('Slider init failed', e); }
    try { initLightbox(); } catch (e) { console.warn('Lightbox init failed', e); }
    try { initProductSearch(); } catch (e) { console.warn('Product search init failed', e); }
    try { initObservers(); } catch (e) { console.warn('Observers init failed', e); }
    try { initProductFiltering(); } catch (e) { console.warn('Filter init failed', e); }

    // AOS config (if AOS is loaded)
    if (typeof AOS !== 'undefined') {
        AOS.init({ once: true, mirror: false });
    }
});
