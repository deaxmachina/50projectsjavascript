const api_key = "b517b382421e0821dc983f8441b20d37"
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=1`;

const IMG_PATH = "https://image.tmdb.org/t/p/w1280"

const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=`;

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");


// get initial movies 
async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json();
  showMovies(data.results)
};

function showMovies(movies) {
  main.innerHTML = "" // clear the html that's already there 
  movies.forEach(movie => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement("div")
    movieEl.classList.add("movie")
    movieEl.innerHTML = `
      <img src="${IMG_PATH}${poster_path}" alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRating(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
    `
    // insert the elements in the dom 
    main.appendChild(movieEl)
  })
};
// helper function to tget the class from the rating 
function getClassByRating(vote) {
  if (vote >= 8) { return "green" }
  else if (vote >= 5) { return "orange" }
  else { return "red" }
}

getMovies(API_URL);

// search functionality 
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value
  if (searchTerm && searchTerm !== "") {
    getMovies(`${SEARCH_API}${searchTerm}`)
    search.value = ''
  } else {
    window.location.reload() //reload the page
  }
});