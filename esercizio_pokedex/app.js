const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
const pokemonName = document.querySelector("#pokemon-name");
const pokemonId = document.querySelector("#pokemon-id");
const pokemonWeight = document.querySelector("#weight");
const pokemonHeight = document.querySelector("#height");
const pokemonSprite = document.querySelector("#sprite");
const pokemonTypes = document.querySelector("#types");
const pokemonHp = document.querySelector("#hp");
const pokemonAttack = document.querySelector("#attack");
const pokemonDefense = document.querySelector("#defense");
const pokemonSpecialAttack = document.querySelector("#special-attack");
const pokemonSpecialDefense = document.querySelector("#special-defense");
const pokemonSpeed = document.querySelector("#speed");

searchButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const userInput = searchInput.value.toLowerCase();
  try {
    const response = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${userInput}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    await changeinfo(data);
  } catch (err) {
    if (err) {
      alert("Pokémon not found");
      throw err;
    }
  }
});

function changeinfo({ name, id, weight, height, sprites, types, stats }) {
  const { front_default } = sprites;
  searchInput.value = "";
  pokemonName.textContent = name.toUpperCase();
  pokemonId.textContent = `#${id}`;
  pokemonWeight.textContent = `Weight: ${weight}`;
  pokemonHeight.textContent = `Height: ${height}`;
  pokemonSprite.setAttribute("src", front_default);
  pokemonTypes.innerHTML = "";
  types.forEach((el) => {
    pokemonTypes.innerHTML += ` <span>${el.type.name.toUpperCase()}</span>`;
  });

  stats.forEach((el) => {
    switch (el.stat.name) {
      case "hp":
        pokemonHp.textContent = el.base_stat;
        break;
      case "attack":
        pokemonAttack.textContent = el.base_stat;
        break;
      case "defense":
        pokemonDefense.textContent = el.base_stat;
        break;
      case "special-attack":
        pokemonSpecialAttack.textContent = el.base_stat;
        break;
      case "special-defense":
        pokemonSpecialDefense.textContent = el.base_stat;
        break;
      case "speed":
        pokemonSpeed.textContent = el.base_stat;
        break;
    }
  });
}
