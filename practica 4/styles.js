document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const galleryImages = document.querySelectorAll('.gallery-image');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    let currentIndex = 0;

    function showImage(index) {
        currentIndex = index;
        lightboxImage.src = galleryImages[currentIndex].src;
        lightbox.style.display = 'flex';
    }

    galleryImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            showImage(index);
        });
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryImages.length - 1;
        showImage(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < galleryImages.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImage && e.target !== prevButton && e.target !== nextButton) {
            lightbox.style.display = 'none';
        }
    });
});
