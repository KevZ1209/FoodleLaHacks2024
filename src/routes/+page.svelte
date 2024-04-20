<script>
    import NutritionalLabel from "../lib/components/NutritionalLabel.svelte";

    let intervalID = setInterval(updateTime, 1000);

    let totalSecs = 0
    function updateTime() {
        totalSecs += 1
    }

    const bigMacNutrition = {
        "size": 240,
        "calories": 470,
        "protein": 26,
        "carbs": 46,
        "fat": 20,
        "sat_fat": 5,
        "trans_fat": 0,
        "cholesterol": 70,
        "fiber": 1,
        "sugar": 9,
        "added_sugar": 7,
        "vitamin_d": 0,
        "calcium": 30,
        "iron": 2,
        "potassium": 420,
        "sodium": 1140
    }

    const quarterPounder = {
        "size": 200,
        "calories": 520,
        "protein": 30,
        "carbs": 42,
        "fat": 26,
        "sat_fat": 12,
        "trans_fat": 1.5,
        "cholesterol": 95,
        "fiber": 2,
        "sugar": 10,
        "added_sugar": 8,
        "vitamin_d": 0,
        "calcium": 190,
        "iron": 4,
        "potassium": 420,
        "sodium": 1140
    }

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
</script>

<div class="max-w-2xl h-dvh mx-auto text-black p-8 jersey-10-regular">
	
    <h1 class="jersey-10-regular tracking-wider text-6xl md:w-2/3 w-full">
        NUTRITIONLE
    </h1>
    <p class="md:w-1/3 w-full my-auto">A nutrition guessing game</p>
    
    <div class="flex flex-wrap gap-2">
        <input
        class="jersey-10-regular text-xl sm:w-2/3 w-full bg-gray-200 px-4 leading-tight text-gray-700 caret-gray-500 opacity-90 focus:outline-none h-10 tracking-wider border-t-2 border-l-2 border-r-4 border-b-4 border-black uppercase"
        type="text"
        placeholder="Guess a Food"
        />

        <div class="sm:w-1/4 w-full text-3xl jersey-10-regular h-10 border-t-2 border-l-2 border-r-4 border-b-4 border-black text-center">{convertTime(totalSecs)}</div>

    </div>

    <NutritionalLabel nutritionData={bigMacNutrition}/>


      
</div>