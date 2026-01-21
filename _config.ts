import lume from "lume/mod.ts";
// import date from "lume/plugins/date.ts";
// import code_highlight from "lume/plugins/code_highlight.ts";
// import lume_cms from "lume/plugins/lume_cms.ts";
// import esbuild from "lume/plugins/esbuild.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
// import base_path from "lume/plugins/base_path.ts";
// import metas from "lume/plugins/metas.ts";
// import feed from "lume/plugins/feed.ts";
// import sitemap from "lume/plugins/sitemap.ts";

const site = lume({
  dest: "./dist",
});

site.ignore("README.md");

site.add("assets/post-index.css");

// Strip 'content/' from output URLs
site.preprocess([".md", ".vto"], (pages) => {
  for (const page of pages) {
    if (page.data.url?.startsWith("/content/")) {
      page.data.url = page.data.url.replace("/content/", "/");
    }
  }
});

// site.use(date());
// site.use(code_highlight());
// site.use(lume_cms());
// site.use(esbuild());
site.use(lightningcss());
// site.use(base_path());
// site.use(metas());
// site.use(feed());
// site.use(sitemap());

export default site;
