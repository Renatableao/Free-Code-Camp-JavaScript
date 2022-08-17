function sumPrimes(num) {
    if (num <= 1) {
      return 0;
    }
    let arr = [];
    for (let i = 1; i < num; i++) {
      arr.push(i+1);
    }
  
    for (let k = 4; k <= num; k++) {
    for (let j = 2; j < k; j++) {
        if (k % j == 0 && arr.indexOf(k) > 0) {
          arr.splice(arr.indexOf(k),1);
      
        }}
    }
    return arr.reduce((a,b) => a+b);
  }
  
  console.log(sumPrimes(10));
  console.log(sumPrimes(2));
  console.log(sumPrimes(3));
  console.log(sumPrimes(999));
  