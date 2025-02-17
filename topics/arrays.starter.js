/*
  __   ____  ____   __   _  _  ____ 
 / _\ (  _ \(  _ \ / _\ ( \/ )/ ___)
/    \ )   / )   //    \ )  / \___ \
\_/\_/(__\_)(__\_)\_/\_/(__/  (____/
*/

/*

*/

// 1 — create an array `meals` with three of your favorite meals and log it to the console
const meals = ["pizza", "pasta", "sushi"];
console.log(meals);

// 2 — create an array `drinks` with three of your favorite drinks and log it to the console
const drinks = ["green tea", "smoothie", "water"];
console.log(drinks);

// 3 - create a variable `lastmeal` that stores the last item from the `meals` array
// hint: use the pop() function - log the result to the console
const lastmeal = meals.pop();

console.log(lastmeal);

// 4 - loop over the meals array and print each meal to the console
for (let i = 0; i < meals.length; i++) {
	console.log(meals[i]); // 'Sushi' is niet zichtbaar door de pop() functie
}

// 5 - add a meal called `cereal` to the `meals` array, this time using the push() function, log the variable to the console
meals.push("cereal"); // meals is een bestaande variable, dus geen "const meals" toe te voegen

console.log(meals);

// 6 - create a variable `breakfast` and find the position of `cereal` in the `meals` array
// hint: use the indexOf() function - log the result to the console
const breakfast = meals.indexOf("cereal");
console.log(breakfast); // positie 2; omdat sushi werd verwijder in vorig stap met pop() functie

/* CHALLENGE :: TIPJAR */
// 7 - create an array `tipjar` that will contain all our tips, add the following tips: 1, 5, 2, 2, 1
const tipjar = [1, 5, 2, 2, 1];
console.log(tipjar);

// 8 - create a function `tip` that will add a tip to the `tipjar` array
// hint: the function should take a parameter `amount` and add it to the `tipjar` array via `push()`
function tip(amount) {
	tipjar.push(amount);
}

// 9 - call the function with a tip amount of 2 and log the `tipjar` array to the console
tip(2)
console.log(tipjar);

// 10 - create a function `total` that will calculate the total amount of the `tipjar` array
// hint: use a loop to iterate over the array and add the values together, the function should return the result
// log the total value of the tips to the console


