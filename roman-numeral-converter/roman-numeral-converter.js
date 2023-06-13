function convertToRoman(num) {
  const numeral = {
   M:	1000,
   CM:	900,
   D:	500,
   CD:	400,
   C:	100,
   XC:	90,
   L:	50,
   XL:	40,
   X:	10,
   IX:	9,
   V:	5,
   IV:	4,
   I:	1,
  };
 
  let temp = '';
 
  for(let i in numeral) {
    while(num >= numeral[i]) {
        temp += i;
        num -= numeral[i];
    }
  }
 
 return temp;
 }
 
 convertToRoman(36);