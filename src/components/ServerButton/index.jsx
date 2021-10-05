import React from "react";

import { Button } from "./styles";

function ServerButton(props) {
  return (
    <Button
      isHome={props.isHome}
      hasNotifications={props.hasNotifications}
      mentions={props.mentions}
      className={props.selected ? "active" : ""}
    >
    </Button>
  );
}

export default ServerButton;
