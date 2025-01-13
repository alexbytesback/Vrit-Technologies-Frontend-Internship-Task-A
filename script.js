document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.card');
    let isDragging = false;
    let startY;
    let scrollTop;

    // Function to update active card based on scroll position
    function updateActiveCard() {
        const containerCenter = carousel.offsetHeight / 2;
        let closestCard = null;
        let minDistance = Infinity;

        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.top + rect.height / 2;
            const distance = Math.abs(cardCenter - containerCenter);

            if (distance < minDistance) {
                minDistance = distance;
                closestCard = card;
            }

            // Remove active class from all cards
            card.classList.remove('active');
        });

        // Add active class to the card closest to center
        if (closestCard) {
            closestCard.classList.add('active');
        }
    }

    // Initialize first active card
    updateActiveCard();

    // Update active card on scroll
    carousel.addEventListener('scroll', () => {
        requestAnimationFrame(updateActiveCard);
    });

    // Dragging functionality
    carousel.addEventListener('mousedown', (e) => {
        isDragging = true;
        carousel.style.cursor = 'grabbing';
        startY = e.pageY - carousel.offsetTop;
        scrollTop = carousel.scrollTop;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        e.preventDefault();
        const y = e.pageY - carousel.offsetTop;
        const walk = (y - startY) * 2;
        carousel.scrollTop = scrollTop - walk;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        carousel.style.cursor = '';
    });

    // Touch events for mobile
    carousel.addEventListener('touchstart', (e) => {
        isDragging = true;
        startY = e.touches[0].pageY - carousel.offsetTop;
        scrollTop = carousel.scrollTop;
    });

    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;

        const y = e.touches[0].pageY - carousel.offsetTop;
        const walk = (y - startY) * 2;
        carousel.scrollTop = scrollTop - walk;
    });

    document.addEventListener('touchend', () => {
        isDragging = false;
    });
});
