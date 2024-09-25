const images = [
    'linux.jpg',
    'microsoftoffice2021.jpg',
    'tech.jpg',
    'techno.jpg',
    'windows10.jpg',
    'windows11.jpg',
    'kalilinux.jpg'
];

let index = 0;

function changeBackground() {
    const slideshow = document.querySelector('.background-slideshow');
    slideshow.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length; // Loop back to the first image
}

setInterval(changeBackground, 5000); // Change background every 3 seconds
changeBackground(); // Set initial background
