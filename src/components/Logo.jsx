import React from "react";
import logoImage from "../../public/Logo.png";
function Logo({ imgwidth, props }) {
  return (
    <div>
      <img
        style={{ width: imgwidth }}
        src={logoImage}
        {...props}
        alt="ScreenSeek"
      />
    </div>
  );
}

export default Logo;
