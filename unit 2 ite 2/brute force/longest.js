function longestPalindromicSubstring(S) {
    let n = S.length;
    let maxLen = 1;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let left = i, right = j;
            let isPal = true;
            while (left < right) {
                if (S[left] !== S[right]) {
                    isPal = false;
                    break;
                }
                left++;
                right--;
            }
            if (isPal && (j - i + 1) > maxLen) {
                maxLen = j - i + 1;
            }
        }
    }
    console.log(maxLen);
}

// longestPalindromicSubstring("thisracecarisgood"); 
longestPalindromicSubstring("malayalam"); 