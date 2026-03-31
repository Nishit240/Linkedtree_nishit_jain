document.addEventListener("DOMContentLoaded", () => {

    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    const cursorText = document.querySelector('.cursor-text');
    const modal = document.getElementById('contactModal');

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
        cursor.style.left = mouseX + "px";
        cursor.style.top = mouseY + "px";

        // 🎮 follower (physics)
        follower.style.left = posX + "px";
        follower.style.top = posY + "px";

        // 🌊 Liquid distortion (stretch based on speed)
        const speed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);
        const scaleX = 1 + speed * 0.02;
        const scaleY = 1 - speed * 0.01;

        follower.style.transform = `
            translate(-50%, -50%)
            scale(${scaleX}, ${scaleY})
            rotate(${velocityX * 2}deg)
        `;

        cursorText.style.left = mouseX + "px";
        cursorText.style.top = mouseY + "px";

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // 🧠 AI-LIKE REACTIONS
    document.querySelectorAll('button, a').forEach(el => {

        el.addEventListener('mouseenter', () => {

            cursor.classList.add('cursor-active');
            follower.classList.add('cursor-follower-active');
            cursorText.innerText = ""; // ❌ no text
        });

        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-active');
            follower.classList.remove('cursor-follower-active');
            cursorText.innerText = "";
        });
    });

    // 🧲 MAGNETIC BUTTONS (stronger now)
    document.querySelectorAll('.portfolio-btn, button, a').forEach(el => {

        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
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

    // Hover effects
    function addCursorEffects() {
        const elements = document.querySelectorAll(
            'button, a, .portfolio-btn, .button-50, .button-51, .modal-close'
        );

        elements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-active');
                cursorFollower.classList.add('cursor-follower-active');
            });

            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-active');
                cursorFollower.classList.remove('cursor-follower-active');
            });
        });
    }

   window.togglePortfolio = function () {
        const content = document.getElementById('portfolioContent');
        const arrow = document.getElementById('arrow');
        content.classList.toggle('active');
        arrow.classList.toggle('rotate');
    };

    window.openModal = function () {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.closeModal = function () {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    window.handleSubmit = function (event) {
        event.preventDefault();
        alert('Thank you for reaching out!');
        closeModal();
        event.target.reset();
    };

    // Modal close
    if (modal) {
        modal.addEventListener('click', function (event) {
            if (event.target === modal) closeModal();
        });
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') closeModal();
    });

});

        function togglePortfolio() {
            const content = document.getElementById('portfolioContent');
            const arrow = document.getElementById('arrow');

            content.classList.toggle('active');
            arrow.classList.toggle('rotate');
        }

/**
 * Opens the contact modal and hides the scrollbar on the body
 */
        function openModal() {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function handleSubmit(event) {
            event.preventDefault();
            alert('Thank you for reaching out! We will get back to you soon.');
            closeModal();
            event.target.reset();
        }

        // Close modal when clicking outside
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        });

        // Event listeners
        document.addEventListener('mousemove', updateCursor);
        document.addEventListener('DOMContentLoaded', addCursorEffects);

// Add some subtle background animation
        document.addEventListener('DOMContentLoaded', () => {
            const heroSection = document.querySelector('.hero-section');
            if (heroSection) {
                heroSection.addEventListener('mousemove', (e) => {
                    const rect = heroSection.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    // Subtle parallax effect
                    heroSection.style.backgroundPosition = `${x * 0.1}px ${y * 0.1}px`;
                });
            }
        });