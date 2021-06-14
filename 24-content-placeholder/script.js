const header = document.getElementById("header")
const title = document.getElementById("title")
const excerpt = document.getElementById("excerpt")
const profile_img = document.getElementById("profile_img")
const name = document.getElementById("name")
const date = document.getElementById("date")

const animated_bgs = document.querySelectorAll(".animated-bg")
const animated_bgs_texts = document.querySelectorAll(".animated-bg-text")

// wait some time before calling the function
setTimeout(getData, 2500)

function getData() {
  header.innerHTML = `<img src="https://images.unsplash.com/photo-1623428454847-564efeafd9da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"/>`
  title.innerHTML = `Random title goes here`
  excerpt.innerHTML = `This is a short paragraph about the thingy that's inside.`
  profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/women/45.jpg" />`
  name.innerHTML = `Maria Yokohama`
  date.innerHTML = `Jun 15, 2021`

  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
  animated_bgs_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}
