const tagsContainer = document.getElementById("tags")
const textArea = document.getElementById("textarea")


// automatically focus on the text area
textArea.focus();

textArea.addEventListener('keyup', (e) => {
  createTags(e.target.value)

  if (e.key == 'Enter') {
    // wait a little and clear the input value
    setTimeout(() => {
      e.target.value = ''
    }, 10)
    randomSelect();
  }
});

function createTags(input) {
  // create an array of values out of the text that the user has typed 
  // where we split the text by comma 
  const tags = input.split(",").filter(
    tag => tag.trim() !== '' // can't be an empty string
    ) .map(tag => tag.trim()) // and we remove whitespace

    // insert the elemets from the tags array into the html 
    tagsContainer.innerHTML = '' // clear the existing array 
    
    tags.forEach(tag => {
      const tagEl = document.createElement('span');
      tagEl.classList.add('tag')
      tagEl.innerText = tag
      tagsContainer.appendChild(tagEl)
    });
}

function randomSelect() {
  // how many times it will hihglight each tag before it stops 
  const times = 30;
  const intervalDuration = 100;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag)
    setTimeout(() => {
      unhighlightTag(randomTag)
    }, intervalDuration)
  }, intervalDuration);

  // settle on a given random tag after the 30 times have happened
  setTimeout(() => {
    clearInterval(interval)
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag)
    }, 100)
  }, times*intervalDuration)
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag")
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
  tag.classList.add('highlight')
}

function unhighlightTag(tag) {
  tag.classList.remove('highlight')
}