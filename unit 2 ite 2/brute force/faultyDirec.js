function  faultyDirection(n,str) {
    // Write code here
    let l = 0, r = 0, u = 0, d = 0

    for(let i=0; i<n; i++){
        if(str[i]=="L"){
            l++;
        }
        else if(str[i]=="U"){
            u++;
        }
        else if(str[i]=="D"){
            d++
        }
        else{
            r++;
        }
    }
    if(l==r && u==d){
        console.log("Yes")
    }
    else{
    console.log("No")
}
    
}


faultyDirection(4,"LRUD")
// faultyDirection(5,"LDRUD")