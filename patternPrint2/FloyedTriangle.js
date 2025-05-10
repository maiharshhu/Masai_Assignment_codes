function floyed(n){
    let c = 1;
    for(let i=1; i<=n; i++){
        let row = "";
        for(let j=1; j<=i; j++){
            row +=c+' ';
            c++;
        }
        console.log(row)
    }
}
floyed(4)
