module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("assets");
  // eleventyConfig.addPassthroughCopy("css");
  // eleventyConfig.addPassthroughCopy("js");

  return {
    dir: {
      input: 'site',
      output: 'www'
    }
  }
}
