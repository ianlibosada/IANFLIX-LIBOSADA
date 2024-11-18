function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');

    
    if (trailer.classList.contains('active')) {
        video.pause();
        video.currentTime = 0;
    }

   
    trailer.classList.toggle('active');
}

function playTrailer() {
   
    const activeSlide = document.querySelector('.carousel-item.active');
    const video = document.querySelector('video');

    if (activeSlide) {
        const trailerUrl = activeSlide.getAttribute('data-trailer');

        if (trailerUrl) {
            
            video.src = trailerUrl;
            toggleVideo(); 
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

   
    banner.style.background = `url("lobot/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

   
    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });
}


document.addEventListener('DOMContentLoaded', function () {
    const carouselElems = document.querySelectorAll('.carousel');
    const carouselInstances = M.Carousel.init(carouselElems, { fullWidth: true });

    
    document.querySelectorAll('.carousel-item').forEach((item) => {
        item.addEventListener('click', () => {
            
            document.querySelectorAll('.carousel-item').forEach(slide => slide.classList.remove('active'));

            
            item.classList.add('active');
        });
    });
});
