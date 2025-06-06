import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';

// export const metadata = {
//   title: 'All posts',
//   description: 'All posts'
// }

export async function generateMetadata() {
  const posts = await getPosts()
  const numberOfPosts = posts.length;
  return {
    title: `Browser all our ${numberOfPosts} possts`,
    description: "all"
  }
}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
