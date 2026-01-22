import lumeCMS from "lume/cms/mod.ts";
import GitHub from "lume/cms/storage/github.ts";

const cms = lumeCMS();

const token = Deno.env.get("GITHUB_TOKEN") || "";
cms.storage("gh", GitHub.create("ethmarks/posts", token));

const isLocal = !(Deno.env.get("DENO_DEPLOY"));
const localStorage = "src:content/*.md";
const remoteStorage = "gh:content/*.md";

const storageToUse = isLocal ? localStorage : remoteStorage;

cms.collection({
  name: "posts",
  store: storageToUse,
  fields: [
    "title: text",
    "published: date",
    "content: markdown",
  ],
});

const password = Deno.env.get("CMS_PASS");
if (!password) {
  throw new Error("CMS_PASS environment variable is required");
}
cms.auth({
  ethmarks: password,
});

export default cms;
