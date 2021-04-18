const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle'); 

// current active represents the currently active stage 
// when we click the next button, increment that by 1 
// so that the active class moves onto the next stage
let currentActive = 1;
next.addEventListener('click', () => {
  currentActive++
  // make sure the currentactive doesn't exceed the len
  // of available stages 
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

// when we click the prev button, decrease that by 1 
// so that the active moves back by 1 element
prev.addEventListener('click', () => {
  currentActive--
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    // all circles before the currently active one should be highlighted
    if (idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
    });
    // get all the cirlces which are currently active
    const actives = document.querySelectorAll('.active')
    // compute how much of the progress bar we want to colour
    progress.style.width = ((actives.length-1) / (circles.length-1))*100 + '%';

    // make the prev btn disabled if we are at the start 
    // the next button disabled if at the end, and 
    // both active if we are in between
    if(currentActive === 1) {
      prev.disabled = true; 
    } else if (currentActive === circles.length) {
      next.disabled = true;
    } else {
      prev.disabled = false;
      next.disabled = false;
    }
}

