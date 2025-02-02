import { Avatar } from "./avatar";

export const AppBar = () => {
  return (
    <div className="bg-slate-00 w-screen border-b border-slate-300 py-4 flex justify-between px-10 items-center ">
      <div className="font-medium">BlogAddict</div>
      <Avatar authorName="Aditya" size={10}></Avatar>
    </div>
  );
};
