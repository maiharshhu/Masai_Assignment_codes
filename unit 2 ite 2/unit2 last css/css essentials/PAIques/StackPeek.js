function makeCounter(label){
    let num = 0;
    return function(){
        num++;
        console.log(`${label}: ${num}`);
        return num;
    }
}

