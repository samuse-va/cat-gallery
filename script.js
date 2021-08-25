let offset = 0;
const sliderLine = document.querySelector('.slider-line');
let buttonNext = document.querySelector('.slider-next');
let buttonPrev = document.querySelector('.slider-prev');

buttonNext.addEventListener('click', function() {
  offset += 256;
  if (offset > 636) {
    offset = 748;
    buttonNext.classList.add('hidden');
    buttonPrev.onclick = function () {
      buttonNext.classList.remove('hidden');
    }
  }
  sliderLine.style.left = -offset + 'px';

});

buttonPrev.addEventListener('click', function() {
  offset -= 256;
  if (offset < 128) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
});
