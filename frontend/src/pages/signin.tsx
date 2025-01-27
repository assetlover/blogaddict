import { Auth } from "../components/auth";
import { Quote } from "../components/quote";

export const SignIn = () => {
  return (
    <div className=" h-screen bg-red-200 grid grid-cols-1 lg:grid-cols-2 ">
      <Auth type="signin"></Auth>
      <Quote></Quote>
    </div>
  );
};
