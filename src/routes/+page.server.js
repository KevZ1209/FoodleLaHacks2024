import { food_data } from './food.js'

// load relevant food data
export function load() {
    return {
        "foods": food_data
    };
}