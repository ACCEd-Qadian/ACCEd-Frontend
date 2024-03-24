import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpsent, setOtpsent] = useState(false);
  const [alert, setAlert] = useState({
    message: "",
    variant: "",
    value: false,
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("https://acced.cyclic.app/sendotp", {
        email,
      });
      setAlert({
        message: "OTP Sent Successfully",
        variant: "success",
        value: true,
      });
      setOtpsent(true);
    } catch (error) {
      console.log(error);
      setAlert({
        message: "Network Error",
        variant: "danger",
        value: true,
      });
    }
    setLoading(false);
  };

  const handleResetPass = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (password !== confirmPassword) {
      setAlert({
        message: "Password and confirm password are not matching",
        variant: "danger",
        value: true,
      });
    } else {
      try {
        const response = await axios.post(
          "https://acced.cyclic.app/resetpassword",
          {
            email,
            otp,
            password,
          }
        );
        setAlert({
          message: "Password Reset Successful!",
          variant: "success",
          value: true,
        });

        setTimeout(() => {
          navigate("/login");
        }, 2000); // Delay time in milliseconds (2 seconds in this example)
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
        {!otpsent ? (
          <>
            <h2>Forget Your Password</h2>
            <Form onSubmit={handleSubmit} className="">
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

              {loading ? (
                <Spinner animation="border" variant="primary" />
              ) : (
                <Button
                  type="submit"
                  className="btn btn-primary"
                  variant="success"
                >
                  Submit
                </Button>
              )}
            </Form>
          </>
        ) : (
          <div>
            <h2>Reset Password</h2>
            <Form onSubmit={handleResetPass} className="">
              <Form.Group controlId="formBasicemail">
                <Form.Label>Enter OTP</Form.Label>
                <Form.Control
                  type="otp"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
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
                <Button
                  type="submit"
                  className="btn btn-primary"
                  variant="success"
                >
                  Submit
                </Button>
              )}
            </Form>
          </div>
        )}
        <div className="mt-4">
          <div>
            Back to <Link to={"/Login"}>Login</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ForgotPassword;
