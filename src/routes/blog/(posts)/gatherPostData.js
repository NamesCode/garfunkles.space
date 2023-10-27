// Import the markdown files for each post
const imports = import.meta.globEager("./*/+page.md");

const posts = [];
for (const path in imports) {
  const post = imports[path];
  if (post) {
    // For each of them, MDsveX will do the heavy lifting. The "metadata"
    // is automatically recovered from the Frontmatter
    posts.push({
      ...post.metadata,
    });
  }
}

// Filter the post and order them by published date, then export them
export const filteredPosts = posts
  .filter((post) => !post.hidden)
  .sort((a, b) =>
    new Date(a.date).getTime() > new Date(b.date).getTime()
      ? -1
      : new Date(a.date).getTime() < new Date(b.date).getTime()
      ? 1
      : 0
  );
