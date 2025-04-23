module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats("html,js,css,svg,ttf,njk");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addWatchTarget("src");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};
