import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div
      style={{
        textAlign: "center",
        height: "30px",
        position: "relative",
        bottom: "0px",
      }}
    >
      Built by LuoTheBuilder ©{year}
    </div>
  );
};

export default Footer;
