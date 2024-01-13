// const blocksToHtml = require("@sanity/block-content-to-html");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('resources');
  eleventyConfig.addPassthroughCopy('styles');
  eleventyConfig.addPassthroughCopy('_redirects');

  // eleventyConfig.addFilter("sanity", (blocks) => blocksToHtml({ blocks }));

  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_layouts',
      output: '_site',
    },
  };
}
