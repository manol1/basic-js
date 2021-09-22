import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let text = String(n);
  let arr = [];
  let i = 0;
  while (i < text.length) {
    arr.push(Number(text.slice(0, i) + text.slice(i + 1)));
    i++;
  }

  let max = arr[0];

  arr.forEach(function (el) {
    if (el > max) {
      max = el;
    }
  })

  return max;
}
