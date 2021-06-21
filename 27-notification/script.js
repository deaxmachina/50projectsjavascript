const button = document.getElementById("button");
const toasts = document.getElementById("toasts");


const messages = [
  'Message One',
  'Message Two ',
  'Message Three',
  'Message Four',
]

button.addEventListener('click', () => createNotification())

function createNotification() {
  // create the notification div 
  const notif = document.createElement('div');
  notif.classList.add('toast');
  // put content inside the div 
  notif.innerText = getRandomMessage()
  // put it into the dom 
  toasts.appendChild(notif)

  // remove the element from dom after some time
  setTimeout(() => {
    notif.remove()
  }, 3000)

}


function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}
