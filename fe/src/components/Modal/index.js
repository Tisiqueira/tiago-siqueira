import { Overlay, Container } from "./styles";

export default function Modal() {
  return (
    <Overlay>
      <Container>
        <nav>
          <button>Home</button>
          <button>Sobre</button>
          <button>Tecnologias</button>
          <button>Projetos</button>
        </nav>
      </Container>
    </Overlay>
  )
}
