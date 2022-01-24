<script lang="ts">
    import { Attempt } from '../routes/wordle/attempt';
    import { afterUpdate, createEventDispatcher } from 'svelte';

    const ARROW_LEFT = 'ArrowLeft';
    const ARROW_RIGHT = 'ArrowRight';
    const BACKSPACE = 'Backspace';
    const ENTER = 'Enter';

    export let attempt: Attempt;
    let inputFields = [];

    const dispatch = createEventDispatcher();

    function clear(index, letter) {
        if ([ARROW_LEFT, ARROW_RIGHT, ENTER].includes(letter)) {
            return;
        }
        inputFields[index].value = "";
    }

    function onChange(index, letter) {
        if (letter == ENTER) {
            return dispatch('stateChange', {
                index: index,
                letter: letter,
                submit: true
            });
        }

        if (letter == ARROW_LEFT || letter == BACKSPACE) {
            return moveLeft(index)
        }

        if (letter == ARROW_RIGHT) {
            return moveRight(index)
        }

        if (letter.length > 1 || !/[a-z]/i.test(letter)) {
            return;
        }

        dispatch('stateChange', {
            index: index,
            letter: letter,
            submit: false
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

    afterUpdate(() => {
        //focus
    })
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
               on:keydown={e => clear(index, e.key)}
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
        caret-color: transparent;
    }
</style>
