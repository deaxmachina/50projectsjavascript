const range = document.getElementById('range')

// we need the scale function to map the values for the range of the slider 
// to pixes on the screen corresponding to the position on the slider 
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// whenever we move the range slider
range.addEventListener('input', e => {
  const value = +e.target.value
  const label = e.target.nextElementSibling

  // we can get values from the css - here we get the width of the slider
  const range_width = getComputedStyle(e.target).getPropertyValue('width')
  // and the label width
  const label_width = getComputedStyle(e.target.nextElementSibling).getPropertyValue('width')

  // get the number for the range width (need to remove the px and turn to num)
  const num_width = +range_width.substring(0, range_width.length-2)
  const num_label_width = +label_width.substring(0, label_width.length-2)

  // get the min and max for the range slider
  const min = +e.target.min
  const max = +e.target.max 
  
  // calcuate the left propery of the label to move along 
  const left = value * (num_width / max) - num_label_width/2 + scale(value, min, max, 10, -10)
  label.style.left = `${left}px`

  label.innerHTML = value;
})