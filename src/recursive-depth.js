import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

export default class DepthCalculator {
  calculateDepth(arr, number = 1) {
    let i = 0;
    while(i < arr.length) {
      if(Array.isArray(arr[i])) {
        number++;
        arr = arr.flat(1);
        return this.calculateDepth(arr, number);
      } else {
        i++;
      }
    }

    return number
  }
}
