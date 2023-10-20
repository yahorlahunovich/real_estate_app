import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Signin from "./pages/Signin";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [isSignin, setIsSignin] = useState(false);
  return (
    <BrowserRouter>
      <Header setIsSignin={setIsSignin} setIsSignup={setIsSignup} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      {isSignup && <Signup setIsSignup={setIsSignup} />}
      {isSignin && <Signin setIsSignin={setIsSignin} />}
    </BrowserRouter>
  );
};

export default App;
