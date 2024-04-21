<script>
    export let timeElapsed;
</script>

<div class="flex gap-5">
    <div class="mt-5 w-full sm:w-2/3 border-l-2 border-t-2 border-r-4 border-b-4 border-black inline-block p-5 bg-white">
        <h1 class="text-gray-700 jersey-10-regular text-xl">You solved today's Nutritionle in... </h1>
        <h1 class="text-5xl jersey-10-regular text-center">
            {timeElapsed}
        </h1>
        <a href="/instructions" class="float-right border border-r-2 border-b-2 border-green-300 hover:bg-green-300 hover:text-white text-green-500 p-2">Play Again</a>
    </div>
    <div class="w-full sm:w-1/3 mt-5 border-l-2 border-t-2 border-r-4 border-b-4 border-black inline-block p-5 bg-white">
        <h1 class="text-2xl jersey-10-regular">
            Congrats on getting today's Nutritionle!!
        </h1>
    </div>
</div>