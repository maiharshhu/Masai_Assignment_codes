function zPattern(n){
    let row= "";
    for(let i=0; i<n; i++){
    row+="* "
}
console.log(row)

for(let i=1; i<=n-2; i++){
    let mid = "";
    for(let j=0; j<n-i-1; j++){
        mid+="  "
    }
    mid+="*"
    console.log(mid)
}
console.log(row)

}
zPattern(15)