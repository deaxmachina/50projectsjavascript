const container = document.getElementById('container');
const colors = [
  '#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff',
  '#a0c4ff', '#bdb2ff', '#ffc6ff'
]

const SQUARES = 500

// dymaically append the squares
for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  // note that you can pass the raw element like that to a function 
  // even before it's been appended to the dom
  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseout', () => removeColor(square))


  container.appendChild(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.background = color;
}

function removeColor(element) {
  // because of the css, it will give the effect of the colour fading 
  // out in 2 s gradually rather than all at once
  element.style.background = '#1d1d1d'
}

function getRandomColor() {
  return colors[Math.floor(Math.random()*colors.length)]
}