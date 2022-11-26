import { useState, useEffect } from "react";
import BlogList from "./BlogList";

function Home() {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      fetch("http://localhost:8000/blogs")
      .then((res) => {
        if (!res.ok) {
          throw Error('Fetch Denied');
        }
        return res.json();
      })
      .then((data) => {
        setError(null);
        setBlogs(data);
        setPending(false);
      })
      .catch((err) => {
        setError(err.message);
        setPending(false);
      });
  }, []);
  // only the event argument 'e' cannot automatically call the function with being clicked
  //while all other argument can make the function call without the click.
  //this is how we can pass multiple props(arguments) into other componenets.
  return (
    <div className="home">
      {error && <div> { error } </div>}
      {isPending && <div> Loading... </div>};
      {blogs && <BlogList blogs={blogs} title="All BLOGS!!" />}
      {/* <button onClick={() => setName("Virex")}>Change me { name }</button> */}
      {/* <BlogList blogs={blogs.filter((blog) => blog.aurthor === 'Virex' )}  title="Mine"/> */}
    </div>
  );
}

export default Home;
