function rot13(str) {
  let con = '';
  
  for(const i of str) {
    let temp = i.charCodeAt(0);
    if(temp >= 65 && temp <= 90) {
      temp += 13;
      if(temp > 90) {
        con += String.fromCharCode(temp - 26);
      } else {
        con += String.fromCharCode(temp);
      };
    } else {
      con += i;
    }
  }
    return con;
  }
  
  rot13("SERR CVMMN!");