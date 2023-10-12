import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center px-16 py-5 uppercase border-b border-black">
      <div>
        <Link to="/">Logo</Link>
      </div>
      <form>
        <input
          type="text"
          placeholder="Search..."
          className="border py-2 px-4 border-black"
        />
      </form>
      <nav className="flex flex-row justify-center items-center gap-4">
        <Link to="/about">About</Link>
        <Link to="/sign-in">Sign In</Link>
        {/* <Link to=""></Link> */}
      </nav>
    </header>
  );
};

export default Header;
