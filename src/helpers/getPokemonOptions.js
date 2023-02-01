import pokemonApi from "@/api/pokemonApi";

const getPokemons = () => {

    const pokemonArr = Array.from( Array(650));
   
    return pokemonArr.map( (elem, index) =>  index + 1);
}

const getPokemonOptions = () => {
        const mixPokemons = getPokemons().sort( () => Math.random() -0.5);
        
        getPokemonsNames( mixPokemons.splice(0,4));
}


const getPokemonsNames = async( [a,b,c,d] = [] ) => {

      const resp = await pokemonApi.get(`/1`);
      console.log(resp);
      // console.log(a,b,c,d);
}


export default getPokemonOptions;