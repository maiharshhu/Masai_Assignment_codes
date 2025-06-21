// Output
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 

// let n = 6;

function starryNight(n){
  //write code here
    for (let i = 1; i <= n; i++) {
        let star = "";
        // Spaces
        for (let j = 1; j <= n - i; j++) {
            star += " ";
        }
        // Stars
        for (let k = 1; k <= (2 * i) - 1; k++) {
            star += "*";
        }
        console.log(star);
    }
    for (let i = n ; i > 0; i--) {
        let star = "";
        // Spaces
        for (let j = 1; j <= n - i; j++) {
            star += " ";
        }
        // Stars
        for (let k = 1; k <= (2 * i) - 1; k++) {
            star += "*";
        }
        console.log(star);
    }
}

starryNight(3)