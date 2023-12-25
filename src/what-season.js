const { NotImplementedError } = require('../extensions/index.js');

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
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  if (date === undefined) return 'Unable to determine the time of year!';

  if (!(date instanceof Date)) {
    throw new Error('Invalid date!');
  }

  if (Object.getOwnPropertyNames(date).includes('toString')) {
    throw new Error('Invalid date!');
  }

  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  const month = date.getMonth();

  if (month === 11 || month === 0 || month === 1) return seasons[0]; // winter
  if (month === 2 || month === 3 || month === 4) return seasons[1]; // spring
  if (month === 5 || month === 6 || month === 7) return seasons[2]; // summer
  if (month === 8 || month === 9 || month === 10) return seasons[3]; // autumn
}

module.exports = {
  getSeason
};
