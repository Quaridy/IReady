let currentImageIndex = 1;
const totalImages = 26; // Total number of images

document.getElementById('next-button').addEventListener('click', function() {
    currentImageIndex++;
    if (currentImageIndex > totalImages) {
        currentImageIndex = 1; // Loop back to the first image
    }
    updateImage();
});

document.getElementById('fullscreen-button').addEventListener('click', function() {
    toggleFullScreen();
});

function updateImage() {
    const imageElement = document.getElementById('slideshow-image');
    imageElement.style.opacity = 0; // Fade out effect
    setTimeout(() => {
        imageElement.src = `Image${currentImageIndex}.jpg`;
        imageElement.style.opacity = 1; // Fade in effect
    }, 500); // Match this duration with the CSS transition duration
}

function toggleFullScreen() {
    const imageElement = document.getElementById('slideshow-image');
    const fullscreenContainer = document.createElement('div');
    fullscreenContainer.classList.add('fullscreen');
    
    const fullscreenImage = document.createElement('img');
    fullscreenImage.src = imageElement.src;
    
    fullscreenContainer.appendChild(fullscreenImage);
    document.body.appendChild(fullscreen
