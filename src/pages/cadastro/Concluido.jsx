import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Col, Row } from "react-grid-system";

import { Botao } from "../../components/Button";
import HeaderTitle from "../../components/HeaderTitle";
import clienteConcluido from './assets/cliente-concluido.png';

const ImagemEstilizada = styled.img`
  max-width: 100%;
  border-radius: 16px;
`;

const Concluido = () => {
  return (
    <>
      <HeaderTitle
        title="Seu perfil está completo!"
        description="Agora é só começar a se conectar com os melhores freelancers do mercado!"
      />

      <figure>
        <ImagemEstilizada src={clienteConcluido} alt="Foto de uma pessoa cliente" />
      </figure>

      <Row justify="center">
        <Col lg={6} md={6} sm={6} style={{ textAlign: 'center' }}>
          <Link to='/cadastro'>
            <Botao variante="secundaria">
              Voltar para a home
            </Botao>
          </Link>
        </Col>
      </Row>
    </>
  )
}

export default Concluido;
