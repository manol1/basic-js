import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    return 'Invalid date!';
  }

  if (typeof date.getMonth() !== 'number' || date.getMinutes() === new Date().getMinutes()) {
    return 'Invalid date!';
  }

  if (date.getMonth() === 11 || date.getMonth() === 0 || date.getMonth() === 1) {
    return 'winter';
  } else if (date.getMonth() > 1 && date.getMonth() < 5) {
    return 'spring';
  } else if (date.getMonth() > 4 && date.getMonth() < 8) {
    return 'summer';
  } else if (date.getMonth() > 7 && date.getMonth() < 11) {
    return 'autumn';
}
}
