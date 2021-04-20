const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

// when the button is clicked, add the active class to the search div 
// which will trigger the expansion of the search box
btn.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus(); //focuses inside the input i.e. puts the cursor in there
}); 