// Profile.js
import React, { useState } from "react";
import { Container, Col, Card, Form, Button } from "react-bootstrap";
import UserAvatar from "react-user-avatar";
import "./profile.css";

const Profile = ({ isAuthenticated }) => {
  const [user, setUser] = useState(isAuthenticated);
  return (
    <Container>
      <div className="profile-box">
        <Col md={4} className="d-flex mt-5 justify-content-center">
          <UserAvatar size="100" name={user.name} />
        </Col>

        <Col md={8} className="mt-5">
          <Card>
            <Card.Body className="p-5">
              <Form className="">
                <Form.Group controlId="username">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    value={user.name}
                    readOnly
                  />
                </Form.Group>
                <Form.Group className="mt-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={user.email}
                    readOnly
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </Container>
  );
};

export default Profile;
