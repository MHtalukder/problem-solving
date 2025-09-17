/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function(foods, cuisines, ratings) {
    this.cuisines = {};
    this.foods = {};

    for (let i = 0; i < foods.length; i++) {
        const food = foods[i];
        const cuisine = cuisines[i];
        const rating = ratings[i];

        this.foods[food] = {cuisine, rating};

        if (!this.cuisines[cuisine]) this.cuisines[cuisine] = new PriorityQueue((a, b) => {
                if (a[0] !== b[0]) return b[0] - a[0];
                return a[1].localeCompare(b[1]);
            });

            
        this.cuisines[cuisine].enqueue([rating, food]);
    }
};

/** 
 * @param {string} food 
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function(food, newRating) {
    const { cuisine } = this.foods[food];
    this.foods[food].rating = newRating;
    this.cuisines[cuisine].enqueue([newRating, food]);
};

/** 
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function(cuisine) {
    const heap = this.cuisines[cuisine];

    while (!heap.isEmpty()) {
        const [rating, name] = heap.front();

        if (this.foods[name].rating === rating) {
            return name;
        } else {
            heap.dequeue();
        }
    }
};




const foods = ["Pizza", "Burger", "Sushi", "Pasta"];
const cuisines = ["Italian", "American", "Japanese", "Italian"];
const ratings = [8, 7, 9, 8];

const foodRatings = new FoodRatings(foods, cuisines, ratings);

console.log(foodRatings.highestRated("Italian")); // Pasta
foodRatings.changeRating("Pizza", 10);
console.log(foodRatings.highestRated("Italian")); // Pizza
console.log(foodRatings.highestRated("Japanese")); // Sushi