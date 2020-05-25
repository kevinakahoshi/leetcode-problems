// @param {string} s
// @param {string}

const alphabet = '_abcdefghijklmnopqrstuvwxyz';
const freqAlphabets = s => {
    const stack = [];
    for (let index = 0; index < s.length; index++) {
        if (s[index] === '#') {
            stack.pop();
            stack.pop();
            const first = s[index - 2];
            const second = s[index - 1];
            stack.push(alphabet[`${first}${second}`]);
        } else {
            stack.push(alphabet[s[index]]);
        }
    }
    return stack.join('');
};

export default freqAlphabets;
