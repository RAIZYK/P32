document.addEventListener("DOMContentLoaded", function() {
    const icons = document.querySelectorAll('.icon');
    icons.forEach((icon, index) => {
        setTimeout(() => {
            icon.style.opacity = '1';
            icon.style.transform = 'translateY(0)';
        }, index * 500);
    });
});
