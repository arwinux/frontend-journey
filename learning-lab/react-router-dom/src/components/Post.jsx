import { Link, useParams, useSearchParams } from "react-router";

const posts = [
  {
    id: 1,
    title: "Exploring the Future of AI",
    body: "Artificial intelligence is rapidly evolving, shaping industries and everyday life in unexpected ways.",
  },
  {
    id: 2,
    title: "Why Coffee Fuels Productivity",
    body: "From programmers to writers, coffee has become the unofficial energy source of creative minds.",
  },
  {
    id: 3,
    title: "The Minimalist Lifestyle",
    body: "Living with less doesn’t mean sacrificing happiness—it often means discovering what truly matters.",
  },
];

function Post() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get("name"));

  // id => fetch on backend => find data based on id
  const post = posts.find((p) => p.id === Number(id));

  return (
    <div>
      <h2>{post.id}</h2>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/app/posts">Go to see posts</Link>
      <button onClick={() => setSearchParams({ name: "Arvin" })}>
        Update Query
      </button>
    </div>
  );
}

export default Post;

// -----------------------------------------------------------------------
//? store data in url ?
//* 1. params => /postid => /posts/1
//^ 2. searchParams (query string) => example.com?type=front
