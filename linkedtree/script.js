// Custom cursor functionality
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');

    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    // Smooth follower effect
    setTimeout(() => {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    }, 50);
});

// Handle form submission (keeping existing functionality)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (!name || !email || !message) {
        showResponse('Please fill in all fields', 'error');
        return;
    }

    // Here you would typically send to a backend service
    // For demo, we'll simulate success
    showResponse('Message sent successfully!', 'success');

    // Reset form
    this.reset();
});

function showResponse(message, type) {
    const responseDiv = document.getElementById('formResponse');
    responseDiv.textContent = message;
    responseDiv.className = `form-response ${type}`;
    responseDiv.style.display = 'block';

    // Hide after 3 seconds
    setTimeout(() => {
        responseDiv.style.display = 'none';
    }, 3000);
}

// Add some subtle animation to links on load
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link-card');
    links.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
        setTimeout(() => {
            link.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 100 * (index + 1));
    });

    // Animate profile card
    const profileCard = document.querySelector('.profile-card');
    profileCard.style.opacity = '0';
    profileCard.style.transform = 'scale(0.9)';
    setTimeout(() => {
        profileCard.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        profileCard.style.opacity = '1';
        profileCard.style.transform = 'scale(1)';
    }, 300);
});