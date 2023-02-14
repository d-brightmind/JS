/*Create an array of your favorite foods (call it favoriteFoods). 
Make sure it has at least three elements.*/
let favoriteFoods = ["rice","beans","yam"]

//Access the second element in favoriteFoods.
favoriteFoods[1];

//Change the last element in favoriteFoods to some other food.
favoriteFoods[2] = "potato";

//Remove the first element in favoriteFoods and store it in a variable called formerFavoriteFood.
let formerFavoriteFood = favoriteFoods.shift();

//Add a favorite food to the back of the favoriteFoods array.
favoriteFoods.push("Amala");

//Add a favorite food to the front of the favoriteFoods array.
favoriteFoods.unshift("Eba");

/*What happens when you try to pop from an empty array?
Answer:
When you try to pop from an empty array it will return undefined because no value is available to work with.*/

console.log("Result of favoriteFoods = " + favoriteFoods);
console.log("Result of formerFavoriteFood = " + formerFavoriteFood);