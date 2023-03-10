import { Post } from "../lib/models/types";
import sanity from "../sanity";

type PostsProps = {
  posts: Post[];
};

const Posts = ({ posts }: PostsProps) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post._id}>{post.title}</li>
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  const posts = await sanity.fetch(
    '*[_type == "post"] | order(publishedAt desc)'
  );
  return {
    props: {
      posts,
    },
  };
}

export default Posts;
