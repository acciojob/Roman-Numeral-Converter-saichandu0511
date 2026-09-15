function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
  //your code here
    let result = "";

  while (num >= 1000) {
    result += obj[0][0];
    num -= 1000;
  }
  if (num >= 900) {
    result += "CM";
    num -= 900;
  }
  if (num >= 500) {
    result += obj[1][0];
    num -= 500;
  }
  if (num >= 400) {
    result += "CD";
    num -= 400;
  }
  while (num >= 100) {
    result += obj[2][0];
    num -= 100;
  }
  if (num >= 90) {
    result += "XC";
    num -= 90;
  }
  if (num >= 50) {
    result += obj[3][0];
    num -= 50;
  }
  if (num >= 40) {
    result += "XL";
    num -= 40;
  }
  while (num >= 10) {
    result += obj[4][0];
    num -= 10;
  }
  if (num >= 9) {
    result += "IX";
    num -= 9;
  }
  if (num >= 5) {
    result += obj[5][0];
    num -= 5;
  }
  if (num >= 4) {
    result += "IV";
    num -= 4;
  }
  while (num >= 1) {
    result += obj[6][0];
    num -= 1;
  }

  return result;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
