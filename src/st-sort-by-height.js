import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let mass = [];
  arr.forEach(function(el, i) {
    if (el === -1) {
      mass.push(i);
    }
  })
  
  let fil = arr.filter(el => el !== -1).sort(function (a, b) {
    if (a > b) {
      return 1;
    }
    if (a === b) {
      return 0;
    }
    if (a < b) {
      return -1;
    }
  })

  let result = [];
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (mass.includes(i)) {
      result.push(-1);
    } else {
      result.push(fil[j]);
      j++;
    }
  }

  return result
}
