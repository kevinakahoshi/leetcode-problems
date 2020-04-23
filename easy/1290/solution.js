// @param {number[]} arr1
// @param {number[]} arr2
// @return {number[]}

const relativeSortArray = (arr1, arr2) => {
  const output = [];
  let arr1Copy = JSON.parse(JSON.stringify(arr1));

  for (let arr2Index = 0; arr2Index < arr2.length; arr2Index++) {
    for (let arr1Index = 0; arr1Index < arr1Copy.length;) {
      if (arr1Copy[arr1Index] === arr2[arr2Index]) {
        output.push(arr1Copy.splice(arr1Index, 1)[0]);
      } else {
        arr1Index++;
      }
    }
  }

  arr1Copy = arr1Copy.sort((first, second) => first - second);
  output.push(...arr1Copy);

  return output;
};

export default relativeSortArray;
