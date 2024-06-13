import { filteredPosts } from "$lib/postData.js";

export async function load({ params }) {
  const metadata = filteredPosts.find((post) => {
    return post.slug == params.slug;
  });

  if (metadata.showImage && metadata.coverImage) {
    metadata.coverImage = await import(/* @vite-ignore */ metadata.coverImage);
    metadata.coverImage = metadata.coverImage.default;
  } else {
    metadata.coverImage = "";
  }

  if (!metadata.showToC || !metadata.ToC) {
    metadata.ToC = "";
  }

  const article = await import(`../../../../lib/articles/${metadata.slug}.md`); // Needs to be hard coded in order to be a dynamic import.
  const content = article.default;

  return { content, metadata };
}
