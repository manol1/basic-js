import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error ('\'arr\' parameter must be an instance of the Array!');
  }

  let result = arr.slice();
  if(arr[0] === '--discard-prev' || arr[0] === '--double-prev') {
    result.shift();
  } else if (arr[arr.length - 1] === '--discard-next' || arr[arr.length - 1] === '--double-next') {
    result.pop();
  }

  let finish = [];
  result.forEach(function(el, item) {
    switch(el) {
      case '--discard-next':
        result.splice(item, 2);
        break;
      case '--discard-prev':
        result.splice(item - 1, 2);
        finish.pop();
        finish.push(result[item - 1]);
        finish.push(result[item]);
        break;
      case '--double-next':
        result.splice(item, 1, result[item + 1]);
        finish.push(result[item + 1]);
        break;
      case '--double-prev':
        result.splice(item, 1, result[item - 1]);
        finish.push(result[item - 1]);
        break;
      default:
        finish.push(el);
        break;
    }
  })
  return finish;
}
