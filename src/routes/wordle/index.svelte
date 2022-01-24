<script lang="ts">
	import TextInput from '$lib/TextInput.svelte';
	import { Attempt, LetterState } from './attempt';

	const WORD_LENGTH = 5;
	const FRESH_ATTEMPT = {
		state: new Array(WORD_LENGTH).fill(new LetterState()),
		readonly: false
	};

	export let attempts: Attempt[] = [];
	let currentAttempt: Attempt = {...FRESH_ATTEMPT};

	function onStateChange(x) {
		console.log(x);
		console.log(currentAttempt);
	}
</script>

<svelte:head>
	<title>Wordle</title>
</svelte:head>

<div class="attempts">
	{#each attempts as attempt}
		<TextInput attempt={attempt} />
	{/each}
</div>
<div class="current">
	<TextInput attempt={currentAttempt} on:stateChange={onStateChange} />
</div>

<style>
	.attempts {
		display: flex;
		justify-content: center;
	}

	.current {
		display: flex;
		justify-content: center;
	}

</style>
