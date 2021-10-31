import React from "react";
import "./login.css";
import UsefireBase from "./../../hooks/useFirebase/UsefireBase";
import { useHistory, useLocation } from "react-router";
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
    <div className="logingoogle">
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
  );
};

export default Login;
