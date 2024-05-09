import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-grid-system';

import imagemBanner from './pessoas.png';
import { Botao } from '../../../components/Button';
import { Tipografia } from '../../../components/Tipografia';

const ImgEstilizado = styled.img`
    max-width: 100%;
`;

const FigureEstilizada = styled.figure`
    padding: ${({ theme }) => theme.espacamentos.l};
    background: ${({ theme }) => theme.cores.neutras.c};
    color: ${({ theme }) => theme.cores.primarias.b};
    margin: 0;
`;

const Banner = () => {
  return (
    <FigureEstilizada>
      <Container>
        <Row align='center'>
          <Col md={5} sm={12}>
            <figcaption>
              <Tipografia componente="h1" variante="h1">
                Uma ponte entre os freelas mais talentosos e os projetos mais interessantes!
              </Tipografia>
            </figcaption>
            <Link to="/cadastro">
              <Botao>
                Quero me cadastrar
              </Botao>
            </Link>
          </Col>
          <Col md={7} sm={12}>
            <ImgEstilizado src={imagemBanner} alt="" />
          </Col>
        </Row>
      </Container>
    </FigureEstilizada>
  )
}

export default Banner