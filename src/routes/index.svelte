<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import TextInput from '$lib/TextInput.svelte';
	const exampleCorrect = {
		state: [{
			value: "H",
			correct: true,
			exists: true
		},{
			value: "E"
		},{
			value: "L"
		},{
			value: "L"
		},{
			value: "O"
		}],
		readonly: true
	};
	const exampleExists = {
		state: [{
			value: "G"
		},{
			value: "R",
			exists: true
		},{
			value: "E"
		},{
			value: "A"
		},{
			value: "T"
		}],
		readonly: true
	};
	const exampleIncorrect = {
		state: [{
			value: "W"
		},{
			value: "O"
		},{
			value: "R"
		},{
			value: "L",
			exists: false
		},{
			value: "D"
		}],
		readonly: true
	};
</script>

<svelte:head>
	<title>Wordle App</title>
</svelte:head>

<section>
	<h1>Wordle</h1>

	<p>Guess the WORDLE in 6 tries.<br />
		Each guess must be a valid 5 letter word. Hit the enter button to submit.<br />
		After each guess, the color of the tiles will change to show how close your guess was to the word.</p>

	<h2>Examples</h2>

	<TextInput attempt={exampleCorrect} />
	<p>The letter H is in the word and in the correct spot.</p>

	<TextInput attempt={exampleExists} />
	<p>The letter R is in the word but in the wrong spot.</p>

	<TextInput attempt={exampleIncorrect} />
	<p>The letter L is not in the word in any spot.</p>

	<h1><a sveltekit:prefetch href="wordle">Start Game</a></h1>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	h2 {
		font-weight: bold;
	}

	p {
		margin: 0 0 0.5em;
	}
</style>
