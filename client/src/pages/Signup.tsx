import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

type SignupProps = {
  setIsSignup: (isSignup: boolean) => void;
};

const Signup = ({ setIsSignup }: SignupProps) => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
      setIsSignup(false);
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
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
            id="lastName"
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
            {loading ? "Loading..." : "Sign up"}
          </button>
          <OAuth />
        </form>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};
export default Signup;
