import { Link } from "react-router";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/app/posts">see latest posts</Link>
    </div>
  );
}

export default Home;

//? Absolute path ==> to="/posts"
//? Relative path ==> to="posts"
