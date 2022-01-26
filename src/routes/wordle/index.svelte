<script lang="ts">
	import { onMount } from 'svelte';
	import TextInput from '$lib/TextInput.svelte';
	import { Attempt, LetterState } from './attempt';
	import { generateWord, isValidWord } from "./words";

	const MAX_TRIES = 6;
	const WORD_LENGTH = 5;

	let complete = false;
	let win = false;
	let attempts: Attempt[] = [];
	let currentAttempt: Attempt = generateFreshAttempt();
	let currentWordChars: string[] = [];

	function initialize(): void {
		complete = false;
		win = false;
		attempts = [];
		currentWordChars = generateWord().split('');
		currentAttempt = generateFreshAttempt();

		console.log("Current Word", currentWordChars);
	}

	function generateFreshAttempt(): Attempt {
		return {
			state: new Array(WORD_LENGTH).fill(undefined).map(_ => new LetterState()),
			readonly: false
		};
	}

	function onStateChange(stateChange): void {
		if (stateChange.detail.submit) {
			return submit();
		}
		const {index, letter} = stateChange.detail;
		currentAttempt.state[index].value = letter;
	}

	function submit(): void {
		const currentGuess = currentAttempt.state
				.map(letterState => letterState.value)
				.join('')
				.toLowerCase();

		if (!isValidWord(currentGuess)) {
			console.log(currentGuess, "Incorrect");
			// play incorrect sound
			return;
		}

		const state = currentAttempt.state.map((letterState, index) => {
			return {
				value: letterState.value,
				correct: currentWordChars[index] === letterState.value,
				exists: currentWordChars.includes(letterState.value)
			}
		});

		attempts = [...attempts, {
			state: state,
			readonly: true
		}];
		currentAttempt = generateFreshAttempt();

		if (currentGuess == currentWordChars.join('')) {
			complete = true;
			win = true;
			return;
		}

		if (attempts.length >= MAX_TRIES) {
			complete = true;
			win = false;
		}
	}

	onMount(initialize);
</script>

<svelte:head>
	<title>Wordle</title>
</svelte:head>


<div class="attempts">
	{#each attempts as attempt}
		<TextInput attempt={attempt} />
	{/each}
</div>

{#if complete}
	<div class="section-bottom">
		{#if win}
			You Win!
		{:else}
			You lose
		{/if}
		<input type="button" on:click={initialize} value="Try Again" />
	</div>
{:else}
	<div class="current">
		<TextInput attempt={currentAttempt} on:stateChange={onStateChange} />
	</div>
{/if}

<style>
	.attempts {
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
	}

	.current {
		display: flex;
		justify-content: center;
	}

	.section-bottom {
		margin-top: auto;
		margin-bottom: 1em;
	}

</style>
