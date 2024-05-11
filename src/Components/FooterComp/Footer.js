import React from "react";
import "./Footer.css";

function Footer() {
  const d = new Date();
  return (
    <>
      <h5 className="footer-text">
        Copyright &copy; {d.getFullYear()}, WeCare All rights reserved
      </h5>
    </>
  );
}

export default Footer;
