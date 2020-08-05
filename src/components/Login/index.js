import React, { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FacebookLogin from "react-facebook-login";

import api from "../../services/api";

import Form from "./Form/index";

import { Container, ContainerInfo } from "./styles";

const API_FACEBOOK = "2575118266038559";

function Login({ logo, nameCompany, illustration }) {
  const [profile, setProfile] = useState({
    name: null,
    avatar: null,
    email: null,
  });

  const responseFacebook = (response) => {
    console.log(response);
  };

  async function handleData() {
    return await api
      .get("/users/paulojanai")
      .then((res) => {
        const { name, avatar_url, email } = res.data;

        setProfile({
          name: name,
          avatar: avatar_url,
          email: email,
        });
      })
      .catch((error) => console.log(error));
  }

  console.log(profile);

  return (
    <Container>
      <div>
        <Row>
          <Col md={5}>
            <Row className="flex-column left">
              <Col>
                {/* props */}
                <img src={logo} alt="" className="logo" />
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
                <ContainerInfo className="">
                  <Button
                    className="btn-facebook"
                    onClick={handleData}
                    variant="primary"
                  >
                    login with facebook
                  </Button>
                </ContainerInfo>
                {/* <FacebookLogin
                  appId="745389516295348"
                  autoLoad={true}
                  fields="name,email,picture"
                  callback={responseFacebook}
                  icon="fa-facebook"
                /> */}
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
              <img
                src={illustration}
                alt=""
                className="illustration img-fluid"
              />
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

export default Login;
