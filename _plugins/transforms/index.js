//
// CUSTOMIZED FILE -- French Silver
// adds new fractions transform, lines 10 and 25
//
const chalk = require('chalk')
const fs = require('fs-extra')
const path = require('path')

const formatOutput = require('./format')
const wrapFractions = require('./fractions')
const outputs = require('./outputs')

/**
 * An Eleventy plugin to configure output transforms
 *
 * @param      {Object}  eleventyConfig  Eleventy configuration
 * @param      {Object}  collections  Eleventy collections
 */
module.exports = function(eleventyConfig, collections) {
  /**
   * Registers a transform to format output using Prettier
   */
  eleventyConfig.addTransform('format', formatOutput)

  eleventyConfig.addTransform('fractions', wrapFractions)

  /**
   * Register plugin to generate output for epub, html, and pdf using `transforms`
   */
  eleventyConfig.addPlugin(outputs, { eleventyConfig, collections })
}
