document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const navLinks = document.querySelector('.nav-links');

    menuButton.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuButton.classList.toggle('active');
    });

    // Star Rating Functionality
    const starRatings = document.querySelectorAll('.star-rating');

    starRatings.forEach(rating => {
        const stars = rating.querySelectorAll('.star');

        stars.forEach(star => {
            star.addEventListener('click', () => {
                const value = parseInt(star.getAttribute('data-value'));
                rating.setAttribute('data-rating', value);
                updateStars(rating, value);
            });

            star.addEventListener('mouseover', () => {
                const value = parseInt(star.getAttribute('data-value'));
                updateStars(rating, value);
            });

            star.addEventListener('mouseout', () => {
                const currentRating = parseInt(rating.getAttribute('data-rating'));
                updateStars(rating, currentRating);
            });
        });
    });

    function updateStars(rating, value) {
        const stars = rating.querySelectorAll('.star');
        stars.forEach(star => {
            const starValue = parseInt(star.getAttribute('data-value'));
            if (starValue <= value) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }
});

