function generatePassword(length, includeNumbers = true, includeSpecialChars = false) {
    if (length <= 0 || typeof length !== 'number') {
        throw new Error("Password length must be greater than zero and must be a number.");
    }

    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

    let allChars = lowerCase + upperCase;
    const requiredChars = [];

    // Ensure at least one uppercase character
    requiredChars.push(upperCase[Math.floor(Math.random() * upperCase.length)]);

    if (includeNumbers) {
        allChars += numbers;
        requiredChars.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }

    if (includeSpecialChars) {
        allChars += specialChars;
        requiredChars.push(specialChars[Math.floor(Math.random() * specialChars.length)]);
    }

    // Fill the rest of the password with random characters
    while (requiredChars.length < length) {
        const randomChar = allChars[Math.floor(Math.random() * allChars.length)];
        requiredChars.push(randomChar);
    }

    // Shuffle the characters to randomize their order
    const shuffledPassword = requiredChars.sort(() => Math.random() - 0.5);

    return shuffledPassword.join('');
}

// Example usage
// console.log(generatePassword(10, false, true));
// console.log(generatePassword(10, true, true));
// console.log(generatePassword(10, true, false));