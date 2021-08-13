/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = (s, t) => {
  const sSorted = s.split('').sort().join('');
  const tSorted = t.split('').sort().join('');
  for (let index = 0; index < sSorted.length; index++) {
    if (sSorted[index] !== tSorted[index]) return tSorted[index];
  }
  return tSorted[tSorted.length - 1]
};

module.exports = {
  findTheDifference
}
