import React, { useState } from "react";
import { Navigation, Container, Logo } from "./styles";
import logoDark from "../../assets/images/LogoDark.svg";
import logoLight from "../../assets/images/LogoLight.svg";

import Toggle from "../Toggle";

export default function Header() {
  const [isLigth, setIsLight] = useState(false);

  const handleToggle = (isOn) => {
    setIsLight(isOn);
  };

  return (
    <Navigation>
      <Container>
        {!isLigth ? (
          <Logo src={logoDark} alt="TiSiqueira" />
        ) : (
          <Logo src={logoLight} alt="TiSiqueira" />
        )}

        <Toggle onToggle={handleToggle} />
      </Container>
    </Navigation>
  );
}
