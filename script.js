const images = [
    'Image1.jpg',
    'Image2.jpg',
    'Image3.jpg',
    'Image4.jpg',
    'Image5.jpg',
    'Image6.jpg',
    'Image7.jpg',
    'Image8.jpg'
];

let currentIndex = 0;

const imageElement = document.getElementById('image');
const nextBtn = document.getElementById('nextBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
    imageElement.src = images[currentIndex];
});

fullscreenBtn.addEventListener('click', () => {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
    }
});
