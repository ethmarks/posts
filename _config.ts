import lume from "lume/mod.ts";
import markdown from "lume/plugins/markdown.ts";
import inline from "lume/plugins/inline.ts";
import readingInfo from "lume/plugins/reading_info.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import base_path from "lume/plugins/base_path.ts";
import { imageRule } from "./render_image.js";
// import code_highlight from "lume/plugins/code_highlight.ts";
// import metas from "lume/plugins/metas.ts";
// import feed from "lume/plugins/feed.ts";
// import sitemap from "lume/plugins/sitemap.ts";

const url = ("https://" + Deno.env.get("VERCEL_URL")) || "http://localhost";
const basePath = Deno.env.get("BASE_PATH") || ""; // "/posts"

const site = lume({
  dest: "./dist" + basePath,
  location: new URL(url + basePath + "/"),
});

site.ignore("README.md");

site.add("media");
site.add("assets/post-index.css");
site.add("assets/post-single.css");
site.add("assets/randompost.js");

// Strip 'content/' from output URLs
site.preprocess([".md", ".vto"], (pages) => {
  for (const page of pages) {
    if (page.data.url?.startsWith("/content/")) {
      page.data.url = page.data.url.replace("/content/", "/");
    }
  }
});

/** Convert a Date or string to a Temporal.PlainDate */
function toPlainDate(value: Date | string): Temporal.PlainDate {
  if (value instanceof Date) {
    return Temporal.PlainDate.from(value.toISOString().split("T")[0]);
  }
  return Temporal.PlainDate.from(value.toString());
}
site.filter("toPlainDate", toPlainDate);

site.use(markdown({
  options: {
    "typographer": true,
  },
  rules: {
    image: imageRule,
  },
}));
site.use(readingInfo({
  wordsPerMinute: 200,
}));
site.use(lightningcss());
site.use(base_path());
site.use(inline());
// site.use(code_highlight());
// site.use(metas());
// site.use(feed());
// site.use(sitemap());

export default site;
