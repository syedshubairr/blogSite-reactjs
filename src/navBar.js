import { Link } from "react-router-dom";

function navBar() {
  return (
    <nav className="navbar">
      <h1>The Blogs</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "6px",
          }}
        >
          Create Blogs
        </Link>
      </div>
    </nav>
  );
}

export default navBar;
