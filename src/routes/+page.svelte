<script>
    import NutritionalLabel from "../lib/components/NutritionalLabel.svelte";
    import fuzzysort from 'fuzzysort'
    import { Svroller } from 'svrollbar'
    import { onMount } from "svelte";
    
    export let data;

    let foodguess = {}

    onMount(() => {
        let num = Math.floor(data.foods.length * Math.random());
        foodguess = data.foods[num];
        console.log(foodguess);
    })

    let intervalID = setInterval(updateTime, 1000);

    let totalSecs = 0
    function updateTime() {
        totalSecs += 1
    }

    let guesses = []

    function convertTime(secs) {
        const minutes = Math.floor(secs / 60);
        const seconds = secs % 60;

        if (minutes === 0) {
            if (seconds < 10) {
                return "00:0" + seconds;
            }
            else {
                return "00:" + seconds;
            }
            
        }
        else if (seconds < 10) {
            return minutes + ":0" + seconds;
        }
        else {
            return minutes + ":" + seconds;
        }

    }

    let inputValue = ''
    let results = ""

    // call fuzzy sort every time it's clicked
    function handleKeyPress() {
        results = fuzzysort.go(inputValue, data.foods, {key:'name'})
    }
    
    // returns a list of fuzzy sort names
    function displayChoices(d) {
        let choices = []

        // if input is empty, display all foods...
        if (inputValue == "") {
            for (let i = 0; i < data.foods.length; i++) {
                choices.push(data.foods[i].name)
            }   
        }
        
        else if (d.length > 0) {
            for (let i = 0; i < d.length; i++) {
                choices.push(d[i]["target"])
            }
        }
        return choices;
    }

    // Create array that maps food to index
    let food_to_index = []
    for (let i=0; i < data.foods.length; i++) {
        food_to_index.push(data.foods[i]["name"])
    }

    function handleClickFood(e) {
        // Get name of food
        let food_name = e.target.innerHTML
        let food_index = food_to_index.indexOf(food_name)
        let food_info = data.foods[food_index]
        guesses = [food_info, ...guesses]
    }



</script>

<div class="max-w-2xl mx-auto text-black p-8 jersey-10-regular">
	
    <h1 class="jersey-10-regular tracking-wider text-6xl md:w-2/3 w-full">
        NUTRITIONLE
    </h1>
    <p class="md:w-1/3 w-full my-auto">A nutrition guessing game</p>
    
    <div class="flex flex-wrap gap-2">
        <input
        class="jersey-10-regular text-xl sm:w-2/3 w-full bg-gray-200 px-4 leading-tight text-gray-700 caret-gray-500 opacity-90 focus:outline-none h-10 tracking-wider border-t-2 border-l-2 border-r-4 border-b-4 border-black uppercase"
        type="text"
        placeholder="Guess a Food"
        bind:value="{inputValue}"
        on:input={handleKeyPress}
        />

        <div class="sm:w-1/4 w-full text-3xl jersey-10-regular h-10 border-t-2 border-l-2 border-r-4 border-b-4 border-black text-center ">{convertTime(totalSecs)}</div>

    </div>
    
    <div class="sm:w-2/3 bg-white border border-black mt-1">
    <Svroller width="100%">
        {#each displayChoices(results) as food_choice}
            <p class="uppercase text-xl p-1 hover:bg-slate-200 w-full" on:click={handleClickFood}>{food_choice}</p>
        {/each}
    </Svroller>
    </div>

    <NutritionalLabel nutritionData={foodguess} />
    
    {#if guesses.length > 0}
        {#each guesses as g}    
            <NutritionalLabel nutritionData={g} defaultData={foodguess} />
        {/each}
    {/if}


      
</div>