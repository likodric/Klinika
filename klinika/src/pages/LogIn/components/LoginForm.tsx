import React, { useState } from "react";

import Checkbox from "antd/lib/checkbox/Checkbox";
import {
  ExclamationCircleOutlined,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import FormaInput from "component/FormInput/FormInput";
import { Button, Form } from "antd";

import "./LoginForm.scss";
import InfoMessage from "component/ErorMessage/InfoMessage/InfoMessage";
import { useNavigate } from "react-router-dom";
const mockValidCredentias = {
  username: "Gadzet",
  password: "gogogadzet",
};

const passwordRules = [
  {
    required: true,
    message: "Molim unesite šifru ",
  },
];

const usernameRules = [
  {
    required: true,
    message: "Molim unesite korisničko ime ",
  },
];

function LoginForm() {
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log("Success:", values);
    if (
      values.username !== mockValidCredentias.username ||
      values.password !== mockValidCredentias.password
    ) {
      setError(true);
    } else {
      navigate("/doctor");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="logIn">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="errorMessage">
          {error && (
            <InfoMessage
              icon={<ExclamationCircleOutlined />}
              message="Neispravno korisničko ime ili šifra"
            />
          )}
        </div>
        <div className="inputPolje">
          <FormaInput
            rules={usernameRules}
            icon={<UserOutlined />}
            placeholder="Korisničko ime"
            type="text"
            name="username"
            classNames="loginUsernameInput"
          />
          <FormaInput
            rules={passwordRules}
            icon={<LockOutlined />}
            placeholder="Šifra"
            type="password"
            name="password"
            classNames="loginPasswordInput"
          />
        </div>
        <div className="loginActions"></div>
        <Form.Item
          name="remember"
          className="loginRemember"
          valuePropName="checked"
        >
          <Checkbox>Zapamti me</Checkbox>
          <a href="ds">Zaboravio/la sam lozinku</a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" className="logInBtn" htmlType="submit">
            PRIJAVI SE
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginForm;
