// Array of student scores
let studentScores = [35, 67, 84, 56, 72, 97, 48, 65, 89, 38];
let length = studentScores.length;
let passCount = 0;

// Update scores based on conditions
for (let i = 0; i < length; i++) {
    if (studentScores[i] < 40) {
        studentScores[i] += 20;
    } else if (studentScores[i] > 90) {
        studentScores[i] = 90;
    }
}

// Count passing students
for (let i = 0; i < length; i++) {
    if (studentScores[i] >= 50) {
        passCount++;
    }
}

// Print results
console.log(studentScores);
console.log("Number of passing students:", passCount);
console.log("Updated Scores:", studentScores);