// 
function cipherString(n, str) {
    
    let res = "";
    let i = 0;
    while(i<n){
        let count = 1;
        while(i+1<n && str[i]===str[i+1]){
            count++;
            i++;
        }
        res+=str[i]+count;
        i++;
    }
    console.log(res)
}
cipherString(5,"aabcc")