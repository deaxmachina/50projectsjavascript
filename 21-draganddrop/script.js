const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart)
fill.addEventListener("dragend", dragEnd)

for (const empty of empties) {
  // when something is being dragged over the empty element
  empty.addEventListener('dragover', dragOver)
  empty.addEventListener('dragenter', dragEnter)
  empty.addEventListener('dragleave', dragLeave)
  empty.addEventListener('drop', dragDrop)
}


// as soon as you pick something up and start dragging
function dragStart() {
  //console.log("drag start")
  this.className += ' hold' // appending the class of hope to the class of fill
  // we want just the dragged image to have that class while the original one hsould be gone
  // set a timeout so that the invisible class happens after the hold class gets applied
  setTimeout(() => this.className = 'invisible', 0)
}
// when dragging ends on the element being dragged 
function dragEnd() {
  //console.log("drag end")
  // essentially 'add back the element' by giving its class back, i.e. 
  // it's as if it's no longer 'invisible' and in the same spot as before
  this.className = "fill" 
}

function dragOver(e) {
  //console.log("drag over")
  e.preventDefault()
}

function dragEnter(e) {
  //console.log("drag enter")
  e.preventDefault()
  this.className += ' hovered'
}

function dragLeave() {
  console.log("drag leave")
  this.className = "empty"
}

function dragDrop() {
  //console.log("drag drop")
  this.className = 'empty'
  this.append(fill)
}