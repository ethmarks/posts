// deno-lint-ignore-file no-explicit-any
/**
 * Custom markdown-it rendering rule for images that supports:
 * - Video files (webm, mp4, ogg, mov)
 * - GIF replacement with video (using GIF marker in alt text)
 * - Tall images/videos (using TALL marker in alt text)
 * - Figure with optional caption
 */
export function imageRule(
  tokens: any,
  idx: any,
  _options: any,
  _env: any,
  _self: any,
) {
  const token = tokens[idx];
  const srcIndex = token.attrIndex("src");
  const src = token.attrs![srcIndex][1];
  const alt = token.content;
  const title = token.attrGet("title") || "";

  // Check if it's a video based on file extension
  const isVideo = /\.(webm|mp4|ogg|mov)$/i.test(src);

  // Check for special markers in alt text
  const isGif = /GIF/.test(alt);
  const isTall = /TALL/.test(alt);

  // Process alt text by removing markers
  const altProcessed = alt.replace(/GIF/g, "").replace(/TALL/g, "").trim();

  // Determine the title/caption to use
  const caption = title;
  const displayTitle = caption || altProcessed;

  // Compute all HTML attributes
  const tag = isVideo ? "video" : "img";
  const typeClass = isVideo ? (isGif ? "gif" : "video") : "";
  const verticalClass = isTall ? " media-verytall" : "";
  const className = `responsive${
    typeClass ? ` ${typeClass}` : ""
  }${verticalClass}`;
  const labelAttr = isVideo ? "aria-label" : "alt";
  const titleAttr = displayTitle ? ` title="${displayTitle}"` : "";
  const videoAttrs = isVideo
    ? (isGif ? " autoplay loop muted playsinline" : " controls")
    : "";
  const captionHtml = caption ? `<figcaption>${caption}</figcaption>` : "";

  return `<figure>
            <${tag}
              class="${className}"
              src="${src}"
              ${labelAttr}="${altProcessed}"
              ${titleAttr}
              ${videoAttrs}>
            </${tag}>
            ${captionHtml}
          </figure>`;
}
