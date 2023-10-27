import { filteredPosts } from "../gatherPostData.js";
console.log(filteredPosts);

export async function GET() {
  const headers = { "Content-Type": "application/json" };
  return new Response(JSON.stringify(filteredPosts), { headers });
}
