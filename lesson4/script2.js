function changeImage(event, src) {
    event.preventDefault();
    document.getElementById('large-image').src = src;
}