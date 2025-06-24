function palindrome(num) {
    let original = num;
    let rev = 0;
    while (num > 0) {
        let digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num / 10);
    }
    if (original === rev) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

// Example usage:
palindrome(24242); // Yes
palindrome(12);  // No