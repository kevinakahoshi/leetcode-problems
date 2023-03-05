/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
const sortTheStudents = (score, k) => {
  return score.sort((student1, student2) => student2[k] - student1[k]);
};

module.exports = {
  sortTheStudents,
};
