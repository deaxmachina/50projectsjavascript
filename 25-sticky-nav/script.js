const nav = document.querySelector(".nav");

window.addEventListener('scroll', fixNav)

// figure out the point where we add the active class on the nav 
function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}