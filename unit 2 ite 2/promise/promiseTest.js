function checkEvenNumber(num) {
    return new Promise((res,rej)=>{
        if(num%2==0){
            res(`${num} is even`)
        }
        else{
            res(`${num} is odd or invalid`)
        }
    })
}

checkEvenNumber(4).then(console.log).catch(console.error);  // Expected: "4 is even"  
checkEvenNumber(5).then(console.log).catch(console.error);  // Expected: "5 is odd or invalid"
