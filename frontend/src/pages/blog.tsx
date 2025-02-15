import { AppBar } from "../components/appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogsSkeleton } from "../components/BlogsSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return (
      <div className="flex flex-col">
        <AppBar />
        <div className="flex justify-center items-center h-full  w-full">
          <div className="flex flex-col justify-center max-w-7xl">
            {" "}
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <AppBar></AppBar>
      <div className=" flex justify-center">
        <div className="max-w-7xl pl-10">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
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
