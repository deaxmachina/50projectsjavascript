const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

// when we click on the open button, add to the container the 
// class show-nav
open.addEventListener('click', () => {
  container.classList.add("show-nav")
});

// when we click on the close button, remove the show-nav class 
// from the container
close.addEventListener('click', () => {
  container.classList.remove('show-nav')
});