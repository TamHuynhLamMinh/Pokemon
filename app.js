// const API_KEY= "https://pokeapi.co/api/v2/{endpoint}/"

const name = document.querySelector(".name");
const type = document.querySelector(".type");
const height = document.querySelector(".height");
const weight = document.querySelector(".weight");
const bio = document.querySelector(".bio");
const searchInput = document.getElementById("search-input");
const pokemonIcon = document.querySelector(".pokemon-icon");

searchInput.addEventListener("change", (event) =>
  fetch(
    `https://pokeapi.co/api/v2/pokemon/{id or name}/`
  )
    .then((Response) => Response.json())
    .then((data) => {
      weatherIcon.src = "http://openweathermap.org/img/wn/10d@2x.png"
    }) 
);
