const boxes = document.querySelectorAll(".box");

// event listener on the whole widndow to listen for scrolls 
window.addEventListener('scroll', checkBoxes)

checkBoxes();

function checkBoxes() {
  // calculate a point that is a little higher than the inner height
  const triggerBottom = window.innerHeight * 0.8;

  boxes.forEach(box => {
    // get the top of each box 
    // the getBoundingClientRect method allow to get various info about a dom's position relative to the viewport
    // as the viewport moves when we scroll, this position changes, e.g. at the start the content that's below the viewport 
    // will have high values, and as we scroll through this content, is will start having negative value 
    const boxTop = box.getBoundingClientRect().top 
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