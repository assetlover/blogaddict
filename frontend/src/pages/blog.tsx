import { AppBar } from "../components/appbar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return <div> Loading ...</div>;
  }
  return (
    <div>
      <AppBar></AppBar>
      <div className=" flex justify-center">
        <div className="max-w-7xl pl-10">
          {blogs.map((blog) => (
            <BlogCard
              title={blog.title}
              content={blog.content}
              authorName={blog.author.name || "Anyonyms"}
              id={blog.id}
              publishDate="27-feb"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
