<template>
	<div class="pokemon-container">
		<img :src="img_src" alt="Pokémon" class="hidden-pokemon">
		<img :src="img_src" v-if="show_pokemon" alt="Pokémon" class="fade-in">
	</div>
</template>

<script>
export default {
	props: {
		pokemon_id:{
			type: Number,
			required: true
		},
		show_pokemon:{
			type: Boolean,
			required: true,
			default: false
		}
	},
	computed: {
		img_src() {
			return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemon_id}.svg`
		}
	}
}
</script>

<style scoped>

.pokemon-container {
	height: 200px;
}

img{
	height: 200px;
	position: absolute;
	right: 50%;
	transform: translateX(50%);
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