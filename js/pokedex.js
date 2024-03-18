// 'https://pokeapi.co/api/v2/pokemon/'
// 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
// 'https://pokeapi.co/api/v2/pokemon?limit=15&offset=0'


// const getTypeColor = type =>{
//     const normal ='#F5F5F5'
//     return {
//         normal,
//         fire: '#FDDFDF',
//         grass: '#DEFDE0',
//         electric: '#FCF7DE',
//         ice: '#DEF3FD',
//         water: '#DEF3FD',
//         ground: '#F4E7DA',
//         rock: '#D5D5D4',
//         fairy: '#FCEAFF',
//         poison: '#98D7A5',
//         bug: '#F8D5A3',
//         ghost: '#CAC0F7',
//         dragon: '#97B3E6',
//         psychic: '#EAEDA1',
//         fighting: '#E6E0D4'
//       }[type] || normal

// }
// const getOnlyFulfilled = async ({func, arr}) => {
//   const promises = arr.map(func)
// const responses = await Promise.allSettled(promises)
//  return responses.filter(response => response.status === 'fulfilled')
// }

// const getPokemonsType = async(apiResults) => {
// const fulfiiled = await getOnlyFulfilled({arr: apiResults, func: result => fetch(result.url)})
// const pokePromeses = fulfiiled.map(url => url.value.json())
// const pokemons = await Promise.all(pokePromeses)
//  return pokemons.map(fulfiiled => fulfiiled.types.map(info => info.type.name))
// }
// const getPokemonsIds =  apiResults => apiResults.map(({url}) =>{
//     const urlAsArray = (url).split('/')
//     return urlAsArray.at(urlAsArray.length -2)
//    })

//    const getPokemonsImgs = async ids => {
//   const imgs = ids.map((id) =>`../img-pokemons/${id}.png` );
//   return imgs;
// };
  

// const getPokemons = async ()=>{
//    try{ 
//   const response =await fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0')
//   if(!response.ok){
//     throw new Error('Não foi possivel obter as informações')
//   }
//   const {results: apiResults} = await response.json()
//  const types = await getPokemonsType(apiResults)
//  const ids =  getPokemonsIds (apiResults)
//  const imgs = await getPokemonsImgs(ids)
// const pokemons = ids.map((id , i )=>({id, name: apiResults[i].name, types: types[i], imgUrl: imgs[i]}))

// return pokemons
// } catch(Error){
// console.log('Algo deu errado')}
// }

// const rederizarpersonagens = (pokemons) => {
//   const ul = document.querySelector('[data-js="pokemons-list"]');
//   const fragment = document.createDocumentFragment();
//   console.log();

//   pokemons.forEach(({ id, name, types, imgUrl }) => {
//     const li = document.createElement("li");
//     const img = document.createElement("img");
//     const nameContainer = document.createElement("h2");
//     const typeContainer = document.createElement("p");
//     const [firstType] = types;

//     img.setAttribute("src", imgUrl);
//     img.setAttribute("alt", name);
//     img.setAttribute("class", "card-image");
//     li.setAttribute("class", "card ${firstType}");
//     li.style.setProperty("--type-color", getTypeColor(firstType));

//     nameContainer.textContent = `${id}. ${name[0].toUpperCase()}${name.slice(
//       1
//     )} `;
//     typeContainer.textContent = types.length > 1 ? types.join("|") : firstType;
//     li.append(img, nameContainer, typeContainer);
//     fragment.append(ul);
// ;});
//     // ul.append(fragment)


//   showCharacter(pokemons);
// };
// const carregaProximaRenderizacaoPokemons = () => {
//   const pokemonsObserver = new IntersectionObserver(
//     async ([lastPokemon], observer) => {
//       if (!lastPokemon.isIntersecting) {
//         // Intersecting: quando cruzar atravessar o limite da tela //
//         return;
//       }

//       observer.unobserve(lastPokemon.target);
//       const pokemons = await getPokemons();
//       console.log("desobservou ultima li");
//     }
//   );

//   const lastPokemon = document.querySelector(
//     '[data-js="pokemons-list"]'
//   ).lastChild;
//   pokemonsObserver.observe(lastPokemon);
// };

// const pageCarregada = async () => {
//   const pokemons = await getPokemons();
//   carregaProximaRenderizacaoPokemons();

//   console.log(pokemons);
// };

// getPokemons().then((pokemons) => rederizarpersonagens(pokemons));


// //** Para acessar um personagem expecifico */


// function showCharacter(pokemons) {
//   console.log("chamando showCharacter");
//   const pokemonContainer = document.getElementsByClassName("pokemon-container");
//   pokemons.map((pokemon) => {
//     const divPokemon = document.createElement("div");
//     divPokemon.name = `pokemon-${pokemon.name}`;
//     divPokemon.innerHTML = `
//         <img src="${pokemon.image}" alt="Imagem do personagem"/>
//         <article class="pokemon-info">
//             <h3>${pokemon.name}</h3>
//             <span class=" ${pokemon.species}"</span>
            
//             <span class="url">Url:</span>
//             <a class="pokemon-link" href="${pokemon.url}"></a>
//             `;

//     divPokemon.classList.add("pokemon-box");
//     pokemonContainer.appendChild(divPokemon);
//     divPokemon.addEventListener("click", () => {
//       pokemonDetails(pokemon.id);
//     });
//   });function pokemonDetails(id) {
//   console.log("id no pokemon details: ", id);
//   window.location.href = `./pages/pokemon.html?id=${idEncryted}`;
// }
// }


// function pokemonDetails(id){
//   console.log(id)
//   const idEncryted = encryptUrl(id)
//   console.log(idEncryted);
//   window.location.href = `./pages/pokemon.html?id=${idEncryted}`;
// };
// function encryptId(id){
//   return id.toString(36);
// }

// 'https://pokeapi.co/api/v2/pokemon/'
// 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
// 'https://pokeapi.co/api/v2/pokemon?limit=15&offset=0'


const getTypeColor = type =>{
  const normal ='#F5F5F5'
  return {
      normal,
      fire: '#FDDFDF',
      grass: '#DEFDE0',
      electric: '#FCF7DE',
      ice: '#DEF3FD',
      water: '#DEF3FD',
      ground: '#F4E7DA',
      rock: '#D5D5D4',
      fairy: '#FCEAFF',
      poison: '#98D7A5',
      bug: '#F8D5A3',
      ghost: '#CAC0F7',
      dragon: '#97B3E6',
      psychic: '#EAEDA1',
      fighting: '#E6E0D4'
    }[type] || normal

}
const getOnlyFulfilled = async ({func, arr}) => {
const promises = arr.map(func)
const responses = await Promise.allSettled(promises)
return responses.filter(response => response.status === 'fulfilled')
}

const getPokemonsType = async(apiResults) => {
const fulfiiled = await getOnlyFulfilled({arr: apiResults, func: result => fetch(result.url)})
const pokePromeses = fulfiiled.map(url => url.value.json())
const pokemons = await Promise.all(pokePromeses)
return pokemons.map(fulfiiled => fulfiiled.types.map(info => info.type.name))
}
const getPokemonsIds =  apiResults => apiResults.map(({url}) =>{
  const urlAsArray = (url).split('/')
  return urlAsArray.at(urlAsArray.length -2)
 })

 const getPokemonsImgs = async ids => {
const imgs = ids.map((id) => `../img-pokemons/${id}.png`);
return imgs;
};


const getPokemons = async ()=>{
 try{ 
const response =await fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0')
if(!response.ok){
  throw new Error('Não foi possivel obter as informações')
}
const {results: apiResults} = await response.json()
const types = await getPokemonsType(apiResults)
const ids =  getPokemonsIds (apiResults)
const imgs = await getPokemonsImgs(ids)
const pokemons = ids.map((id , i )=>({id, name: apiResults[i].name, types: types[i], imgUrl: imgs[i]}))

return pokemons
} catch(Error){
console.log('Algo deu errado')}
}
const rederizarpersonagens = pokemons => {
const ul = document.querySelector('[data-js="pokemons-list"]')
const fragment = document.createDocumentFragment()
console.log()


pokemons.forEach(({id, name, types, imgUrl}) => {
const li = document.createElement('li')
const img =  document.createElement('img')
const nameContainer =  document.createElement('h2')
const typeContainer =  document.createElement('p')
const [firstType] = types

img.setAttribute('src', imgUrl)
img.setAttribute('alt', name)
img.setAttribute('class', 'card-image')
li.setAttribute('class', `card ${firstType}`)
li.style.setProperty('--type-color', getTypeColor(firstType))

nameContainer.textContent = `${id}. ${name[0].toUpperCase ()}${name.slice(1)} `
typeContainer.textContent = types.length > 1 ? types.join('|') : firstType
li.append(img, nameContainer, typeContainer)
fragment.append(li)

})
ul.append(fragment)
} 
const carregaProximaRenderizacaoPokemons = () => {
const pokemonsObserver = new IntersectionObserver( async([lastPokemon], observer) => {
if(!lastPokemon.isIntersecting) {// Intersecting: quando cruzar atravessar o limite da tela //
 return
}

observer.unobserve(lastPokemon.target)
const pokemons =await getPokemons()
console.log('desobservou ultima li')
})

const lastPokemon = document.querySelector ('[data-js="pokemons-list"]').lastChild
pokemonsObserver.observe(lastPokemon)
}


const pageCarregada = async () =>{
const pokemons = await getPokemons()
carregaProximaRenderizacaoPokemons()

console.log(pokemons)

}
 //** Para acessar um personagem expecifico */


function showCharacter(pokemons) {
  console.log("chamando showCharacter");
  const pokemonContainer = document.getElementsByClassName("pokemon-container");
  pokemons.map((pokemon) => {
    const divPokemon = document.createElement("div");
    divPokemon.name = `pokemon-${pokemon.name}`;
    divPokemon.innerHTML = `
        <img src="${pokemon.image}" alt="Imagem do personagem"/>
        <article class="pokemon-info">
            <h3>${pokemon.name}</h3>
            <span class=" ${pokemon.species}"</span>
            
            <span class="url">Url:</span>
            <a class="pokemon-link" href="${pokemon.url}"></a>
            `;

    divPokemon.classList.add("pokemon-box");
    pokemonContainer.appendChild(divPokemon);
    divPokemon.addEventListener("click", () => {
      pokemonDetails(pokemon.id);
    });
  });function pokemonDetails(id) {
  console.log("id no pokemon details: ", id);
  window.location.href = `./pages/pokemon.html?id=${idEncryted}`;
}
}


function pokemonDetails(id){
  console.log(id)
  const idEncryted = encryptUrl(id)
  console.log(idEncryted);
  window.location.href = `./pages/pokemon.html?id=${idEncryted}`;
};
function encryptId(id){
  return id.toString(36);
}
getPokemons().then((pokemons) => rederizarpersonagens(pokemons))