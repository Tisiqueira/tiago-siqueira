import { Navigation, Container } from "./styles";
import logoDark from "../../assets/images/LogoDark.svg";
import ButtonHeader from "../ButtonHeader";

export default function Header() {
  return (
    <Navigation>
      <Container>

        <ButtonHeader onClick={() => console.log("teste") }/>

        <img src={logoDark} alt="TiSiqueira" />
        <p>Handle para trocar cor</p>
      </Container>
    </Navigation>
  );
}
