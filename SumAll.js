function sumAll(arr) {
    var sum = 0;
    arr.sort((a,b) => a-b);
    for (let i=arr[0]; i <= arr[1] ;i++) {
      sum += i;
  }
   return sum;
   }
  

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));