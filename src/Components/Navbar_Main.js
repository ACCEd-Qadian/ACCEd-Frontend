import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Navbar_Main = () => {
  const [loggedinuser, setLoggedinuser] = useState();

  useEffect(() => {
    const User = localStorage.getItem("user");
    if (User) {
      const foundUser = JSON.parse(User);
      setLoggedinuser(foundUser);
    }
  }, []);

  // console.log(loggedinuser)

  const handlelogout = () => {
    localStorage.removeItem("user");
    window.location.href = "https://acced.netlify.app/login";
  };

  return (
    <>
      <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">ACCEd</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link className="nav-link" to={"/"}>
              Home
            </Link>
            <Link className="nav-link" to={"/CertificateVerify"}>
              CertificateCheck
            </Link>
            <Link className="nav-link" to={"/Contact"}>
              Contact
            </Link>
          </Nav>
          <Nav>
            {loggedinuser && (
              <Link className="nav-link" to={"/Profile"}>
                {loggedinuser.name}
              </Link>
            )}

            {loggedinuser && loggedinuser.isAdmin && (
              <Link className="nav-link" to={"/AdminPanel"}>
                AdminPanel
              </Link>
            )}

            {loggedinuser ? (
              <Link className="nav-link " to="/" onClick={handlelogout}>
                Log Out{" "}
              </Link>
            ) : (
              <Link className="nav-link" to={"/Login"}>
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
  );
};

export default Navbar_Main;
