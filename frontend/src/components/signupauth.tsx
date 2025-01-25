import { ChangeEventHandler, useState } from "react";
import { Link } from "react-router-dom";

export const SignupAuth = () => {
  const [inputValues, setInputValues] = useState({
    username: "",
    name: "",
    password: "",
  });
  return (
    <div className=" md:h-screen bg-white flex flex-col content-end  justify-center items-center px-18">
      <div className="text-4xl text-black font-bold">Create a New Accout</div>
      <div className="text-xl text-black font-medium">
        Already have an account?{" "}
        <Link to="/signin" className="font-normal text-slate-600 underline">
          Login
        </Link>
      </div>
      <div className="mt-10">
        <LabelledInputs
          label="Username"
          placeholder="jhondoe123"
          onChange={(e) => {
            setInputValues({
              ...inputValues,
              username: e.target.value,
            });
            console.log(inputValues);
          }}
        ></LabelledInputs>
        <LabelledInputs
          label="Name"
          placeholder="Jhon Doe"
          onChange={(e) => {
            setInputValues({
              ...inputValues,
              name: e.target.value,
            });
            console.log(inputValues);
          }}
        ></LabelledInputs>
        <LabelledInputs
          label="Password"
          placeholder="12345678"
          onChange={(e) => {
            setInputValues({
              ...inputValues,
              password: e.target.value,
            });
            console.log(inputValues);
          }}
        ></LabelledInputs>
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
          type={type || "password"}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
}
