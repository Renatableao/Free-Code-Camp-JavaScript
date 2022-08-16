function pairElement(str) {
  const arr = [];
  str.split('').forEach(function(item) {
    if (item == "G") {
      arr.push([item, "C"])
    }
    else if (item == "C") {
      arr.push([item, "G"])
    }
    else if (item == "A") {
      arr.push([item, "T"])
    }
    else if (item == "T") {
      arr.push([item, "A"])
    }
    return arr;
  });
  return arr;
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));