import React from "react";
import { Container } from "./styles";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "./Form/index";
import PropType from "prop-types";

function Login({ logo, nameCompany, illustration }) {
  return (
    <Container>
      <div>
        <Row>
          <Col md={5}>
            <Row className="flex-column left">
              <Col>
                {/* props */}
                <img src={logo} className="logo" />
                {/* props */}
                <p className="title">
                  <span className="dark-turquoise">We are</span> {nameCompany}
                </p>
                <p className="subtitle">
                  Welcome back. Please login <br /> to your account.
                </p>
                <div className="form">
                  <h5 className="form-title">Sign in</h5>
                  <Form />
                </div>
              </Col>
              <div className="text-center">
                <p className="footer-text">
                  2020 © Library. All rights reserved.
                </p>
              </div>
            </Row>
          </Col>
          <Col md={7} className="right">
            <div className="row flex-column justify-content-center align-items-center">
              <img src={illustration} className="illustration img-fluid" />
              <div className="text-center caption-illustration">
                <h3 className="form-title">Lib Library</h3>
                <p className="subtitle">
                  Catalog and Manage your books with insdustry <br /> leading
                  software.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

Login.PropType = {
  logo: PropType.object.isRequired,
  illustration: PropType.object.isRequired,
  nameCompany: PropType.string.isRequired,
};

export default Login;
