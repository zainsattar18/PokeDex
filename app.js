// alert('im here')


async function getData(selection) {
  
  const url = `https://pokeapi.co/api/v2/pokemon/${selection.toLowerCase()}`
  
  try {
    let response = await axios.get(url)
    // console.log(response)
    const data = response.data // logs intial pokemon
    // console.log(data)
    removePoke() // doesnt remove all data
    getPokemonData(data)
    
    // console.log(response)
    // console.log(`line 13`)
      
  } catch (error) {
    console.log(error)
  }
}


function getPokemonData(pokemon) {
  let pokeList = document.querySelector('#namebar')
  const name = document.createElement('div')
  name.innerHTML = pokemon.name;
  pokeList.append(name);
  
  let height = document.querySelector('#height')
  const heightDiv = document.createElement('div')
  heightDiv.innerHTML = `HT: ${pokemon.height}'`
  height.append(heightDiv)
  
  let weight = document.querySelector('#weight')
  const weightDiv = document.createElement('div')
  weightDiv.innerHTML = `WT: ${pokemon.weight}lbs`
  weight.append(weightDiv)

  let image = document.querySelector('#pokeimage')
  image.setAttribute('src', pokemon.sprites.front_default)
  
  let type = document.querySelector('#type')
  const typeDiv = document.createElement('div')
  typeDiv.innerHTML = pokemon.types[0].type.name
  type.append(typeDiv)

  let typeTwo = document.querySelector('#type2')
  const typeTwoDiv = document.createElement('div')
  typeTwoDiv.innerHTML = pokemon.types[1].type.name
  typeTwo.append(typeTwoDiv)

  // let info = document.querySelector('#bottom')
  // const infoDiv = document.createElement('div')
  // infoDiv.innerHTML = pokemon.species.url.flavor_text_entries
}

function removePoke() {
  const oldName = document.querySelector('#namebar')
  const oldHeight = document.querySelector('#height')
  const oldWeight = document.querySelector('#weight')
  const oldPhoto = document.querySelector('#pokeimage')
  const oldType = document.querySelector('#type')
  const oldTypeTwo = document.querySelector('#type2')
  
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

  while (oldType.lastChild) {
    oldType.removeChild(oldType.lastChild)
  }
  while (oldTypeTwo.lastChild) {
    oldTypeTwo.removeChild(oldTypeTwo.lastChild)
  }
}


function option(e) {
  e.preventDefault()
  let getOption = document.querySelector('#pokesearch')
  let getValue = getOption.value
  console.log(getValue)
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
