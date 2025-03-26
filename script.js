let currentImageIndex = 1;
const totalImages = 5; // Change this to the total number of images you have

document.getElementById('next-button').addEventListener('click', function() {
    currentImageIndex++;
    if (currentImageIndex > totalImages) {
        currentImageIndex = 1; // Loop back to the first image
    }
    const imageElement = document.getElementById('slideshow-image');
    imageElement.style.opacity = 0; // Fade out effect
    setTimeout(() => {
        imageElement.src = `Image${currentImageIndex}.jpg`;
        imageElement.style.opacity = 1; // Fade in effect
    }, 500); // Match this duration with the CSS transition duration
});
