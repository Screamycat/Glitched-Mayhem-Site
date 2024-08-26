document.addEventListener("DOMContentLoaded", function () {
    // Get all portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(item => {
        // Find the image or iframe within the portfolio item
        const img = item.querySelector('img');
        const iframe = item.querySelector('iframe');
        
        let itemWidth = 0;

        if (img) {
            itemWidth = img.naturalWidth;
        } else if (iframe) {
            itemWidth = iframe.offsetWidth;
        }

        // Set a minimum width of 50px
        item.style.width = Math.max(itemWidth, 300) + 'px';
    });
});