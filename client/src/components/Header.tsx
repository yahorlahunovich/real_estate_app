import { Link } from "react-router-dom";
import { logo } from "../assets/icons";
import { useState } from "react";

type HeaderProps = {
  setIsSignup: (isSignup: boolean) => void;
  setIsSignin: (isSignin: boolean) => void;
};

const Header = ({ setIsSignin, setIsSignup }: HeaderProps) => {
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  return (
    <header className="flex flex-row justify-between items-center px-16 uppercase border-b border-gray-200">
      <div>
        <Link to="/">
          <img src={logo} className="h-20" />
        </Link>
      </div>
      <form className="w-2/6">
        <input
          type="text"
          placeholder="Search..."
          className="border py-2 px-4 w-full border-black rounded-full"
        />
      </form>
      <nav className="flex flex-row justify-center items-center gap-4">
        <span
          className="cursor-pointer"
          onClick={() => setIsProfileClicked(!isProfileClicked)}
        >
          Profile
        </span>
        {/* <Link to=""></Link> */}
      </nav>
      {isProfileClicked && (
        <ul
          className="absolute w-40 px-2 py-4 flex flex-col gap-4 right-16 top-24 shadow-md"
          autoFocus
          onBlur={() => setIsProfileClicked(false)}
        >
          <li
            className="cursor-pointer"
            onClick={() => {
              setIsSignup(true);
              setIsProfileClicked(false);
            }}
          >
            Sign up
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              setIsSignin(true);
              setIsProfileClicked(false);
            }}
          >
            Log in
          </li>
          <li></li>
          <li></li>
        </ul>
      )}
    </header>
  );
};

export default Header;
