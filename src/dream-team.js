import { NotImplementedError } from '../extensions/index.js';

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
export default function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let result = '';
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      if (members[i][0] !== ' ') {
        result = result + members[i][0];
      } else {
        let y = 0;
        while (members[i][y] === ' ') {
          y++;
        }
        result = result + members[i][y];
      }
    }
  }
  
let mas = [];
for (let i = 0; i < result.length; i++) {
  mas[i] = result[i].toUpperCase();
} 

return mas.sort().join('');
}
