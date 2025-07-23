const greeting = document.createElement('p');
const hour = new Date().getHours();
if (hour < 12) {
  greeting.textContent = "Good morning, hydration hero!";
} else if (hour < 18) {
  greeting.textContent = "Good afternoon, water warrior!";
} else {
  greeting.textContent = "Good evening, wave rider!";
}
greeting.style.textAlign = "center";
greeting.style.fontWeight = "bold";
document.addEventListener("DOMContentLoaded", () => {
  document.body.insertBefore(greeting, document.querySelector("main"));
});

const images = [
  "download (2).jpeg",
  "Water.jpg",
  "images (3).jpeg",
  "nolo.jpeg",
  "yoyo.jpg"
];
let index = 0;

function showImage() {
  const img = document.getElementById("carousel");
  img.src = images[index];
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage();
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}

window.nextImage = nextImage;
window.prevImage = prevImage;
