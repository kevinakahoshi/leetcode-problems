// @param {number[]} arr1
// @param {number[]} arr2
// @return {number[]}

const fizBuzz = (n) => {
  const output = [];
  for (let index = 1; index <= n; index++) {
    if (index % 15 === 0) {
      output.push('FizzBuzz');
    } else if (index % 3 === 0) {
      output.push('Fizz');
    } else if (index % 5 === 0) {
      output.push('Buzz');
    } else {
      output.push(index.toString());
    }
  }
  return output;
};

export default fizBuzz;
