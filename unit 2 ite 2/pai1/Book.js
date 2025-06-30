function subOfSubarray(N, K, arr) {
    //write your code here
    let A = arr.sort((a,b)=> a-b);
    let l = 0;
    let r = N-1;
    let res = false;
    
    while(l<r){
      if(A[l]+A[r]===K){
        res = true
        break;
      }
      else if(A[l]+A[r]>K){
        r--;
      }
      else{
        l++;
      }
    }
    if(res){
      console.log("Yes")
    }
    else{
      console.log("No")
    }
}