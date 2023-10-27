import { filteredPosts } from "./gatherPostData.js";

export function load({ page }) {
  // const post = filteredPosts.find((post) => post.slug === params.article); // looks through the array of posts and finds the one based on slug
  const post = filteredPosts;
  console.log("[article]/+page.js post: " + JSON.stringify(post));
  console.log(page);
  return {
    post,
  };
}
