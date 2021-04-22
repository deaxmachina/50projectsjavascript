const boxes = document.querySelectorAll(".box");

// event listener on the whole widndow to listen for scrolls 
window.addEventListener('scroll', checkBoxes)

checkBoxes();

function checkBoxes() {
  // calculate a point that is a little higher than the inner height
  const triggerBottom = window.innerHeight * 0.8;

  boxes.forEach(box => {
    // get the top of each box 
    const boxTop = box.getBoundingClientRect().top // this method allow to get various info about a dom's position relative to the viewport
    // see if the top of the box is less than the trigger bottom 
    // if it is we want to add the class show; otherwise if it is more,
    // we want to remove the class of show
    if (boxTop < triggerBottom) {
      box.classList.add("show")
    } else {
      box.classList.remove("show")
    }
  })
}