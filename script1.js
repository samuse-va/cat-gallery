let buttonNext = document.querySelector('.slider-next');
let buttonPrev = document.querySelector('.slider-prev');

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
  showSlides(slideIndex += 1);
}

function prevSlide() {
  showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.slide');

    if (n != 1) {
      buttonPrev.classList.remove('hidden');
    } else {
      buttonPrev.classList.add('hidden');
    }

    if (n != slides.length) {
      buttonNext.classList.remove('hidden');
    } else {
      buttonNext.classList.add('hidden');
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}