import { Navigation, Container } from "./styles";

import logoDark from "../../assets/images/LogoDark.svg";
import menuDark from "../../assets/images/MenuDark.svg";

export default function Header() {
  return (
    <Navigation>
      <Container>
        <img src={menuDark} alt="Menu" className="menu" />
        <img src={logoDark} alt="TiSiqueira" />
      </Container>
    </Navigation>
  );
}
