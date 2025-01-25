import { SignupAuth } from "../components/signupauth";
import { Quote } from "../components/quote";

export const SignUp = () => {
  return (
    <div className="grid grid-cols-2">
      <SignupAuth></SignupAuth>
      <Quote></Quote>
    </div>
  );
};
