function telephoneCheck(str) {
  const regex = /^1? ?(( ?\d{3}[- ]*)|(\( ?\d{3}[- ]*\) *))\d{3}[- ]?\d{4}$/g;
  
  return regex.test(str);
}

telephoneCheck("555-555-5555");