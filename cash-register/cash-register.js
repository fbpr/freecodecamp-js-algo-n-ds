function checkCashRegister(price, cash, cid) {
  const currency = {
    "PENNY": .01,
    "NICKEL": .05,
    "DIME": .10,
    "QUARTER": .25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  }

  let total = 0;
  for (let x of cid) {
    total += x[1];
  }

  total = total.toFixed(2);
  let changeAmount = cash - price;
  const changeArr = [];
  if (changeAmount > total) {
    return { status: "INSUFFICIENT_FUNDS", change: changeArr };
  } else if (changeAmount.toFixed(2) === total) {
    return { status: "CLOSED", change: cid };
  } else {
    cid = cid.reverse();
    for (let v of cid) {
      let temp = [v[0], 0];
      while (changeAmount >= currency[v[0]] && v[1] > 0) {
        temp[1] += currency[v[0]];
        v[1] -= currency[v[0]];
        changeAmount -= currency[v[0]];
        changeAmount = changeAmount.toFixed(2);
      }
      if (temp[1] > 0) {
        changeArr.push(temp);
      }
    }
  }
  if (changeAmount > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  return { status: "OPEN", change: changeArr};
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);