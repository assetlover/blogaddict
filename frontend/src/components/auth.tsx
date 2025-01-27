import axios from "axios";
import { ChangeEventHandler, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

export const Auth = ({ type = "signup" || "signin" }) => {
  const [inputValues, setInputValues] = useState({
    username: "",
    name: "",
    password: "",
    email: "",
  });
  async function sendRequest() {
    try {
      console.log(inputValues);
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signin" ? "signin" : "signup"}`,
        {
          inputValues,
        }
      );
      const token = response.data;
      localStorage.setItem("token", "Bearer " + token);
      const navigate = useNavigate();
      navigate("/blogs");
    } catch (e) {}
  }
  return (
    <div className=" md:h-screen bg-white flex flex-col content-end  justify-center items-center px-18">
      <div className="px-20 flex justify-center flex-col items-center">
        <div className="text-4xl text-black font-bold">Create a New Accout</div>
        <div className="text-xl text-black font-medium">
          {type === "signin"
            ? "Don't have an account?"
            : "Already have an account?"}
          <Link
            to={type === "signin" ? "/signup" : "/signin"}
            className="ml-1 font-normal text-slate-600 underline"
          >
            {type === "signin" ? "Signup" : "Signin"}
          </Link>
        </div>
      </div>
      <div className="mt-10   w-full max-w-md">
        <LabelledInputs
          label="Username"
          placeholder="jhondoe123"
          onChange={(e) => {
            setInputValues((c) => ({
              ...c,
              username: e.target.value,
            }));
          }}
        ></LabelledInputs>
        {type === "signup" ? (
          <>
            <LabelledInputs
              label="Name"
              placeholder="Jhon Doe"
              onChange={(e) => {
                setInputValues((c) => ({
                  ...c,
                  name: e.target.value,
                }));
              }}
            ></LabelledInputs>
            <LabelledInputs
              label="Email"
              placeholder="jhondoe@123"
              onChange={(e) => {
                setInputValues((c) => ({
                  ...c,
                  email: e.target.value,
                }));
              }}
            ></LabelledInputs>
          </>
        ) : null}
        <LabelledInputs
          label="Password"
          placeholder="12345678"
          type="password"
          onChange={(e) => {
            setInputValues((c) => ({
              ...c,
              password: e.target.value,
            }));
          }}
        ></LabelledInputs>
        <button
          onClick={sendRequest}
          type="button"
          className="w-full h-12 text-xl mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          {type === "signin" ? "Signin" : "Signup"}
        </button>
      </div>
    </div>
  );
};
interface labelledInputInterface {
  label: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type?: string;
}
function LabelledInputs({
  label,
  placeholder,
  onChange,
  type,
}: labelledInputInterface) {
  return (
    <div className="mb-2">
      <div>
        <div className="block mb-1 text-sm font-medium text-gray-900 text-black text-xl">
          {label}
        </div>
        <input
          onChange={onChange}
          type={type || "text"}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
}
