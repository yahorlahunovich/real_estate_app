import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Header from "./components/Header";

const App = () => {
  const [isSignup, setIsSignup] = useState(false);
  return (
    <BrowserRouter>
      <Header isSignup={isSignup} setIsSignup={setIsSignup} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {isSignup && <Signup setIsSignup={setIsSignup} />}
    </BrowserRouter>
  );
};

export default App;
