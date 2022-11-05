import { Button, Input } from "antd";
import React from "react";
import "./Admin.scss";
const Admin = () => {
  return (
    <div className="admin">
      <div className="navBar"></div>
      <div className="wrapper">
     
      <div className="search">
        <Input type='search'/>
      </div>
      <div className="create"></div>
      <div className="info">
      </div>
      </div>
    </div>
  );
};

export default Admin;
