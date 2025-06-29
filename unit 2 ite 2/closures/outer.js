let freq = {};
let str = "aabcc";  // fixed variable name

for (let ch of str) {  // use 'ch' to refer to each character
  freq[ch] = (freq[ch] || 0) + 1;
}

console.log(freq);
