module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats("html,js,css,svg,ttf");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addWatchTarget(".");
};
