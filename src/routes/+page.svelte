<script>
    let intervalID = setInterval(updateTime, 1000);

    let totalSecs = 0
    function updateTime() {
        totalSecs += 1
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
      
</div>