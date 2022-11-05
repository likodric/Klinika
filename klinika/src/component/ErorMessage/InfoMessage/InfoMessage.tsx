import React from "react";
import "./InfoMessage.scss";

interface InfoMessageProp {
  icon: JSX.Element;
  message: string;
}

const InfoMessage = ({ icon, message }: InfoMessageProp) => {
  return (
    <div className="erorMessage">
      {icon}
      {message}
    </div>
  );
};

export default InfoMessage;
