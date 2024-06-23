document.addEventListener('DOMContentLoaded', () => {
    const largeImage = document.getElementById('largeImage');
    const thumbnails = document.querySelectorAll('.thumbnails a');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', event => {
            event.preventDefault();
            const newSrc = thumbnail.getAttribute('href');
            largeImage.setAttribute('src', newSrc);
        });
    });
});
