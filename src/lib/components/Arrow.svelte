<script>
    import { ArrowUp,ArrowDown,Check } from 'lucide-svelte';
    export let guess;
    export let real;
</script>

{#if parseFloat(guess) + 0.1 >= parseFloat(real) && parseFloat(guess) - 0.1 <= parseFloat(real)}
    <Check size={16} class="inline" color="green"/>
{:else if parseFloat(guess) < parseFloat(real)}
    <ArrowUp size={16} class="inline" color="blue"/>
{:else if parseFloat(guess) > parseFloat(real)}
    <ArrowDown size={16} class="inline" color="red"/>
{/if}


