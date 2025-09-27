import { Link } from "react-router";

function Posts() {
  return (
    <div>
      <h1>Posts Page</h1>
      <div>
        <li>
          <Link to="1?category=free&type=blog">Post 1</Link>
        </li>
        <li>
          <Link to="2">Post 2</Link>
        </li>
        <li>
          <Link to="3">Post 3</Link>
        </li>
      </div>
    </div>
  );
}

export default Posts;
