import { Link } from "react-router-dom";
import { Avatar } from "./avatar";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishDate: string;
  id: string;
}

export const BlogCard = ({
  authorName,
  title,
  content,
  publishDate,
  id,
}: BlogCardProps) => {
  return (
    <Link to={`/blogs/${id}`}>
      <div className="border-b pb-4 border-slate-200 pt-4 cursor-pointer">
        <div className="flex items-center">
          <Avatar authorName={authorName} size={8}></Avatar>
          <div className="  px-2">{authorName}</div>
          <div className="text-sm font-thin text-slate-500">&#x2022;</div>
          <div className="pl-2 font-light text-gray-500">{publishDate}</div>
        </div>
        <div className="text-xl font-semibold pt-2">{title}</div>
        <div className="font-ligh pt">{content.slice(0, 100) + "...."}</div>
        <div className="text-slate-400 font-light text-sm pt-2">{`${Math.ceil(
          content.length / 300
        )} minutes`}</div>
      </div>
    </Link>
  );
};
