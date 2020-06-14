// @param {number[]} bills
// @return {boolean}

const lemonadeChange = bills => {
  const money = {
    5: 0,
    10: 0
  }

  if (bills.length === 1 && bills[0] > 5) {
    return false;
  }

  for (let index = 0; index < bills.length; index++) {
    if (bills[index] === 5) {
      money[5]++;
    } else if (bills[index] === 10) {
      if (money[5]) {
        money[5]--;
        money[10]++;
      } else {
        return false;
      }
    } else if (bills[index] === 20) {
      if (money[5] && money[10]) {
        money[5]--;
        money[10]--;
      } else if (!money[10] && money[5] > 2) {
        money[5] -= 3;
      } else {
        return false;
      }
    }
  }

  return true;
};

export default lemonadeChange;
