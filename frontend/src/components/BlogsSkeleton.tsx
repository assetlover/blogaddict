export const BlogsSkeleton = () => {
  return (
    <div role="status" className="w-full animate-pulse">
      <div className="border-b pb-4 border-slate-200 pt-4 cursor-pointer md:min-w-lg">
        <div className="flex items-center">
          <div className="  px-2">
            <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
          </div>
        </div>
        <div className="text-xl font-semibold pt-2">
          <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
        </div>
        <div className="font-ligh pt">
          {" "}
          <div className="h-2 bg-gray-200 rounded-full  max-w-[430px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full  max-w-[430px] mb-2.5"></div>
        </div>
        <div className="text-slate-400 font-light text-sm pt-2">
          <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
        </div>
      </div>{" "}
    </div>
  );
};
