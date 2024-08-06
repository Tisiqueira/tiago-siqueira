import logoDark from "../../assets/images/LogoDark.svg";
import { Overlay, Container } from "./styles";


export default function Modal() {
  return (
    <Overlay>
      <Container>
        <nav>
          <button>Home</button>
          <button>Quem eu sou?</button>
          <button>Tecnologias</button>
          <button>Projetos</button>
          <button>Contato</button>

        <button className="close-modal">X</button>
        </nav>
        <footer>
          <img src={logoDark} alt="TiSiqueira" />
        </footer>
      </Container>
    </Overlay>
  )
}
