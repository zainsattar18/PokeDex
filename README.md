# Pokedex-Neptune-Navy
## Project Name

Pokemon Pokedex Neptune 

https://pages.git.generalassemb.ly/zainsattar18/Pokedex-Neptune-Navy/ 

## Project Description

I am creating a Pokedex (Pokemon Index) which will allow the user to search for the first 150 Pokemon and get data that is specific for that Pokemon.  


## API and Data Sample

https://pokeapi.co/api/v2/pokemon

```{
count: 964,
next: "https://pokeapi.co/api/v2/pokemon",
previous: null,
results: [
{
name: "bulbasaur",
url: "https://pokeapi.co/api/v2/pokemon/1/"
},
{
name: "ivysaur",
url: "https://pokeapi.co/api/v2/pokemon/2/"
},
{
name: "venusaur",
url: "https://pokeapi.co/api/v2/pokemon/3/"
},
{
name: "charmander",
url: "https://pokeapi.co/api/v2/pokemon/4/"
},
{
name: "charmeleon",
url: "https://pokeapi.co/api/v2/pokemon/5/"
}
]
}
```

## Wireframes

https://wireframe.cc/pro/pp/5f208163a341797

#### MVP 
-Use an API to properly retrieve data from an external source.

-Have a function Search/Drop down bar that retrieves a Pokemon when searched for.

-Allow the user to search for a new Pokemon without having the data from the past search show up. 

-Display two characteristics of the Pokemon (ex. Height, Weight, etc)

-Show a photo of the search Pokemon 


#### PostMVP  

-Display more than two characteristics of a searched Pokemon. 

-Display the evolution cycle of a searched Pokemon, if applicable. 

-Display a photo of both the front and back of searched Pokemon 

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|May 8| Project Prompt | Complete
|May 9-10| Complete Project Worksheet & ReadMe | Complete
|May 11| Create HTML Template, Starter CSS, Pseudocode | Complete
|May 12| Begin Code  | Complete
|May 13| Additional Code, Fuctional Website, Flexbox| Complete
|May 14| Extra CSS, develop Post-MVP deliverables | Complete
|May 15| Presentation | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

| Component | Priority | Estimated Time | Time Invested | 
| --- | :---: |  :---: | :---: | 
| HTML| M | 2hrs| 1.5hrs  |  
| CSS - Basic | M | 3hrs| 2hrs | 
| CSS - Advanced | H | 3.5 hrs | 4.5hrs |  
| Psuedocode| M | 2hrs| .5hrs |  
| Functional Coding | H | 3hrs| 3.5hrs |  
| Working with API | H | 4.5hrs| 3hrs | 
| FlexBox| H | 4hrs| 3.5hrs | 
| --- | --- |  --- | --- |
| More Stats for Pokemon - Code | M | 4hrs| 4hrs |  
| Show more photos of Pokemon| M | 4hrs| 2hrs |  
| Extra CSS| M | 3hrs| 3hrs | 
| Total | H | 33.0hrs| 27.5 |  

## Code Snippet

```function getPokemonInfo(pokemon) {
  let info = document.querySelector('#bottom')
  const infoDiv = document.createElement('div')
  infoDiv.innerHTML = pokemon.flavor_text_entries[1].language.name === "en" ? pokemon.flavor_text_entries[1].flavor_text : pokemon.flavor_text_entries[2].flavor_text
  info.append(infoDiv)
}
```


## Change Log


```const searchEnter = document.querySelector('#pokesearch')
searchEnter.addEventListener("keyup", function (e){
  if (e.keyCode === 13) {
    e.preventDefault();
    document.querySelector("#search").click();
  }
})
```
>Decided to add in an eventListner to add allow users to use the "enter' key on both mobile & computer so they do not need to only click the button to make searching a bit easier. 

```function getPokemonInfo(pokemon) {
  let info = document.querySelector('#bottom')
  const infoDiv = document.createElement('div')
  infoDiv.innerHTML = pokemon.flavor_text_entries[1].language.name === "en" ? pokemon.flavor_text_entries[1].flavor_text : pokemon.flavor_text_entries[2].flavor_text
  info.append(infoDiv)
}
```
>Decided to change the Pokemon evolution Post-MVP to bring up a little blurb about the pokemon in the bottom portion of the page. Had to include a 2nd endpoint to get the necessary infomation. 

> Instead of just allowing the first 150 Pokemon. I was able to grab data for all Pokemon (over 650)