<script>

    export let nutritionData = {};

    let allAnswers = [];

    $: {
        console.log(nutritionData);
        allAnswers = [nutritionData.food, ...nutritionData.foods];
        for (let i = allAnswers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
        }
    }

    let clicked = false;

    function handleClick(event,num) {
        if(!clicked) {
            clicked = true;
            if(nutritionData.food == allAnswers[num]) {
                event.target.style.backgroundColor = 'lightgreen';
            } else {
                event.target.style.backgroundColor = 'lightcoral';
                const correctOption = document.getElementById(`optionf-${allAnswers.findIndex(ans => ans === nutritionData.food)}`);
                correctOption.style.backgroundColor = 'lightgreen';
            }
        }
    }

    function changeHover(event,state) {
        if(state && !clicked) {
            event.target.style.backgroundColor = 'gray';
        } else if(!state && !clicked) {
            event.target.style.backgroundColor = 'white';
        }
    }
</script>

<div class="h-6"></div>
<div class="bg-white border-2 border-black border-r-4 border-b-4">
    <p class="m-2 text-2xl">Which food has this ingredient?</p>
    {#if allAnswers.length != 0}
    <div class="grid grid-cols-2 gap-2 text-md text-center">
        <div id="optionf-0" class="border-2 border-black p-2 m-2" on:mouseenter={(event) => changeHover(event,true)} on:mouseleave={(event) => changeHover(event,false)} on:click={(event) => handleClick(event,0)}>{allAnswers[0]}</div>
        <div id="optionf-1" class="border-2 border-black p-2 m-2" on:mouseenter={(event) => changeHover(event,true)} on:mouseleave={(event) => changeHover(event,false)} on:click={(event) => handleClick(event,1)}>{allAnswers[1]}</div>
    </div>
    <div class="grid grid-cols-2 gap-2 text-md text-center">
        <div id="optionf-2" class="border-2 border-black p-2 m-2" on:mouseenter={(event) => changeHover(event,true)} on:mouseleave={(event) => changeHover(event,false)} on:click={(event) => handleClick(event,2)}>{allAnswers[2]}</div>
        <div id="optionf-3" class="border-2 border-black p-2 m-2" on:mouseenter={(event) => changeHover(event,true)} on:mouseleave={(event) => changeHover(event,false)} on:click={(event) => handleClick(event,3)}>{allAnswers[3]}</div>
    </div>
    {/if}
</div>
<div class="h-6"></div>
