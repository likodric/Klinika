import React from "react";

import "./LogIn.scss";

import LoginForm from "./components/LoginForm";

const LogIn = () => {
  return (
    <div className="loginPage">
      <h1 className="loginTitle">KLINIKA</h1>
      <LoginForm />
    </div>
  );
};

export default LogIn;
