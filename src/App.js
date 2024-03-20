import { Col, Container, Row } from "react-grid-system";
import { CampoTexto } from "./components/CampoTexto";
import { Card } from "./components/Card";
import { Estilos } from "./components/EstilosGlobais";
import { Rodape } from "./components/Footer";
import { Cabecalho } from "./components/Header";
import { ProvedorTema } from "./components/ProvedorTema";
import { Tipografia } from "./components/Tipografia";
import { Botao } from "./components/Button";
import { FreelandoLogo } from "./components/Icones/FreelandoLogo";
import { IconeWhatsApp } from "./components/Icones/IconeWhatsApp";
import { IconeTwitch } from "./components/Icones/IconeTwitch";
import { IconeInstagram } from "./components/Icones/IconeInstagram";
import { IconeTwitter } from "./components/Icones/IconeTwitter";
import { ListaInline } from "./components/Lista/ListaInline";
import { ItemListaInline } from "./components/Lista/ItemListaInline";
import { Link } from "./components/Link";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Cabecalho>
        <Container>
          <Row align="center">
            <Col>
              <FreelandoLogo />
            </Col>
            <Col style={{ textAlign: 'right' }}>
              <Link>Login</Link>
            </Col>
          </Row>
        </Container>
      </Cabecalho>
      <Container style={{ margin: '80px 0' }}>
        <Row justify="center">
          <Col lg={6} md={8} sm={12}>
            <Card>
              <Tipografia variante="h1" componente="h1">Freelando</Tipografia>
              <Tipografia variante="body" componente="body">
                Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
              </Tipografia>
              <Row>
                <Col>
                  <CampoTexto titulo="Nome Completo" />
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={4}>
                  <CampoTexto titulo="Estado" />
                </Col>
              </Row>
              <Row>
                <Col lg={8} md={8} sm={8}>
                  <CampoTexto titulo="Cidade" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <CampoTexto titulo="Email" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <CampoTexto titulo="Senha" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <CampoTexto titulo="Repita a Senha" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <Botao variante="secundaria">Anterior</Botao>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <div style={{ textAlign: 'right' }}>
                    <Botao>Próxima</Botao>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <Rodape>
        <Container>
          <Row align="center">
            <Col>
              <FreelandoLogo height={40} width={176} />
              <Tipografia variante="legenda" componente="legenda">Desenvolvido por Alura. Projeto fictício sem fins comerciais.</Tipografia>
            </Col>
            <Col style={{ textAlign: 'right' }}>
              <Tipografia variante="legenda" componente="legenda">Acesse nossas redes:</Tipografia>
              <ListaInline>
                <ItemListaInline>
                  <Link href="/" aria-label="Link para o WhatsApp">
                    <IconeWhatsApp />
                  </Link>
                </ItemListaInline>
                <ItemListaInline>
                  <Link href="/" aria-label="Link para a Twitch">
                    <IconeTwitch />
                  </Link>
                </ItemListaInline>
                <ItemListaInline>
                  <Link href="/" aria-label="Link para a Instagram">
                    <IconeInstagram />
                  </Link>
                </ItemListaInline>
                <ItemListaInline>
                  <Link href="/" aria-label="Link para a Twitter">
                    <IconeTwitter />
                  </Link>
                </ItemListaInline>
              </ListaInline>
            </Col>
          </Row>
        </Container>
      </Rodape>
    </ProvedorTema>
  );
}

export default App;
