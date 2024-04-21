<script>

    export let nutritionData = {};

    let allAnswers = [];

    $: {
        console.log(nutritionData);
        allAnswers = [nutritionData.import, ...nutritionData.imports];
        for (let i = allAnswers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
        }
    }

    let clicked = false;

    function handleClick(event,num) {
        if(!clicked) {
            clicked = true;
            if(nutritionData.import == allAnswers[num]) {
                event.target.style.backgroundColor = 'lightgreen';
            } else {
                event.target.style.backgroundColor = 'lightcoral';
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
    <p class="m-2 text-2xl">Which country is the largest importer?</p>
    {#if allAnswers.length != 0}
    <div class="grid grid-cols-2 gap-2 text-md text-center">
        <div id="option-0" class="border-2 border-black p-2 m-2" on:mouseenter={(event) => changeHover(event,true)} on:mouseleave={(event) => changeHover(event,false)} on:click={(event) => handleClick(event,0)}>{allAnswers[0]}</div>
        <div id="option-1" class="border-2 border-black p-2 m-2" on:mouseenter={(event) => changeHover(event,true)} on:mouseleave={(event) => changeHover(event,false)} on:click={(event) => handleClick(event,1)}>{allAnswers[1]}</div>
    </div>
    <div class="grid grid-cols-2 gap-2 text-md text-center">
        <div id="option-2" class="border-2 border-black p-2 m-2" on:mouseenter={(event) => changeHover(event,true)} on:mouseleave={(event) => changeHover(event,false)} on:click={(event) => handleClick(event,2)}>{allAnswers[2]}</div>
        <div id="option-3" class="border-2 border-black p-2 m-2" on:mouseenter={(event) => changeHover(event,true)} on:mouseleave={(event) => changeHover(event,false)} on:click={(event) => handleClick(event,3)}>{allAnswers[3]}</div>
    </div>
    {/if}
</div>
<div class="h-6"></div>