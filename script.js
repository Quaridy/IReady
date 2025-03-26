let currentImageIndex = 1;
const totalImages = 8; // Change this to the total number of images you have

document.getElementById('next-button').addEventListener('click', function() {
    currentImageIndex++;
    if (currentImageIndex > totalImages) {
        currentImageIndex = 1; // Loop back to the first image
    }
    document.getElementById('slideshow-image').src = `Image${currentImageIndex}.jpg`;
});
