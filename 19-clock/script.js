const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector(".minute")
const secondEl = document.querySelector(".second")
const timeEl = document.querySelector(".time")
const dateEl = document.querySelector(".date")
const toggle = document.querySelector(".toggle")

// utility function to scale 
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min)/(in_max - in_min) + out_min;
}

const days = [
  "Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday", "Sunday"
]
const months = [
  'Jan', 'Feb', 'Mar', 'Apr', "May", "Jun", 
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]

// Change between dark and light mode 
toggle.addEventListener('click', e => {
  const html = document.querySelector("html");
  if (html.classList.contains('dark')) {
    html.classList.remove('dark')
    e.target.innerHTML = "dark mode" // e.target is the element we've clicked on 
  } else {
    html.classList.add("dark")
    e.target.innerHtml = "light mode"
  }
})


function setTime() {
  const time = new Date(); // gets the current date time 
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12 // since the hours is in 24 hour mode
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM'

  // map the number to a degree between 0 and 360 by which we rotate the hand
  hourEl.style.transform = `translate(-50%, -100%) rotate(${
    scale(hoursForClock, 0, 11, 0, 360)
  }deg)`
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${
    scale(minutes, 0, 59, 0, 360)
  }deg)`
  secondEl.style.transform = `translate(-50%, -100%) rotate(${
    scale(seconds, 0, 59, 0, 360)
  }deg)`

  // set the time and the date in the text elements 
  timeEl.innerHTML = `${hoursForClock}:${minutes < 10? `0${minutes}`: minutes} ${ampm}`

  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`

}

setTime()
// call the setTime function every 100 mil sec
setInterval(setTime, 100)