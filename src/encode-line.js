const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(/* str */) {
  throw new NotImplementedError('Not implemented');
  // let strObj = {};
  // let res = '';

  // str.split('').forEach(function (s) {
  //   strObj[s] ? strObj[s] += 1 : strObj[s] = 1;
  // });

  // for (const key in strObj) {
  //   res += `${strObj[key]}${key}`;
  // }

  // return res;
}

module.exports = {
  encodeLine
};
