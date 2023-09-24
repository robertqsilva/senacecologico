let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let slideTimer;

showSlides()

function showSlides(num) {
  if (slideTimer) {
    clearTimeout(slideTimer);
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (num) {
    slideIndex += num;
  } else {
    slideIndex++;
  }

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  slides[slideIndex - 1].style.display = "block";

  slideTimer = setTimeout(function () {
    showSlides(1);
  }, 5000);
}
