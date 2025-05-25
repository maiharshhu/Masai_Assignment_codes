function newYorkSkylines(n, arr) {
    // write your code here\
    for(let i=0; i<n; i++){
        let points = [];
      if((arr[i-1]<arr[i]) && (arr[i]>arr[i+1])){
        points.push(2);
      }
      else if((arr[i-1]<arr[i]) || (arr[i]>arr[i+1])){
        points.push(1);
      }
      else if((arr[i-1]>arr[i]) && (arr[i]<arr[i+1])){
      points.push(0);
      }
    console.log(...points);
    }
}

newYorkSkylines(5, [1, 3, 2, 4, 5]);