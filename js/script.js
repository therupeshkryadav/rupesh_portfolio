
// Dynamic Header Change on Scroll
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = '#333'; // Lighter black
    } else {
        header.style.background = '#000'; // Solid black
    }
});


