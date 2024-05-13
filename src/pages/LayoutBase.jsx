/* eslint-disable react/prop-types */
import { Link as RouterLink, Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-grid-system";

import { Link } from "../components/Link";
import { Rodape } from "../components/Footer";
import { Cabecalho } from "../components/Header";
import { Tipografia } from "../components/Tipografia";
import { ListaInline } from "../components/Lista/ListaInline";
import { IconeTwitch } from "../components/Icones/IconeTwitch";
import { IconeTwitter } from "../components/Icones/IconeTwitter";
import { FreelandoLogo } from "../components/Icones/FreelandoLogo";
import { IconeWhatsApp } from "../components/Icones/IconeWhatsApp";
import { IconeInstagram } from "../components/Icones/IconeInstagram";
import { ItemListaInline } from "../components/Lista/ItemListaInline";

import { useSessaoUsuarioContext } from "../contexto/SessaoUsuario";

const LayoutBase = ({children}) => {
  const { usuarioEstaLogado, logout } = useSessaoUsuarioContext();

  return (
    <>
      <Cabecalho>
        <Container>
          <Row align="center">
            <Col>
              <FreelandoLogo />
            </Col>
            <Col style={{ textAlign: 'right' }}>
              {
                usuarioEstaLogado ?
                  <Link onClick={logout}>Logout</Link>
                  :
                  <RouterLink to="/login">
                    <Link>Login</Link>
                  </RouterLink>
              }      
            </Col>
          </Row>
        </Container>
      </Cabecalho>
      <Outlet />
      {children}
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