<script>
    import { onMount } from 'svelte';

    export let food_item;
    
    import axios from 'axios'
    const DONE = 2;
    const LOADING = 1;
    const IDLE = 0;
    
    let status = IDLE;

    let hintText = ""

    async function getHint() {
        status = LOADING

        axios
        .post("https://vtpm0rc0-8000.usw3.devtunnels.ms/hint", {text: food_item})
        .then((response) => {
            hintText = response.data.value;
            status = DONE
            console.log(JSON.stringify(response.data.value));
        })
        .catch((error) => {
            hintText = "Error";
            status = DONE
            console.log(error);
        });
        
    }
</script>


    {#if status === LOADING}
    <h1 class="jersey-10-regular text-md">
        <div class="text-center">
            <span class="loading loading-ring loading-lg text-blue-400"></span>
        </div>
    </h1>
    {:else if status === DONE}
        {hintText}
    {:else}
    <h1 class="jersey-10-regular text-md">
        <div class="text-center">
            <button on:click={getHint} class="mt-4 border border-r-2 border-b-2 border-blue-300 hover:bg-blue-300 hover:text-white text-blue-500 p-2">Generate Hint</button>
        </div>    
    </h1>
    {/if}
    




