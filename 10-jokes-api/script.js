const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

jokeBtn.addEventListener('click', generateJoke)

generateJoke(); 

/*
function generateJoke() {
  // confit needed for this specific api 
  const config = {
    headers: {
      Accept: 'application/json'
    }
  }
  fetch('https://icanhazdadjoke.com', config)
    .then(res => res.json())
    .then(data => {
      // insert the joke into the joke div prepared for it
      jokeEl.innerHTML = data.joke
    })
}
*/

async function generateJoke() {
  // confit needed for this specific api 
  const config = {
    headers: {
      Accept: 'application/json'
    }
  }
  const res = await fetch('https://icanhazdadjoke.com', config)
  const data = await res.json()
  jokeEl.innerHTML = data.joke
}