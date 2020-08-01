import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "./styles";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Mail, Lock } from "react-feather";

function Forml() {
  return (
    <Container>
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <Mail className="form-icons" size={14} />
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group>
              <Lock className="form-icons" size={14} />
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <Button className="w-100" type="submit" variant="primary">
              Sign in
            </Button>
          </Col>
          <Col>
            <Button className="w-100" variant="link">
              Forget your password?
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Forml;
