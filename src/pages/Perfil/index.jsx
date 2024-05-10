import http from "../../http";
import { useEffect } from "react";
import styled from "@emotion/styled"
import { Col, Container, Row } from "react-grid-system";

import avatar from './avatar.png';
import background from './perfil-bg.png';
import { Card } from "../../components/Card";
import { Botao } from "../../components/Button";
import { Tipografia } from "../../components/Tipografia";
import { CampoTexto } from "../../components/CampoTexto";

const TituloEstilizado = styled.h1`
    background: url(${background}) no-repeat;
    margin-top: 0;
    font-weight: 600;
    font-size: 40px;
    background-position: center;
    line-height: 246px;
    text-align: center;
`;

const ImgEstilizada = styled.img`
    max-width: 100%;
    margin: 0 auto;
`;

const Perfil = () => {
  useEffect(() => {
    http.get('profile')
      .then(resp => console.log(resp.data))
      .catch(erro => console.error(erro))
  }, []);

  const aoSubmeterForm = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <TituloEstilizado>Perfil</TituloEstilizado>
      <Container>
        <form onSubmit={aoSubmeterForm}>
          <Row>
            <Col sm={12} md={5}>
              <Card>
                <div style={{ textAlign: 'center' }}>
                  <Tipografia componente="h3" variante="h3">Nome Completo</Tipografia>
                  <ImgEstilizada src={avatar} alt="Imagem de perfil" />
                </div>
              </Card>
            </Col>
            <Col sm={12} md={7}>
              <Tipografia componente='h3' variante='h3'>
                Revise seus dados
              </Tipografia>
              <CampoTexto
                titulo='Nome'
              />
              <CampoTexto
                titulo='Sobrenome'
              />
              <Row>
                <Col sm={12} md={6}>
                  <CampoTexto
                    titulo='Celular'
                  />
                </Col>
                <Col sm={12} md={6}>
                  <CampoTexto
                    titulo='E-mail' tipo="email"
                  />
                </Col>
                <Col sm={12} md={6}>
                  <CampoTexto
                    titulo='Código postal'
                  />
                </Col>
                <Col sm={12} md={6}>
                  <CampoTexto
                    titulo='País'
                  />
                </Col>
                <Col sm={12} md={6}>
                  <Botao fluido>
                    Salvar
                  </Botao>
                </Col>
              </Row>
            </Col>
          </Row>
        </form>
      </Container>
    </>
  )
}

export default Perfil;
