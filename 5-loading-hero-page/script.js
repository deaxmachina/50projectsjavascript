const loadText = document.querySelector(".loading-text");
const background = document.querySelector(".bg");


// interval where the first argument is the function that will run 
// and the second argument is how often it will fun in milliseconds
// note that if we just leave it like this it will run forever 
let int = setInterval(blurring, 30)

let load = 0;
function blurring() {
  load++;
  // stop the interval when the load value is above 99 
  if (load > 99) {
    // this is how we stop an interval 
    // note that it happens inside the function that the interval itself takes as first argument 
    clearInterval(int);
  }
  // set the text to the load value 
  loadText.innerText = `${load}%`;
  // loader slowly fades out as it gets closer to 100% 
  loadText.style.opacity = `${scale(load, 0, 100, 1, 0)}`;
  // make the background photo less blurry at the same time 
  background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// helper function to create a scale 
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min)/(in_max - in_min) + out_min;
}