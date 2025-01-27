import { Auth } from "../components/auth";
import { Quote } from "../components/quote";

export const SignUp = () => {
  return (
    <div className=" h-screen bg-red-200 grid grid-rows-2 md:grid-cols-2 ">
      <Auth type="signup"></Auth>
      <Quote></Quote>
    </div>
  );
};
