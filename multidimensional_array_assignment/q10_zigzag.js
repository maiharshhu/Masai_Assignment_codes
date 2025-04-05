function zigzag(arr) {
    let N = arr.length;
    let M = arr[0].length;
    let res = "";
    for (let i = 0; i < N; i++) {
        if (i % 2 === 0) {
            for (let j = M - 1; j >= 0; j--) {
                res += arr[i][j] + " ";
            }
        }
        else {
            for (let j = 0; j < M; j++) {
                res += arr[i][j] + " ";
            }
        }
    }
    return res.trim();
}
let arr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 1], [3, 2, 5, 4, 6], [7, 8, 9, 1, 2],]
console.log(zigzag(arr))