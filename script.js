const images = [
    'linux.jpg',
    'microsoft office 2021.jpg',
    'tech.jpg',
    'techno.jpg',
    'windows10.jpg',
    'windows11.jpg',
    'kalilinux.jpg'
];

let index = 0;

// Preload images
images.forEach(src => {
    const img = new Image();
    img.src = src;
});

function createImageDiv(src) {
    const imgDiv = document.createElement('div');
    imgDiv.className = 'fade';
    imgDiv.style.backgroundImage = `url(${src})`;
    return imgDiv;
}

function setupSlideshow() {
    const slideshow = document.querySelector('.background-slideshow');

    // Create and append image divs
    images.forEach((src, idx) => {
        const imgDiv = createImageDiv(src);
        if (idx !== 0) imgDiv.classList.remove('active'); // Make only the first one active
        slideshow.appendChild(imgDiv);
    });
}

function changeBackground() {
    const slides = document.querySelectorAll('.fade');
    const currentSlide = slides[index];
    
    // Fade out the current slide
    currentSlide.classList.remove('active');
    
    index = (index + 1) % slides.length; // Loop back to the first image
    const nextSlide = slides[index];
    
    // Fade in the next slide
    nextSlide.classList.add('active');
}

setupSlideshow();
setInterval(changeBackground, 10000); // Change background every 10 seconds
