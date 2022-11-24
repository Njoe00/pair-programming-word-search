const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return undefined;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
    
  }
  const vetrcialJoin = fun(letters).map(ls => ls.join(''));
  for (l of vetrcialJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

const fun = (letters) => {
  
  let arr = [];

  for (let i = 0; i < letters[0].length; i++) {
    arr.push([]);
    for (let j = 0; j < letters.length; j++) {
      arr[i][j] = letters[j][i];
    }
    return letters;
  }
};

 

module.exports = wordSearch;

