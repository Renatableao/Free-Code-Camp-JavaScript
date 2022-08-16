function translatePigLatin(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    if (vowels.includes(str[0])) {
      return str + "way";
    }
    else {
    return (str.replace(/^([^aeiou]+)(\w*)/, "$2$1") + 'ay');
  }
  }
  
  console.log(translatePigLatin("consonant"));
  console.log(translatePigLatin("algorithm"));