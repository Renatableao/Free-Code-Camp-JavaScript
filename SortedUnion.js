function uniteUnique(arr) {
  const args = [...arguments];
  const newarr = [];
  for (let i=0; i < args.length; i++) {
    for (let j=0; j < args[i].length; j++) {
      if (!newarr.includes(args[i][j])) {
        newarr.push(args[i][j]);
      }
    }
  }
  
  return newarr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));