import React from "react";

const Footer = ({ itemCount }) => {
  return (
    <div className="footer">
      <p>{itemCount} item(s) left</p>
    </div>
  );
};

export default Footer;
