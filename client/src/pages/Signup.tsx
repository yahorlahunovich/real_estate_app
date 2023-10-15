import { useState } from "react";

type SignupProps = {
  setIsSignup: (isSignup: boolean) => void;
};

const Signup = ({ setIsSignup }: SignupProps) => {
  const [formData, setFormData] = useState({});
  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsSignup(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  console.log(formData);
  return (
    <div className="absolute flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-grey-200">
      <h3>Sign up</h3>
      <div>
        <span>Welcome to Airbnb</span>
        <form className="flex flex-col gap-2" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Email"
            id="email"
            onChange={handleChange}
            className="w-full border border-black"
          />
          <input
            type="text"
            placeholder="First Name"
            id="firstName"
            onChange={handleChange}
            className="w-full border border-black"
          />
          <input
            type="text"
            placeholder="Second Name"
            onChange={handleChange}
            id="secondName"
            className="w-full border border-black"
          />
          <input
            type="text"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border border-black"
          />
          <button type="submit" className="">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
