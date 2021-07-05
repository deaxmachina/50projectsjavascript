const toggles = document.querySelectorAll('.toggle')
const good = document.getElementById("good")
const cheap = document.getElementById("cheap")
const fast = document.getElementById("fast")

console.log(toggles)

// use the change event because we're using a clickbox - 
// this will let us listen for ticking the tickbox 
toggles.forEach(toggle => toggle.addEventListener('change', (e) => {
  doTheTrick(e.target)
  console.log("checked")
}))

function doTheTrick(theClickedOne) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theClickedOne) {
      fast.checked = false
    }
    if (cheap === theClickedOne) {
      good.checked = false
    }
    if (fast === theClickedOne) {
      cheap.checked = false
    }
  }
}