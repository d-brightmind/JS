let numbers = [1, 2, 3, 4]

	let numberReversed = []

	for(let i = numbers.length - 1; i >= 0; i--) 
	{
  		let valueAtIndex = numbers[i]
  
  		numberReversed.push(valueAtIndex)
	}

	console.log(numberReversed)