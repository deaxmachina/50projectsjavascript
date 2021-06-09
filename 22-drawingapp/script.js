
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const increaseBtn = document.getElementById("increase")
const decreaseBtn = document.getElementById("decrease")
const sizeEl = document.getElementById("size")
const colorEl = document.getElementById("color")
const clearEl = document.getElementById("clear")

let size = 10;
let isPressed = false; // keeping track of whether mouse is down 
let color = 'black';
let x;
let y; 

canvas.addEventListener('mousedown', (e) => {
  isPressed = true;
  x = e.offsetX; // the current x position of mouse 
  y = e.offsetY; // the current y position of mouse
})

canvas.addEventListener('mouseup', (e) => {
  isPressed = false;
  x = undefined;  
  y = undefined; 
})

// while we're moving the mouse, get the current position of where the 
// mouse it; only do this if we're holding mouse down 
canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    // we keep drawing circles positioned at the point where 
    // the mouse is - giving the impression that we're drawing
    drawCircle(x2, y2)
    // also draw line because otherwise we can see the circles if we 
    // move the mouse too fast
    drawLine(x, y, x2, y2)
    // set the new 'move to' postion to the current positon, so that 
    // it can be used next time 
    x = x2;
    y = y2;

  }
})

// function to draw a circle
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI*2, true)
  ctx.fillStyle = color
  ctx.fill()
}

// function to draw a line 
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  ctx.lineWidth = size*2
  ctx.stroke()
}

function updateSizeOnScreen() {
  sizeEl.innerText = size
}

// when we change the colour, set colour var to selected one
colorEl.addEventListener('change', (e) => color = e.target.value)

// when we increase or decrease the size, update the brush size 
increaseBtn.addEventListener('click', (e) => {
  size += 5;
  // don't go higher than 50 
  if (size > 50) {
    size = 50
  };
  updateSizeOnScreen()
});

decreaseBtn.addEventListener('click', e => {
  size -= 5;
  if (size < 5) {
    size = 5
  };
  updateSizeOnScreen()
})

// clear the canvas 
clearEl.addEventListener('click', e => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
})


