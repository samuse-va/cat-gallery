const sliderLine = document.querySelector('.slider-line');
let buttonNext = document.querySelector('.slider-next');
let buttonPrev = document.querySelector('.slider-prev');
let slides = document.querySelectorAll('.slide');

let offset = 0;

buttonNext.addEventListener('click', function() {
  offset += (slides[0].width + 10);
  if (offset > (slides.length - 5) * (slides[0].width + 10)) {
    buttonNext.classList.add('hidden');
    buttonPrev.onclick = function () {
      buttonNext.classList.remove('hidden');
    }
  }
 sliderLine.style.left = -offset + 'px';
});

buttonPrev.addEventListener('click', function() {
  offset -= (slides[0].width + 10);
  if (offset < (slides[0].width + 10)) {
    offset = 0;
    buttonPrev.classList.add('hidden');
    buttonNext.onclick = function () {
      buttonPrev.classList.remove('hidden');
    }
  }
  sliderLine.style.left = -offset + 'px';
});
