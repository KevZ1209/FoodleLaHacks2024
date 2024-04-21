<script>
    export let nutritionData;
    export let defaultData = {};
    import Arrow from "./Arrow.svelte";

    function className(name) {
        let range = 10;
        const arr = ["calories", "sodium", "size", "cholesterol", "potassium"]
        const arr2 = ["fat", "sat_fat", "trans_fat", "carbs", "sugar", "protein"]
        if (arr.includes(name)) {
            range = 50;
        } 
        else if (arr2.includes(name)) {
            range = 5;
        }

        let ans = "m-1"
        if (defaultData[name] == nutritionData[name]) {
            ans += " border-4 border-green-500"
        }
        else if (defaultData[name] - nutritionData[name] < range && defaultData[name] - nutritionData[name] > range) {
            ans += " border-4 border-yellow-500"
        }
        return ans;        
    }

    const VITAMIN_A_MAX = 3000;
    const VITAMIN_B_MAX = 2.4;
    const VITAMIN_C_MAX = 90;
    const VITAMIN_D_MAX = 600;
    const VITAMIN_E_MAX = 15;

</script>

<div class="border-2 border-black mt-4 border-b-0 ps-3">
    <p class="text-black text-4xl">{nutritionData["name"]}</p>
</div>
<div class="border-2 border-black">
    <div class="grid grid-cols-3 gap-4 text-xl text-center mb-2">
        <div class={className("calories")}>
            <p class="text-4xl">{nutritionData.size}g</p>
            <p>Serving Size<Arrow guess={nutritionData.size} real={defaultData.size} /></p>
        </div>
        <div class={className("sodium")}>
            <p class="text-4xl">{nutritionData.calories} Cal.</p>
            <p>Calories<Arrow guess={nutritionData.calories} real={defaultData.calories} /></p>
        </div>
        <div class={className("sugar")}>
            <p class="text-4xl">{nutritionData.sugar}g</p>
            <p>Sugar<Arrow guess={nutritionData.sugar} real={defaultData.sugar}/></p>
        </div>
    </div>
    <div class="grid grid-cols-3 gap-4 text-xl text-center mb-2">
        <div class={className("fat")}>
            <p class="text-4xl">{nutritionData.fat}g</p>
            <p>Fat<Arrow guess={nutritionData.fat} real={defaultData.fat} /></p>
        </div>
        <div class={className("protein")}>
            <p class="text-4xl">{nutritionData.protein}g</p>
            <p>Protein<Arrow guess={nutritionData.protein} real={defaultData.protein} /></p>
        </div>
        <div class={className("carbs")}>
            <p class="text-4xl">{nutritionData.carbs}g</p>
            <p>Carbs<Arrow guess={nutritionData.carbs} real={defaultData.carbs} /></p>
        </div>
    </div>
    <div class="grid grid-cols-3 gap-4 text-md text-center">
        <div>
            <div class="flex justify-between items-center ps-4 pe-4 class={className("sat_fat")}">
                <p class="mr-2">Saturated Fat:</p>
                <p>{nutritionData.sat_fat}g<Arrow guess={nutritionData.sat_fat} real={defaultData.sat_fat} /></p>
            </div>
            <div class="flex justify-between items-center ps-4 pe-4 class={className("trans_fat")}">
                <p class="mr-2">Trans Fat:</p>
                <p>{nutritionData.trans_fat}g<Arrow guess={nutritionData.trans_fat} real={defaultData.trans_fat} /></p>
            </div>
            <div class="flex justify-between items-center ps-4 pe-4 class={className("cholesterol")}">
                <p class="mr-2">Cholesterol:</p>
                <p>{nutritionData.cholesterol}mg<Arrow guess={nutritionData.cholesterol} real={defaultData.cholesterol} /></p>
            </div>
        </div>
        <div>
            <div class="flex justify-between items-center ps-4 pe-4 class={className("vitamin_a")}">
                <p class="mr-2">Vitamin A:</p>
                <p>{nutritionData.vitamin_a}mg<Arrow guess={nutritionData.vitamin_a} real={defaultData.vitamin_a} /></p>
            </div>
            <div class="flex justify-between items-center ps-4 pe-4 class={className("vitamin_b")}">
                <p class="mr-2">Vitamin B:</p>
                <p>{nutritionData.vitamin_b}mg<Arrow guess={nutritionData.vitamin_b} real={defaultData.vitamin_b} /></p>
            </div>
            <div class="flex justify-between items-center ps-4 pe-4 class={className("vitamin_c")}">
                <p class="mr-2">Vitamin C:</p>
                <p>{nutritionData.vitamin_c}mg<Arrow guess={nutritionData.vitamin_c} real={defaultData.vitamin_c} /></p>
            </div>
            <div class="flex justify-between items-center ps-4 pe-4 class={className("vitamin_d")}">
                <p class="mr-2">Vitamin D:</p>
                <p>{nutritionData.vitamin_d}mg<Arrow guess={nutritionData.vitamin_d} real={defaultData.vitamin_d} /></p>
            </div>
            <div class="flex justify-between items-center ps-4 pe-4 class={className("vitamin_e")}">
                <p class="mr-2">Vitamin E:</p>
                <p>{nutritionData.vitamin_e}mg<Arrow guess={nutritionData.vitamin_e} real={defaultData.vitamin_e} /></p>
            </div>
        </div>
        <div>
            <div class="flex justify-between items-center ps-4 pe-4 class={className("fiber")}">
                <p class="mr-2">Fiber:</p>
                <p>{nutritionData.fiber}g<Arrow guess={nutritionData.fiber} real={defaultData.fiber} /></p>
            </div>
            <div class="flex justify-between items-center ps-4 pe-4 class={className("potassium")}">
                <p class="mr-2">Potassium:</p>
                <p>{nutritionData.potassium}mg<Arrow guess={nutritionData.potassium} real={defaultData.potassium} /></p>
            </div>
            <div class="flex justify-between items-center ps-4 pe-4 class={className("iron")}">
                <p class="mr-2">Fiber:</p>
                <p>{nutritionData.iron}mg<Arrow guess={nutritionData.iron} real={defaultData.iron} /></p>
            </div>
            <div class="flex justify-between items-center ps-4 pe-4 class={className("calcium")}">
                <p class="mr-2">Calcium:</p>
                <p>{nutritionData.calcium}mg<Arrow guess={nutritionData.calcium} real={defaultData.calcium} /></p>
            </div>
        </div>
    </div>
</div>