import { HtmlBasePlugin } from "@11ty/eleventy";

// run `BASE_PATH=/posts pnpm build` to demo prod
const basePath = process.env.BASE_PATH || "";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.ignores.add("README.md");
}

export const config = {
  dir: {
    output: "dist" + basePath,
  },
  pathPrefix: basePath + "/",
};
