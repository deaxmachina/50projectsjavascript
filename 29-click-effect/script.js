const loveMe = document.querySelector(".loveMe")
const times = document.querySelector("#times")


let timesClicked = 0;
let clickTime = 0; 
// we create our own double click by testing the time between clicks 
// if it's less than a certain number we will consider it a double click
loveMe.addEventListener('click', (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime()
  } else {
    if ((new Date().getTime() - clickTime) < 800) {
      createHeart(e)
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
})

// create a heart where we click with the mouse
function createHeart(e) {
  const heart = document.createElement('i')
  heart.classList.add('fas')
  heart.classList.add('fa-heart')

  // position of mouse on the page
  const x = e.clientX;
  const y = e.clientY; 

  // we want to move the origin to the top left corner
  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop; 

  // position of mouse wrt (0,0) being the top left corner of the element 
  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  // set the top and left pos of the heart based on that
  heart.style.top = `${yInside}px`
  heart.style.left = `${xInside}px`

  loveMe.appendChild(heart)

  times.innerHTML = ++timesClicked
}