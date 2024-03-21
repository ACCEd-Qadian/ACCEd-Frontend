import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Alert from "react-bootstrap/Alert";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({
    message: "",
    variant: "",
    value: false
  });

  const [loggedinuser, setLoggedinuser] = useState();
  function Redirecttologedin() {
    window.location.href = "https://acced.netlify.app";
  }


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://acced.cyclic.app/login", {
        email,
        password
      });
      localStorage.setItem("user", JSON.stringify(response.data));
      setLoggedinuser(response.data);
      console.log(response);
      setAlert({
        message: "Loged in",
        variant: "success",
        value: true
      });
        Redirecttologedin();
    } catch (error) {
      console.log(error);
      setAlert({
        message: error.response.data.message,
        variant: "danger",
        value: true
      });
    }
  };

  return (
    <div className="login-box">
      <Container className="LoginContainer">
        {alert.value && (
          <Alert
            variant={alert.variant}
            onClose={() => {
              setAlert({ value: false });
            }}
            dismissible
          >
            <Alert.Heading>{alert.message}</Alert.Heading>
          </Alert>
        )}
        <h2>Login</h2>
        <Form onSubmit={handleLogin} className="">
          <Form.Group controlId="formBasicemail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
              autoComplete="off"
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required={true}
            />
          </Form.Group>
          <Button type="submit" className="btn btn-primary" variant="Primary">
            Login
          </Button>
          <div>
            <div>
              New customer? <Link to={"/Register"}>Create your account</Link>
            </div>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
