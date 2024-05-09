import { Col, Container } from "react-grid-system";

import Bloco from "./Bloco";
import Banner from "./Banner";
import Chip from "../../components/Chip";
import CardFreela from "./Vantagens/cards/CardFreela";
import CardCliente from "./Vantagens/cards/CardCliente";
import { cardsClientes, cardsFreelas, habilidades } from "./dados";

const PaginaInicial = () => {
  return (
    <>
      <Banner />
      <Container>
        <Bloco cards={cardsClientes} title="Vantagens para contratantes">
          {cardsClientes.map(card => <CardCliente
            key={card.texto}
            icone={card.icone}
            texto={card.texto}
          />)}
        </Bloco>
        <Bloco cards={cardsFreelas} titulo="Vantagens para freelas">
          {cardsFreelas.map(card => <CardFreela
            key={card.texto}
            icone={card.icone}
            texto={card.texto} />)}
        </Bloco>
        <Bloco cards={cardsFreelas} titulo="Quais habilidades você encontra por aqui?">
          <Col sm={12}>
            {habilidades.map(habilidade =>
              <Chip key={habilidade}>{habilidade}</Chip>)}
          </Col>
        </Bloco>
      </Container>
    </>
  );
}

export default PaginaInicial;
