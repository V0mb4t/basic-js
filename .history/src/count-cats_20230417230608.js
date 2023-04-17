const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(/* matrix */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}


function countCats(matrix) {
  let countOfCats = 0;

  // Проходимся по каждому элементу в массиве
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // Проверяем, является ли элемент ушами кошки
      if (matrix[i][j] === '^^') {
        // Если является, увеличиваем счетчик
        countOfCats++;
      }
    }
  }

  // Возвращаем общее количество найденных кошек
  return countOfCats;
}

module.exports = {
  countCats
};
