const insert = document.getElementById('insert');

// keydown event listens for keys that are being pressed 
window.addEventListener('keydown', (event) => {
  console.log(event);
  // inject the whole html 
  insert.innerHTML = `
  <div class="key">  
    ${event.key === ' '? 'space' : event.key}
    <small>key</small>
  </div>
  <div class="key"> 
    ${event.keyCode}
    <small>keyCode</small>
  </div>
  <div class="key">
    ${event.code}
    <small>code</small>
  </div>
  `
})