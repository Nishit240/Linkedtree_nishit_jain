document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    const cursorText = document.querySelector('.cursor-text');
    const modal = document.getElementById('contactModal');
    const portfolioBtn = document.getElementById('portfolioBtn');
    const portfolioContent = document.getElementById('portfolioContent');
    const arrow = document.getElementById('arrow');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const contactForm = document.getElementById('contactForm');

    // Cursor Physics State
    let mouseX = 0, mouseY = 0;
    let posX = 0, posY = 0;
    let velocityX = 0, velocityY = 0;

    // 🎮 PHYSICS ENGINE
    function animateCursor() {
        let dx = mouseX - posX;
        let dy = mouseY - posY;

        velocityX += dx * 0.08;
        velocityY += dy * 0.08;

        velocityX *= 0.75; // friction
        velocityY *= 0.75;

        posX += velocityX;
        posY += velocityY;

        // Cursor (sharp)
        if (cursor) {
            cursor.style.left = mouseX + "px";
            cursor.style.top = mouseY + "px";
        }

        // 🎮 follower (physics)
        if (follower) {
            follower.style.left = posX + "px";
            follower.style.top = posY + "px";

            // 🌊 Liquid distortion (stretch based on speed)
            const speed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);
            // Cap scale factors to prevent wild stretching
            const scaleX = Math.min(1 + speed * 0.02, 2.5);
            const scaleY = Math.max(1 - speed * 0.01, 0.4);

            follower.style.transform = `
                translate(-50%, -50%)
                scale(${scaleX}, ${scaleY})
                rotate(${velocityX * 2}deg)
            `;
        }

        if (cursorText) {
            cursorText.style.left = mouseX + "px";
            cursorText.style.top = mouseY + "px";
        }

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // 🧠 AI-LIKE REACTIONS
    const interactiveElements = document.querySelectorAll(
        'button, a, .portfolio-btn, .button-50, .button-51, .modal-close, input, textarea'
    );

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (cursor) cursor.classList.add('cursor-active');
            if (follower) follower.classList.add('cursor-follower-active');
            if (cursorText) cursorText.innerText = "";
        });

        el.addEventListener('mouseleave', () => {
            if (cursor) cursor.classList.remove('cursor-active');
            if (follower) follower.classList.remove('cursor-follower-active');
            if (cursorText) cursorText.innerText = "";
        });
    });

    // 🧲 MAGNETIC BUTTONS (stronger now)
    document.querySelectorAll('.portfolio-btn, button, a').forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = `translate(0px, 0px)`;
        });
    });

    // 💥 CLICK RIPPLE
    document.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.className = 'cursor-click';
        ripple.style.left = e.clientX + "px";
        ripple.style.top = e.clientY + "px";
        document.body.appendChild(ripple);

        setTimeout(() => ripple.remove(), 400);
    });

    // 📂 PORTFOLIO TOGGLE
    if (portfolioBtn && portfolioContent && arrow) {
        portfolioBtn.addEventListener('click', () => {
            const isActive = portfolioContent.classList.toggle('active');
            arrow.classList.toggle('rotate');
            portfolioBtn.setAttribute('aria-expanded', isActive.toString());
        });
    }

    // 📞 MODAL CONTROLS
    function openModal() {
        if (modal) {
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal() {
        if (modal) {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'auto';
        }
    }

    if (openModalBtn) openModalBtn.addEventListener('click', openModal);
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function (event) {
            if (event.target === modal) closeModal();
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // 📝 CONTACT FORM SUBMIT
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Thank you for reaching out! We will get back to you soon.');
            closeModal();
            contactForm.reset();
        });
    }

    // Add some subtle background animation
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Subtle parallax effect
            heroSection.style.backgroundPosition = `calc(50% + ${x * 0.05}px) calc(50% + ${y * 0.05}px)`;
        });
    }
});