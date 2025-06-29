// let arr = [5, 2, 8, 4];
// arr.splice(1, 2, "new");
// console.log(arr);

// let str = "JavaScript is awesome";
// console.log(str.replace("awesome", "cool"));

const str1 = "résumé";
const str2 = "resume";

// In some locales (e.g., French), 'résumé' might be sorted differently than 'resume'
// depending on sensitivity options.
const result = str1.localeCompare(str2, 'fr', { sensitivity: 'base' }); 
console.log(result); // Will return 0 if sensitivity is 'base' (ignoring diacritics)