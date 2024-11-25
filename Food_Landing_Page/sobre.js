// script.js

let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelector('.slides');
  const totalSlides = slides.children.length;
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slides.style.transform = `translateY(-${currentSlide * 100}%)`;
}
