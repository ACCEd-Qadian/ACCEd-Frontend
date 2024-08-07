import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    message: "",
    variant: "",
    value: false,
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (password !== confirmPassword) {
      setLoading(false);
      return setAlert({
        message: "Password and confirm password are not matching",
        variant: "danger",
        value: true,
      });
    } else {
      try {
        const response = await axios.post("https://acced-2qci.onrender.com/register", {
          name,
          email,
          password,
        });
        setAlert({
          message: "Registered Success",
          variant: "success",
          value: true,
        });
        window.location.href = "https://acced.netlify.app/login";

        setEmail("");
        setName("");
        setPassword("");
        setConfirmPassword("");
      } catch (error) {
        console.log(error);
        setAlert({
          message: error.response.data.error,
          variant: "danger",
          value: true,
        });
      }
    }
    setLoading(false);
  };

  return (
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
      <h2>Create Account</h2>
      <Form onSubmit={handleRegister} className="">
        <Form.Group controlId="formBasicname">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required={true}
            autoComplete="off"
          />
        </Form.Group>

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
        <Form.Group controlId="confirmpassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            required={true}
            autoComplete="off"
          />
        </Form.Group>
        {loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <Button type="submit" className="btn btn-primary" variant="Primary">
            Register
          </Button>
        )}
        <div>
          <div>
            Already have an account? <Link to={"/Login"}>Login</Link>
          </div>
        </div>
      </Form>
    </Container>
  );
};

export default Register;
