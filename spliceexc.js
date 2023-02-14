/*
In the examples below, use splice to convert the first array to the second array:
A. [2, 3, 4, 5] -> [2, 4, 5]
B. ["alpha", "gamma", "delta"] -> ["alpha", "beta", "gamma", "delta"]
C. [10,-10,-5,-3,2,1] -> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
*/

    //A
    let numbers = [2, 3, 4, 5];
    numbers.splice(1, 1);
    console.log("Result of numbers = " + numbers);

    //B
    let symbols = ["alpha", "gamma", "delta"]
    symbols.splice(1, 0, "beta");
    console.log("Result of symbols = " + symbols);

    //C
    let digits = [10,-10,-5,-3,2,1];
    digits.splice(1, 3, 9, 8, 7, 6, 5, 4, 3);
    console.log("Result of digits = " + digits);