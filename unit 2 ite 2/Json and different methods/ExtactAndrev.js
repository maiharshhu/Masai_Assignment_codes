let arr = [15, 30, 45, 60, 75, 90]

function extractAndReverse(arr){
    let slarr = arr.slice(3,5);
    let rev = [];

    for(let i=slarr.length-1; i>=0; i--){
        rev.push(slarr[i])
    }
    console.log(rev)
}

extractAndReverse(arr)