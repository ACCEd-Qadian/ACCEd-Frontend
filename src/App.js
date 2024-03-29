import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar_Main from "./Components/Navbar_Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import CertificateVerify from "./Components/Pages/Certificate Verification/CertificateVerify";
import Register from "./Components/Pages/Register/Register";
import Login from "./Components/Pages/Login/Login";
import { useEffect, useState } from "react";
import PrivateRoute from "./PrivateRoute";
import Profile from "./Components/Pages/Profile/Profile";
import ForgotPassword from "./Components/Pages/Login/ForgotPassword";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  useEffect(() => {
    const User = localStorage.getItem("user");
    if (User) {
      const foundUser = JSON.parse(User);
      setIsAuthenticated(foundUser);
    }
  }, []);
  return (
    <div className="grid-container">
      <BrowserRouter>
      <header>
        <Navbar_Main />
      </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/CertificateVerify" element={<CertificateVerify />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Forgotpassword" element={<ForgotPassword />} />
            <Route path="/Profile" element={<Profile isAuthenticated={isAuthenticated} />} />
            <Route path="/AdminPanel" element={<PrivateRoute isAuthenticated={isAuthenticated} />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="">
            Copyright © 2001 ACCEd Qadian, India, All rights reserved.
          </div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
