function MultiMethod(){}

MultiMethod.filterEvenNumbers=function(arr) {
        return arr.filter(num=>num%2==0);
};

MultiMethod.sumOfArray=function(arr) {
    return arr.reduce((acc,cur)=> acc+cur, 0);
}

MultiMethod.sortAndConcat=function(arr1,arr2) {
        let asort1 = arr1.slice().sort((a,b)=>a - b)
        let asort2 = arr2.slice().sort((a,b)=>a - b)
        return asort1.concat(asort2)
        
};


let ar1 = [1,3,5,6,7];
let ar2 = [3,9,2,1,8];

console.log(MultiMethod.filterEvenNumbers(ar1))
console.log(MultiMethod.sumOfArray(ar1,ar2))
console.log(MultiMethod.sortAndConcat(ar1,ar2))