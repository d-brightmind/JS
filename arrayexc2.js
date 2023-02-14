/*
Write a function that reverts the input array. 
Please, do not use array.reverse(); to make this task more enjoyable.
*/
    let numbers = [1, 2, 3, 4]

	let numberReversed = []

	for(let i = numbers.length - 1; i >= 0; i--) 
	{
  		let indexValue = numbers[i]
  
  		numberReversed.push(indexValue)
	}

	console.log(numberReversed)