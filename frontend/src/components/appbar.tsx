import { Avatar } from "./avatar";
import { Link } from "react-router-dom";
export const AppBar = () => {
  return (
    <div className=" w-screen border-b border-slate-300 py-4 flex justify-between px-10 items-center ">
      <div className="font-medium">
        <Link to="/blogs" className="text-xl">
          BlogAddict
        </Link>
      </div>
      <div>
        <Link to="/createBlog">
          <button
            type="button"
            className="text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300 font-medium rounded-full text-sm px-4 py-2.5 text-center me-2 mb-2 mr-4"
          >
            New
          </button>
        </Link>
        <Avatar authorName="Aditya" size={12}></Avatar>
      </div>
    </div>
  );
};
