<script setup lang="ts">
const props = defineProps({
	strokeAccent: {
		type: String,
		default: '#000'
	}
});
</script>

<template>
	<Container2 :swirlStroke="props.strokeAccent" containerClass="layout-2-cols-header">
		<Header class="col-header text-4xl">
			<slot />
		</Header>
		<div class="col-left"><slot name="left" /></div>
		<div class="col-right"><slot name="right" /></div>
	</Container2>
</template>

<style>
	.layout-2-cols-header {
		display: grid;
		grid-template:
			"header header" auto
			"left right" auto
			"left right" auto;
	}

	.col-header {
		grid-area: header;
	}

	.col-left {
		grid-area: left;
	}

	.col-right {
		grid-area: right;
	}
</style>

<!--
	<div data-v-1401df1d="" class="col-header">
	  <h1>Pourquoi une version MacOS que maintenant ? <e>🍎</e></h1>
	</div>
	<div data-v-1401df1d="" class="col-left">
	  <h2>Les points de montage</h2>

	  <p>Fonctionnalité de base de Parsec, qui ne fonctionnait pas avec notre dépendance que nous utilisons pour fournir les points de montage.</p>
	  <p>Il a fallu fournir des fixes pour cette dépendance tierce.</p>
	</div>
	<div data-v-1401df1d="" class="col-right">
	  <h2>Signature de l’application</h2>

	  <p>Apple requière que les applications soient signées.</p>
	  <p>On avait des difficultés à signer les artéfacts générer par la CI.</p>
	  <p>Résolu en signant les artéfacts Apple dans la CI.</p>
	</div>
	<div data-v-1401df1d="" class="col-bottom"></div>
-->
