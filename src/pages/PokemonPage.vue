<template>

	<h1 v-if="!pokemon">Espere por favor...</h1>
	<div v-else>
		<h1>¿Quién es este pokémon?</h1> 
		<PokemonPicture :pokemon_id='pokemon.id' :show_pokemon='show_pokemon'/>
		<PokemonOptions :options='pokemons' @selection="checkAnswer" />

		<template v-if="show_answer" class="fade-in">
			<h2>{{ message }}</h2>
			<button @click="newGame">Siguiente pokémon</button>
		</template>

	</div>

</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
	components: {
		PokemonPicture,
		PokemonOptions
	},
	data(){
		return {
			pokemons: [],
			pokemon: null,
			show_pokemon: false,
			show_answer: false,
			message: '',
		}
	},
	methods: {
		async mixpokemonArray(){
			this.pokemons = await getPokemonOptions()
			this.pokemon = this.pokemons[Math.floor(Math.random() * this.pokemons.length)]
		},
		checkAnswer(pokemon_id){
			if (pokemon_id === this.pokemon.id) {
				this.show_pokemon = true
				this.message = '¡Felicidades acertaste!'
			}else{
				this.message = '¡Fallaste! más suerte para la próxima'
			}
			this.show_answer = true
		},
		newGame(){
			this.show_answer = false
			this.show_pokemon = false
			this.pokemons = []
			this.pokemon = null
			this.mixpokemonArray()
		}
	},
	beforeMount(){
		this.mixpokemonArray()
	}
}
</script>