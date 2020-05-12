// alert('im here')


async function getData(selection) {
  const url = `https://pokeapi.co/api/v2/pokemon/${selection}`
  
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
    heightDiv.innerHTML = `HT: ${pokemon.height}` 
   height.append(heightDiv)
  
  let weight = document.querySelector('#weight')
  const weightDiv = document.createElement('div')
  weightDiv.innerHTML = `WT: ${pokemon.weight}`
  weight.append(weightDiv) 
  
}

function removePoke() {
  const oldName = document.querySelector('#namebar')
  const oldHeight = document.querySelector('#height')
  const oldWeight = document.querySelector('#weight')
  
  while (oldHeight.lastChild) {
  oldHeight.removeChild(oldHeight.lastChild)
  }
  
  while (oldWeight.lastChild) {
    oldWeight.removeChild(oldWeight.lastChild)
  }

  while (oldName.lastChild) {
    oldName.removeChild(oldName.lastChild)
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
