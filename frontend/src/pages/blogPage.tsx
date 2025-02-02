import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";

export const BlogPage = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || " " });
  if (loading) {
    return <div>....Loading...</div>;
  } else {
    return <div>{blog?.title}</div>;
  }
};
