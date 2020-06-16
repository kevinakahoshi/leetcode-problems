// @param {string} date
// @return {number}

const dayOfYear = date => {
  let output = 0;
  const splitString = date.split('-');
  const year = parseInt(splitString[0]);
  const month = parseInt(splitString[1]);
  const days = parseInt(splitString[2]);
  let leapYear = false;
  if (month >= 3) {
    if (year % 4 === 0 && year % 100 !== 0) {
      leapYear = true;
    } else if (year % 400 === 0) {
      leapYear = true;
    }
  }
  for (let index = 1; index < month; index++) {
    switch (index) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        output += 31;
        break;
      case 2:
        leapYear ? output += 29 : output += 28;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        output += 30;
        break;
    }
  }

  output += days
  return output;
};

export default dayOfYear;
