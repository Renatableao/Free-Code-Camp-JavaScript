function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alpharange = alphabet.slice(alphabet.indexOf(str[0]));
  for (let i=0; i < str.length; i++) {
    if (alpharange[i] != str[i]) {
      return alpharange[i];
    }
  }

  return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("stvwx"))