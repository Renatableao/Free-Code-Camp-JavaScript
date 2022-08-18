function addTogether() {
    if (Object.values(arguments).every(val => Number.isInteger(val))) {
      let first = arguments[0];
      if (arguments.length == 2) {
        return first + arguments[1] 
      }
      else {
        return function secondval(num) {
          if (Number.isInteger(num)) {
            return num + first;
        }}
      }
    }
    return undefined;
}
  
  console.log(addTogether(23, 30));
  console.log(addTogether(2,3));
  console.log(addTogether(5)(7));
  console.log(addTogether(2)([3]));
  console.log(addTogether(5, undefined))