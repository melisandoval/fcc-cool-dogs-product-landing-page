// Hide Header
// Code from https://www.w3schools.com/howto/howto_js_shrink_header_scroll.asp

// let prevScrollpos = window.pageYOffset;

// window.onscroll = () => {
//   const currentScrollPos = window.pageYOffset;

//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("header").style.top = "0";
//     document.getElementById("main").style.paddingTop = "200px";
//   } else {
//     document.getElementById("header").style.top = "-151px";
//     document.getElementById("main").style.paddingTop = "100px";
//   }
//   prevScrollpos = currentScrollPos;
// };

// For the carrousel:
// Code from: https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carrousel-image");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
