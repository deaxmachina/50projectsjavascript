const textEl = document.getElementById("text")
const speedEl = document.getElementById("speed")
// the actual text we want to fill in 
const text = 'We Love Programming'

let idx = 1; // where we are in the text
let speed = 300 / +speedEl.value

writeText()

function writeText() {
  textEl.innerText = text.slice(0, idx)
  idx++

  // if we get to the end of the text, restart
  if (idx > text.length) {
    //idx = text.length // or stop it 
    idx = 1;
  }

  setTimeout(writeText, speed)
}

// so that we can dynamically update when the speed changes
// this now happens real time
speedEl.addEventListener('input', e => speed = 300 / +e.target.value)