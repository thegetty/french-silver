//
// CUSTOMIZED FILE -- French Silver
// new transform to wrap fractions in non-breaking <span>
//
const chalkFactory = require('~lib/chalk')
const { error } = chalkFactory('transforms:fractions')

/**
 * An Eleventy transform function to wrap fractions
 *
 * @param      {String}  content
 * @return     {String}  transformed content
 */
module.exports = async function (content) {
  const findPattern = /([0-9]+[&nbsp;|\s]+[0-9]+\/[0-9]+)/g
  const replacePattern = '<span style="white-space: nowrap;">$1</span>'

  return content.replace(findPattern, replacePattern)
}
