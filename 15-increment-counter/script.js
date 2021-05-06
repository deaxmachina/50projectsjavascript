const counters = document.querySelectorAll(".counter")

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    // this is the target number, which we are storing inside a data attribute 
    const target = +counter.getAttribute('data-target') // any attribute that we define on dom element 
    const c = +counter.innerText // current number displayed inside the div, starting from 0
    // by how much we want to increment the number each time
    const increment = target / 200;
    
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`
      // run the function every 1 millisecond
      setTimeout(updateCounter, 1)
    } else {
      counter.innerText = target
    }
  }

  updateCounter()
})