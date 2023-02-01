<template>
<h1>¿Quien es este pokemon</h1>
<!--TODO: img -->

<PokemonPicture :pokemonId="1" :showPokemon="true"></PokemonPicture>
<PokemonOpctions></PokemonOpctions>

<!--TODO: Opciones -->
</template>

<script >
import PokemonOpctions from '@/components/PokemonOpctions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';

import getPokemonOptions from '@/helpers/getPokemonOptions'
console.log(getPokemonOptions());
export default{
    components:
    {
        PokemonOpctions,
        PokemonPicture, 
        getPokemonOptions
    }
}

</script>

