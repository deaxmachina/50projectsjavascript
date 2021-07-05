const addBtn = document.getElementById("add");

// get what is currently in local storage so that they can be displayed 
// even when we reload the page
const notes = JSON.parse(localStorage.getItem('notes'))

if (notes) {
  notes.forEach(note => addNewNote(note))
}



addBtn.addEventListener('click', () => addNewNote(""));

function addNewNote(text = '') {
  const note = document.createElement('div')
  note.classList.add('note')

  note.innerHTML = `
  <div class="tools">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
  </div>

  <div class="main ${text ? "" : "hidden"}"></div>
  <textarea class="${text ? "hidden" : ""}"></textarea>
  `

  const editBtn = note.querySelector(".edit")
  const deleteBtn = note.querySelector(".delete")
  const main = note.querySelector(".main")
  const textArea = note.querySelector("textarea")

  // fill in the textarea with the typed in text
  textArea.value = text;
  main.innerHTML = marked(text)

  // remove the note from the dom when the delete btn is clicked
  deleteBtn.addEventListener('click', () => {
    // remove the note from the dom 
    note.remove()
    // and update local storage to remove it from there too
    updateLS()
  })

  // the edit button switches between whether the div or the text area is shown
  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden')
    textArea.classList.toggle('hidden')
  })

  // so that the text gets updated when we write and click edit mode
  textArea.addEventListener('input', (e) => {
    const { value } = e.target 
    main.innerHTML = marked(value)
    updateLS()
  })

  document.body.appendChild(note)
}

// to update the local storage
function updateLS() {
  // make an array with the text of each note 
  const notesText = document.querySelectorAll("textarea")
  const notes = []
  notesText.forEach(note => notes.push(note.value))

  // store the array of notes in local storage 
  localStorage.setItem('notes', JSON.stringify(notes))
}