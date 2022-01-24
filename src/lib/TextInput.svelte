<script lang="ts">
    import { Attempt } from '../routes/wordle/attempt';
    import { createEventDispatcher } from 'svelte';

    export let attempt: Attempt;
    let inputFields = [];

    const dispatch = createEventDispatcher();

    function onClear(index) {
        inputFields[index].value = "";
    }

    function onChange(index, letter) {
        dispatch('stateChange', {
            index: index,
            letter: letter
        });
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
               on:keydown={e => onClear(index)}
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
