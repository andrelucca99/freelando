import { Outlet } from "react-router-dom";
import { Rodape } from "../components/Footer";
import { Cabecalho } from "../components/Header";
import { Col, Container, Row } from "react-grid-system";
import { FreelandoLogo } from "../components/Icones/FreelandoLogo";
import { Link } from "../components/Link";
import { Tipografia } from "../components/Tipografia";
import { ListaInline } from "../components/Lista/ListaInline";
import { ItemListaInline } from "../components/Lista/ItemListaInline";
import { IconeWhatsApp } from "../components/Icones/IconeWhatsApp";
import { IconeTwitch } from "../components/Icones/IconeTwitch";
import { IconeInstagram } from "../components/Icones/IconeInstagram";
import { IconeTwitter } from "../components/Icones/IconeTwitter";

const LayoutBase = () => {
  return (
    <>
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
      <Outlet />
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
    </>
  )
}

export default LayoutBase;