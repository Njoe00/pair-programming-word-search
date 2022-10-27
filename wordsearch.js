const wordSearch = (letters, word) => { 
    if (letters.length > 0) {
      const horizontalJoin = letters.map(ls => ls.join(''));
      for (l of horizontalJoin) {
        if (l.includes(word)) return true;
      }
      const verticalJoin = transpose(letters).map(ls => ls.join(''));
      for (l of verticalJoin) {
        if (l.includes(word)) return true;
      }
    }
      return false;
      
  };  

  const transpose = (letters) => {
    
    let vertical = [];
    
    for (let i = 0; i < letters[0].length; i++){
      vertical.push([])
      for (let j = 0; j < letters.length; j++) {
        vertical[i][j] = letters[j][i];
      }
    }
    return vertical;
  }



module.exports = wordSearch

