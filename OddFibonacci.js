function sumFibs(num) {
    const fibonacci = [1,1];
    let i=0;
    do {
      fibonacci.push(fibonacci[i] + fibonacci[i+1])
      i++;
    }
    while (fibonacci[i] + fibonacci[i+1] <= num) {
  
    }
    return fibonacci.filter(val => (val % 2) != 0).reduce((a,b) => a+b)
  
  }
  
  console.log(sumFibs(4));
  console.log(sumFibs(75025));