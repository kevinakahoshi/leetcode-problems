// @param {string} paragraph
// @param {string[]} banned
// @return {string}

const mostCommonWord = (paragraph, banned) => {
  const splitParagraph = paragraph.split(/[^a-zA-Z]/).filter(element => {
    element = element.toLowerCase();
    if (!banned.includes(element)) {
      return element;
    }
  });
  const wordCount = {};
  let counter = 0;
  let word = null;
  for (let index = 0; index < splitParagraph.length; index++) {
    splitParagraph[index] = splitParagraph[index].toLowerCase();
    if (wordCount[splitParagraph[index]]) {
      wordCount[splitParagraph[index]]++;
    } else {
      wordCount[splitParagraph[index]] = 1;
    }
  }
  for (const keys in wordCount) {
    if (wordCount[keys] > counter) {
      word = keys;
      counter = wordCount[keys];
    }
  }
  return word;
};
