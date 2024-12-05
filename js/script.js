const hero = document.getElementById('esileht');

// Pildid
const images = [
    "url('img/esileht.png')",
    "url('img/teenus10.png')",
    "url('img/teenus11.png')"
];

let currentImageIndex = 0;

// Piltide vahetamise funktsioon
function changeBGImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    hero.style.backgroundImage = images[currentImageIndex];
}

hero.style.backgroundImage = images[currentImageIndex];

// Ootab 3 sekundit
setInterval(changeBGImage, 3000);
