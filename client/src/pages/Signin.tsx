import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

type SignupProps = {
  setIsSignin: (isSignup: boolean) => void;
};

const Signin = ({ setIsSignin }: SignupProps) => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(signInStart());
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
      setIsSignin(false);
    } catch (error: any) {
      dispatch(signInFailure(error.message));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="absolute flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-grey-200">
      <h3>Sign in</h3>
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
            id="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border border-black"
          />
          <button disabled={loading} type="submit" className="">
            {loading ? "Loading..." : "Sign in"}
          </button>
          <OAuth />
        </form>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};
export default Signin;
