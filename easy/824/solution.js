// @param {string} S
// @param {string}

const vowels = 'aeiouAEIOU';

const toGoatLatin = S => {
    const split = S.split(' ');
    const output = [];
    for (let index = 0; index < split.length; index++) {
        if (vowels.includes(split[index][0])) {
            output.push(split[index] + 'm' + 'a'.repeat(index + 2));
        } else {
            output.push(split[index].slice(1) + split[index][0] + 'm' + 'a'.repeat(index + 2));
        }
    }
    return output.join(' ');
};

export default toGoatLatin;
