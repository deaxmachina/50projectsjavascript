// select all the panels 
const panels = document.querySelectorAll('.panel')

// attach an event listener to each panel and listen for clicks
panels.forEach(panel => {
  panel.addEventListener('click', () => {
    // remove active class on all of them
    removeActiveClasses()
    // add class active to the panel that gets clicked
    panel.classList.add('active')
  })
});

// remove active class on all of panels
function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
};