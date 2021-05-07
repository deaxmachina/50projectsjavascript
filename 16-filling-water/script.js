const smallCups = document.querySelectorAll('.cup-small');
const litres = document.getElementById('litres');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
  // if the cup we click on is full and the next one is not, we want to 'empty' it
  if (
    smallCups[idx].classList.contains('full') && 
    !smallCups[idx].nextElementSibling.classList.contains('full')
  ) {
    idx--
  }

  // when we click on a cup, add the full class to it and all the cups 
  // before it on the row 
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full')
    } else {
      cup.classList.remove('full');
    }
  });

  // update the big cup
  updateBigCup()
};

/// function to fill in the big cup as we click on the small ones
function updateBigCup() {
  // how many full cups do we have
  const fullCups = document.querySelectorAll('.cup-small.full').length
  // how many total cups do we have 
  const totalCups = smallCups.length // this is always 8 

  // hide the pecentage if there are no full cups
  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${fullCups / totalCups * 330}px`;
    percentage.innerText = `${fullCups / totalCups * 100}%`
  }

  // if the cup is full we don't want to show 'remaining'
  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    // bring it back into the dom 
    remained.style.visibility = 'visible' 
    // and add the word 'litres'
    litres.innerText = `${2-(250 * fullCups / 1000)}L`
  }

}