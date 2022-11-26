function navBar() {
  return (
    <nav className="navbar">
      <h1>The Blogs</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "6px",
          }}
        >
          Create Blogs
        </a>
      </div>
    </nav>
  );
}

export default navBar;
