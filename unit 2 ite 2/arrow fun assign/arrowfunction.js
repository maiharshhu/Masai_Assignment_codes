// using with return keyword
let multi =(a=1,b=1)=>a*b

// using function with explicit return 
let multi1 =(a=1,b=1)=>{
    return a*b
}

// using iife 
((a=1,b=1)=>console.log(a*b))
(2,7)

console.log(multi(3,7))

console.log(multi1(4,9))