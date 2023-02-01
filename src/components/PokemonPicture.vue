
<template>

    <div class="pokemon-container">
        <img class="hidden-pokemon" :src="imgSrc" alt="pokemon">
        <img v-if="showPokemon" :src="imgSrc" alt="pokemon" class="fade-in">
    </div>

  

</template>


<script>

// Number, required

export default{
    props:{
        pokemonId:{
            type: Number,
            required:true,
        },
        showPokemon: {
            type:Boolean,
            required:true,
            default: false

        }
    },
        computed: {
            imgSrc(){
               return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
            }
        }
}
</script>

<!--scoped solo se aplica a este componente -->
<style scoped>
/* Pokemon Picture */
.pokemon-container {
    height:200px;
}
img {
    height: 200px;
    position: absolute;
    right: 44%;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}


</style>