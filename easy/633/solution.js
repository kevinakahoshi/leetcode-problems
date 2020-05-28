// @param {number} c
// @param {boolean}

const judgeSquareSum = c => {
    let low = 0;
    let high = Math.ceil(Math.sqrt(c));
    while (low <= high) {
        const sum = Math.pow(low, 2) + Math.pow(high, 2);
        if (sum > c) {
            high--;
        } else if (sum < c) {
            low++;
        } else {
            return true;
        }
    }
    return false;
};

export default judgeSquareSum;
