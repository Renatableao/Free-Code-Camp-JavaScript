function convertHTML(str) {
    return (/[&<>"']/).test(str) ? str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") : str;
  
  }
  
  console.log(convertHTML("Dolce & Gabbana"));
  console.log(convertHTML("Hamburgers < Pizza < Tacos"));