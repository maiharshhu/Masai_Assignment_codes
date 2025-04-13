// Compare T-Shirt Sizes

// T-shirt sizes are represented as strings like "S", "M", "L", and variants like "XS", "XXL", etc. 
// Compare two given sizes a and b and determine which one is larger.

// Rules:

// Sizes are made of 'X's followed by one letter: 'S', 'M', or 'L'.

// Ordering: S < M < L

// Among 'S' sizes, more 'X' means smaller (e.g., XXXS < XS)

// Among 'L' sizes, more 'X' means larger (e.g., XXL > XL)

// 'M' has no 'X' variants; all 'M's are equal.

// Input: Two strings a and b.

// Output: Print one of:

// '>' if a is larger

// '<' if a is smaller

// '=' if both are equal

// Input:  XXXL XL
// Output: >

// Input:  XXS XS
// Output: <

let a = "XXL";
let b = "M";

const lastA = a[a.length - 1];
const lastB = b[b.length - 1];

if (lastA === lastB) {
    if (lastA === 'M') {
        console.log("=");
    } else {
        const lenA = a.length;
        const lenB = b.length;
        if (lenA === lenB) console.log("=");
        else if (lastA === 'S') console.log(lenA > lenB ? "<" : ">");
        else console.log(lenA > lenB ? ">" : "<"); // lastA === 'L'
    }
} else {
    const order = { S: 0, M: 1, L: 2 };
    console.log(order[lastA] > order[lastB] ? ">" : "<");
}
