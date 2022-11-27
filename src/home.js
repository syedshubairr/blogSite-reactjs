import BlogList from "./BlogList";
import useFetch from "./useFetch";

function Home() {
  const { data: blogs,isPending,error } = useFetch("http://localhost:8000/blogs");

  // only the event argument 'e' cannot automatically call the function with being clicked
  //while all other argument can make the function call without the click.
  //this is how we can pass multiple props(arguments) into other componenets.
  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <div> Loading... </div>};
      {blogs && <BlogList blogs={blogs} title="All BLOGS!!" />}
      {/* <button onClick={() => setName("Virex")}>Change me { name }</button> */}
      {/* <BlogList blogs={blogs.filter((blog) => blog.aurthor === 'Virex' )}  title="Mine"/> */}
    </div>
  );
}

export default Home;
