<script>
    export let nutritionData;
    export let defaultData = {};
    import Arrow from "./Arrow.svelte";
</script>
<div class="border-2 border-black mt-4">
    <div class="grid grid-cols-3 gap-4 text-xl text-center mb-2">
        <div>
            <p class="text-4xl">{nutritionData.size}g</p>
            <p>Serving Size<Arrow guess={nutritionData.size} real={defaultData.size} /></p>
        </div>
        <div>
            <p class="text-4xl">{nutritionData.calories} Cal.</p>
            <p>Calories<Arrow guess={nutritionData.calories} real={defaultData.calories} /></p>
        </div>
        <div>
            <p class="text-4xl">{nutritionData.sodium}mg</p>
            <p>Sodium<Arrow guess={nutritionData.sodium} real={defaultData.sodium} /></p>
        </div>
    </div>
    <div class="grid grid-cols-3 gap-4 text-xl text-center mb-2">
        <div>
            <p class="text-4xl">{nutritionData.fat}g</p>
            <p>Fat<Arrow guess={nutritionData.fat} real={defaultData.fat} /></p>
        </div>
        <div>
            <p class="text-4xl">{nutritionData.protein}g</p>
            <p>Protein<Arrow guess={nutritionData.protein} real={defaultData.protein} /></p>
        </div>
        <div>
            <p class="text-4xl">{nutritionData.carbs}g</p>
            <p>Carbs<Arrow guess={nutritionData.carbs} real={defaultData.carbs} /></p>
        </div>
    </div>
    <div class="grid grid-cols-3 gap-4 text-md text-center">
        <div>
            <div class="flex justify-between items-center ps-4 pe-4">
                <p class="mr-2">Saturated Fat:</p>
                <p>{nutritionData.sat_fat}g<Arrow guess={nutritionData.sat_fat} real={defaultData.sat_fat} /></p>
            </div>
            <div class="flex justify-between items-center ps-4 pe-4">
                <p class="mr-2">Trans Fat:</p>
                <p>{nutritionData.trans_fat}g<Arrow guess={nutritionData.trans_fat} real={defaultData.trans_fat} /></p>
            </div>
            <div class="flex justify-between items-center ps-4 pe-4">
                <p class="mr-2">Cholesterol:</p>
                <p>{nutritionData.cholesterol}mg<Arrow guess={nutritionData.cholesterol} real={defaultData.cholesterol} /></p>
            </div>
        </div>
        <div>
            <div class="flex justify-between items-center ps-4 pe-4">
                <p class="mr-2">Potassium:</p>
                <p>{nutritionData.potassium}mg<Arrow guess={nutritionData.potassium} real={defaultData.potassium} /></p>
            </div>
            <div class="flex justify-between items-center ps-4 pe-4">
                <p class="mr-2">Fiber:</p>
                <p>{nutritionData.iron}mg<Arrow guess={nutritionData.iron} real={defaultData.iron} /></p>
            </div>
            <div class="flex justify-between items-center ps-4 pe-4">
                <p class="mr-2">Calcium:</p>
                <p>{nutritionData.calcium}mg<Arrow guess={nutritionData.calcium} real={defaultData.calcium} /></p>
            </div>
            <div class="flex justify-between items-center ps-4 pe-4">
                <p class="mr-2">Vitamin D:</p>
                <p>{nutritionData.vitamin_d}mg<Arrow guess={nutritionData.vitamin_d} real={defaultData.vitamin_d} /></p>
            </div>
        </div>
        <div>
            <div class="flex justify-between items-center ps-4 pe-4">
                <p class="mr-2">Fiber:</p>
                <p>{nutritionData.fiber}g<Arrow guess={nutritionData.fiber} real={defaultData.fiber} /></p>
            </div>
            <div class="flex justify-between items-center ps-4 pe-4">
                <p class="mr-2">Sugar:</p>
                <p>{nutritionData.sugar}g<Arrow guess={nutritionData.sugar} real={defaultData.sugar} /></p>
            </div>
            <div class="flex justify-between items-center ps-4 pe-4">
                <p class="mr-2">Added Sugar:</p>
                <p>{nutritionData.added_sugar}g<Arrow guess={nutritionData.added_sugar} real={defaultData.added_sugar} /></p>
            </div>
        </div>
    </div>
</div>