import React from "react";
import {
  FiInfo,
  FiCheckCircle,
  FiAlertTriangle,
  FiXCircle,
} from "react-icons/fi";

const Message = ({ variant, children }) => {
  let icon;
  let backgroundColor;

  switch (variant) {
    case "success":
      icon = <FiCheckCircle className='mr-2' />;
      backgroundColor = "bg-green-500";
      break;
    case "danger":
      icon = <FiAlertTriangle className='mr-2' />;
      backgroundColor = "bg-red-500";
      break;
    case "warning":
      icon = <FiAlertTriangle className='mr-2' />;
      backgroundColor = "bg-yellow-500";
      break;
    case "info":
    default:
      icon = <FiInfo className='mr-2' />;
      backgroundColor = "bg-cozy-purple";
      break;
  }

  return (
    <div
      className={`p-4 rounded ${backgroundColor} text-white text-center flex items-center font-thin`}
    >
      {icon}
      {children}
      <button
        className='focus:outline-none'
        onClick={() => {
          /* Close button action */
        }}
      >
        <FiXCircle />
      </button>
    </div>
  );
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
