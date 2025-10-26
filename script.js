document.addEventListener('DOMContentLoaded', () => {
    // Get modal elements
    const modalOverlay = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImageContent');
    const closeModal = document.getElementById('modalClose');

    // Get all images that should pop up
    const popupImages = document.querySelectorAll('.popup-image');

    // Add click event listener to each popup image
    popupImages.forEach(image => {
        image.addEventListener('click', () => {
            if (modalOverlay && modalImage) {
                modalImage.src = image.src; // Set the modal image source
                modalImage.alt = image.alt; // Set alt text for accessibility
                modalOverlay.classList.add('active'); // Show the modal
            }
        });
    });

    // Function to hide the modal
    function hideModal() {
        if (modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    }

    // Add click event listener to the close button
    if (closeModal) {
        closeModal.addEventListener('click', hideModal);
    }

    // Add click event listener to the overlay (to close if clicking outside the image)
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (event) => {
            // Only close if the direct target of the click is the overlay itself
            if (event.target === modalOverlay) {
                hideModal();
            }
        });
    }

    // Optional: Close modal with the Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
            hideModal();
        }
    });
});
