document.addEventListener('DOMContentLoaded', () => {

    const modalOverlay = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImageContent');
    const closeModal = document.getElementById('modalClose');


    const popupImages = document.querySelectorAll('.popup-image');


    popupImages.forEach(image => {
        image.addEventListener('click', () => {
            if (modalOverlay && modalImage) {
                modalImage.src = image.src; // Set the modal image source
                modalImage.alt = image.alt; // Set alt text for accessibility
                modalOverlay.classList.add('active'); // Show the modal
            }
        });
    });


    function hideModal() {
        if (modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    }


    if (closeModal) {
        closeModal.addEventListener('click', hideModal);
    }


    if (modalOverlay) {
        modalOverlay.addEventListener('click', (event) => {
            // Only close if the direct target of the click is the overlay itself
            if (event.target === modalOverlay) {
                hideModal();
            }
        });
    }


    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
            hideModal();
        }
    });
});
