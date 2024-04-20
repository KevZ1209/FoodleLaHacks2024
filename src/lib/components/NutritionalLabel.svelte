<script>
    export let nutritionData;
</script>
<div class="border-2 border-black mt-4">
    <div class="grid grid-cols-3 gap-4 text-xl text-center mb-2">
        <div>
            <p class="text-4xl">{nutritionData.size}g</p>
            <p>Serving Size</p>
        </div>
        <div>
            <p class="text-4xl">{nutritionData.calories} Cal.</p>
            <p>Calories</p>
        </div>
        <div>
            <p class="text-4xl">{nutritionData.sodium}mg</p>
            <p>Sodium</p>
        </div>
    </div>
    <div class="grid grid-cols-3 gap-4 text-xl text-center mb-2">
        <div>
            <p class="text-4xl">{nutritionData.fat}g</p>
            <p>Fat</p>
        </div>
        <div>
            <p class="text-4xl">{nutritionData.protein}g</p>
            <p>Protein</p>
        </div>
        <div>
            <p class="text-4xl">{nutritionData.carbs}g</p>
            <p>Carbs</p>
        </div>
    </div>
    <div class="grid grid-cols-3 gap-4 text-md text-center">
        <div>
            <div class="flex justify-between items-center ps-4 pe-4">
                <p class="mr-2">Saturated Fat:</p>
                <p>{nutritionData.sat_fat}g</p>
            </div>
            <div class="flex justify-between items-center ps-4 pe-4">
                <p class="mr-2">Trans Fat:</p>
                <p>{nutritionData.trans_fat}g</p>
            </div>
            <div class="flex justify-between items-center ps-4 pe-4">
                <p class="mr-2">Cholesterol:</p>
                <p>{nutritionData.cholesterol}mg</p>
            </div>
        </div>
        <div>
            <div class="flex justify-between items-center ps-4 pe-4">
                <p class="mr-2">Potassium:</p>
                <p>{nutritionData.potassium}mg</p>
            </div>
            <div class="flex justify-between items-center ps-4 pe-4">
                <p class="mr-2">Fiber:</p>
                <p>{nutritionData.iron}mg</p>
            </div>
            <div class="flex justify-between items-center ps-4 pe-4">
                <p class="mr-2">Calcium:</p>
                <p>{nutritionData.calcium}mg</p>
            </div>
            <div class="flex justify-between items-center ps-4 pe-4">
                <p class="mr-2">Vitamin D:</p>
                <p>{nutritionData.vitamin_d}mg</p>
            </div>
        </div>
        <div>
            <div class="flex justify-between items-center ps-4 pe-4">
                <p class="mr-2">Fiber:</p>
                <p>{nutritionData.fiber}g</p>
            </div>
            <div class="flex justify-between items-center ps-4 pe-4">
                <p class="mr-2">Sugar:</p>
                <p>{nutritionData.sugar}g</p>
            </div>
            <div class="flex justify-between items-center ps-4 pe-4">
                <p class="mr-2">Added Sugar:</p>
                <p>{nutritionData.added_sugar}g</p>
            </div>
        </div>
    </div>
</div>