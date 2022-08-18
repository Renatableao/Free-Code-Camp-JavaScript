function binaryAgent(str) {
    let decimal = [];
    let result = "";
    str.split(" ").forEach(function(binary) {
      let sum = 0; 
      let count = 0;
      let zeroone = binary.split('');
      zeroone.forEach(function(num) {
      let index = binary.length - 1;
        if (num == 1) {
          sum += Math.pow(2, index - count);
          count++;
        } 
        else {
          count++;
        }
        
        return sum })
  
        decimal.push(sum)})
        decimal.forEach(code => result += String.fromCharCode(code))
        return result;
  }
  
  console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
  console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"))