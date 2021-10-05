import React from "react";

// import Logo from "../../assets/Logo.svg";

import { Button } from "./styles";

function ServerButton(props) {
  return (
    <Button
      isHome={props.isHome}
      hasNotifications={props.hasNotifications}
      mentions={props.mentions}
      className={props.selected ? "active" : ""}
    >
      {/* {props.isHome && <img src={Logo} alt="Rocketseat" />} */}
    </Button>
  );
}

export default ServerButton;
