const form = document.getElementById("form")
const input = document.getElementById('input')
const todosUl = document.getElementById('todos')

form.addEventListener('submit', e => {
  e.preventDefault() // prevent the form from having its def behaviour
  addTodo()
})

const updateLS = () => {
  const todosEl = document.querySelectorAll("li")
  const todos = []

  todosEl.forEach(todoEl => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains('completed')
    })
  })

  localStorage.setItem('todos', JSON.stringify(todos))
}



const addTodo = todo => {
  let todoText = input.value

  if (todo) {
    todoText = todo.text
  }

  if (todoText) {
    const todoEl = document.createElement('li')
    if (todo && todo.completed) {
      todoEl.classList.add('completed')
    }

    todoEl.innerText = todoText;

    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed')
      updateLS()
    })
    // on right click, remove the element from the dom
    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      todoEl.remove()
      updateLS()
    })

    todosUl.appendChild(todoEl)

    input.value = ''

    // Finally, update the local storage
    updateLS()

  }
}

// For the todos that exist in local storage
const todos = JSON.parse(localStorage.getItem('todos')) 
if (todos) {
  todos.forEach(todo => addTodo(todo))
} 

