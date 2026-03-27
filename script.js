
        const modal = document.getElementById('contactModal');

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