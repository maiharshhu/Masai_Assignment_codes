function  faultyDirection(n,str) {
    // Write code here
    let x = 0;
    let y = 0;
    for(let i=0; i<n; i++){
      if(str[i]=="L"){
        x-=1;
      }
      else if(str[i]=="R"){
        x+=1;
      }
      else if(str[i]=="U"){
        y+=1;
      }
      else if(str[i]=="D"){
        y-=1;
        }
        return {x, y};
    }
}