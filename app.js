// alert('im here')


async function getData(selection) {

  const url = `https://pokeapi.co/api/v2/pokemon/${selection.toLowerCase()}`
  const urlData = ` https://pokeapi.co/api/v2/pokemon-species/${selection.toLowerCase()}`

  try {
    let response = await axios.get(url)
    let responseTwo = await axios.get(urlData)

    // console.log(response)
    // console.log(responseTwo)
    const data = response.data // logs intial pokemon
    const dataTwo = responseTwo.data
    // console.log(dataTwo)
    // console.log(data)

    removePoke()
    getPokemonData(data)
    getPokemonInfo(dataTwo)
  } catch (error) {
    console.log(error)
  }
}


function getPokemonData(pokemon) {
  let pokeList = document.querySelector('#namebar')
  const name = document.createElement('div')
  name.innerHTML = pokemon.name;
  pokeList.append(name);

  let height = document.querySelector('#height_change')
  const heightDiv = document.createElement('div')
  const heightInFeet = Math.ceil((pokemon.height * .10) * 3.28)
  // const heightInFeet = Math.floor(heightInMeters * 3.28)
  heightDiv.innerHTML = `${heightInFeet}'`
  height.append(heightDiv)

  let weight = document.querySelector('#weight_change')
  const weightDiv = document.createElement('div')
  const weightInKilo = pokemon.weight * .10
  const weightInLbs = Math.floor(weightInKilo * 2.204)
  weightDiv.innerHTML = `${weightInLbs}lbs`
  weight.append(weightDiv)

  let image = document.querySelector('#pokeimage')
  image.setAttribute('src', pokemon.sprites.front_default)

  let image_two = document.querySelector('#pokeimage_two') // new 2nd image call
  image_two.setAttribute('src', pokemon.sprites.back_default)

  let type = document.querySelector('#type')
  const typeDiv = document.createElement('div')
  typeDiv.innerHTML = pokemon.types[0].type.name
  type.append(typeDiv)

  let typeTwo = document.querySelector('#type2')
  const typeTwoDiv = document.createElement('div')
  typeTwoDiv.innerHTML = pokemon.types[1] ? pokemon.types[1].type.name : "";
  typeTwo.append(typeTwoDiv)

}


function getPokemonInfo(pokemon) {
  let info = document.querySelector('#bottom')
  const infoDiv = document.createElement('div')
  infoDiv.innerHTML = pokemon.flavor_text_entries[1].language.name === "en" ? pokemon.flavor_text_entries[1].flavor_text : pokemon.flavor_text_entries[2].flavor_text
  // infoDiv.innerHTML = pokemon.flavor_text_entries[1].flavor_text;
  info.append(infoDiv)
}



function removePoke() {
  const oldName = document.querySelector('#namebar')
  const oldHeight = document.querySelector('#height_change')
  const oldWeight = document.querySelector('#weight_change')
  const oldPhoto = document.querySelector('#pokeimage')
  const oldPhotoTwo = document.querySelector('#pokeimage_two') //new 2nd picture
  const oldType = document.querySelector('#type')
  const oldTypeTwo = document.querySelector('#type2')
  const oldInfo = document.querySelector('#bottom')

  while (oldHeight.lastChild) {
    oldHeight.removeChild(oldHeight.lastChild)
  }

  while (oldWeight.lastChild) {
    oldWeight.removeChild(oldWeight.lastChild)
  }

  while (oldName.lastChild) {
    oldName.removeChild(oldName.lastChild)
  }

  while (oldPhoto.lastChild) {
    oldPhoto.removeChild(oldPhoto.lastChild)
  }

  while (oldPhotoTwo.lastChild) {
    oldPhotoTwo.removeChild(oldPhotoTwo.lastChild)
  }

  while (oldType.lastChild) {
    oldType.removeChild(oldType.lastChild)
  }
  while (oldTypeTwo.lastChild) {
    oldTypeTwo.removeChild(oldTypeTwo.lastChild)
  }

  while (oldInfo.lastChild) {
    oldInfo.removeChild(oldInfo.lastChild)
  }

}


function option(e) {
  e.preventDefault()
  let getOption = document.querySelector('#pokesearch')
  let getValue = getOption.value
  // console.log(getValue)
  getData(getValue)
}

const search = document.querySelector('button')
search.addEventListener('click', option)

// function getPokemonData(pokemon) {
//   // let search = document.getElementById("pokesearch").value
//   let newUrl = pokemon.url
//   try {
//     let response = axios.get(newUrl) //logs the information from the 'url' such as height/weight/name. 

//     const newData = response.data.name
//     const heightData = response.data.height 
//     const weightData = response.data.weight // grabs the name - works
//     console.log(newData)
//     console.log(heightData)
//     console.log(weightData)
//     // console.log(data)
//     // printData(data)

//   } catch (error) {
//     console.log(error)
//   }
// }
