const str = " Hello World! ";
// const result = getCharacterFrequency(str);
// console.log(result); 
// // { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1, '!': 1 }

function getCharacterFrequency(str) {
    let tstr = str.trim().toLowerCase(); 
    let freq = tstr.split("").reduce((acc,char)=>{
        if(char!==" "){
            acc[char] = (acc[char]||0)+1;
        }
        return acc;
    },{});
    return freq

}


console.log(getCharacterFrequency(str))
