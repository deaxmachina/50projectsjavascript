const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')

// to keep track of the selected rating
let selectedRating = 'Satisfied'

// Event Bubbling //
// event will fire off for any of the element's parents as well 
ratingsContainer.addEventListener('click', (e) => {
  // if we have clicked on a rating element only
  // parentNode as we want to click on the image which is the child of class rating div
  if (e.target.parentNode.classList.contains('rating')) {
    removeActive() // first remove the active class from all of them
    e.target.parentNode.classList.add('active')
    // put the value of the small tag in the selectedRating var
    selectedRating = e.target.nextElementSibling.innerHTML 
  }
})

sendBtn.addEventListener('click', (e) => {
  panel.innerHTML = `
    <i class='fas fa-heart'></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We will use your feedback to improve our customer support</p>
  `
})

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active')
  }
}