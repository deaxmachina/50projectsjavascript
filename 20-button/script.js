const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
  button.addEventListener('click', function(e){
    // where we click in the viewport - only wihin the button
    const x = e.clientX
    const y = e.clientY

    // the position of the button itself wrt to the viewport
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    // position wrt a coordinate system where (0, 0) is the top left corner 
    // of the button
    const xInside = x - buttonLeft
    const yInside = y - buttonTop

    // create a circle element 
    const circle = document.createElement("span")
    circle.classList.add("circle")
    // and position in the place where we click wrt the button 
    circle.style.top = `${yInside}px`;
    circle.style.left = `${xInside}px`;

    // append the circle - 'this' refers to the current element i.e. the button
    this.appendChild(circle)

    // every time we click, new span gets added to the dom
    // we need to remove it from the dom manually after half a second
    setTimeout(() => circle.remove(), 500)

  })
})