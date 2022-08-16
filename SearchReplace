function myReplace(str, before, after) {
  const regex = /^[A-Z]/
  return regex.test(before) ? str.replace(before, after.replace(after[0], after[0].toUpperCase())) : str.replace(before, after.replace(after[0], after[0].toLowerCase()));
  }
  

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))