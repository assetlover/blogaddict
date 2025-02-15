import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { FullBlog } from "../components/fullBlog";
import { Spinner } from "@material-tailwind/react";
import { AppBar } from "../components/appbar";

export const BlogPage = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || " " });
  if (loading) {
    return (
      <div>
        <AppBar />
        <div className=" w-full h-screen flex justify-center items-center">
          <Spinner />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <FullBlog blog={blog}></FullBlog>
      </div>
    );
  }
};
