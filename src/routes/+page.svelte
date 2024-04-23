<script>
    import NutritionalLabel from "../lib/components/NutritionalLabel.svelte";
    import Reveal from "../lib/components/Reveal.svelte";
    import Win from "../lib/components/Win.svelte";
    import fuzzysort from 'fuzzysort'
    import { Svroller } from 'svrollbar'
    import { onMount } from "svelte";
    
    
    export let data;
    const MAX_GUESSES = 5;
    const NUM_FOODS = 20;
    const WIN = 0
    const LOSE = 1

    let foodguess = {}
    
    let status = 2

    let food_loading = true

    const currentDate = new Date().toLocaleDateString()

    const chosenFoods = []

    let food_to_index = []

    onMount(() => {
        food_loading = true

        const chosenFoodIndices = new Set();

        while (chosenFoodIndices.size < NUM_FOODS) {
            chosenFoodIndices.add(Math.floor(Math.random() * (data.foods.length-1)))
        }

        const chosenFoodIndicesArr = Array.from(chosenFoodIndices)

        chosenFoodIndicesArr.sort()

        chosenFoodIndicesArr.forEach((index) => chosenFoods.push(data.foods[index])) 

        let randomFoodIndex = Math.floor(chosenFoods.length * Math.random());
        foodguess = chosenFoods[randomFoodIndex];

        // Create array that maps food to index
        
        for (let i=0; i < chosenFoods.length; i++) {
            food_to_index.push(chosenFoods[i]["name"])
            console.log("WOWWIEEE" + chosenFoods[i]["name"])
        }

        food_loading = false

        console.log("Chosen Foods" + chosenFoods.length)
        console.log("Answer" + foodguess)

        
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
        if (status > 1) {
            results = fuzzysort.go(inputValue, chosenFoods, {key:'name'})
        }
    }
    
    // returns a list of fuzzy sort names
    function displayChoices(d) {
        let choices = []

        // if input is empty, display all foods...
        if (inputValue == "") {
            for (let i = 0; i < chosenFoods.length; i++) {
                choices.push(chosenFoods[i].name)
            }   
        }
        
        else if (d.length > 0) {
            for (let i = 0; i < d.length; i++) {
                choices.push(d[i]["target"])
            }
        }
        return choices;
    }


    
    let flash = false;
    function flashGuesses() {
        const FLASH_INTERVAL = 100;
        flash = true;
        setTimeout(() => {flash = false}, FLASH_INTERVAL);
        setTimeout(() => {flash = true}, FLASH_INTERVAL * 2);
        setTimeout(() => {flash = false}, FLASH_INTERVAL * 3);
    }

    function handleClickFood(e) {
        if (status > 1) {
            // Get name of food
            let food_name = e.target.innerHTML
            console.log("food name is " + food_name)
            console.log("food to index" + food_to_index)
            let food_index = food_to_index.indexOf(food_name)
            let food_info = chosenFoods[food_index]
            console.log("food info is " + JSON.stringify(food_info))
            guesses = [food_info, ...guesses]

            console.log("guesses" + guesses)

            
            
            if (food_name === foodguess.name) {
                clearInterval(intervalID)
                status = WIN
            }
            else {
                flashGuesses()
                if (guesses.length >= MAX_GUESSES) {
                    status = LOSE
                }
            }
        }

    }

</script>

<div class="max-w-2xl mx-auto text-black p-8 jersey-10-regular">
	<div class="flex flex-wrap">
        <h1 class="jersey-10-regular tracking-wider text-6xl md:w-2/3 w-full">
            NUTRITIONLE
        </h1>
        <h1 class="jersey-10-regular tracking-wider text-4xl md:w-1/3 w-full md:text-right">
            {currentDate}
        </h1>
    </div>  
    <p class="md:w-1/3 w-full my-auto">a more nutritional wordle</p>
    
    {#if food_loading === false}
        <div class="flex gap-4 flex-wrap md:flex-nowrap">
            <input
            class="jersey-10-regular text-xl md:w-2/3 w-full bg-gray-200 px-4 leading-tight text-gray-700 caret-gray-500 opacity-90 focus:outline-none h-10 tracking-wider border-t-2 border-l-2 border-r-4 border-b-4 border-black uppercase"
            type="text"
            placeholder="Guess a Food"
            bind:value="{inputValue}"
            on:input={handleKeyPress}
            />

            <div class="md:w-1/3 w-full text-3xl bg-white jersey-10-regular h-10 border-t-2 border-l-2 border-r-4 border-b-4 border-black text-center ">{convertTime(totalSecs)}</div>

        </div>
        <div class="flex gap-4 flex-wrap md:flex-nowrap">
            <div class="md:w-3/4 w-full bg-white max-h-52 border-t-2 border-l-2 border-r-4 border-b-4 border-black mt-3">
            <Svroller width="100%" height="100%">
                {#each displayChoices(results) as food_choice}
                    <p class="uppercase text-xl p-1 ps-3 hover:bg-slate-200 w-full" on:click={handleClickFood}>{food_choice}</p>
                {/each}
            </Svroller>
            </div>

            <!-- <div class="p-3 md:w-1/3 w-full bg-white border-t-2 border-l-2 border-r-4 border-b-4 border-black mt-3 text-xl">
                AI Hint
                <HelpfulHint food_item={foodguess["name"]}/>
            </div> -->

            <div class="p-3 md:w-1/4 w-full {flash ? 'bg-red-300' : 'bg-white'} border-t-2 border-l-2 border-r-4 border-b-4 border-black mt-3 text-xl">
                Guesses Left:
                <h1 class="text-7xl jersey-10-regular text-center">
                    {MAX_GUESSES - guesses.length} 
                </h1>
                
            </div>

        </div>  
        
        {#if status === WIN}
            <Win timeElapsed={convertTime(totalSecs)}/>
            <NutritionalLabel nutritionData={foodguess} defaultData={foodguess} />
        {:else if status === LOSE}
            <Reveal answer={foodguess["name"]} />
            <NutritionalLabel nutritionData={foodguess} />
        {:else}
            <NutritionalLabel nutritionData={foodguess} />
        {/if}

        
        
        
        {#if guesses.length > 0 && !(status === WIN || status === LOSE)}
            {#each guesses as g}    
                <NutritionalLabel nutritionData={g} defaultData={foodguess} />
            {/each}
        {/if}

        <!-- {#if status == 0 || status == 1}
            <Fact nutritionData={foodguess} />
            <Export nutritionData={foodguess} />
            <Import nutritionData={foodguess} />
            <Food nutritionData={foodguess} />
        {/if} -->
    {:else}
        <span class="loading loading-spinner loading-lg"></span>    
    {/if}
    

      
</div>