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
  if(arguments.length === 0) return 'Unable to determine the time of year!';
  if(date instanceof Date === false || Object.getOwnPropertyNames(date).length) {
    throw new Error('Invalid date!');
  }
  if (!('getUTCHours' in date)) {
    throw new Error('Invalid date!');
  }
  if (Object.prototype.toString.call(date) === '[object Date]') {
    let season = date.getMonth();
    if(season>=2 && season<=4) {
      return "spring";
    } else if (season>=5 && season<=7) {
      return "summer";
    } else if(season>=8 && season<=10) {
      return "autumn";
    } else if (season === 0 || season === 1 || season === 11) {
      return "winter"
    }
} else {
  throw new Error('Invalid date!');
}
}

module.exports = {
  getSeason
};
