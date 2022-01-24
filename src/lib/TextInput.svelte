<script lang="ts">
    import { Attempt } from '../routes/wordle/attempt';
    import { createEventDispatcher } from 'svelte';

    const ARROW_LEFT = 'ArrowLeft';
    const ARROW_RIGHT = 'ArrowRight';

    export let attempt: Attempt;
    let inputFields = [];

    const dispatch = createEventDispatcher();

    function onClear(index, letter) {
        if (letter == ARROW_LEFT || letter == ARROW_RIGHT) {
            return;
        }
        inputFields[index].value = "";
    }

    function onChange(index, letter) {
        if (letter == ARROW_LEFT) {
            return moveLeft(index)
        }
        if (letter == ARROW_RIGHT) {
            return moveRight(index)
        }
        if (!/[a-z]/i.test(letter)) {
            console.log(letter);
            return;
        }
        dispatch('stateChange', {
            index: index,
            letter: letter
        });

        moveRight(index);
    }

    function moveRight(index) {
        if (inputFields[index + 1]) {
            inputFields[index + 1].focus();
        }
    }

    function moveLeft(index) {
        if (inputFields[index - 1]) {
            inputFields[index - 1].focus();
        }
    }
</script>

<div class="attempt">
    {#each attempt.state as letterState, index}
        <input size="1"
               maxlength="1"
               class="letter"
               type="text"
               pattern="[A-Za-z]"
               bind:this={inputFields[index]}
               value={letterState.value}
               readonly={attempt.readonly}
               on:keydown={e => onClear(index, e.key)}
               on:keyup={e => onChange(index, e.key)}
        />
    {/each}
</div>

<style>
    .letter {
        width: 2.5em;
        height: 2.5em;
        padding: 0.2em;
        margin: 0.1em;
        text-align: center;
        text-transform: uppercase;
    }
</style>
