import { Navigation, Container, Button } from "./styles";

import logoDark from "../../assets/images/LogoDark.svg";
import menuDark from "../../assets/images/MenuDark.svg";

export default function Header() {
  return (
    <Navigation>
      <Container>
        <Button type="button" >
          <img src={menuDark} alt="Menu" className="menu" />
        </Button>

        <img src={logoDark} alt="TiSiqueira" />
        <p>Handle para trocar cor</p>
      </Container>
    </Navigation>
  );
}
