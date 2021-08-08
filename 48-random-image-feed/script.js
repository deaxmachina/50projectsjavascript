const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 10;
const imgsPerRow = 3; 

for (let i = 0; i < rows * imgsPerRow; i++) {
  const img = document.createElement('img')
  img.src = `${unsplashURL}${getRandomSize()}`
  container.appendChild(img)
}

function getRandomSize() {
  return `${getRandomNumber()}x${getRandomNumber()}`
}

// get random int between 300 and 310 
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 300
}