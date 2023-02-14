/*
* Write a function that reverts the input array. 
* Please, do not use array.reverse(); to make this task more enjoyable.
*/
    let numbers = [1, 2, 3, 4]

	let numberReversed = []

	for(let i = numbers.length - 1; i >= 0; i--) 
	{
  		let indexValue = numbers[i]
  
  		numberReversed.push(indexValue)
	}

	console.log(numberReversed)

	//Write a method that returns a duplicate-free array
	let num = [1, 2, 3, 1, 2];
	let uniqueChars = [...new Set(num)];
	console.log(uniqueChars)

/*
* In this task we'd like you to create an array of three items, 
* stored inside a variable called myArray. 
* The items can be anything you want 
* — how about your favorite foods or bands?
* Next, modify the first two items in the array using simple bracket notation and assignment. 
* Then add a new item to the beginning of the array.
*/
	let myArray = ["Gucci", "Adidas", "Balenciaga"];
	myArray["0"] = "Luis Voitton";
	myArray["1"] = "Nike"; 
	myArray.unshift("Burberry");
	console.log(myArray)

/*
* let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
* 1. Convert the string into an array, removing the + characters in the process. Save the result in a variable called myArray.
* 2. Store the length of the array in a variable called arrayLength.
* 3. Store the last item in the array in a variable called lastItem.
*/
let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
//1
let myArray2 = myString.split("+");
//2
let arrayLength = myArray2.length;
//3
let lastItem = myArray2[7];

console.log(myArray2 + "\n")
console.log(arrayLength+ "\n")
console.log(lastItem+ "\n")
