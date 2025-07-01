  let total = 0;
  let disctotal = 0;

  for(let cost of arr){
    total+=cost
  
  if(cost>price){
    disctotal += (cost - price)
  }
  else{
    disctotal += 0
  }
  disctotal += discount;
  if(disctotal<total){
    console.log("YES")
  }
  else{
    console.log('NO')
  }
}