function diffArray(arr1, arr2) {
    const newArr = [];
    for (let item in arr1) {
      if (!arr2.includes(arr1[item])) {
        newArr.push(arr1[item]);
      }}
    for (let item in arr2) {
      if (!arr1.includes(arr2[item])) {
        newArr.push(arr2[item]);
      }}
    return newArr;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
  console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));