const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // throw new NotImplementedError('Not implemented');
  const emailArr = email.split('');
  const index = emailArr.lastIndexOf('@');
  const len = emailArr.length;

  return emailArr.slice(index + 1, len).join('');
}

module.exports = {
  getEmailDomain
};
