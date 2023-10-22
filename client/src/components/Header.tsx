import { Link } from "react-router-dom";
import { logo } from "../assets/icons";
import { useState } from "react";
import { useAppSelector } from "../redux/hooks";

const Header = () => {
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const { currentUser } = useAppSelector((state) => state.user);
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
        {currentUser ? (
          <Link to="/profile">
            <img
              src={currentUser.avatar}
              alt="profile image"
              className="w-14"
            />
            {currentUser.firstName}
          </Link>
        ) : (
          ""
        )}
        {/* <span
          className="cursor-pointer"
          onClick={() => setIsProfileClicked(!isProfileClicked)}
        >
          Profile
        </span> */}

        {/* <Link to=""></Link> */}
        <Link to="/about">About</Link>
        <Link to="/signin">Sign in</Link>
        <Link to="/signup">Join</Link>
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
          <li
            className="cursor-pointer"
            onClick={() => {
              setIsSignin(true);
              setIsProfileClicked(false);
            }}
          >
            Sign out
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
