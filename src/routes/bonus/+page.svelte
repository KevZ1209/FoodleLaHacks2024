<script>
    import Fact from "../lib/components/Fact.svelte";
    import Export from "../lib/components/Export.svelte";
    import Import from "../lib/components/Import.svelte";
    import Food from "../lib/components/Food.svelte";

    export let foodguess;
</script>

{#if foodguess.name != undefined}
    <Fact nutritionData={foodguess} />
    <Export nutritionData={foodguess} />
    <Import nutritionData={foodguess} />
    <Food nutritionData={foodguess} />
{/if}