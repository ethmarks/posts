import { HtmlBasePlugin } from "@11ty/eleventy";
import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";

// run `BASE_PATH=/posts pnpm build` to demo prod
const basePath = process.env.BASE_PATH || "";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(HtmlBasePlugin);
  eleventyConfig.addPlugin(EleventyVitePlugin);

  eleventyConfig.ignores.add("README.md");

  eleventyConfig.addPassthroughCopy("post-index.css");
}

export const config = {
  dir: {
    output: "dist" + basePath,
  },
  pathPrefix: basePath + "/",
};
