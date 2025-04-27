// Problem Statement: Generate a V-shaped Pattern
// You are tasked with writing a function that generates a "V" shape based on a user-inputted size. 
// The shape should consist of backslashes (\), forward slashes (/), and a central "V" at the bottom. The function should print the pattern to the console.

// Input:
// The function will receive a single integer n (1 ≤ n ≤ 100), representing the size of the "V" shape.

// n is the number of rows, and the "V" should be generated accordingly.

// Output:
// The function should print the V-shape to the console with the following properties:

// The first row should have a backslash (\) and a forward slash (/).

// Each subsequent row should have the slashes moving closer together, creating the "V" shape.

// The final row should contain the letter "V" in the center.

// Example:
// Input:
// 6
// Output:

// \         /
//  \       / 
//   \     /  
//    \   /   
//     \ /    
//      V    

function generateV(input) {
    let result = '';

    for (let i = 0; i < input - 1; i++) {
        let leftSpaces = '';
        for (let j = 0; j < i; j++) {
            leftSpaces += ' ';
        }

        let middleSpaces = '';
        let spacesCount = 2 * (input - i - 1) - 1;
        for (let k = 0; k < spacesCount; k++) {
            middleSpaces += ' ';
        }

        result += leftSpaces + '\\' + middleSpaces + '/' + '\n';
    }

    let finalSpaces = '';
    for (let j = 0; j < input - 1; j++) {
        finalSpaces += ' ';
    }
    result += finalSpaces + 'V';

    console.log(result);
}

// Test with an input value
generateV(6); // You can change this value to test with different sizes
