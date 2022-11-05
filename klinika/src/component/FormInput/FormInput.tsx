import { Input, Form } from "antd";
import React from "react";

interface RulesProp {
  required: boolean;
  message: string;
}

interface FormaInputProp {
  name: string;
  icon: JSX.Element;
  placeholder: string;
  rules: RulesProp[];
  type: string;
  classNames?: string;
}

const FormaInput = ({
  rules,
  name,
  placeholder,
  icon,
  type,
  classNames,
}: FormaInputProp) => {
  return (
    <Form.Item name={name} rules={rules}>
      <Input
        prefix={icon}
        placeholder={placeholder}
        type={type}
        className={classNames}
      />
    </Form.Item>
  );
};

export default FormaInput;
