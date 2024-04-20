<script>
    import { ArrowUp,ArrowDown,Check } from 'lucide-svelte';
    export let guess;
    export let real;
</script>

{#if guess > real}
	<ArrowDown size={16} class="inline"/>
{:else if guess < real}
    <ArrowUp size={16} class="inline"/>
{:else if guess == real}
    <Check size={16} class="inline"/>
{/if}


