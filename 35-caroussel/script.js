const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const img = document.querySelectorAll('#imgs img')

let idx = 0; // where we're at on images array 

// every 2s run this function 
let interval = setInterval(run, 2000)
// where we just increase the index so that we move to the next image
function run() {
  idx++;
  changeImage()
}

function changeImage() {
  // check the the index is at the end or the start
  if (idx > img.length - 1) {
    idx = 0; 
  } else if (idx < 0) {
    idx = img.length - 1 
  } 
  // move the images horizontally till we get to the image on the 
  // current index
  imgs.style.transform = `translateX(${-idx * 500}px)`
}

// clear the interval and start again 
function resetInterval() {
  clearInterval(interval)
  interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
  idx++
  changeImage()
  resetInterval()
})
leftBtn.addEventListener('click', () => {
  idx--
  changeImage()
  resetInterval()
})