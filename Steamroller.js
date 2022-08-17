function steamrollArray(arr) {
    let newarr = [];
    function flat(arr) { 
      arr.forEach(function(item) { 
      if (!Array.isArray(item)) {
        newarr.push(item);
      }
      else {
        flat(item)
      }
      return newarr
      })
      return newarr}
    return flat(arr)
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));
  console.log(steamrollArray([1, {}, [3, [[4]]]]));