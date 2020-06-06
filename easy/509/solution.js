// @param {number} N
// @return {number}

const fib = N => {
  let first = 1;
  let second = 0;
  let temp = null;

  while (N >= 0) {
    temp = first;
    first = first + second;
    second = temp;
    N--;
  }

  return first - second;
};

export default fib;
