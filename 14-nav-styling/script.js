const toggle = document.getElementById("toggle"); // the button 
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle('active')
});
