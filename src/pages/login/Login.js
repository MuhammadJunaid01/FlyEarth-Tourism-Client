import React from "react";
import "./login.css";
import UsefireBase from "./../../hooks/useFirebase/UsefireBase";
import { useHistory, useLocation } from "react-router";
import { Container, Row, Col } from "react-bootstrap";
import loginimage from "../../images/login.jpg";
const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const redirect = location.state?.from || "/home";
  const {
    LoginWithGoole,
    user,
    setUser,
    isLoading,
    setIsLoading,
    error,
    setError,
  } = UsefireBase();
  const SignWithGoole = () => {
    LoginWithGoole()
      .then((result) => {
        const LogedUser = result.user;
        setUser(LogedUser);
        history.push(redirect);
        setIsLoading(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        setError(email);
        setError(errorMessage);
        setError(errorCode);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  console.log("login user:", user);
  return (
    <Container>
      <div className="logingoogle">
        <Row>
          <Col lg={6} sm={12} md={12}>
            <img className="img-fluid" src={loginimage} alt="" />
          </Col>
          <Col lg={6} sm={12} md={12}>
            <div>
              <div className="loginContainer">
                <div className="login-info">
                  <h3>Login With Google</h3>
                </div>
                <button onClick={SignWithGoole} className="google">
                  <i className="fab fa-google"></i> Login With Google
                </button>
                <p>{error}</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Login;
