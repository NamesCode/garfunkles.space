import { filteredPosts } from "$lib/postData.js";

export async function load({ params }) {
  const metadata = filteredPosts.find((post) => {
    return post.slug == params.slug;
  });

  if (metadata.showImage) {
    metadata.coverImage = await import(
      `../../../../lib/articles/${metadata.slug}/cover_image.webp`
    ); // Needs to be hardcoded in order to be a dynamic import
    metadata.coverImage = metadata.coverImage.default; // Sets the cover image to the imported path
  } else {
    metadata.coverImage = "";
    metadata.coverImageAlt = "";
  }

  if (!metadata.showToC || !metadata.ToC) {
    metadata.ToC = "";
  }

  const article = await import(`../../../../lib/articles/${metadata.slug}.md`); // Needs to be hardcoded in order to be a dynamic import
  const content = article.default; // Sets the content to the svelte component made by the MDSveX preprocessor

  return { content, metadata };
}
