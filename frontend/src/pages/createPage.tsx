import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { AppBar } from "../components/appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <AppBar></AppBar>
      <div className="flex justify-center pt-8">
        <div className="max-w-screen-lg w-full">
          <textarea
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            rows={1}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Title"
          ></textarea>
          <TextEditor
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <button
            onClick={async () => {
              const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog`,
                {
                  title,
                  content,
                },
                {
                  headers: { Authorization: localStorage.getItem("token") },
                }
              );

              navigate(`/blogs/${response.data.id}`);
            }}
            type="button"
            className="text-gray-900 bg-white border border-slate-200 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-4  "
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

function TextEditor({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="max-w-screen-lg w-full mt-4">
      <textarea
        onChange={onChange}
        rows={15}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
        placeholder="Write your content here..."
      ></textarea>
    </div>
  );
}
