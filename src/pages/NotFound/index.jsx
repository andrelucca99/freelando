import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-grid-system";

import { Botao } from "../../components/Button";
import { Card } from "../../components/Card";

import notFound from "./notFound.jpg";
import LayoutBase from "../LayoutBase";
import { Tipografia } from "../../components/Tipografia";

const ImagemEstilizada = styled.img`
  max-width: 100%;
  border-radius: 16px;
`;

const NotFound = () => {
  return (
    <LayoutBase>
      <Container>
        <Row justify="center">
          <Col xxx={6} xxl={6} xl={6} lg={6} md={8} sm={12} style={{ marginTop: '48px' }}>
            <Card>
              <Tipografia componente="h1" variante="h1">Ops... Página não encontrada :(</Tipografia>

              <figure>
                <ImagemEstilizada src={notFound} alt="Foto page 404" />
              </figure>

              <Tipografia componente="body" variante="body">
                Não encontramos a página que você está buscando, mas temos muitas outras para você navegar!
              </Tipografia>

              <div style={{ textAlign: "center" }}>
                  <Link to='/'>
                    <Botao variante="secundaria">
                      Voltar para a home
                    </Botao>
                  </Link>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </LayoutBase>
  );
}

export default NotFound;
