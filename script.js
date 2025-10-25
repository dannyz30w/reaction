// This file can be used for any interactive elements later on.
// For example, if you want a "load more" button for articles, or a slideshow.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded!');
    // Example: Add a click listener to the 'More' button on the homepage
    const moreButton = document.querySelector('.more-button');
    if (moreButton) {
        moreButton.addEventListener('click', () => {
            alert('Loading more articles! (This would typically navigate to another page or load more content dynamically)');
            // You could navigate: window.location.href = 'past-editions.html';
        });
    }
});
