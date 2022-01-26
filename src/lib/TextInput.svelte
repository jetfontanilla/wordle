<script lang="ts">
    import { Attempt } from '../routes/wordle/attempt';
    import { createEventDispatcher, onMount } from 'svelte';

    const ARROW_LEFT = 'ArrowLeft';
    const ARROW_RIGHT = 'ArrowRight';
    const BACKSPACE = 'Backspace';
    const ENTER = 'Enter';

    export let attempt: Attempt;
    let inputFields = [];

    const dispatch = createEventDispatcher();

    function isTouchDevice() {
        return ('ontouchstart' in document.documentElement);
    }

    function clear(index, letter) {
        if (attempt.readonly) {
            return;
        }
        if ([ARROW_LEFT, ARROW_RIGHT, ENTER].includes(letter)) {
            return;
        }
        inputFields[index].value = "";
    }

    function resetFocus() {
        if (!attempt.readonly) {
            inputFields[0]?.focus();
        }
    }

    function onChange(index, letter) {
        if (attempt.readonly) {
            return;
        }
        if (letter == ENTER) {
            resetFocus();
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

    onMount(() => {
        resetFocus();
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
               readonly={attempt.readonly ? "readonly" : undefined}
               on:keydown={e => clear(index, e.key)}
               on:keyup={e => onChange(index, e.key)}
               on:input={e => onChange(index, e.key)}
               class:readonly={attempt.readonly}
               class:correct={letterState.correct}
               class:exists={!letterState.correct && letterState.exists}
               class:incorrect={!(letterState.exists ?? true)}
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
        font-weight: bold;
        color: #333;
        border: 1px #666 solid;
    }
    .readonly.correct {
        color: #fff;
        background: #6a6;
    }
    .readonly.exists {
        color: #fff;
        background: #dc6;
    }
    .readonly.incorrect {
        color: #fff;
        background: #999;
    }
    .letter:focus-visible {
        outline: #446 auto 1px;
    }
    .readonly.letter:focus-visible {
        outline: none;
    }
</style>
