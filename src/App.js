import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar_Main from "./Components/Navbar_Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import CertificateVerify from "./Components/Pages/Certificate Verification/CertificateVerify";
import AdminPanel from "./Components/Pages/Admin Panel/AdminPanel";
import Login from "./Components/Pages/Login Page/Login";
import Register from "./Components/Pages/Register Page/Register";

function App() {
  return (
    <div className="grid-container">
      <BrowserRouter>
        <Navbar_Main />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/CertificateVerify" element={<CertificateVerify/>} />
            <Route path="/AdminPanel" element={<AdminPanel/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Register" element={<Register/>} />
          
          </Routes>
        </main>
        <footer className="footer">
          <div className="">All rights reserved!</div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;