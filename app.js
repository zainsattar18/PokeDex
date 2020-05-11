// alert('im here')

//get data from api 

let get = document.getElementById('pokesearch').value
console.log()


async function getData(selection) {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=10`

  try {
    let response = await axios.get(url)
    const data = response.data.results // logs intial pokemon
    // console.log(data)
    // console.log(`line 13`)
    data.forEach(pokemon => { 
      getPokemonData(pokemon)
    })
  } catch (error) {
    console.log(`error`)
  }
}

async function getPokemonData(pokemon) {
  // let search = document.getElementById("pokesearch").value
  let newUrl = pokemon.url
  try {
    let response = await axios.get(newUrl) //logs the information from the 'url' such as height/weight/name. 

    // const newData = response.data.name
    // const data = response.data.height - works
    const data = response.data.weight // grabs the name - works
    console.log(data)
    
    // console.log(newData)
    // console.log(data)
    
  } catch (error) {
    console.log(`error`)
  }
}


// function printData(data) {
//   data.forEach(pokemon => {
//     let pokeList = document.querySelector('.pokesearch')

//     const name = document.createElement('h2')
//     name.innerHTML = pokemon.name
//     pokeList.append(name)

//   })
// }



  function option(e) {
    e.preventDefault()
    let getOption = document.querySelector('#pokesearch')
    let getValue = getOption.value
    getData(getValue)
  }

  const search = document.querySelector('button')
  search.addEventListener('click', option)
