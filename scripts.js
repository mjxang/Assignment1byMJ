// Dynamic Gallery
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-img');
    const mainImage = document.getElementById('main-image');

    images.forEach(image => {
        image.addEventListener('click', () => {
            mainImage.src = image.src;
        });
    });
});

// Contact Form Validation
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            event.preventDefault();
        }
    });
});

// Simple Animation
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    header.style.transition = 'background-color 0.5s ease';
    header.addEventListener('mouseover', () => {
        header.style.backgroundColor = '#ff1493';
    });
    header.addEventListener('mouseout', () => {
        header.style.backgroundColor = '#ff69b4';
    });
});
let xOffset = 0;
let isMouseIn = false;
const slides = document.getElementById("slides");

setInterval(translate, 0);

function translate() {
  let offsetIncrementor = isMouseIn ? 0.05 : 0.2;
  if (xOffset >= 258 * 7) xOffset = 0;
  else xOffset = xOffset + offsetIncrementor;
  slides.style.transform = "translateX(-" + xOffset + "px)";
}

slides.addEventListener("mouseover", function (event) {
  isMouseIn = true;
});

slides.addEventListener("mouseout", function (event) {
  isMouseIn = false;
});
