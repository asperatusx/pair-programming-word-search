const wordSearch = (letters, word) => {
  if (!letters.length || !word) return false
  if (findHorizontalWord(letters, word)) return true
  let rowArray = [];
  let VerticalArray = [];
  for (let ele = 0; ele < letters[0].length; ele++) {
    rowArray = [];
    for (let arr = 0; arr < letters.length; arr++) {
      rowArray.push(letters[arr][ele]);
    }
    VerticalArray.push(rowArray);
  }
  if (findHorizontalWord(VerticalArray, word)) {
    return true
  }
return false
}

const findHorizontalWord = (array, word) => {
  const newArray = array.map(ls => ls.join(''));
  const reversedWord = word.split('').reverse().join('');
  for (l of newArray) {
    if (l.includes(word) || l.includes(reversedWord)) return true
  }
}

module.exports = wordSearch