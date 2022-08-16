function destroyer(arr) {
    let newarr = [...arr];
    for (let i=0; i< arr.length; i++) { 
      for (let j=1; j<arguments.length; j++) { 
          if(arr[i] == arguments[j]) {
          newarr.splice(newarr.indexOf(arr[i]),1);
    }}}
        return newarr;
  }
    
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
  console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5))