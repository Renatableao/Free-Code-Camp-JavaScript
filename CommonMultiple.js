function smallestCommons(arr) {
    arr.sort((a,b) => a-b);
    let newarr = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
      newarr.push(i);
    }
  
    let j =1;
    let multiple;
   
    while (newarr.some(item => multiple % item != 0)) {
       multiple = arr[1] * j;
       j++;
    }
    return multiple
  
  }
  
  console.log(smallestCommons([1,5]));
  console.log(smallestCommons([23, 18]))