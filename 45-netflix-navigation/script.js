const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");

// when we click the open btn, add the class visible to all the navs 
// so that they slide in from the left
open_btn.addEventListener('click', () => {
  nav.forEach(nav_el => nav_el.classList.add("visible"))
})

close_btn.addEventListener('click', () => {
  nav.forEach(nav_el => nav_el.classList.remove("visible"))
})