import React, { useState } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Certificate from "./Certificate";

const CertificateVerify = () => {
  const [searchEnrollmentNumber, setSearchEnrollmentNumber] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    message: "",
    variant: "",
    value: false
  });

  const handleVerification = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(searchEnrollmentNumber);

    try {
      const response = await axios.get(
        `https://acced-2qci.onrender.com/certificateSearch?enrollmentNumber=${searchEnrollmentNumber}`
      );
      setAlert({
        message: "Certificate Verified",
        variant: "success",
        value: true
      });
      console.log(response.data);
      setSearchResult(response.data);

      console.log(searchResult);
    } catch (error) {
      console.log("error is " + error);
      setAlert({
        message: error.response.data.error,
        variant: "danger",
        value: true
      });
      setSearchResult(null)
    }
    setLoading(false);
    setSearchEnrollmentNumber("");
  };

  return (
    <div className="CertificateVerify-container">
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

      {!searchResult &&
      (

      <div className="certificate-box">
        <h2 className="text-center">Certificate Verification Status</h2>

        <div className="mt-5 certificate-form-box">
          <Form className="w-100" onSubmit={handleVerification}>
            <Form.Group className="mb-3" controlId="formBasicEnrollment">
              <Form.Label>Enrollment Number</Form.Label>
              <Form.Control
                type="text"
                name="enrollmentNumber"
                value={searchEnrollmentNumber}
                onChange={(e) => setSearchEnrollmentNumber(e.target.value)}
                placeholder="Enter Enrollment Number"
                required={true}
                autoComplete="off"
              />
            </Form.Group>
            <div className="btnbox">
              {loading ? (
                <Spinner animation="border" variant="primary" />
              ) : (
                <button className="btn btn-success" type="submit">
                  Verify
                </button>
              )}
            </div>
          </Form>
        </div>
      </div>
      )}

      <div className="certificateshow text-center">
        {searchResult && <Certificate searchResult={searchResult} />}
      </div>
    </div>
  );
};

export default CertificateVerify;
