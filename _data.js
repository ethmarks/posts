const assetsURL = "https://site-ethmarks.vercel.app/common";

const [headerHTML, footerHTML] = await Promise.all([
  fetch(`${assetsURL}/header-posts.wc.html`).then((r) => r.text()),
  fetch(`${assetsURL}/footer.wc.html`).then((r) => r.text()),
]);

export const remote = {
  header: headerHTML,
  footer: footerHTML,
};
