import { Blog } from "../hooks";
import { AppBar } from "./appbar";
import { Avatar } from "./avatar";

export const FullBlog = ({ blog }: { blog: Blog | undefined }) => {
  return (
    <div>
      <AppBar></AppBar>
      <div className="flex justify-cetner">
        <div className="grid grid-cols-12 px-10 w-full pt-10 ">
          <div className="col-span-8 pl-16 ">
            <div className="text-3xl font-semibold">{blog?.title}</div>
            <div className="font-light text-sm text-slate-500">
              Posted on 2 December 2023
            </div>
            <div className="pt-4 text-slate-700">{blog?.content}</div>
          </div>
          <div className="col-span-4 flex flex-col justify-start px-6 ">
            <div className=" text-xl text-slate-600 ">Author</div>
            <div className="flex justify-center items-center">
              <Avatar
                authorName={blog?.author.name || "Anyonymus"}
                size={10}
              ></Avatar>
              <div className="flex flex-col pl-4">
                <div className="pt-2 text-2xl font-bold ">
                  {blog?.author.name || "A"}
                </div>
                <div className="text-slate-500">
                  Random catch phrase about author to catch the user's attention
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
