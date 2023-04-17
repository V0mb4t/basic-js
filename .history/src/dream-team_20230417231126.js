const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {
  // Проверяем, что входные данные являются массивом
  if (!Array.isArray(members)) {
    return false;
  }

  // Инициализируем переменную для хранения букв
  let letters = '';

  // Проходимся по каждому элементу в массиве
  for (let i = 0; i < members.length; i++) {
    // Проверяем, является ли элемент строкой
    if (typeof members[i] === 'string') {
      // Удаляем начальные и конечные пробелы, и добавляем первую букву в переменную
      letters += members[i].trim().charAt(0).toUpperCase();
    }
  }

  // Сортируем буквы в алфавитном порядке и возвращаем строку
  return letters.split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
