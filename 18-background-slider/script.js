const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

// this acts like a state basically 
let activeSlide = 0;

// set up event listeners to both buttons 
rightBtn.addEventListener('click', () => {
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setBgToBody();
  setActiveSlide();
});
leftBtn.addEventListener('click', () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setBgToBody();
  setActiveSlide();
});

// set the background to the body
function setBgToBody() {
  // get the background image from the inline style of the slide 
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

setBgToBody();

function setActiveSlide() {
  // remove the active class from all the slides 
  slides.forEach(slide => {
    slide.classList.remove("active")
  })
  // and then add the class of active just to the active slide
  slides[activeSlide].classList.add("active")
}