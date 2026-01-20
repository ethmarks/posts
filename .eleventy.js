export default async function (eleventyConfig) {
  eleventyConfig.setOutputDirectory("dist");
  eleventyConfig.ignores.add("README.md");
}
