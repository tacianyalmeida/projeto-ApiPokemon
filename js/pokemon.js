function descryptId(id){
    return parseInt (id, 36)
}

async function carregarPokemon(baseUrl, id){
    try{
        const response = await fetch(`${baseUrl}/${id}`)
        if(!response){
            throw new Error ('Erro ao carregar o pokemon')
        }
        return response.json()
    }catch(error){
        console.log(error)
    }
}

async function carregarTudo(){ 
    
const urlParam = new URLSearchParams(window.location.search);
    const idParam = urlParam.get('id')

    
    if(!idParam){
        console.log('O id não foi encontrado na url')
        return
    }
    const URL = `https://pokeapi.co/api/v2/pokemon/${idParam}/`
   
    
    const idDescryted = descryptId(idParam)

    try{
        const pokemon = await carregarPokemon(URL, idDescryted)
        console.log('Personagem:', pokemon)
        rederizarPersonagens(pokemon.data)
    }catch(error){
        console.log(error)
    }
}

carregarTudo()


async function rederizarPersonagens(pokemon){
    
    console.log(pokemon)
    const img = document.querySelector('.img')
    const name = document.querySelector('.name')
    const species = document.querySelector('.species')
    const type = document.querySelector('.type')
   
    img.src = pokemon.image
    name.innerHTML = pokemon.name
    species.innerHTML = pokemon.species
    type.innerHTML = pokemon.type
}



// let pokemon 

// for (let i =0; i < array.length; i++){
//     if(array[i].id === id){
//         pokemon = array[i]
//         break
//     }
// }

