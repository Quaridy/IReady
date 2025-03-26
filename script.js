let currentImageIndex = 1;
const totalImages = 8; // Change this to the total number of images you have

const imageElement = document.getElementById('image');
const skipButton = document.getElementById('skipButton');
const fullscreenButton = document.getElementById('fullscreenButton');

function updateImage() {
    imageElement.src = `Image${currentImageIndex}.jpg`;
}

skipButton.addEventListener('click', () => {
    currentImageIndex++;
    if (currentImageIndex > totalImages) {
        currentImageIndex = 1; // Loop back to the first image
    }
    updateImage();
});

fullscreenButton.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
});

// Initialize the first image
updateImage();
