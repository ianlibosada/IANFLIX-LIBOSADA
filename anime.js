function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');

    // Pause the video and reset when closing the trailer
    if (trailer.classList.contains('active')) {
        video.pause();
        video.currentTime = 0;
    }

    // Toggle the trailer visibility
    trailer.classList.toggle('active');
}

function playTrailer() {
    // Find the active carousel item
    const activeSlide = document.querySelector('.carousel-item.active');
    const video = document.querySelector('video');

    if (activeSlide) {
        const trailerUrl = activeSlide.getAttribute('data-trailer');

        if (trailerUrl) {
            // Set the video source dynamically
            video.src = trailerUrl;
            toggleVideo(); // Show the trailer
        } else {
            console.error('Trailer URL not found for the active slide.');
        }
    } else {
        console.error('No active slide found.');
    }
}

function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');

    // Set the banner background
    banner.style.background = `url("animeimages/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    // Update the active content based on the title
    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });
}

// Initialize the carousel
document.addEventListener('DOMContentLoaded', function () {
    const carouselElems = document.querySelectorAll('.carousel');
    const carouselInstances = M.Carousel.init(carouselElems, { fullWidth: true });

    // Add click events to carousel items
    document.querySelectorAll('.carousel-item').forEach((item) => {
        item.addEventListener('click', () => {
            // Remove active class from all items
            document.querySelectorAll('.carousel-item').forEach(slide => slide.classList.remove('active'));

            // Add active class to the clicked item
            item.classList.add('active');
        });
    });
});
