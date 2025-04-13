function binarySquare(N) {
    //write your code here
    for (let i = 1; i <= N; i++) {
        let line = "";
        for (let j = 1; j <= N; j++) {
            line += `${j} ${i}`;
        }
        console.log(line)
    }
}
binarySquare(3)