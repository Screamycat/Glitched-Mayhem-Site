const contactContainer = document.querySelector('.contact-container');
const contactDropdown = document.querySelector('.contact-dropdown');
let hideTimeout;

contactContainer.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
    contactDropdown.style.display = 'block';
    setTimeout(() => {
        contactDropdown.style.opacity = '1';
        contactDropdown.style.visibility = 'visible';
    }, 10); // Slight delay to ensure the display change is recognized
});

contactContainer.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
        contactDropdown.style.opacity = '0';
        contactDropdown.style.visibility = 'hidden';
        setTimeout(() => {
            contactDropdown.style.display = 'none';
        }, 300); // Matches the transition duration in CSS
    }, 300); // Delay before starting the hide animation
});

contactDropdown.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
});

contactDropdown.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
        contactDropdown.style.opacity = '0';
        contactDropdown.style.visibility = 'hidden';
        setTimeout(() => {
            contactDropdown.style.display = 'none';
        }, 300); // Matches the transition duration in CSS
    }, 300); // Delay before starting the hide animation
});
